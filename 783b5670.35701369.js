(window.webpackJsonp=window.webpackJsonp||[]).push([[467],{1086:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):b(b({},r),e)),t},m=function(e){var r=p(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},l=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(t),l=n,d=m["".concat(o,".").concat(l)]||m[l]||s[l]||c;return t?a.a.createElement(d,b(b({ref:r},u),{},{components:t})):a.a.createElement(d,b({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=l;var b={};for(var i in r)hasOwnProperty.call(r,i)&&(b[i]=r[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var u=2;u<c;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},537:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return b})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return p}));var n=t(3),a=t(7),c=(t(0),t(1086)),o={id:"querytype",title:"Enumeration: QueryType",sidebar_label:"QueryType"},b={unversionedId:"api/enums/querytype",id:"version-4.3/api/enums/querytype",isDocsHomePage:!1,title:"Enumeration: QueryType",description:"Enumeration members",source:"@site/versioned_docs/version-4.3/api/enums/querytype.md",slug:"/api/enums/querytype",permalink:"/docs/api/enums/querytype",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.3/api/enums/querytype.md",version:"4.3",lastUpdatedBy:"Marcel Link",lastUpdatedAt:1608571746,sidebar_label:"QueryType",sidebar:"version-4.3/API",previous:{title:"Enumeration: QueryOrderNumeric",permalink:"/docs/api/enums/queryordernumeric"},next:{title:"Enumeration: ReferenceType",permalink:"/docs/api/enums/referencetype"}},i=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"COUNT",id:"count",children:[]},{value:"DELETE",id:"delete",children:[]},{value:"INSERT",id:"insert",children:[]},{value:"SELECT",id:"select",children:[]},{value:"TRUNCATE",id:"truncate",children:[]},{value:"UPDATE",id:"update",children:[]}]}],u={rightToc:i};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(c.b)("h3",{id:"count"},"COUNT"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"COUNT"),':  = "COUNT"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/query/enums.ts#L4"}),"packages/knex/src/query/enums.ts:4"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"delete"},"DELETE"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"DELETE"),':  = "DELETE"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/query/enums.ts#L7"}),"packages/knex/src/query/enums.ts:7"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"insert"},"INSERT"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"INSERT"),':  = "INSERT"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/query/enums.ts#L5"}),"packages/knex/src/query/enums.ts:5"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"select"},"SELECT"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"SELECT"),':  = "SELECT"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/query/enums.ts#L3"}),"packages/knex/src/query/enums.ts:3"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"truncate"},"TRUNCATE"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"TRUNCATE"),':  = "TRUNCATE"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/query/enums.ts#L2"}),"packages/knex/src/query/enums.ts:2"))),Object(c.b)("hr",null),Object(c.b)("h3",{id:"update"},"UPDATE"),Object(c.b)("p",null,"\u2022  ",Object(c.b)("strong",{parentName:"p"},"UPDATE"),':  = "UPDATE"'),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/18b580bb42/packages/knex/src/query/enums.ts#L6"}),"packages/knex/src/query/enums.ts:6"))))}p.isMDXComponent=!0}}]);