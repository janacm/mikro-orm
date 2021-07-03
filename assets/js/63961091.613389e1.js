(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14992],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,k=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(k,a(a({ref:t},p),{},{components:r})):n.createElement(k,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},278:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=r(74034),o=r(79973),i=(r(67294),r(3905)),a={id:"core.isolationlevel",title:"Enumeration: IsolationLevel",sidebar_label:"IsolationLevel",custom_edit_url:null},l=void 0,c={unversionedId:"api/enums/core.isolationlevel",id:"api/enums/core.isolationlevel",isDocsHomePage:!1,title:"Enumeration: IsolationLevel",description:"core.IsolationLevel",source:"@site/docs/api/enums/core.isolationlevel.md",sourceDirName:"api/enums",slug:"/api/enums/core.isolationlevel",permalink:"/docs/next/api/enums/core.isolationlevel",editUrl:null,version:"current",frontMatter:{id:"core.isolationlevel",title:"Enumeration: IsolationLevel",sidebar_label:"IsolationLevel",custom_edit_url:null},sidebar:"API",previous:{title:"GroupOperator",permalink:"/docs/next/api/enums/core.groupoperator"},next:{title:"LoadStrategy",permalink:"/docs/next/api/enums/core.loadstrategy"}},s=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"READ_COMMITTED",id:"read_committed",children:[]},{value:"READ_UNCOMMITTED",id:"read_uncommitted",children:[]},{value:"REPEATABLE_READ",id:"repeatable_read",children:[]},{value:"SERIALIZABLE",id:"serializable",children:[]},{value:"SNAPSHOT",id:"snapshot",children:[]}]}],p={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".IsolationLevel"),(0,i.kt)("h2",{id:"enumeration-members"},"Enumeration members"),(0,i.kt)("h3",{id:"read_committed"},"READ","_","COMMITTED"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"READ","_","COMMITTED")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"read committed"')),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/enums.ts#L103"},"packages/core/src/enums.ts:103")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"read_uncommitted"},"READ","_","UNCOMMITTED"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"READ","_","UNCOMMITTED")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"read uncommitted"')),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/enums.ts#L102"},"packages/core/src/enums.ts:102")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"repeatable_read"},"REPEATABLE","_","READ"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"REPEATABLE","_","READ")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"repeatable read"')),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/enums.ts#L105"},"packages/core/src/enums.ts:105")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"serializable"},"SERIALIZABLE"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"SERIALIZABLE")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"serializable"')),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/enums.ts#L106"},"packages/core/src/enums.ts:106")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"snapshot"},"SNAPSHOT"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"SNAPSHOT")," = ",(0,i.kt)("inlineCode",{parentName:"p"},'"snapshot"')),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/enums.ts#L104"},"packages/core/src/enums.ts:104")))}u.isMDXComponent=!0}}]);