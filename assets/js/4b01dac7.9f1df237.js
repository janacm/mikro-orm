(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5886],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),k=d(n),c=r,u=k["".concat(l,".").concat(c)]||k[c]||s[c]||i;return n?a.createElement(u,p(p({ref:t},m),{},{components:n})):a.createElement(u,p({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var d=2;d<i;d++)p[d]=n[d];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},17706:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return d},default:function(){return s}});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),p={id:"core.baseentity",title:"Class: BaseEntity<T, PK, P>",sidebar_label:"BaseEntity",custom_edit_url:null},o=void 0,l={unversionedId:"api/classes/core.baseentity",id:"api/classes/core.baseentity",isDocsHomePage:!1,title:"Class: BaseEntity<T, PK, P>",description:"core.BaseEntity",source:"@site/docs/api/classes/core.baseentity.md",sourceDirName:"api/classes",slug:"/api/classes/core.baseentity",permalink:"/docs/next/api/classes/core.baseentity",editUrl:null,version:"current",frontMatter:{id:"core.baseentity",title:"Class: BaseEntity<T, PK, P>",sidebar_label:"BaseEntity",custom_edit_url:null},sidebar:"API",previous:{title:"ArrayType",permalink:"/docs/next/api/classes/core.arraytype"},next:{title:"BigIntType",permalink:"/docs/next/api/classes/core.biginttype"}},d=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"assign",id:"assign",children:[]},{value:"init",id:"init",children:[]},{value:"isInitialized",id:"isinitialized",children:[]},{value:"populated",id:"populated",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"toObject",id:"toobject",children:[]},{value:"toPOJO",id:"topojo",children:[]},{value:"toReference",id:"toreference",children:[]}]}],m={toc:d};function s(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".BaseEntity"),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PK")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends keyof ",(0,i.kt)("inlineCode",{parentName:"td"},"T"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"P")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#populate"},(0,i.kt)("inlineCode",{parentName:"a"},"Populate")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"T"),">"," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"unknown``unknown"))))),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/next/api/interfaces/core.iwrappedentity"},(0,i.kt)("inlineCode",{parentName:"a"},"IWrappedEntity")),"<",(0,i.kt)("inlineCode",{parentName:"li"},"T"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"PK"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"P"),">")),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new BaseEntity"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PK"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"P"),">","()"),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"PK")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"P")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"unknown``unknown"))))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/entity/BaseEntity.ts#L5"},"packages/core/src/entity/BaseEntity.ts:5")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"assign"},"assign"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"assign"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"options?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"T")),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/modules/core#entitydata"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityData")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"T"),">")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"options?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.assignoptions"},(0,i.kt)("inlineCode",{parentName:"a"},"AssignOptions")))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"T")),(0,i.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.iwrappedentity"},"IWrappedEntity"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.iwrappedentity#assign"},"assign")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/entity/BaseEntity.ts#L35"},"packages/core/src/entity/BaseEntity.ts:35")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"init"},"init"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"init"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"populated?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"populated")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.iwrappedentity"},"IWrappedEntity"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.iwrappedentity#init"},"init")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/entity/BaseEntity.ts#L39"},"packages/core/src/entity/BaseEntity.ts:39")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"isinitialized"},"isInitialized"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"isInitialized"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.iwrappedentity"},"IWrappedEntity"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.iwrappedentity#isinitialized"},"isInitialized")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/entity/BaseEntity.ts#L11"},"packages/core/src/entity/BaseEntity.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"populated"},"populated"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"populated"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"populated?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"populated")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"true"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"implementation-of-3"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.iwrappedentity"},"IWrappedEntity"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.iwrappedentity#populated"},"populated")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/entity/BaseEntity.ts#L15"},"packages/core/src/entity/BaseEntity.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tojson"},"toJSON"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"toJSON"),"(...",(0,i.kt)("inlineCode",{parentName:"p"},"args"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entitydto"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityDTO")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"...args")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"),"[]")))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entitydto"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityDTO")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"implementation-of-4"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.iwrappedentity"},"IWrappedEntity"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.iwrappedentity#tojson"},"toJSON")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/entity/BaseEntity.ts#L27"},"packages/core/src/entity/BaseEntity.ts:27")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"toobject"},"toObject"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"toObject"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ignoreFields?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entitydto"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityDTO")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ignoreFields")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"[]"))))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entitydto"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityDTO")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"implementation-of-5"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.iwrappedentity"},"IWrappedEntity"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.iwrappedentity#toobject"},"toObject")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/entity/BaseEntity.ts#L23"},"packages/core/src/entity/BaseEntity.ts:23")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"topojo"},"toPOJO"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"toPOJO"),"(): ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entitydto"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityDTO")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"returns-6"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entitydto"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityDTO")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"implementation-of-6"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.iwrappedentity"},"IWrappedEntity"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.iwrappedentity#topojo"},"toPOJO")),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/entity/BaseEntity.ts#L31"},"packages/core/src/entity/BaseEntity.ts:31")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"toreference"},"toReference"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"toReference"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"returns-7"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"implementation-of-7"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.iwrappedentity"},"IWrappedEntity"),".",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.iwrappedentity#toreference"},"toReference")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/entity/BaseEntity.ts#L19"},"packages/core/src/entity/BaseEntity.ts:19")))}s.isMDXComponent=!0}}]);