(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[31229],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),k=r,u=m["".concat(p,".").concat(k)]||m[k]||d[k]||i;return n?a.createElement(u,o(o({ref:t},c),{},{components:n})):a.createElement(u,o({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16474:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),o={id:"core.requestcontext",title:"Class: RequestContext",sidebar_label:"RequestContext",custom_edit_url:null},s=void 0,p={unversionedId:"api/classes/core.requestcontext",id:"api/classes/core.requestcontext",isDocsHomePage:!1,title:"Class: RequestContext",description:"core.RequestContext",source:"@site/docs/api/classes/core.requestcontext.md",sourceDirName:"api/classes",slug:"/api/classes/core.requestcontext",permalink:"/docs/next/api/classes/core.requestcontext",editUrl:null,version:"current",frontMatter:{id:"core.requestcontext",title:"Class: RequestContext",sidebar_label:"RequestContext",custom_edit_url:null},sidebar:"API",previous:{title:"ReflectMetadataProvider",permalink:"/docs/next/api/classes/core.reflectmetadataprovider"},next:{title:"SerializationContext",permalink:"/docs/next/api/classes/core.serializationcontext"}},l=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"id",id:"id",children:[]},{value:"map",id:"map",children:[]}]},{value:"Accessors",id:"accessors",children:[{value:"em",id:"em",children:[]}]},{value:"Methods",id:"methods",children:[{value:"create",id:"create",children:[]},{value:"createAsync",id:"createasync",children:[]},{value:"currentRequestContext",id:"currentrequestcontext",children:[]},{value:"getEntityManager",id:"getentitymanager",children:[]}]}],c={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".RequestContext"),(0,i.kt)("p",null,"Uses ",(0,i.kt)("inlineCode",{parentName:"p"},"AsyncLocalStorage")," to create async context that holds current EM fork."),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new RequestContext"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"map"),")"),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"map")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymanager"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.idatabasedriver"},(0,i.kt)("inlineCode",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.connection"},(0,i.kt)("inlineCode",{parentName:"a"},"Connection")),">",">",">")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/utils/RequestContext.ts#L11"},"packages/core/src/utils/RequestContext.ts:11")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"id"},"id"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"id"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/utils/RequestContext.ts#L11"},"packages/core/src/utils/RequestContext.ts:11")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"map"},"map"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"map"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymanager"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},(0,i.kt)("inlineCode",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},(0,i.kt)("inlineCode",{parentName:"a"},"Connection")),">",">",">"),(0,i.kt)("h2",{id:"accessors"},"Accessors"),(0,i.kt)("h3",{id:"em"},"em"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"get")," ",(0,i.kt)("strong",{parentName:"p"},"em"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymanager"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},(0,i.kt)("inlineCode",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},(0,i.kt)("inlineCode",{parentName:"a"},"Connection")),">",">"),(0,i.kt)("p",null,"Returns default EntityManager."),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymanager"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},(0,i.kt)("inlineCode",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},(0,i.kt)("inlineCode",{parentName:"a"},"Connection")),">",">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/utils/RequestContext.ts#L18"},"packages/core/src/utils/RequestContext.ts:18")),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"create"},"create"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"create"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"em"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"next"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Creates new RequestContext instance and runs the code inside its domain."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"em")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymanager"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.idatabasedriver"},(0,i.kt)("inlineCode",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.connection"},(0,i.kt)("inlineCode",{parentName:"a"},"Connection")),">",">"," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymanager"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.idatabasedriver"},(0,i.kt)("inlineCode",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.connection"},(0,i.kt)("inlineCode",{parentName:"a"},"Connection")),">",">","[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"next")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(...",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),"[]) => ",(0,i.kt)("inlineCode",{parentName:"td"},"void"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/utils/RequestContext.ts#L25"},"packages/core/src/utils/RequestContext.ts:25")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"createasync"},"createAsync"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"createAsync"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"em"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"next"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"Creates new RequestContext instance and runs the code inside its domain.\nAsync variant, when the ",(0,i.kt)("inlineCode",{parentName:"p"},"next")," handler needs to be awaited (like in Koa)."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"em")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymanager"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.idatabasedriver"},(0,i.kt)("inlineCode",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.connection"},(0,i.kt)("inlineCode",{parentName:"a"},"Connection")),">",">"," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymanager"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.idatabasedriver"},(0,i.kt)("inlineCode",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api/classes/core.connection"},(0,i.kt)("inlineCode",{parentName:"a"},"Connection")),">",">","[]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"next")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(...",(0,i.kt)("inlineCode",{parentName:"td"},"args"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"any"),"[]) => ",(0,i.kt)("inlineCode",{parentName:"td"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"void"),">")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/utils/RequestContext.ts#L34"},"packages/core/src/utils/RequestContext.ts:34")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"currentrequestcontext"},"currentRequestContext"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"currentRequestContext"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.requestcontext"},(0,i.kt)("inlineCode",{parentName:"a"},"RequestContext"))),(0,i.kt)("p",null,"Returns current RequestContext (if available)."),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.requestcontext"},(0,i.kt)("inlineCode",{parentName:"a"},"RequestContext"))),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/utils/RequestContext.ts#L44"},"packages/core/src/utils/RequestContext.ts:44")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getentitymanager"},"getEntityManager"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("strong",{parentName:"p"},"getEntityManager"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"name?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymanager"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},(0,i.kt)("inlineCode",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},(0,i.kt)("inlineCode",{parentName:"a"},"Connection")),">",">"),(0,i.kt)("p",null,"Returns current EntityManager (if available)."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"'default'"))))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymanager"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityManager")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.idatabasedriver"},(0,i.kt)("inlineCode",{parentName:"a"},"IDatabaseDriver")),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.connection"},(0,i.kt)("inlineCode",{parentName:"a"},"Connection")),">",">"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/utils/RequestContext.ts#L51"},"packages/core/src/utils/RequestContext.ts:51")))}d.isMDXComponent=!0}}]);