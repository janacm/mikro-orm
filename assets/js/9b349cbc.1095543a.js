(window.webpackJsonp=window.webpackJsonp||[]).push([[698],{1253:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return j}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),s=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=s(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(a),O=r,j=m["".concat(i,".").concat(O)]||m[O]||l[O]||b;return a?n.a.createElement(j,c(c({ref:t},p),{},{components:a})):n.a.createElement(j,c({ref:t},p))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,i=new Array(b);i[0]=O;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<b;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},768:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),b=(a(0),a(1253)),i={id:"migrations.migrationstorage",title:"Class: MigrationStorage",sidebar_label:"MigrationStorage",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/classes/migrations.migrationstorage",id:"api/classes/migrations.migrationstorage",isDocsHomePage:!1,title:"Class: MigrationStorage",description:"Class: MigrationStorage",source:"@site/docs/api/classes/migrations.migrationstorage.md",slug:"/api/classes/migrations.migrationstorage",permalink:"/docs/next/api/classes/migrations.migrationstorage",editUrl:null,version:"current",sidebar_label:"MigrationStorage",sidebar:"API",previous:{title:"Class: MigrationRunner",permalink:"/docs/next/api/classes/migrations.migrationrunner"},next:{title:"Class: Migrator",permalink:"/docs/next/api/classes/migrations.migrator"}},o=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"connection",id:"connection",children:[]},{value:"driver",id:"driver",children:[]},{value:"helper",id:"helper",children:[]},{value:"knex",id:"knex",children:[]},{value:"masterTransaction",id:"mastertransaction",children:[]},{value:"options",id:"options",children:[]}]},{value:"Methods",id:"methods",children:[{value:"ensureTable",id:"ensuretable",children:[]},{value:"executed",id:"executed",children:[]},{value:"getExecutedMigrations",id:"getexecutedmigrations",children:[]},{value:"logMigration",id:"logmigration",children:[]},{value:"setMasterMigration",id:"setmastermigration",children:[]},{value:"unlogMigration",id:"unlogmigration",children:[]},{value:"unsetMasterMigration",id:"unsetmastermigration",children:[]}]}],p={toc:o};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",{id:"class-migrationstorage"},"Class: MigrationStorage"),Object(b.b)("p",null,Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/migrations"}),"migrations"),".MigrationStorage"),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"MigrationStorage"))),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new MigrationStorage"),"(",Object(b.b)("inlineCode",{parentName:"p"},"driver"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqldriver"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqlconnection"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlConnection")),">",", ",Object(b.b)("inlineCode",{parentName:"p"},"options"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core#migrationsoptions"}),Object(b.b)("em",{parentName:"a"},"MigrationsOptions")),"): ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/migrations.migrationstorage"}),Object(b.b)("em",{parentName:"a"},"MigrationStorage"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"driver")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/knex.abstractsqldriver"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/classes/knex.abstractsqlconnection"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlConnection")),">")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/modules/core#migrationsoptions"}),Object(b.b)("em",{parentName:"a"},"MigrationsOptions")))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/migrations.migrationstorage"}),Object(b.b)("em",{parentName:"a"},"MigrationStorage"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/80db24e/packages/migrations/src/MigrationStorage.ts#L10"}),"packages/migrations/src/MigrationStorage.ts:10")),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"connection"},"connection"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"connection"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqlconnection"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlConnection"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/80db24e/packages/migrations/src/MigrationStorage.ts#L7"}),"packages/migrations/src/MigrationStorage.ts:7")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"driver"},"driver"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"driver"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqldriver"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlDriver")),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.abstractsqlconnection"}),Object(b.b)("em",{parentName:"a"},"AbstractSqlConnection")),">"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"helper"},"helper"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"helper"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/classes/knex.schemahelper"}),Object(b.b)("em",{parentName:"a"},"SchemaHelper"))),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/80db24e/packages/migrations/src/MigrationStorage.ts#L9"}),"packages/migrations/src/MigrationStorage.ts:9")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"knex"},"knex"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"knex"),": ",Object(b.b)("em",{parentName:"p"},"Knex"),"<",Object(b.b)("em",{parentName:"p"},"any"),", ",Object(b.b)("em",{parentName:"p"},"unknown"),"[]",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/80db24e/packages/migrations/src/MigrationStorage.ts#L8"}),"packages/migrations/src/MigrationStorage.ts:8")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"mastertransaction"},"masterTransaction"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Private")," ",Object(b.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(b.b)("strong",{parentName:"p"},"masterTransaction"),": ",Object(b.b)("em",{parentName:"p"},"any")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/80db24e/packages/migrations/src/MigrationStorage.ts#L10"}),"packages/migrations/src/MigrationStorage.ts:10")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"options"},"options"),Object(b.b)("p",null,"\u2022 ",Object(b.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(b.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(b.b)("strong",{parentName:"p"},"options"),": ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core#migrationsoptions"}),Object(b.b)("em",{parentName:"a"},"MigrationsOptions"))),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"ensuretable"},"ensureTable"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"ensureTable"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/80db24e/packages/migrations/src/MigrationStorage.ts#L38"}),"packages/migrations/src/MigrationStorage.ts:38")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"executed"},"executed"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"executed"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),"[]",">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"string"),"[]",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/80db24e/packages/migrations/src/MigrationStorage.ts#L15"}),"packages/migrations/src/MigrationStorage.ts:15")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"getexecutedmigrations"},"getExecutedMigrations"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"getExecutedMigrations"),"(): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/migrations#migrationrow"}),Object(b.b)("em",{parentName:"a"},"MigrationRow")),"[]",">"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/migrations#migrationrow"}),Object(b.b)("em",{parentName:"a"},"MigrationRow")),"[]",">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/80db24e/packages/migrations/src/MigrationStorage.ts#L28"}),"packages/migrations/src/MigrationStorage.ts:28")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"logmigration"},"logMigration"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"logMigration"),"(",Object(b.b)("inlineCode",{parentName:"p"},"name"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/80db24e/packages/migrations/src/MigrationStorage.ts#L20"}),"packages/migrations/src/MigrationStorage.ts:20")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"setmastermigration"},"setMasterMigration"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"setMasterMigration"),"(",Object(b.b)("inlineCode",{parentName:"p"},"trx"),": ",Object(b.b)("em",{parentName:"p"},"any"),"): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"trx")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"any"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/80db24e/packages/migrations/src/MigrationStorage.ts#L52"}),"packages/migrations/src/MigrationStorage.ts:52")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"unlogmigration"},"unlogMigration"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"unlogMigration"),"(",Object(b.b)("inlineCode",{parentName:"p"},"name"),": ",Object(b.b)("em",{parentName:"p"},"string"),"): ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"name")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("em",{parentName:"td"},"string"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"Promise"),"<",Object(b.b)("em",{parentName:"p"},"void"),">"),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/80db24e/packages/migrations/src/MigrationStorage.ts#L24"}),"packages/migrations/src/MigrationStorage.ts:24")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"unsetmastermigration"},"unsetMasterMigration"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"unsetMasterMigration"),"(): ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("em",{parentName:"p"},"void")),Object(b.b)("p",null,"Defined in: ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/80db24e/packages/migrations/src/MigrationStorage.ts#L56"}),"packages/migrations/src/MigrationStorage.ts:56")))}s.isMDXComponent=!0}}]);