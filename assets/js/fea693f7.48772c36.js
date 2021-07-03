(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[87284],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),y=i,g=d["".concat(p,".").concat(y)]||d[y]||l[y]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60774:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return l}});var r=n(74034),i=n(79973),o=(n(67294),n(3905)),a={title:"Using native BigInt PKs (MySQL and PostgreSQL)"},s=void 0,p={unversionedId:"using-bigint-pks",id:"version-4.2/using-bigint-pks",isDocsHomePage:!1,title:"Using native BigInt PKs (MySQL and PostgreSQL)",description:"You can use BigIntType to support bigints. By default it will represent the value as",source:"@site/versioned_docs/version-4.2/using-bigint-pks.md",sourceDirName:".",slug:"/using-bigint-pks",permalink:"/docs/4.2/using-bigint-pks",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/using-bigint-pks.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1625304166,formattedLastUpdatedAt:"7/3/2021",frontMatter:{title:"Using native BigInt PKs (MySQL and PostgreSQL)"},sidebar:"version-4.2/docs",previous:{title:"Using Multiple Schemas",permalink:"/docs/4.2/multiple-schemas"},next:{title:"Using AsyncLocalStorage",permalink:"/docs/4.2/async-local-storage"}},c=[],u={toc:c};function l(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"BigIntType")," to support ",(0,o.kt)("inlineCode",{parentName:"p"},"bigint"),"s. By default it will represent the value as\na ",(0,o.kt)("inlineCode",{parentName:"p"},"string"),".  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @PrimaryKey({ type: BigIntType })\n  id: string;\n\n}\n")),(0,o.kt)("p",null,"If you want to use native ",(0,o.kt)("inlineCode",{parentName:"p"},"bigint")," type, you will need to create new type based on the\n",(0,o.kt)("inlineCode",{parentName:"p"},"BigIntType"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export class NativeBigIntType extends BigIntType {\n\n  convertToJSValue(value: any): any {\n    if (!value) {\n      return value;\n    }\n\n    return BigInt(value);\n  }\n\n}\n\n@Entity()\nexport class Book {\n\n  @PrimaryKey({ type: NativeBigIntType })\n  id: bigint;\n\n}\n")))}l.isMDXComponent=!0}}]);