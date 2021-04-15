(window.webpackJsonp=window.webpackJsonp||[]).push([[642],{1110:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),d=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=d(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=d(a),s=r,O=m["".concat(b,".").concat(s)]||m[s]||l[s]||c;return a?n.a.createElement(O,p(p({ref:t},o),{},{components:a})):n.a.createElement(O,p({ref:t},o))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,b[1]=p;for(var o=2;o<c;o++)b[o]=a[o];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},715:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return p})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(8),c=(a(0),a(1110)),b={id:"core.javascriptmetadataprovider",title:"Class: JavaScriptMetadataProvider",sidebar_label:"JavaScriptMetadataProvider",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/classes/core.javascriptmetadataprovider",id:"api/classes/core.javascriptmetadataprovider",isDocsHomePage:!1,title:"Class: JavaScriptMetadataProvider",description:"Class: JavaScriptMetadataProvider",source:"@site/docs/api/classes/core.javascriptmetadataprovider.md",slug:"/api/classes/core.javascriptmetadataprovider",permalink:"/docs/next/api/classes/core.javascriptmetadataprovider",editUrl:null,version:"current",sidebar_label:"JavaScriptMetadataProvider",sidebar:"API",previous:{title:"Class: InvalidFieldNameException",permalink:"/docs/next/api/classes/core.invalidfieldnameexception"},next:{title:"Class: JsonType",permalink:"/docs/next/api/classes/core.jsontype"}},i=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties",children:[{value:"config",id:"config",children:[]}]},{value:"Methods",id:"methods",children:[{value:"getSchema",id:"getschema",children:[]},{value:"initProperties",id:"initproperties",children:[]},{value:"initProperty",id:"initproperty",children:[]},{value:"loadEntityMetadata",id:"loadentitymetadata",children:[]},{value:"loadFromCache",id:"loadfromcache",children:[]},{value:"useCache",id:"usecache",children:[]}]}],o={toc:i};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"class-javascriptmetadataprovider"},"Class: JavaScriptMetadataProvider"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/next/api/modules/core"},"core"),".JavaScriptMetadataProvider"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"deprecated"))," use EntitySchema instead"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadataprovider"},Object(c.b)("em",{parentName:"a"},"MetadataProvider"))),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("strong",{parentName:"p"},"JavaScriptMetadataProvider")))),Object(c.b)("h2",{id:"constructors"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new JavaScriptMetadataProvider"),"(",Object(c.b)("inlineCode",{parentName:"p"},"config"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.iconfiguration"},Object(c.b)("em",{parentName:"a"},"IConfiguration")),"): ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.javascriptmetadataprovider"},Object(c.b)("em",{parentName:"a"},"JavaScriptMetadataProvider"))),Object(c.b)("h4",{id:"parameters"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"config")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.iconfiguration"},Object(c.b)("em",{parentName:"a"},"IConfiguration")))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.javascriptmetadataprovider"},Object(c.b)("em",{parentName:"a"},"JavaScriptMetadataProvider"))),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadataprovider"},"MetadataProvider")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fd015c/packages/core/src/metadata/MetadataProvider.ts#L9"},"packages/core/src/metadata/MetadataProvider.ts:9")),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"config"},"config"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected")," ",Object(c.b)("inlineCode",{parentName:"p"},"Readonly")," ",Object(c.b)("strong",{parentName:"p"},"config"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.iconfiguration"},Object(c.b)("em",{parentName:"a"},"IConfiguration"))),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadataprovider"},"MetadataProvider"),".",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadataprovider#config"},"config")),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"getschema"},"getSchema"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Private"),Object(c.b)("strong",{parentName:"p"},"getSchema"),"(",Object(c.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymetadata"},Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<any",">","): ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("h4",{id:"parameters-1"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"meta")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymetadata"},Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<any",">")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"any")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fd015c/packages/core/src/metadata/JavaScriptMetadataProvider.ts#L55"},"packages/core/src/metadata/JavaScriptMetadataProvider.ts:55")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"initproperties"},"initProperties"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Protected"),Object(c.b)("strong",{parentName:"p"},"initProperties"),"(",Object(c.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymetadata"},Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<any",">",", ",Object(c.b)("inlineCode",{parentName:"p"},"fallback"),": (",Object(c.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.entityproperty"},Object(c.b)("em",{parentName:"a"},"EntityProperty")),"<any",">",") => ",Object(c.b)("em",{parentName:"p"},"void")," ","|"," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">","): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("h4",{id:"parameters-2"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"meta")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymetadata"},Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<any",">")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"fallback")),Object(c.b)("td",{parentName:"tr",align:"left"},"(",Object(c.b)("inlineCode",{parentName:"td"},"prop"),": ",Object(c.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.entityproperty"},Object(c.b)("em",{parentName:"a"},"EntityProperty")),"<any",">",") => ",Object(c.b)("em",{parentName:"td"},"void")," ","|"," ",Object(c.b)("em",{parentName:"td"},"Promise"),"<void",">")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadataprovider"},"MetadataProvider")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fd015c/packages/core/src/metadata/MetadataProvider.ts#L23"},"packages/core/src/metadata/MetadataProvider.ts:23")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"initproperty"},"initProperty"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("inlineCode",{parentName:"p"},"Private"),Object(c.b)("strong",{parentName:"p"},"initProperty"),"(",Object(c.b)("inlineCode",{parentName:"p"},"prop"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/core.entityproperty"},Object(c.b)("em",{parentName:"a"},"EntityProperty")),"<any",">",", ",Object(c.b)("inlineCode",{parentName:"p"},"propName"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("h4",{id:"parameters-3"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"prop")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/next/api/interfaces/core.entityproperty"},Object(c.b)("em",{parentName:"a"},"EntityProperty")),"<any",">")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"propName")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fd015c/packages/core/src/metadata/JavaScriptMetadataProvider.ts#L43"},"packages/core/src/metadata/JavaScriptMetadataProvider.ts:43")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"loadentitymetadata"},"loadEntityMetadata"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"loadEntityMetadata"),"(",Object(c.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymetadata"},Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<any",">",", ",Object(c.b)("inlineCode",{parentName:"p"},"name"),": ",Object(c.b)("em",{parentName:"p"},"string"),"): ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("h4",{id:"parameters-4"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"meta")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymetadata"},Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<any",">")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"name")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("em",{parentName:"td"},"string"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise"),"<void",">"),Object(c.b)("p",null,"Overrides: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadataprovider"},"MetadataProvider")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fd015c/packages/core/src/metadata/JavaScriptMetadataProvider.ts#L11"},"packages/core/src/metadata/JavaScriptMetadataProvider.ts:11")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"loadfromcache"},"loadFromCache"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"loadFromCache"),"(",Object(c.b)("inlineCode",{parentName:"p"},"meta"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymetadata"},Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<any",">",", ",Object(c.b)("inlineCode",{parentName:"p"},"cache"),": ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.entitymetadata"},Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<any",">","): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Re-hydrates missing attributes like ",Object(c.b)("inlineCode",{parentName:"p"},"onUpdate")," (functions are lost when caching to JSON)"),Object(c.b)("h4",{id:"parameters-5"},"Parameters:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Name"),Object(c.b)("th",{parentName:"tr",align:"left"},"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"meta")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymetadata"},Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<any",">")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("inlineCode",{parentName:"td"},"cache")),Object(c.b)("td",{parentName:"tr",align:"left"},Object(c.b)("a",{parentName:"td",href:"/docs/next/api/classes/core.entitymetadata"},Object(c.b)("em",{parentName:"a"},"EntityMetadata")),"<any",">")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,"Overrides: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadataprovider"},"MetadataProvider")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fd015c/packages/core/src/metadata/JavaScriptMetadataProvider.ts#L28"},"packages/core/src/metadata/JavaScriptMetadataProvider.ts:28")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"usecache"},"useCache"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"useCache"),"(): ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"boolean")),Object(c.b)("p",null,"Inherited from: ",Object(c.b)("a",{parentName:"p",href:"/docs/next/api/classes/core.metadataprovider"},"MetadataProvider")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/2fd015c/packages/core/src/metadata/MetadataProvider.ts#L19"},"packages/core/src/metadata/MetadataProvider.ts:19")))}d.isMDXComponent=!0}}]);