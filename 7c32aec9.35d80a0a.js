(window.webpackJsonp=window.webpackJsonp||[]).push([[484],{1086:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),o=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},O=function(e){var t=o(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),O=o(a),j=n,m=O["".concat(c,".").concat(j)]||O[j]||s[j]||b;return a?r.a.createElement(m,i(i({ref:t},l),{},{components:a})):r.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<b;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},554:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),b=(a(0),a(1086)),c={id:"baseentity",title:"Class: BaseEntity<T, PK>",sidebar_label:"BaseEntity"},i={unversionedId:"api/classes/baseentity",id:"version-4.2/api/classes/baseentity",isDocsHomePage:!1,title:"Class: BaseEntity<T, PK>",description:"Type parameters",source:"@site/versioned_docs/version-4.2/api/classes/baseentity.md",slug:"/api/classes/baseentity",permalink:"/docs/4.2/api/classes/baseentity",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/api/classes/baseentity.md",version:"4.2",lastUpdatedBy:"Marcel Link",lastUpdatedAt:1608571746,sidebar_label:"BaseEntity",sidebar:"version-4.2/API",previous:{title:"Class: ArrayType<T>",permalink:"/docs/4.2/api/classes/arraytype"},next:{title:"Class: BigIntType",permalink:"/docs/4.2/api/classes/biginttype"}},p=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Methods",id:"methods",children:[{value:"assign",id:"assign",children:[]},{value:"init",id:"init",children:[]},{value:"isInitialized",id:"isinitialized",children:[]},{value:"populated",id:"populated",children:[]},{value:"toJSON",id:"tojson",children:[]},{value:"toObject",id:"toobject",children:[]},{value:"toReference",id:"toreference",children:[]}]}],l={rightToc:p};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"type-parameters"},"Type parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"T")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#anyentity"}),"AnyEntity"),"<","T>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"PK")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"keyof T")))),Object(b.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("strong",{parentName:"li"},"BaseEntity"))),Object(b.b)("h2",{id:"implements"},"Implements"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/4.2/api/interfaces/iwrappedentity"}),"IWrappedEntity"),"<","T, PK>")),Object(b.b)("h2",{id:"constructors"},"Constructors"),Object(b.b)("h3",{id:"constructor"},"constructor"),Object(b.b)("p",null,"+"," ",Object(b.b)("strong",{parentName:"p"},"new BaseEntity"),"(): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/baseentity"}),"BaseEntity")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/BaseEntity.ts#L5"}),"packages/core/src/entity/BaseEntity.ts:5"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/classes/baseentity"}),"BaseEntity")),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"assign"},"assign"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"assign"),"(",Object(b.b)("inlineCode",{parentName:"p"},"data"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>, ",Object(b.b)("inlineCode",{parentName:"p"},"options?"),": ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/assignoptions"}),"AssignOptions"),"): T"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/BaseEntity.ts#L31"}),"packages/core/src/entity/BaseEntity.ts:31"))),Object(b.b)("h4",{id:"parameters"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#entitydata"}),"EntityData"),"<","T>")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"options?")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api/interfaces/assignoptions"}),"AssignOptions"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," T"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"init"},"init"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"init"),"(",Object(b.b)("inlineCode",{parentName:"p"},"populated?"),": boolean): Promise","<","T>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/BaseEntity.ts#L35"}),"packages/core/src/entity/BaseEntity.ts:35"))),Object(b.b)("h4",{id:"parameters-1"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"populated")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," Promise","<","T>"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"isinitialized"},"isInitialized"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"isInitialized"),"(): boolean"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/interfaces/iwrappedentity"}),"IWrappedEntity"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/BaseEntity.ts#L11"}),"packages/core/src/entity/BaseEntity.ts:11"))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," boolean"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"populated"},"populated"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"populated"),"(",Object(b.b)("inlineCode",{parentName:"p"},"populated?"),": boolean): void"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/interfaces/iwrappedentity"}),"IWrappedEntity"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/BaseEntity.ts#L15"}),"packages/core/src/entity/BaseEntity.ts:15"))),Object(b.b)("h4",{id:"parameters-2"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"populated")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," void"),Object(b.b)("hr",null),Object(b.b)("h3",{id:"tojson"},"toJSON"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toJSON"),"(...",Object(b.b)("inlineCode",{parentName:"p"},"args"),": any[]): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#dictionary"}),"Dictionary")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/interfaces/iwrappedentity"}),"IWrappedEntity"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/BaseEntity.ts#L27"}),"packages/core/src/entity/BaseEntity.ts:27"))),Object(b.b)("h4",{id:"parameters-3"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"...args")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#dictionary"}),"Dictionary")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"toobject"},"toObject"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toObject"),"(",Object(b.b)("inlineCode",{parentName:"p"},"ignoreFields?"),": string[]): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#dictionary"}),"Dictionary")),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/interfaces/iwrappedentity"}),"IWrappedEntity"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/BaseEntity.ts#L23"}),"packages/core/src/entity/BaseEntity.ts:23"))),Object(b.b)("h4",{id:"parameters-4"},"Parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default value"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"ignoreFields")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string[]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[]")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#dictionary"}),"Dictionary")),Object(b.b)("hr",null),Object(b.b)("h3",{id:"toreference"},"toReference"),Object(b.b)("p",null,"\u25b8 ",Object(b.b)("strong",{parentName:"p"},"toReference"),"<","PK2, P>(): ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#identifiedreference"}),"IdentifiedReference"),"<","T, PK2> & ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/loadedreference"}),"LoadedReference"),"<","T, P>"),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Implementation of ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/4.2/api/interfaces/iwrappedentity"}),"IWrappedEntity"))),Object(b.b)("p",null,Object(b.b)("em",{parentName:"p"},"Defined in ",Object(b.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/mikro-orm/mikro-orm/blob/8766baa31/packages/core/src/entity/BaseEntity.ts#L19"}),"packages/core/src/entity/BaseEntity.ts:19"))),Object(b.b)("h4",{id:"type-parameters-1"},"Type parameters:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"PK2")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"PK"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"never")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"P")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/4.2/api#populate"}),"Populate"),"<","T>"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"never")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns:")," ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api#identifiedreference"}),"IdentifiedReference"),"<","T, PK2> & ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/4.2/api/interfaces/loadedreference"}),"LoadedReference"),"<","T, P>"))}o.isMDXComponent=!0}}]);