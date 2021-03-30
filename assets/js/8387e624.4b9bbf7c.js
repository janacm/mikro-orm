(window.webpackJsonp=window.webpackJsonp||[]).push([[518],{1110:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},591:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(8),i=(n(0),n(1110)),o={title:"Defining Entities"},l={unversionedId:"defining-entities",id:"version-4.1/defining-entities",isDocsHomePage:!1,title:"Defining Entities",description:"There are two ways how you can define your entities:",source:"@site/versioned_docs/version-4.1/defining-entities.md",slug:"/defining-entities",permalink:"/docs/4.1/defining-entities",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.1/defining-entities.md",version:"4.1",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1617128779,formattedLastUpdatedAt:"3/30/2021",sidebar:"version-4.1/docs",previous:{title:"Installation & Usage",permalink:"/docs/4.1/installation"},next:{title:"Modeling Entity Relationships",permalink:"/docs/4.1/relationships"}},s=[{value:"EntitySchema helper",id:"entityschema-helper",children:[]},{value:"Classes and Decorators",id:"classes-and-decorators",children:[{value:"Optional Properties",id:"optional-properties",children:[]},{value:"Default values",id:"default-values",children:[]},{value:"Enums",id:"enums",children:[]},{value:"Formulas",id:"formulas",children:[]},{value:"Indexes",id:"indexes",children:[]},{value:"Custom Types",id:"custom-types",children:[]},{value:"Lazy scalar properties",id:"lazy-scalar-properties",children:[]},{value:"Virtual Properties",id:"virtual-properties",children:[]},{value:"Entity file names",id:"entity-file-names",children:[]},{value:"Using BaseEntity",id:"using-baseentity",children:[]},{value:"Examples of entity definition with various primary keys",id:"examples-of-entity-definition-with-various-primary-keys",children:[]}]}],p={toc:s};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"There are two ways how you can define your entities:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Decorated classes"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"EntitySchema")," helper")),Object(i.b)("h2",{id:"entityschema-helper"},"EntitySchema helper"),Object(i.b)("p",null,"With ",Object(i.b)("inlineCode",{parentName:"p"},"EntitySchema")," helper you define the schema programmatically. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"export interface Book extends BaseEntity {\n  title: string;\n  author: Author;\n  publisher: Publisher;\n  tags: Collection<BookTag>;\n}\n\nexport const schema = new EntitySchema<Book, BaseEntity>({\n  name: 'Book',\n  extends: 'BaseEntity',\n  properties: {\n    title: { type: 'string' },\n    author: { reference: 'm:1', entity: 'Author', inversedBy: 'books' },\n    publisher: { reference: 'm:1', entity: 'Publisher', inversedBy: 'books' },\n    tags: { reference: 'm:n', entity: 'BookTag', inversedBy: 'books', fixedOrder: true },\n  },\n});\n")),Object(i.b)("p",null,"When creating new entity instances, you will need to use ",Object(i.b)("inlineCode",{parentName:"p"},"em.create()")," method that will\ncreate instance of internally created class. "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"const repo = em.getRepository<Author>('Author');\nconst author = repo.create('Author', { name: 'name', email: 'email' }); // instance of internal Author class\nawait repo.persistAndFlush(author);\n")),Object(i.b)("p",null,"You can optionally use custom class for entity instances. Read more about this approach\nin ",Object(i.b)("a",{parentName:"p",href:"/docs/4.1/entity-schema"},"Defining Entities via EntitySchema section"),"."),Object(i.b)("h2",{id:"classes-and-decorators"},"Classes and Decorators"),Object(i.b)("p",null,"Entities are simple javascript objects (so called POJO), decorated with ",Object(i.b)("inlineCode",{parentName:"p"},"@Entity")," decorator.\nNo real restrictions are made, you do not have to extend any base class, you are more than welcome\nto ",Object(i.b)("a",{parentName:"p",href:"/docs/4.1/entity-constructors"},"use entity constructors"),", just do not forget to specify primary key with\n",Object(i.b)("inlineCode",{parentName:"p"},"@PrimaryKey")," decorator."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./entities/Book.ts"',title:'"./entities/Book.ts"'},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  createdAt = new Date();\n\n  @Property({ onUpdate: () => new Date() })\n  updatedAt = new Date();\n\n  @Property()\n  title!: string;\n\n  @ManyToOne() // when you provide correct type hint, ORM will read it for you\n  author!: Author;\n\n  @ManyToOne(() => Publisher) // or you can specify the entity as class reference or string name\n  publisher?: Publisher;\n\n  @ManyToMany() // owning side can be simple as this!\n  tags = new Collection<BookTag>(this);\n\n  constructor(title: string, author: Author) {\n    this.title = title;\n    this.author = author;\n  }\n\n}\n")),Object(i.b)("p",null,"As you can see, entity properties are decorated either with ",Object(i.b)("inlineCode",{parentName:"p"},"@Property")," decorator, or with one\nof reference decorators: ",Object(i.b)("inlineCode",{parentName:"p"},"@ManyToOne"),", ",Object(i.b)("inlineCode",{parentName:"p"},"@OneToMany"),", ",Object(i.b)("inlineCode",{parentName:"p"},"@OneToOne")," and ",Object(i.b)("inlineCode",{parentName:"p"},"@ManyToMany"),". "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"From v3 you can also use default exports when defining your entity.")),Object(i.b)("p",null,"Here is another example of ",Object(i.b)("inlineCode",{parentName:"p"},"Author")," entity, that was referenced from the ",Object(i.b)("inlineCode",{parentName:"p"},"Book")," one, this\ntime defined for mongo:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./entities/Author.ts"',title:'"./entities/Author.ts"'},"@Entity()\nexport class Author {\n\n  @PrimaryKey()\n  _id!: ObjectId;\n\n  @SerializedPrimaryKey()\n  id!: string;\n\n  @Property()\n  createdAt = new Date();\n\n  @Property({ onUpdate: () => new Date() })\n  updatedAt = new Date();\n\n  @Property()\n  name!: string;\n\n  @Property()\n  email!: string;\n\n  @Property()\n  age?: number;\n\n  @Property()\n  termsAccepted = false;\n\n  @Property()\n  identities?: string[];\n\n  @Property()\n  born?: Date;\n\n  @OneToMany(() => Book, book => book.author)\n  books = new Collection<Book>(this);\n\n  @ManyToMany()\n  friends = new Collection<Author>(this);\n\n  @ManyToOne()\n  favouriteBook?: Book;\n\n  @Property({ version: true })\n  version!: number;\n\n  constructor(name: string, email: string) {\n    this.name = name;\n    this.email = email;\n  }\n\n}\n")),Object(i.b)("p",null,"More information about modelling relationships can be found on ",Object(i.b)("a",{parentName:"p",href:"/docs/4.1/relationships"},"modelling relationships page"),"."),Object(i.b)("p",null,"If you want to define your entity in Vanilla JavaScript, take a look ",Object(i.b)("a",{parentName:"p",href:"/docs/4.1/usage-with-js"},"here"),"."),Object(i.b)("h3",{id:"optional-properties"},"Optional Properties"),Object(i.b)("p",null,"When you define the property as optional (marked with ",Object(i.b)("inlineCode",{parentName:"p"},"?"),"), this will be automatically considered\nas nullable property (mainly for SQL schema generator). "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This auto-detection works only when you omit the ",Object(i.b)("inlineCode",{parentName:"p"},"type"),"/",Object(i.b)("inlineCode",{parentName:"p"},"entity")," attribute.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@ManyToOne()\nfavouriteBook?: Book; // correct: no `type` or `entity` provided, **will** be marked as `nullable`\n\n@ManyToOne(() => Book, { nullable: true })\nfavouriteBook?: Book; // correct, `entity` provided and explicitly marked as `nullable`\n\n@ManyToOne(() => Book)\nfavouriteBook?: Book; // wrong, not marked as `nullable`\n")),Object(i.b)("h3",{id:"default-values"},"Default values"),Object(i.b)("p",null,"You can set default value of a property in 2 ways:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use runtime default value of the property. This approach should be preferred as long\nas you are not using any native database function like ",Object(i.b)("inlineCode",{parentName:"p"},"now()"),". With this approach your\nentities will have the default value set even before it is actually persisted into the\ndatabase (e.g. when you instantiate new entity via ",Object(i.b)("inlineCode",{parentName:"p"},"new Author()")," or ",Object(i.b)("inlineCode",{parentName:"p"},"em.create(Author, { ... })"),"."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Property()\nfoo!: number = 1;\n\n@Property()\nbar!: string = 'abc';\n\n@Property()\nbaz!: Date = new Date();\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Use ",Object(i.b)("inlineCode",{parentName:"p"},"default")," parameter of ",Object(i.b)("inlineCode",{parentName:"p"},"@Property")," decorator. This way the actual default value\nwill be provided by the database, and automatically mapped to the entity property after\nit is being persisted (after flush). To use SQL functions like ",Object(i.b)("inlineCode",{parentName:"p"},"now()"),", use ",Object(i.b)("inlineCode",{parentName:"p"},"defaultRaw"),"."),Object(i.b)("blockquote",{parentName:"li"},Object(i.b)("p",{parentName:"blockquote"},"Since v4 you should use ",Object(i.b)("inlineCode",{parentName:"p"},"defaultRaw")," for SQL functions, as ",Object(i.b)("inlineCode",{parentName:"p"},"default")," with string values\nwill be automatically quoted. ")),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Property({ default: 1 })\nfoo!: number;\n\n@Property({ default: 'abc' })\nbar!: string;\n\n@Property({ defaultRaw: 'now' })\nbaz!: Date;\n")))),Object(i.b)("h3",{id:"enums"},"Enums"),Object(i.b)("p",null,"To define enum property, use ",Object(i.b)("inlineCode",{parentName:"p"},"@Enum()")," decorator. Enums can be either numeric or string valued. "),Object(i.b)("p",null,"For schema generator to work properly in case of string enums, you need to define the enum\nis same file as where it is used, so its values can be automatically discovered. If you want\nto define the enum in another file, you should reexport it also in place where you use it. "),Object(i.b)("p",null,"Another possibility is to provide the reference to the enum implementation in the decorator\nvia ",Object(i.b)("inlineCode",{parentName:"p"},"@Enum(() => UserRole)"),". "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can also set enum items manually via ",Object(i.b)("inlineCode",{parentName:"p"},"items: string[]")," attribute.  ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"import { OutsideEnum } from './OutsideEnum.ts';\n\n@Entity()\nexport class User {\n\n  @Enum()\n  role!: UserRole; // string enum\n\n  @Enum()\n  status!: UserStatus; // numeric enum\n\n  @Enum(() => OutsideEnum)\n  outside!: OutsideEnum; // string enum defined outside of this file\n\n}\n\nexport enum UserRole {\n  ADMIN = 'admin',\n  MODERATOR = 'moderator',\n  USER = 'user',\n}\n\nexport const enum UserStatus {\n  DISABLED,\n  ACTIVE,\n}\n\n// or we could reexport OutsideEnum\n// export { OutsideEnum } from './OutsideEnum.ts';\n")),Object(i.b)("h3",{id:"formulas"},"Formulas"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"@Formula()")," decorator can be used to map some SQL snippet to your entity.\nThe SQL fragment can be as complex as you want and even include subselects."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Formula('obj_length * obj_height * obj_width')\nobjectVolume?: number;\n")),Object(i.b)("p",null,"Formulas will be added to the select clause automatically. In case you are facing\nproblems with ",Object(i.b)("inlineCode",{parentName:"p"},"NonUniqueFieldNameException"),", you can define the formula as a\ncallback that will receive the entity alias in the parameter:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Formula(alias => `${alias}.obj_length * ${alias}.obj_height * ${alias}.obj_width`)\nobjectVolume?: number;\n")),Object(i.b)("h3",{id:"indexes"},"Indexes"),Object(i.b)("p",null,"You can define indexes via ",Object(i.b)("inlineCode",{parentName:"p"},"@Index()")," decorator, for unique indexes, use ",Object(i.b)("inlineCode",{parentName:"p"},"@Unique()")," decorator.\nYou can use it either on entity class, or on entity property:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\n@Index({ properties: ['name', 'age'] }) // compound index, with generated name\n@Index({ name: 'custom_idx_name', properties: ['name'] }) // simple index, with custom name\n@Unique({ properties: ['name', 'email'] })\nexport class Author {\n\n  @Property()\n  @Unique()\n  email!: string;\n\n  @Property()\n  @Index() // generated name\n  age?: number;\n\n  @Index({ name: 'born_index' })\n  @Property()\n  born?: Date;\n\n}\n")),Object(i.b)("h3",{id:"custom-types"},"Custom Types"),Object(i.b)("p",null,"You can define custom types by extending ",Object(i.b)("inlineCode",{parentName:"p"},"Type")," abstract class. It has 4 optional methods:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"convertToDatabaseValue(value: any, platform: Platform): any")),Object(i.b)("p",{parentName:"li"},"Converts a value from its JS representation to its database representation of this type.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"convertToJSValue(value: any, platform: Platform): any")),Object(i.b)("p",{parentName:"li"},"Converts a value from its database representation to its JS representation of this type.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"toJSON(value: any, platform: Platform): any")),Object(i.b)("p",{parentName:"li"},"Converts a value from its JS representation to its serialized JSON form of this type.\nBy default converts to the database value.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"getColumnType(prop: EntityProperty, platform: Platform): string")),Object(i.b)("p",{parentName:"li"},"Gets the SQL declaration snippet for a field of this type."))),Object(i.b)("p",null,"More information can be found in ",Object(i.b)("a",{parentName:"p",href:"/docs/4.1/custom-types"},"Custom Types")," section."),Object(i.b)("h3",{id:"lazy-scalar-properties"},"Lazy scalar properties"),Object(i.b)("p",null,"You can mark any property as ",Object(i.b)("inlineCode",{parentName:"p"},"lazy: true")," to omit it from the select clause.\nThis can be handy for properties that are too large and you want to have them\navailable only some times, like a full text of an article."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @Property({ columnType: 'text', lazy: true })\n  text: string;\n\n}\n")),Object(i.b)("p",null,"You can use ",Object(i.b)("inlineCode",{parentName:"p"},"populate")," parameter to load them."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"const b1 = await em.find(Book, 1); // this will omit the `text` property\nconst b2 = await em.find(Book, 1, { populate: ['text'] }); // this will load the `text` property\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If the entity is already loaded and you need to populate a lazy scalar property,\nyou might need to pass ",Object(i.b)("inlineCode",{parentName:"p"},"refresh: true")," in the ",Object(i.b)("inlineCode",{parentName:"p"},"FindOptions"),".")),Object(i.b)("h3",{id:"virtual-properties"},"Virtual Properties"),Object(i.b)("p",null,"You can define your properties as virtual, either as a method, or via JavaScript ",Object(i.b)("inlineCode",{parentName:"p"},"get/set"),"."),Object(i.b)("p",null,"Following example defines User entity with ",Object(i.b)("inlineCode",{parentName:"p"},"firstName")," and ",Object(i.b)("inlineCode",{parentName:"p"},"lastName")," database fields, that\nare both hidden from the serialized response, replaced with virtual properties ",Object(i.b)("inlineCode",{parentName:"p"},"fullName"),"\n(defined as a classic method) and ",Object(i.b)("inlineCode",{parentName:"p"},"fullName2")," (defined as a JavaScript getter)."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"For JavaScript getter you need to provide ",Object(i.b)("inlineCode",{parentName:"p"},"{ persist: false }")," option otherwise the value\nwould be stored in the database. ")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @Property({ hidden: true })\n  firstName!: string;\n\n  @Property({ hidden: true })\n  lastName!: string;\n\n  @Property({ name: 'fullName' })\n  getFullName() {\n    return `${this.firstName} ${this.lastName}`;\n  }\n\n  @Property({ persist: false })\n  get fullName2() {\n    return `${this.firstName} ${this.lastName}`;\n  }\n\n}\n\nconst repo = em.getRepository(User);\nconst author = repo.create({ firstName: 'Jon', lastName: 'Snow' });\n\nconsole.log(author.getFullName()); // 'Jon Snow'\nconsole.log(author.fullName2); // 'Jon Snow'\nconsole.log(author.toJSON()); // { fullName: 'Jon Snow', fullName2: 'Jon Snow' }\n")),Object(i.b)("h3",{id:"entity-file-names"},"Entity file names"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"This limitation applies only to folder based discovery. Another way around it\nis using ",Object(i.b)("inlineCode",{parentName:"p"},"EntitySchema")," for entity definition. ")),Object(i.b)("p",null,"You are free to choose one of those formats for entity filename (for a ",Object(i.b)("inlineCode",{parentName:"p"},"BookTag")," entity):"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"BookTag.ts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"BookTag.model.ts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"book-tag.ts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"book-tag.model.ts")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"book-tag.entity.ts"))),Object(i.b)("p",null,"Entity name is inferred from the first part of file name before first dot occurs, so you can\nadd any suffix behind the dot, not just ",Object(i.b)("inlineCode",{parentName:"p"},".model.ts")," or ",Object(i.b)("inlineCode",{parentName:"p"},".entity.ts"),". "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can change this behaviour by defining custom ",Object(i.b)("inlineCode",{parentName:"p"},"NamingStrategy.getClassName()")," method.")),Object(i.b)("h3",{id:"using-baseentity"},"Using BaseEntity"),Object(i.b)("p",null,"You can define your own base entity with properties that you require on all entities, like\nprimary key and created/updated time. Single table inheritance is also supported."),Object(i.b)("p",null,"Read more about this topic in ",Object(i.b)("a",{parentName:"p",href:"/docs/4.1/inheritance-mapping"},"Inheritance Mapping")," section."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"If you are initializing the ORM via ",Object(i.b)("inlineCode",{parentName:"p"},"entities")," option, you need to specify all your\nbase entities as well.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="./entities/BaseEntity.ts"',title:'"./entities/BaseEntity.ts"'},"import { v4 } from 'uuid';\n\nexport abstract class BaseEntity {\n\n  @PrimaryKey()\n  uuid = v4();\n\n  @Property()\n  createdAt = new Date();\n\n  @Property({ onUpdate: () => new Date() })\n  updatedAt = new Date();\n\n}\n")),Object(i.b)("h3",{id:"examples-of-entity-definition-with-various-primary-keys"},"Examples of entity definition with various primary keys"),Object(i.b)("h4",{id:"using-id-as-primary-key-sql-drivers"},"Using id as primary key (SQL drivers)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  id!: number; // string is also supported\n\n  @Property()\n  title!: string;\n\n  @ManyToOne()\n  author!: Author;\n\n}\n")),Object(i.b)("h4",{id:"using-uuid-as-primary-key-sql-drivers"},"Using UUID as primary key (SQL drivers)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"import { v4 } from 'uuid';\n\n@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  uuid = v4();\n\n  @Property()\n  title!: string;\n\n  @ManyToOne()\n  author!: Author;\n\n}\n")),Object(i.b)("h4",{id:"using-postgresql-uuid-osp-module-function-as-primary-key"},"Using PostgreSQL ",Object(i.b)("a",{parentName:"h4",href:"https://www.postgresql.org/docs/current/uuid-ossp.html"},"uuid-osp")," module function as primary key"),Object(i.b)("p",null,"Requires enabling the module via: ",Object(i.b)("inlineCode",{parentName:"p"},'create extension "uuid-ossp";')),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })\n  uuid: string;\n\n  @Property()\n  title!: string;\n\n  @ManyToOne()\n  author!: Author;\n\n}\n")),Object(i.b)("h4",{id:"using-bigint-as-primary-key-mysql-and-postgresql"},"Using BigInt as primary key (MySQL and PostgreSQL)"),Object(i.b)("p",null,"You can use ",Object(i.b)("inlineCode",{parentName:"p"},"BigIntType")," to support ",Object(i.b)("inlineCode",{parentName:"p"},"bigint"),"s. By default it will represent the value as\na ",Object(i.b)("inlineCode",{parentName:"p"},"string"),".  "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey({ type: BigIntType })\n  id: string;\n\n}\n")),Object(i.b)("p",null,"If you want to use native ",Object(i.b)("inlineCode",{parentName:"p"},"bigint"),"s, read the following guide: ",Object(i.b)("a",{parentName:"p",href:"/docs/4.1/using-bigint-pks"},"Using native BigInt PKs"),"."),Object(i.b)("h4",{id:"example-of-mongo-entity"},"Example of Mongo entity"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey()\n  _id!: ObjectId;\n\n  @SerializedPrimaryKey() \n  id!: string; // string variant of PK, will be handled automatically\n\n  @Property()\n  title!: string;\n\n  @ManyToOne()\n  author!: Author;\n\n}\n")),Object(i.b)("h4",{id:"using-baseentity-previously-wrappedentity"},"Using BaseEntity (previously WrappedEntity)"),Object(i.b)("p",null,"From v4 ",Object(i.b)("inlineCode",{parentName:"p"},"BaseEntity")," class is provided with ",Object(i.b)("inlineCode",{parentName:"p"},"init"),", ",Object(i.b)("inlineCode",{parentName:"p"},"isInitialized"),", ",Object(i.b)("inlineCode",{parentName:"p"},"assign"),"\nand other methods that are otherwise available via the ",Object(i.b)("inlineCode",{parentName:"p"},"wrap()")," helper."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Usage of ",Object(i.b)("inlineCode",{parentName:"p"},"BaseEntity")," is optional.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-typescript"},"import { BaseEntity } from '@mikro-orm/core';\n\n@Entity()\nexport class Book extends BaseEntity {\n\n  @PrimaryKey()\n  id!: number;\n\n  @Property()\n  title!: string;\n\n  @ManyToOne()\n  author!: Author;\n\n}\n\nconst book = new Book();\nconsole.log(book.isInitialized()); // true\n")),Object(i.b)("p",null,"With your entities set up, you can start ",Object(i.b)("a",{parentName:"p",href:"/docs/4.1/entity-manager"},"using entity manager")," and\n",Object(i.b)("a",{parentName:"p",href:"/docs/4.1/repositories"},"repositories")," as described in following sections. "))}c.isMDXComponent=!0}}]);