(window.webpackJsonp=window.webpackJsonp||[]).push([[518],{1253:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,d=b["".concat(c,".").concat(m)]||b[m]||s[m]||o;return n?a.a.createElement(d,i(i({ref:t},u),{},{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},588:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(1253)),c={id:"core.changesettype",title:"Enumeration: ChangeSetType",sidebar_label:"ChangeSetType",custom_edit_url:null,hide_title:!0},i={unversionedId:"api/enums/core.changesettype",id:"api/enums/core.changesettype",isDocsHomePage:!1,title:"Enumeration: ChangeSetType",description:"Enumeration: ChangeSetType",source:"@site/docs/api/enums/core.changesettype.md",slug:"/api/enums/core.changesettype",permalink:"/docs/next/api/enums/core.changesettype",editUrl:null,version:"current",sidebar_label:"ChangeSetType",sidebar:"API",previous:{title:"Enumeration: Cascade",permalink:"/docs/next/api/enums/core.cascade"},next:{title:"Enumeration: EventType",permalink:"/docs/next/api/enums/core.eventtype"}},p=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"CREATE",id:"create",children:[]},{value:"DELETE",id:"delete",children:[]},{value:"UPDATE",id:"update",children:[]}]}],u={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"enumeration-changesettype"},"Enumeration: ChangeSetType"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/modules/core"}),"core"),".ChangeSetType"),Object(o.b)("h2",{id:"enumeration-members"},"Enumeration members"),Object(o.b)("h3",{id:"create"},"CREATE"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"CREATE"),': = "create"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/80db24e/packages/core/src/unit-of-work/ChangeSet.ts#L28"}),"packages/core/src/unit-of-work/ChangeSet.ts:28")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"delete"},"DELETE"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"DELETE"),': = "delete"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/80db24e/packages/core/src/unit-of-work/ChangeSet.ts#L30"}),"packages/core/src/unit-of-work/ChangeSet.ts:30")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"update"},"UPDATE"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"UPDATE"),': = "update"'),Object(o.b)("p",null,"Defined in: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/blob/80db24e/packages/core/src/unit-of-work/ChangeSet.ts#L29"}),"packages/core/src/unit-of-work/ChangeSet.ts:29")))}l.isMDXComponent=!0}}]);