(window.webpackJsonp=window.webpackJsonp||[]).push([[829],{1051:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=c(n),u=i,m=s["".concat(a,".").concat(u)]||s[u]||d[u]||o;return n?r.a.createElement(m,l(l({ref:t},p),{},{components:n})):r.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},902:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return c}));var i=n(3),r=n(8),o=(n(0),n(1051)),a={title:"EntityRepository API"},l={unversionedId:"repositories-api",id:"version-4.2/repositories-api",isDocsHomePage:!1,title:"EntityRepository API",description:"find(where FindOptions): Promise",source:"@site/versioned_docs/version-4.2/repositories-api.md",slug:"/repositories-api",permalink:"/docs/4.2/repositories-api",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/repositories-api.md",version:"4.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1613486431,sidebar:"version-4.2/docs",previous:{title:"EntityManager API",permalink:"/docs/4.2/entity-manager-api"},next:{title:"Query Builder API",permalink:"/docs/4.2/query-builder-api"}},b=[],p={toc:b};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"findwhere-filterqueryt-options-findoptions-promiset"},Object(o.b)("inlineCode",{parentName:"h4"},"find(where: FilterQuery<T>, options?: FindOptions): Promise<T[]>")),Object(o.b)("p",null,"Returns array of entities found for given condition. You can specify ",Object(o.b)("inlineCode",{parentName:"p"},"FindOptions")," to request\npopulation of referenced entities or control the pagination:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript"},"export interface FindOptions {\n  populate?: string[];\n  orderBy?: { [k: string]: QueryOrder };\n  limit?: number;\n  offset?: number;\n  schema?: string;\n}\n")),Object(o.b)("hr",null),Object(o.b)("h4",{id:"findwhere-filterqueryt-populate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset"},Object(o.b)("inlineCode",{parentName:"h4"},"find(where: FilterQuery<T>, populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<T[]>")),Object(o.b)("p",null,"Same as previous ",Object(o.b)("inlineCode",{parentName:"p"},"find")," method, just with dedicated parameters for ",Object(o.b)("inlineCode",{parentName:"p"},"populate"),", ",Object(o.b)("inlineCode",{parentName:"p"},"orderBy"),", ",Object(o.b)("inlineCode",{parentName:"p"},"limit"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"offset"),"."),Object(o.b)("hr",null),Object(o.b)("h4",{id:"findandcountwhere-filterqueryt-populate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset"},Object(o.b)("inlineCode",{parentName:"h4"},"findAndCount(where: FilterQuery<T>, populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<T[]>")),Object(o.b)("p",null,"Combination of ",Object(o.b)("inlineCode",{parentName:"p"},"find")," and ",Object(o.b)("inlineCode",{parentName:"p"},"count")," methods. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"findalloptions-findoptions-promiset"},Object(o.b)("inlineCode",{parentName:"h4"},"findAll(options?: FindOptions): Promise<T[]>")),Object(o.b)("p",null,"Returns all entities for given type. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"findallpopulate-string-orderby--k-string-queryorder--limit-number-offset-number-promiset"},Object(o.b)("inlineCode",{parentName:"h4"},"findAll(populate?: string[], orderBy?: { [k: string]: QueryOrder }, limit?: number, offset?: number): Promise<T[]>")),Object(o.b)("p",null,"Same as previous ",Object(o.b)("inlineCode",{parentName:"p"},"findAll")," method, just with dedicated parameters for ",Object(o.b)("inlineCode",{parentName:"p"},"populate"),", ",Object(o.b)("inlineCode",{parentName:"p"},"orderBy"),", ",Object(o.b)("inlineCode",{parentName:"p"},"limit"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"offset"),"."),Object(o.b)("hr",null),Object(o.b)("h4",{id:"findonewhere-filterqueryt--string-populate-string-promiset--null"},Object(o.b)("inlineCode",{parentName:"h4"},"findOne(where: FilterQuery<T> | string, populate?: string[]): Promise<T | null>")),Object(o.b)("p",null,"Finds an entity by given ",Object(o.b)("inlineCode",{parentName:"p"},"where")," condition. You can use primary key as ",Object(o.b)("inlineCode",{parentName:"p"},"where")," value, then\nif the entity is already managed, no database call will be made. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"findoneorfailwhere-filterqueryt--string-populate-string-promiset"},Object(o.b)("inlineCode",{parentName:"h4"},"findOneOrFail(where: FilterQuery<T> | string, populate?: string[]): Promise<T>")),Object(o.b)("p",null,"Just like ",Object(o.b)("inlineCode",{parentName:"p"},"findOne"),", but throws when entity not found, so it always resolves to given entity.\nYou can customize the error either globally via ",Object(o.b)("inlineCode",{parentName:"p"},"findOneOrFailHandler")," option, or locally via\n",Object(o.b)("inlineCode",{parentName:"p"},"failHandler")," option in ",Object(o.b)("inlineCode",{parentName:"p"},"findOneOrFail")," call."),Object(o.b)("hr",null),Object(o.b)("h4",{id:"mergedata-entitydatat-t"},Object(o.b)("inlineCode",{parentName:"h4"},"merge(data: EntityData<T>): T")),Object(o.b)("p",null,"Adds given entity to current Identity Map. After merging, entity becomes managed.\nThis is useful when you want to work with cached entities. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"getreferenceid-string-t"},Object(o.b)("inlineCode",{parentName:"h4"},"getReference(id: string): T")),Object(o.b)("p",null,"Gets a reference to the entity identified by the given type and identifier without actually\nloading it, if the entity is not yet loaded."),Object(o.b)("hr",null),Object(o.b)("h4",{id:"countwhere-filterqueryt-promisenumber"},Object(o.b)("inlineCode",{parentName:"h4"},"count(where?: FilterQuery<T>): Promise<number>")),Object(o.b)("p",null,"Gets count of entities matching the ",Object(o.b)("inlineCode",{parentName:"p"},"where")," condition. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"persistentity-anyentity--anyentity-promisevoid"},Object(o.b)("inlineCode",{parentName:"h4"},"persist(entity: AnyEntity | AnyEntity[]): Promise<void>")),Object(o.b)("p",null,"Tells the EntityManager to make an instance managed and persistent. The entity will be\nentered into the database at or before transaction commit or as a result of the flush\noperation. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"persistandflushentity-anyentity--anyentity-promisevoid"},Object(o.b)("inlineCode",{parentName:"h4"},"persistAndFlush(entity: AnyEntity | AnyEntity[]): Promise<void>")),Object(o.b)("p",null,"Shortcut for ",Object(o.b)("inlineCode",{parentName:"p"},"persist")," & ",Object(o.b)("inlineCode",{parentName:"p"},"flush"),"."),Object(o.b)("hr",null),Object(o.b)("h4",{id:"persistlaterentity-anyentity--anyentity-void"},Object(o.b)("inlineCode",{parentName:"h4"},"persistLater(entity: AnyEntity | AnyEntity[]): void")),Object(o.b)("p",null,"Shortcut for just ",Object(o.b)("inlineCode",{parentName:"p"},"persist"),", without flushing. Deprecated, use ",Object(o.b)("inlineCode",{parentName:"p"},"em.persist()"),"."),Object(o.b)("hr",null),Object(o.b)("h4",{id:"flush-promisevoid"},Object(o.b)("inlineCode",{parentName:"h4"},"flush(): Promise<void>")),Object(o.b)("p",null,"Flushes all changes to objects that have been queued up to now to the database."),Object(o.b)("hr",null),Object(o.b)("h4",{id:"removewhere-anyentity--referenceanyentity--anyentity--referenceanyentity-promisevoid"},Object(o.b)("inlineCode",{parentName:"h4"},"remove(where: AnyEntity | Reference<AnyEntity> | (AnyEntity | Reference<AnyEntity>)[]): Promise<void>")),Object(o.b)("p",null,"When provided entity instance as ",Object(o.b)("inlineCode",{parentName:"p"},"where")," value, then it calls ",Object(o.b)("inlineCode",{parentName:"p"},"removeEntity(entity, flush)"),",\notherwise it fires delete query with given ",Object(o.b)("inlineCode",{parentName:"p"},"where")," condition. "),Object(o.b)("p",null,"This method fires ",Object(o.b)("inlineCode",{parentName:"p"},"beforeDelete")," and ",Object(o.b)("inlineCode",{parentName:"p"},"afterDelete")," hooks only if you provide entity instance.  "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"removeandflushentity-anyentity-promisevoid"},Object(o.b)("inlineCode",{parentName:"h4"},"removeAndFlush(entity: AnyEntity): Promise<void>")),Object(o.b)("p",null,"Shortcut for ",Object(o.b)("inlineCode",{parentName:"p"},"remove")," & ",Object(o.b)("inlineCode",{parentName:"p"},"flush"),"."),Object(o.b)("p",null,"This method fires ",Object(o.b)("inlineCode",{parentName:"p"},"beforeDelete")," and ",Object(o.b)("inlineCode",{parentName:"p"},"afterDelete")," hooks. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"removelaterentity-anyentity-void"},Object(o.b)("inlineCode",{parentName:"h4"},"removeLater(entity: AnyEntity): void")),Object(o.b)("p",null,"Shortcut for ",Object(o.b)("inlineCode",{parentName:"p"},"remove")," without flushing. Deprecated, use ",Object(o.b)("inlineCode",{parentName:"p"},"em.remove()"),"."),Object(o.b)("p",null,"This method fires ",Object(o.b)("inlineCode",{parentName:"p"},"beforeDelete")," and ",Object(o.b)("inlineCode",{parentName:"p"},"afterDelete")," hooks. "),Object(o.b)("hr",null),Object(o.b)("h4",{id:"canpopulateproperty-string-boolean"},Object(o.b)("inlineCode",{parentName:"h4"},"canPopulate(property: string): boolean")),Object(o.b)("p",null,"Returns whether given entity has given property which can be populated (is reference or\ncollection)."),Object(o.b)("hr",null))}c.isMDXComponent=!0}}]);