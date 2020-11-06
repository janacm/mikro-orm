(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{103:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var r=a(1),n=a(6),i=(a(0),a(807)),b={id:"migrationstorage",title:"Class: MigrationStorage",sidebar_label:"MigrationStorage"},o={unversionedId:"api/classes/migrationstorage",id:"version-4.2/api/classes/migrationstorage",isDocsHomePage:!1,title:"Class: MigrationStorage",description:"Hierarchy",source:"@site/versioned_docs/version-4.2/api/classes/migrationstorage.md",slug:"/api/classes/migrationstorage",permalink:"/docs/api/classes/migrationstorage",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/migrationstorage.md",version:"4.2",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1604657326,sidebar_label:"MigrationStorage",sidebar:"version-4.2/API",previous:{title:"Class: MigrationRunner",permalink:"/docs/api/classes/migrationrunner"},next:{title:"Class: Migrator",permalink:"/docs/api/classes/migrator"}},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"connection",id:"connection",children:[]},{value:"driver",id:"driver",children:[]},{value:"helper",id:"helper",children:[]},{value:"knex",id:"knex",children:[]},{value:"masterTransaction",id:"mastertransaction",children:[]},{value:"options",id:"options",children:[]}]},{value:"Methods",id:"methods",children:[{value:"ensureTable",id:"ensuretable",children:[]},{value:"executed",id:"executed",children:[]},{value:"getExecutedMigrations",id:"getexecutedmigrations",children:[]},{value:"logMigration",id:"logmigration",children:[]},{value:"setMasterMigration",id:"setmastermigration",children:[]},{value:"unlogMigration",id:"unlogmigration",children:[]},{value:"unsetMasterMigration",id:"unsetmastermigration",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"MigrationStorage"))),Object(i.b)("h2",{id:"constructors"},"Constructors"),Object(i.b)("h3",{id:"constructor"},"constructor"),Object(i.b)("p",null,"+"," ",Object(i.b)("strong",{parentName:"p"},"new MigrationStorage"),"(",Object(i.b)("inlineCode",{parentName:"p"},"driver"),": AbstractSqlDriver, ",Object(i.b)("inlineCode",{parentName:"p"},"options"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrationsoptions"}),"MigrationsOptions"),"): ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/migrationstorage"}),"MigrationStorage")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationStorage.ts#L10"}),"packages/migrations/src/MigrationStorage.ts:10"))),Object(i.b)("h4",{id:"parameters"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"driver")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"AbstractSqlDriver")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"options")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#migrationsoptions"}),"MigrationsOptions"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/classes/migrationstorage"}),"MigrationStorage")),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"connection"},"connection"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Private")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"connection"),": AbstractSqlConnection = this.driver.getConnection()"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationStorage.ts#L7"}),"packages/migrations/src/MigrationStorage.ts:7"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"driver"},"driver"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"driver"),": AbstractSqlDriver"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationStorage.ts#L12"}),"packages/migrations/src/MigrationStorage.ts:12"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"helper"},"helper"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Private")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"helper"),": SchemaHelper = this.driver.getPlatform().getSchemaHelper()!"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationStorage.ts#L9"}),"packages/migrations/src/MigrationStorage.ts:9"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"knex"},"knex"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Private")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"knex"),": any = this.connection.getKnex()"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationStorage.ts#L8"}),"packages/migrations/src/MigrationStorage.ts:8"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"mastertransaction"},"masterTransaction"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Private")," ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"masterTransaction"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#transaction"}),"Transaction")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationStorage.ts#L10"}),"packages/migrations/src/MigrationStorage.ts:10"))),Object(i.b)("hr",null),Object(i.b)("h3",{id:"options"},"options"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(i.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(i.b)("strong",{parentName:"p"},"options"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrationsoptions"}),"MigrationsOptions")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationStorage.ts#L13"}),"packages/migrations/src/MigrationStorage.ts:13"))),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"ensuretable"},"ensureTable"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"ensureTable"),"(): Promise","<","void>"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationStorage.ts#L38"}),"packages/migrations/src/MigrationStorage.ts:38"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"executed"},"executed"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"executed"),"(): Promise","<","string[]>"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationStorage.ts#L15"}),"packages/migrations/src/MigrationStorage.ts:15"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Promise","<","string[]>"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"getexecutedmigrations"},"getExecutedMigrations"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"getExecutedMigrations"),"(): Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrationrow"}),"MigrationRow"),"[]>"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationStorage.ts#L28"}),"packages/migrations/src/MigrationStorage.ts:28"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Promise","<",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#migrationrow"}),"MigrationRow"),"[]>"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"logmigration"},"logMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"logMigration"),"(",Object(i.b)("inlineCode",{parentName:"p"},"name"),": string): Promise","<","void>"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationStorage.ts#L20"}),"packages/migrations/src/MigrationStorage.ts:20"))),Object(i.b)("h4",{id:"parameters-1"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"name")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"setmastermigration"},"setMasterMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"setMasterMigration"),"(",Object(i.b)("inlineCode",{parentName:"p"},"trx"),": ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api#transaction"}),"Transaction"),"): void"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationStorage.ts#L52"}),"packages/migrations/src/MigrationStorage.ts:52"))),Object(i.b)("h4",{id:"parameters-2"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"trx")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api#transaction"}),"Transaction"))))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," void"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"unlogmigration"},"unlogMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"unlogMigration"),"(",Object(i.b)("inlineCode",{parentName:"p"},"name"),": string): Promise","<","void>"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationStorage.ts#L24"}),"packages/migrations/src/MigrationStorage.ts:24"))),Object(i.b)("h4",{id:"parameters-3"},"Parameters:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"name")),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," Promise","<","void>"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"unsetmastermigration"},"unsetMasterMigration"),Object(i.b)("p",null,"\u25b8 ",Object(i.b)("strong",{parentName:"p"},"unsetMasterMigration"),"(): void"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Defined in ",Object(i.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/migrations/src/MigrationStorage.ts#L56"}),"packages/migrations/src/MigrationStorage.ts:56"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Returns:")," void"))}p.isMDXComponent=!0},807:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},g=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,b=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(a),g=r,O=l["".concat(b,".").concat(g)]||l[g]||m[g]||i;return a?n.a.createElement(O,o(o({ref:t},s),{},{components:a})):n.a.createElement(O,o({ref:t},s))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,b=new Array(i);b[0]=g;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,b[1]=o;for(var s=2;s<i;s++)b[s]=a[s];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"}}]);