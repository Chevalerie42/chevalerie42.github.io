"use strict";(self.webpackChunkles_tutos_de_che_che=self.webpackChunkles_tutos_de_che_che||[]).push([[627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7294),a=n(6010),i=n(3438),o=n(9960),c=n(3919),l=n(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",s.cardContainer)},n)}function d(e){let{href:t,icon:n,title:i,description:o}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",s.cardTitle),title:i},n," ",i),o&&r.createElement("p",{className:(0,a.Z)("text--truncate",s.cardDescription),title:o},o))}function p(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:n,title:t.label,description:a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(m,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return r.createElement(g,e);const o=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},5665:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),i=n(2991);const o={slug:"Intro_OSI",tags:["Introduction","R\xe9seau","OSI","TCP/IP"],toc_min_heading_level:2,toc_max_heading_level:4,title:"Le Mod\xe8le OSI",keywords:["Intro","Tuto","Reseau","TCP/IP","LAN","WAN","Chevalerie","OSI","DOD"],description:"Introduction au mod\xe8le OSI",image:"https://chevalerie42.github.io/img/Page_Accueil/Photo_R\xe9seau.jpg",sidebar_label:"Le Mod\xe8le OSI",pagination_label:"Le Mod\xe8le OSI",pagination_next:"R\xe9seau/OSI/Couche Physique",pagination_prev:"R\xe9seau/index"},c=void 0,l={unversionedId:"R\xe9seau/OSI/index",id:"R\xe9seau/OSI/index",title:"Le Mod\xe8le OSI",description:"Introduction au mod\xe8le OSI",source:"@site/docs/01 - R\xe9seau/OSI/index.mdx",sourceDirName:"01 - R\xe9seau/OSI",slug:"/R\xe9seau/OSI/Intro_OSI",permalink:"/docs/R\xe9seau/OSI/Intro_OSI",draft:!1,editUrl:"https://github.com/chevalerie42/chevalerie42.github.io/edit/main/docs/01 - R\xe9seau/OSI/index.mdx",tags:[{label:"Introduction",permalink:"/docs/tags/introduction"},{label:"R\xe9seau",permalink:"/docs/tags/reseau"},{label:"OSI",permalink:"/docs/tags/osi"},{label:"TCP/IP",permalink:"/docs/tags/tcp-ip"}],version:"current",lastUpdatedBy:"Chevalerie42",lastUpdatedAt:1674669834,formattedLastUpdatedAt:"25 janv. 2023",frontMatter:{slug:"Intro_OSI",tags:["Introduction","R\xe9seau","OSI","TCP/IP"],toc_min_heading_level:2,toc_max_heading_level:4,title:"Le Mod\xe8le OSI",keywords:["Intro","Tuto","Reseau","TCP/IP","LAN","WAN","Chevalerie","OSI","DOD"],description:"Introduction au mod\xe8le OSI",image:"https://chevalerie42.github.io/img/Page_Accueil/Photo_R\xe9seau.jpg",sidebar_label:"Le Mod\xe8le OSI",pagination_label:"Le Mod\xe8le OSI",pagination_next:"R\xe9seau/OSI/Couche Physique",pagination_prev:"R\xe9seau/index"},sidebar:"tutorialSidebar",previous:{title:"Les Tutos R\xe9seau",permalink:"/docs/R\xe9seau/Intro_Reseau"},next:{title:"Couche 1 - Physique",permalink:"/docs/R\xe9seau/OSI/OSI_Couche_Physique"}},s={},u=[{value:"En cours de r\xe9daction!!!!",id:"en-cours-de-r\xe9daction",level:2}],d={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"en-cours-de-r\xe9daction"},"En cours de r\xe9daction!!!!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},(0,a.kt)("inlineCode",{parentName:"em"},"Voici la liste des Write-Up disponibles :")))),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);