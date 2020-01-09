import chalk from 'chalk';

import { EntityManager } from './EntityManager';
import { AbstractSqlDriver, IDatabaseDriver } from './drivers';
import { MetadataDiscovery, MetadataStorage, ReflectMetadataProvider } from './metadata';
import { Configuration, Logger, Options } from './utils';
import { SchemaGenerator } from './schema';
import { EntityGenerator } from './schema/EntityGenerator';
import { Migrator } from './migrations';
import { NullCacheAdapter } from './cache';
import { CLIHelper } from './cli/CLIHelper';

/**
 * Helper class for bootstrapping the MikroORM.
 */
export class MikroORM<D extends IDatabaseDriver = IDatabaseDriver> {

  em!: EntityManager<D>;
  readonly config: Configuration<D>;
  private metadata!: MetadataStorage;
  private readonly driver: D;
  private readonly logger: Logger;

  /**
   * Initialize the ORM, load entity metadata, create EntityManager and connect to the database.
   * If you omit the `options` parameter, your CLI config will be used.
   */
  static async init<D extends IDatabaseDriver = IDatabaseDriver>(options?: Options<D> | Configuration<D>): Promise<MikroORM<D>> {
    if (!options) {
      options = await CLIHelper.getConfiguration<D>();
    }

    const orm = new MikroORM<D>(options);
    const driver = await orm.connect();

    try {
      const discovery = new MetadataDiscovery(MetadataStorage.init(), orm.driver.getPlatform(), orm.config);
      orm.metadata = await discovery.discover();
      orm.em = new EntityManager(orm.config, driver, orm.metadata);
      orm.metadata.decorate(orm.em);
      driver.setMetadata(orm.metadata);

      return orm;
    } catch (e) {
      await orm.close(true);
      throw e;
    }
  }

  constructor(options: Options<D> | Configuration<D>) {
    if (options instanceof Configuration) {
      this.config = options;
    } else {
      this.config = new Configuration(options);
    }

    if (process.env.WEBPACK) {
      this.config.set('metadataProvider', ReflectMetadataProvider);
      this.config.set('cache', { adapter: NullCacheAdapter });
      this.config.set('discovery', { requireEntitiesArray: true, alwaysAnalyseProperties: false });
    }

    this.driver = this.config.getDriver();
    this.logger = this.config.getLogger();
  }

  /**
   * Connects to the database.
   */
  async connect(): Promise<D> {
    const connection = await this.driver.connect();
    const clientUrl = connection.getClientUrl();
    const dbName = this.config.get('dbName')!;
    this.logger.log('info', `MikroORM successfully connected to database ${chalk.green(dbName)}${clientUrl ? ' on ' + chalk.green(clientUrl) : ''}`);

    return this.driver;
  }

  /**
   * Checks whether the database connection is active.
   */
  async isConnected(): Promise<boolean> {
    return this.driver.getConnection().isConnected();
  }

  /**
   * Closes the database connection.
   */
  async close(force = false): Promise<void> {
    return this.driver.close(force);
  }

  /**
   * Gets the MetadataStorage.
   */
  getMetadata(): MetadataStorage {
    return this.metadata;
  }

  /**
   * Gets the SchemaGenerator.
   */
  getSchemaGenerator(): SchemaGenerator {
    const driver = this.driver as object;

    if (!(driver instanceof AbstractSqlDriver)) {
      throw new Error('Not supported by given driver');
    }

    return new SchemaGenerator(driver, this.metadata, this.config);
  }

  /**
   * Gets the EntityGenerator.
   */
  getEntityGenerator(): EntityGenerator {
    const driver = this.driver as object;

    if (!(driver instanceof AbstractSqlDriver)) {
      throw new Error('Not supported by given driver');
    }

    return new EntityGenerator(driver, this.config);
  }

  /**
   * Gets the Migrator.
   */
  getMigrator(): Migrator {
    const driver = this.driver as object;

    if (!(driver instanceof AbstractSqlDriver)) {
      throw new Error('Not supported by given driver');
    }

    return new Migrator(driver, this.getSchemaGenerator(), this.config);
  }

}
