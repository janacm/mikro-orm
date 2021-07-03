(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43124],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return k},kt:function(){return c}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},k=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),s=d(r),c=a,h=s["".concat(l,".").concat(c)]||s[c]||m[c]||i;return r?n.createElement(h,o(o({ref:t},k),{},{components:r})):n.createElement(h,o({ref:t},k))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},89455:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),o={id:"core.onetooneoptions",title:"Interface: OneToOneOptions<T, O>",sidebar_label:"OneToOneOptions",custom_edit_url:null},p=void 0,l={unversionedId:"api/interfaces/core.onetooneoptions",id:"api/interfaces/core.onetooneoptions",isDocsHomePage:!1,title:"Interface: OneToOneOptions<T, O>",description:"core.OneToOneOptions",source:"@site/docs/api/interfaces/core.onetooneoptions.md",sourceDirName:"api/interfaces",slug:"/api/interfaces/core.onetooneoptions",permalink:"/docs/next/api/interfaces/core.onetooneoptions",editUrl:null,version:"current",frontMatter:{id:"core.onetooneoptions",title:"Interface: OneToOneOptions<T, O>",sidebar_label:"OneToOneOptions",custom_edit_url:null},sidebar:"API",previous:{title:"Node",permalink:"/docs/next/api/interfaces/core.node"},next:{title:"PoolConfig",permalink:"/docs/next/api/interfaces/core.poolconfig"}},d=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"autoincrement",id:"autoincrement",children:[]},{value:"cascade",id:"cascade",children:[]},{value:"columnType",id:"columntype",children:[]},{value:"comment",id:"comment",children:[]},{value:"customType",id:"customtype",children:[]},{value:"default",id:"default",children:[]},{value:"defaultRaw",id:"defaultraw",children:[]},{value:"eager",id:"eager",children:[]},{value:"entity",id:"entity",children:[]},{value:"fieldName",id:"fieldname",children:[]},{value:"fieldNames",id:"fieldnames",children:[]},{value:"formula",id:"formula",children:[]},{value:"getter",id:"getter",children:[]},{value:"hidden",id:"hidden",children:[]},{value:"index",id:"index",children:[]},{value:"inverseJoinColumn",id:"inversejoincolumn",children:[]},{value:"inverseJoinColumns",id:"inversejoincolumns",children:[]},{value:"inversedBy",id:"inversedby",children:[]},{value:"joinColumn",id:"joincolumn",children:[]},{value:"joinColumns",id:"joincolumns",children:[]},{value:"lazy",id:"lazy",children:[]},{value:"length",id:"length",children:[]},{value:"mapToPk",id:"maptopk",children:[]},{value:"mappedBy",id:"mappedby",children:[]},{value:"name",id:"name",children:[]},{value:"nullable",id:"nullable",children:[]},{value:"onCreate",id:"oncreate",children:[]},{value:"onDelete",id:"ondelete",children:[]},{value:"onUpdate",id:"onupdate",children:[]},{value:"onUpdateIntegrity",id:"onupdateintegrity",children:[]},{value:"orphanRemoval",id:"orphanremoval",children:[]},{value:"owner",id:"owner",children:[]},{value:"persist",id:"persist",children:[]},{value:"precision",id:"precision",children:[]},{value:"primary",id:"primary",children:[]},{value:"referenceColumnName",id:"referencecolumnname",children:[]},{value:"scale",id:"scale",children:[]},{value:"serializedName",id:"serializedname",children:[]},{value:"serializedPrimaryKey",id:"serializedprimarykey",children:[]},{value:"serializer",id:"serializer",children:[]},{value:"setter",id:"setter",children:[]},{value:"strategy",id:"strategy",children:[]},{value:"type",id:"type",children:[]},{value:"unique",id:"unique",children:[]},{value:"unsigned",id:"unsigned",children:[]},{value:"version",id:"version",children:[]},{value:"wrappedReference",id:"wrappedreference",children:[]}]}],k={toc:d};function m(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},k,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".OneToOneOptions"),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"O"))))),(0,i.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Partial"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#onetomanyoptions"},(0,i.kt)("inlineCode",{parentName:"a"},"OneToManyOptions")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"O"),">",", ",(0,i.kt)("inlineCode",{parentName:"p"},'"orderBy"'),">",">"),(0,i.kt)("p",{parentName:"li"},"\u21b3 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"OneToOneOptions"))))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"autoincrement"},"autoincrement"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"autoincrement"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,i.kt)("p",null,"Partial.autoincrement"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L47"},"packages/core/src/decorators/Property.ts:47")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"cascade"},"cascade"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"cascade"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/enums/core.cascade"},(0,i.kt)("inlineCode",{parentName:"a"},"Cascade")),"[]"),(0,i.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,i.kt)("p",null,"Partial.cascade"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L72"},"packages/core/src/decorators/Property.ts:72")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"columntype"},"columnType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"columnType"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,i.kt)("p",null,"Partial.columnType"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L42"},"packages/core/src/decorators/Property.ts:42")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"comment"},"comment"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"comment"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,i.kt)("p",null,"Partial.comment"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L67"},"packages/core/src/decorators/Property.ts:67")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"customtype"},"customType"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"customType"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/classes/core.type"},(0,i.kt)("inlineCode",{parentName:"a"},"Type")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,i.kt)("p",null,"Partial.customType"),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L41"},"packages/core/src/decorators/Property.ts:41")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"default"},"default"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"default"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[] ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,i.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,i.kt)("p",null,"Partial.default"),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L50"},"packages/core/src/decorators/Property.ts:50")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"defaultraw"},"defaultRaw"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"defaultRaw"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,i.kt)("p",null,"Partial.defaultRaw"),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L51"},"packages/core/src/decorators/Property.ts:51")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"eager"},"eager"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"eager"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,i.kt)("p",null,"Partial.eager"),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L73"},"packages/core/src/decorators/Property.ts:73")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"entity"},"entity"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"entity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," & () => ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entityname"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityName")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"," & () => ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entityname"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityName")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"," & ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," & () => ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entityname"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityName")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"," & () => ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/modules/core#entityname"},(0,i.kt)("inlineCode",{parentName:"a"},"EntityName")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">"),(0,i.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,i.kt)("p",null,"Partial.entity"),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L71"},"packages/core/src/decorators/Property.ts:71")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fieldname"},"fieldName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"fieldName"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,i.kt)("p",null,"Partial.fieldName"),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L39"},"packages/core/src/decorators/Property.ts:39")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"fieldnames"},"fieldNames"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"fieldNames"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,i.kt)("p",null,"Partial.fieldNames"),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L40"},"packages/core/src/decorators/Property.ts:40")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"formula"},"formula"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"formula"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," (",(0,i.kt)("inlineCode",{parentName:"p"},"alias"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-11"},"Inherited from"),(0,i.kt)("p",null,"Partial.formula"),(0,i.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L52"},"packages/core/src/decorators/Property.ts:52")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getter"},"getter"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"getter"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-12"},"Inherited from"),(0,i.kt)("p",null,"Partial.getter"),(0,i.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L63"},"packages/core/src/decorators/Property.ts:63")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hidden"},"hidden"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"hidden"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-13"},"Inherited from"),(0,i.kt)("p",null,"Partial.hidden"),(0,i.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L56"},"packages/core/src/decorators/Property.ts:56")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"index"},"index"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"index"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-14"},"Inherited from"),(0,i.kt)("p",null,"Partial.index"),(0,i.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L58"},"packages/core/src/decorators/Property.ts:58")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inversejoincolumn"},"inverseJoinColumn"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"inverseJoinColumn"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-15"},"Inherited from"),(0,i.kt)("p",null,"Partial.inverseJoinColumn"),(0,i.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/OneToMany.ts#L46"},"packages/core/src/decorators/OneToMany.ts:46")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inversejoincolumns"},"inverseJoinColumns"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"inverseJoinColumns"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("h4",{id:"inherited-from-16"},"Inherited from"),(0,i.kt)("p",null,"Partial.inverseJoinColumns"),(0,i.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/OneToMany.ts#L47"},"packages/core/src/decorators/OneToMany.ts:47")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"inversedby"},"inversedBy"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"inversedBy"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," & keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," ","|"," (",(0,i.kt)("inlineCode",{parentName:"p"},"e"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/OneToOne.ts#L15"},"packages/core/src/decorators/OneToOne.ts:15")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"joincolumn"},"joinColumn"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"joinColumn"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-17"},"Inherited from"),(0,i.kt)("p",null,"Partial.joinColumn"),(0,i.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/OneToMany.ts#L44"},"packages/core/src/decorators/OneToMany.ts:44")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"joincolumns"},"joinColumns"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"joinColumns"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("h4",{id:"inherited-from-18"},"Inherited from"),(0,i.kt)("p",null,"Partial.joinColumns"),(0,i.kt)("h4",{id:"defined-in-19"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/OneToMany.ts#L45"},"packages/core/src/decorators/OneToMany.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"lazy"},"lazy"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"lazy"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-19"},"Inherited from"),(0,i.kt)("p",null,"Partial.lazy"),(0,i.kt)("h4",{id:"defined-in-20"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L60"},"packages/core/src/decorators/Property.ts:60")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"length"},"length"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"length"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-20"},"Inherited from"),(0,i.kt)("p",null,"Partial.length"),(0,i.kt)("h4",{id:"defined-in-21"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L44"},"packages/core/src/decorators/Property.ts:44")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"maptopk"},"mapToPk"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"mapToPk"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-22"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/OneToOne.ts#L18"},"packages/core/src/decorators/OneToOne.ts:18")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mappedby"},"mappedBy"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"mappedBy"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," & keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"T")," ","|"," (",(0,i.kt)("inlineCode",{parentName:"p"},"e"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from-21"},"Inherited from"),(0,i.kt)("p",null,"Partial.mappedBy"),(0,i.kt)("h4",{id:"defined-in-23"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/OneToMany.ts#L49"},"packages/core/src/decorators/OneToMany.ts:49")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"name"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-22"},"Inherited from"),(0,i.kt)("p",null,"Partial.name"),(0,i.kt)("h4",{id:"defined-in-24"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L38"},"packages/core/src/decorators/Property.ts:38")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nullable"},"nullable"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"nullable"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-23"},"Inherited from"),(0,i.kt)("p",null,"Partial.nullable"),(0,i.kt)("h4",{id:"defined-in-25"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L53"},"packages/core/src/decorators/Property.ts:53")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"oncreate"},"onCreate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"onCreate"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"O"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h5",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"O"))))),(0,i.kt)("h5",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from-24"},"Inherited from"),(0,i.kt)("p",null,"Partial.onCreate"),(0,i.kt)("h4",{id:"defined-in-26"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L48"},"packages/core/src/decorators/Property.ts:48")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"ondelete"},"onDelete"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"onDelete"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-27"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/OneToOne.ts#L19"},"packages/core/src/decorators/OneToOne.ts:19")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onupdate"},"onUpdate"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"onUpdate"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"O"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"entity"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h5",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entity")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"O"))))),(0,i.kt)("h5",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from-25"},"Inherited from"),(0,i.kt)("p",null,"Partial.onUpdate"),(0,i.kt)("h4",{id:"defined-in-28"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L49"},"packages/core/src/decorators/Property.ts:49")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onupdateintegrity"},"onUpdateIntegrity"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"onUpdateIntegrity"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-29"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/OneToOne.ts#L20"},"packages/core/src/decorators/OneToOne.ts:20")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"orphanremoval"},"orphanRemoval"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"orphanRemoval"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-26"},"Inherited from"),(0,i.kt)("p",null,"Partial.orphanRemoval"),(0,i.kt)("h4",{id:"defined-in-30"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/OneToMany.ts#L42"},"packages/core/src/decorators/OneToMany.ts:42")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"owner"},"owner"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"owner"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-31"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/OneToOne.ts#L14"},"packages/core/src/decorators/OneToOne.ts:14")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"persist"},"persist"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"persist"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-27"},"Inherited from"),(0,i.kt)("p",null,"Partial.persist"),(0,i.kt)("h4",{id:"defined-in-32"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L55"},"packages/core/src/decorators/Property.ts:55")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"precision"},"precision"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"precision"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-28"},"Inherited from"),(0,i.kt)("p",null,"Partial.precision"),(0,i.kt)("h4",{id:"defined-in-33"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L45"},"packages/core/src/decorators/Property.ts:45")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"primary"},"primary"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"primary"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"overrides"},"Overrides"),(0,i.kt)("p",null,"Partial.primary"),(0,i.kt)("h4",{id:"defined-in-34"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/OneToOne.ts#L17"},"packages/core/src/decorators/OneToOne.ts:17")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"referencecolumnname"},"referenceColumnName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"referenceColumnName"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-29"},"Inherited from"),(0,i.kt)("p",null,"Partial.referenceColumnName"),(0,i.kt)("h4",{id:"defined-in-35"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/OneToMany.ts#L48"},"packages/core/src/decorators/OneToMany.ts:48")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"scale"},"scale"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"scale"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("h4",{id:"inherited-from-30"},"Inherited from"),(0,i.kt)("p",null,"Partial.scale"),(0,i.kt)("h4",{id:"defined-in-36"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L46"},"packages/core/src/decorators/Property.ts:46")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"serializedname"},"serializedName"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"serializedName"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"inherited-from-31"},"Inherited from"),(0,i.kt)("p",null,"Partial.serializedName"),(0,i.kt)("h4",{id:"defined-in-37"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L66"},"packages/core/src/decorators/Property.ts:66")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"serializedprimarykey"},"serializedPrimaryKey"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"serializedPrimaryKey"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-32"},"Inherited from"),(0,i.kt)("p",null,"Partial.serializedPrimaryKey"),(0,i.kt)("h4",{id:"defined-in-38"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L64"},"packages/core/src/decorators/Property.ts:64")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"serializer"},"serializer"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"serializer"),": (",(0,i.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"any"),") => ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,i.kt)("p",null,"\u25b8 (",(0,i.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h5",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))),(0,i.kt)("h5",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("h4",{id:"inherited-from-33"},"Inherited from"),(0,i.kt)("p",null,"Partial.serializer"),(0,i.kt)("h4",{id:"defined-in-39"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L65"},"packages/core/src/decorators/Property.ts:65")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"setter"},"setter"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"setter"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-34"},"Inherited from"),(0,i.kt)("p",null,"Partial.setter"),(0,i.kt)("h4",{id:"defined-in-40"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L62"},"packages/core/src/decorators/Property.ts:62")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"strategy"},"strategy"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"strategy"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api/enums/core.loadstrategy"},(0,i.kt)("inlineCode",{parentName:"a"},"LoadStrategy"))),(0,i.kt)("h4",{id:"inherited-from-35"},"Inherited from"),(0,i.kt)("p",null,"Partial.strategy"),(0,i.kt)("h4",{id:"defined-in-41"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L74"},"packages/core/src/decorators/Property.ts:74")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"type"},"type"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"type"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"unknown")),(0,i.kt)("h4",{id:"inherited-from-36"},"Inherited from"),(0,i.kt)("p",null,"Partial.type"),(0,i.kt)("h4",{id:"defined-in-42"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L43"},"packages/core/src/decorators/Property.ts:43")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unique"},"unique"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"unique"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-37"},"Inherited from"),(0,i.kt)("p",null,"Partial.unique"),(0,i.kt)("h4",{id:"defined-in-43"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L59"},"packages/core/src/decorators/Property.ts:59")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unsigned"},"unsigned"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"unsigned"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-38"},"Inherited from"),(0,i.kt)("p",null,"Partial.unsigned"),(0,i.kt)("h4",{id:"defined-in-44"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L54"},"packages/core/src/decorators/Property.ts:54")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"version"},"version"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"version"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"inherited-from-39"},"Inherited from"),(0,i.kt)("p",null,"Partial.version"),(0,i.kt)("h4",{id:"defined-in-45"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/Property.ts#L57"},"packages/core/src/decorators/Property.ts:57")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"wrappedreference"},"wrappedReference"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"wrappedReference"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")),(0,i.kt)("h4",{id:"defined-in-46"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/d669434/packages/core/src/decorators/OneToOne.ts#L16"},"packages/core/src/decorators/OneToOne.ts:16")))}m.isMDXComponent=!0}}]);