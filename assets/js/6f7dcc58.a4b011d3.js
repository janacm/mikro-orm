(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[36454],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return s},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},s=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=o(a),c=r,g=d["".concat(p,".").concat(c)]||d[c]||k[c]||i;return a?n.createElement(g,m(m({ref:t},s),{},{components:a})):n.createElement(g,m({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,m=new Array(i);m[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,m[1]=l;for(var o=2;o<i;o++)m[o]=a[o];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},91894:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return o},default:function(){return k}});var n=a(74034),r=a(79973),i=(a(67294),a(3905)),m={id:"core.abstractnamingstrategy",title:"Class: AbstractNamingStrategy",sidebar_label:"AbstractNamingStrategy",custom_edit_url:null},l=void 0,p={unversionedId:"api/classes/core.abstractnamingstrategy",id:"api/classes/core.abstractnamingstrategy",isDocsHomePage:!1,title:"Class: AbstractNamingStrategy",description:"core.AbstractNamingStrategy",source:"@site/docs/api/classes/core.abstractnamingstrategy.md",sourceDirName:"api/classes",slug:"/api/classes/core.abstractnamingstrategy",permalink:"/docs/next/api/classes/core.abstractnamingstrategy",editUrl:null,version:"current",frontMatter:{id:"core.abstractnamingstrategy",title:"Class: AbstractNamingStrategy",sidebar_label:"AbstractNamingStrategy",custom_edit_url:null},sidebar:"API",previous:{title:"QueryType",permalink:"/docs/next/api/enums/knex.querytype"},next:{title:"ArrayCollection",permalink:"/docs/next/api/classes/core.arraycollection"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"classToMigrationName",id:"classtomigrationname",children:[]},{value:"classToTableName",id:"classtotablename",children:[]},{value:"columnNameToProperty",id:"columnnametoproperty",children:[]},{value:"getClassName",id:"getclassname",children:[]},{value:"indexName",id:"indexname",children:[]},{value:"joinColumnName",id:"joincolumnname",children:[]},{value:"joinKeyColumnName",id:"joinkeycolumnname",children:[]},{value:"joinTableName",id:"jointablename",children:[]},{value:"propertyToColumnName",id:"propertytocolumnname",children:[]},{value:"referenceColumnName",id:"referencecolumnname",children:[]}]}],s={toc:o};function k(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".AbstractNamingStrategy"),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"AbstractNamingStrategy"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.mongonamingstrategy"},(0,i.kt)("inlineCode",{parentName:"a"},"MongoNamingStrategy"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.underscorenamingstrategy"},(0,i.kt)("inlineCode",{parentName:"a"},"UnderscoreNamingStrategy"))),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitycasenamingstrategy"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityCaseNamingStrategy"))))),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/interfaces/core.namingstrategy"},(0,i.kt)("inlineCode",{parentName:"a"},"NamingStrategy")))),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new AbstractNamingStrategy"),"()"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"classtomigrationname"},"classToMigrationName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"classToMigrationName"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Return a migration name. This name should allow ordering."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"timestamp")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.namingstrategy"},"NamingStrategy"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.namingstrategy#classtomigrationname"},"classToMigrationName")),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L12"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:12")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"classtotablename"},"classToTableName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"classToTableName"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entityName"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Return a table name for an entity class"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entityName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.namingstrategy"},"NamingStrategy"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.namingstrategy#classtotablename"},"classToTableName")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L36"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:36")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"columnnametoproperty"},"columnNameToProperty"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"columnNameToProperty"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"columnName"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Return a column name for a property (used in ",(0,i.kt)("inlineCode",{parentName:"p"},"EntityGenerator"),")."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"columnName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.namingstrategy"},"NamingStrategy"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.namingstrategy#columnnametoproperty"},"columnNameToProperty")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L32"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:32")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getclassname"},"getClassName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getClassName"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"file"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"separator?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Return a name of the class based on its file name"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"file")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"separator")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"'-'"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"implementation-of-3"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.namingstrategy"},"NamingStrategy"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.namingstrategy#getclassname"},"getClassName")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L5"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:5")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"indexname"},"indexName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"indexName"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"tableName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"columns"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Returns key/constraint name for given type. Some drivers might not support all the types (e.g. mysql and sqlite enforce the PK name)."),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tableName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"columns")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},'"index"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"unique"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"foreign"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"primary"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"sequence"'))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"implementation-of-4"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.namingstrategy"},"NamingStrategy"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.namingstrategy#indexname"},"indexName")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L16"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:16")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"joincolumnname"},"joinColumnName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"joinColumnName"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"propertyName"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Return a join column name for a property"),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"propertyName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"implementation-of-5"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.namingstrategy"},"NamingStrategy"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.namingstrategy#joincolumnname"},"joinColumnName")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L38"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:38")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"joinkeycolumnname"},"joinKeyColumnName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"joinKeyColumnName"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"entityName"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"referencedColumnName?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Return the foreign key column name for the given parameters"),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entityName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"referencedColumnName?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"implementation-of-6"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.namingstrategy"},"NamingStrategy"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.namingstrategy#joinkeycolumnname"},"joinKeyColumnName")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L40"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"jointablename"},"joinTableName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"joinTableName"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"sourceEntity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"targetEntity"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"propertyName?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Return a join table name"),(0,i.kt)("h4",{id:"parameters-7"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"sourceEntity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"targetEntity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"propertyName?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"implementation-of-7"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.namingstrategy"},"NamingStrategy"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.namingstrategy#jointablename"},"joinTableName")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L42"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:42")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"propertytocolumnname"},"propertyToColumnName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"propertyToColumnName"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"propertyName"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Return a column name for a property"),(0,i.kt)("h4",{id:"parameters-8"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"propertyName")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-8"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"implementation-of-8"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.namingstrategy"},"NamingStrategy"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.namingstrategy#propertytocolumnname"},"propertyToColumnName")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L44"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:44")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"referencecolumnname"},"referenceColumnName"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,i.kt)("strong",{parentName:"p"},"referenceColumnName"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Return the default reference column name"),(0,i.kt)("h4",{id:"returns-9"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"implementation-of-9"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.namingstrategy"},"NamingStrategy"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.namingstrategy#referencecolumnname"},"referenceColumnName")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/naming-strategy/AbstractNamingStrategy.ts#L46"},"packages/core/src/naming-strategy/AbstractNamingStrategy.ts:46")))}k.isMDXComponent=!0}}]);