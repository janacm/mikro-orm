(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37464],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return k},kt:function(){return f}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},k=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),s=m(a),f=r,c=s["".concat(l,".").concat(f)]||s[f]||d[f]||i;return a?n.createElement(c,p(p({ref:t},k),{},{components:a})):n.createElement(c,p({ref:t},k))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,p=new Array(i);p[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var m=2;m<i;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},16239:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return l},default:function(){return k}});var n=a(74034),r=a(79973),i=(a(67294),a(3905)),p={id:"knex.knex-1.migrator",title:"Interface: Migrator",sidebar_label:"Migrator",custom_edit_url:null,hide_title:!0},o={unversionedId:"api/interfaces/knex.knex-1.migrator",id:"version-4.5/api/interfaces/knex.knex-1.migrator",isDocsHomePage:!1,title:"Interface: Migrator",description:"knex.Knex.Migrator",source:"@site/versioned_docs/version-4.5/api/interfaces/knex.knex-1.migrator.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/knex.knex-1.migrator",permalink:"/docs/api/interfaces/knex.knex-1.migrator",editUrl:null,version:"4.5",lastUpdatedBy:"Jens Mikkelsen",lastUpdatedAt:1621960071,formattedLastUpdatedAt:"5/25/2021",sidebar_label:"Migrator",frontMatter:{id:"knex.knex-1.migrator",title:"Interface: Migrator",sidebar_label:"Migrator",custom_edit_url:null,hide_title:!0},sidebar:"version-4.5/API",previous:{title:"Interface: MigrationSource<TMigrationSpec\\>",permalink:"/docs/api/interfaces/knex.knex-1.migrationsource"},next:{title:"Interface: MigratorConfig",permalink:"/docs/api/interfaces/knex.knex-1.migratorconfig"}},l=[{value:"Methods",id:"methods",children:[{value:"currentVersion",id:"currentversion",children:[]},{value:"down",id:"down",children:[]},{value:"forceFreeMigrationsLock",id:"forcefreemigrationslock",children:[]},{value:"latest",id:"latest",children:[]},{value:"list",id:"list",children:[]},{value:"make",id:"make",children:[]},{value:"rollback",id:"rollback",children:[]},{value:"status",id:"status",children:[]},{value:"up",id:"up",children:[]}]}],m={toc:l};function k(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".Migrator"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"currentversion"},"currentVersion"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"currentVersion"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<string",">"),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<string",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2139"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"down"},"down"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"down"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2142"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"forcefreemigrationslock"},"forceFreeMigrationsLock"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"forceFreeMigrationsLock"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2143"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"latest"},"latest"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"latest"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2136"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"list"},"list"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"list"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2140"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"make"},"make"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"make"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,i.kt)("em",{parentName:"p"},"string"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<string",">"),(0,i.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"string"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<string",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2135"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"rollback"},"rollback"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"rollback"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"all?"),": ",(0,i.kt)("em",{parentName:"p"},"boolean"),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"all?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("em",{parentName:"td"},"boolean"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2137"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"status"},"status"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"status"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<number",">"),(0,i.kt)("h4",{id:"parameters-7"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<number",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2138"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"up"},"up"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"up"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config?"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")),"): ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("h4",{id:"parameters-8"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/api/interfaces/knex.knex-1.migratorconfig"},(0,i.kt)("em",{parentName:"a"},"MigratorConfig")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," ",(0,i.kt)("em",{parentName:"p"},"Promise"),"<any",">"),(0,i.kt)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2141"))}k.isMDXComponent=!0}}]);