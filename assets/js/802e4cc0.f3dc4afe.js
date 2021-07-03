(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1741],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return y}});var o=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),y=i,h=u["".concat(l,".").concat(y)]||u[y]||d[y]||r;return t?o.createElement(h,a(a({ref:n},p),{},{components:t})):o.createElement(h,a({ref:n},p))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1622:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var o=t(74034),i=t(79973),r=(t(67294),t(3905)),a={title:"Modeling Entity Relationships",sidebar_label:"Modeling Entity Relationships"},s=void 0,l={unversionedId:"relationships",id:"version-4.2/relationships",isDocsHomePage:!1,title:"Modeling Entity Relationships",description:"There are 4 types of entity relationships in MikroORM:",source:"@site/versioned_docs/version-4.2/relationships.md",sourceDirName:".",slug:"/relationships",permalink:"/docs/4.2/relationships",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.2/relationships.md",version:"4.2",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1625304166,formattedLastUpdatedAt:"7/3/2021",frontMatter:{title:"Modeling Entity Relationships",sidebar_label:"Modeling Entity Relationships"},sidebar:"version-4.2/docs",previous:{title:"Defining Entities",permalink:"/docs/4.2/defining-entities"},next:{title:"Entity Manager",permalink:"/docs/4.2/entity-manager"}},c=[{value:"ManyToOne",id:"manytoone",children:[]},{value:"OneToMany",id:"onetomany",children:[]},{value:"OneToOne",id:"onetoone",children:[{value:"Owning Side",id:"owning-side",children:[]},{value:"Inverse Side",id:"inverse-side",children:[]}]},{value:"ManyToMany",id:"manytomany",children:[{value:"Owning Side",id:"owning-side-1",children:[]},{value:"Inverse Side",id:"inverse-side-1",children:[]}]}],p={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"There are 4 types of entity relationships in MikroORM: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ManyToOne"),(0,r.kt)("li",{parentName:"ul"},"OneToMany"),(0,r.kt)("li",{parentName:"ul"},"OneToOne"),(0,r.kt)("li",{parentName:"ul"},"ManyToMany")),(0,r.kt)("p",null,"Relations can be unidirectional and bidirectional. Unidirectional are defined only on one\nside (the owning side). Bidirectional are defined on both sides, while one is owning side\n(where references are store), marked by ",(0,r.kt)("inlineCode",{parentName:"p"},"inversedBy")," attribute pointing to the inverse side.\nOn the inversed side we define it with ",(0,r.kt)("inlineCode",{parentName:"p"},"mappedBy")," attribute pointing back to the owner:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When modeling bidirectional relationship, you can also omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"inversedBy")," attribute,\ndefining ",(0,r.kt)("inlineCode",{parentName:"p"},"mappedBy")," on the inverse side is enough as it will be auto-wired. ")),(0,r.kt)("h2",{id:"manytoone"},"ManyToOne"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Many instances of the current Entity refer to One instance of the referred Entity.")),(0,r.kt)("p",null,"There are multiple ways how to define the relationship, all of following is equivalent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  @ManyToOne() // plain decorator is enough, type will be sniffer via reflection!\n  author1!: Author;\n\n  @ManyToOne(() => Author) // you can specify type manually as a callback\n  author2!: Author;\n\n  @ManyToOne('Author') // or as a string\n  author3!: Author;\n\n  @ManyToOne({ entity: () => Author }) // or use options object\n  author4!: Author;\n\n}\n")),(0,r.kt)("p",null,"You can also specify how operations on given entity should ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.2/cascading"},"cascade"),"\nto the referred entity."),(0,r.kt)("h2",{id:"onetomany"},"OneToMany"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"One instance of the current Entity has Many instances (references) to the referred Entity.")),(0,r.kt)("p",null,"Again, all of following is equivalent:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Author {\n\n  @OneToMany(() => Book, book => book.author)\n  books1 = new Collection<Book>(this);\n\n  @OneToMany('Book', 'author')\n  books2 = new Collection<Book>(this);\n\n  @OneToMany({ mappedBy: book => book.author }) // referenced entity type can be sniffer too\n  books3 = new Collection<Book>(this);\n\n  @OneToMany({ entity: () => Book, mappedBy: 'author', orphanRemoval: true })\n  books4 = new Collection<Book>(this);\n\n}\n")),(0,r.kt)("p",null,"As you can see, OneToMany is the inverse side of ManyToOne (which is the owning side).\nMore about how collections work can be found on ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.2/collections"},"collections page"),". "),(0,r.kt)("p",null,"You can also specify how operations on given entity should ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.2/cascading"},"cascade")," to the referred\nentities. There is also more aggressive remove mode called ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.2/cascading#orphan-removal"},"Orphan Removal"),"\n(",(0,r.kt)("inlineCode",{parentName:"p"},"books4")," example)."),(0,r.kt)("h2",{id:"onetoone"},"OneToOne"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"One instance of the current Entity refers to One instance of the referred Entity.")),(0,r.kt)("p",null,"This is a variant of ManyToOne, where there is always just one entity on both sides. This means\nthat the foreign key column is also unique."),(0,r.kt)("h3",{id:"owning-side"},"Owning Side"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  // when none of `owner/inverseBy/mappedBy` is provided, it will be considered owning side\n  @OneToOne()\n  bestFriend1!: User;\n\n  // side with `inversedBy` is the owning one, to define inverse side use `mappedBy`\n  @OneToOne({ inversedBy: 'bestFriend1', orphanRemoval: true })\n  bestFriend2!: User;\n\n  // when defining it like this, you need to specifically mark the owning side with `owner: true`\n  @OneToOne(() => User, user => user.bestFriend2, { owner: true, orphanRemoval: true })\n  bestFriend3!: User;\n\n}\n")),(0,r.kt)("h3",{id:"inverse-side"},"Inverse Side"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class User {\n\n  @OneToOne({ mappedBy: 'bestFriend1' })\n  bestFriend1!: User;\n\n  @OneToOne(() => User, user => user.bestFriend2)\n  bestFriend2!: User;\n\n}\n")),(0,r.kt)("p",null,"As you can see, relationships can be also self-referencing (all of them. OneToOne also supports\n",(0,r.kt)("a",{parentName:"p",href:"/docs/4.2/cascading#orphan-removal"},"Orphan Removal"),". "),(0,r.kt)("h2",{id:"manytomany"},"ManyToMany"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Many instances of the current Entity refers to Many instances of the referred Entity.")),(0,r.kt)("p",null,"Here are examples of how you can define ManyToMany relationship:"),(0,r.kt)("h3",{id:"owning-side-1"},"Owning Side"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class Book {\n\n  // when none of `owner/inverseBy/mappedBy` is provided, it will be considered owning side\n  @ManyToMany()\n  tags1 = new Collection<BookTag>(this);\n\n  @ManyToMany(() => BookTag, 'books', { owner: true })\n  tags2 = new Collection<BookTag>(this);\n\n  @ManyToMany(() => BookTag, 'books', { owner: true })\n  tags3 = new Collection<BookTag>(this);\n\n  @ManyToMany(() => BookTag, 'books', { owner: true })\n  tags4 = new Collection<BookTag>(this);\n\n  // to define uni-directional many to many, simply provide only \n  @ManyToMany(() => Author)\n  friends: Collection<Author> = new Collection<Author>(this);\n\n}\n")),(0,r.kt)("h3",{id:"inverse-side-1"},"Inverse Side"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"@Entity()\nexport class BookTag {\n\n  // inverse side has to point to the owning side via `mappedBy` attribute/parameter\n  @ManyToMany(() => Book, book => book.tags)\n  books = new Collection<Book>(this);\n\n}\n")),(0,r.kt)("p",null,"Again, more information about how collections work can be found on ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.2/collections"},"collections page"),"."))}d.isMDXComponent=!0}}]);