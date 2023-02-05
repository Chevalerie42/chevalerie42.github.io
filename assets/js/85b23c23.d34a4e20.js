"use strict";(self.webpackChunkles_tutos_de_che_che=self.webpackChunkles_tutos_de_che_che||[]).push([[7133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>v});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,v=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(v,a(a({ref:t},u),{},{components:n})):r.createElement(v,a({ref:t},u))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(7294),o=n(6010),i=n(3438),a=n(9960),l=n(3919),c=n(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",s.cardContainer)},n)}function d(e){let{href:t,icon:n,title:i,description:a}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:i},n," ",i),a&&r.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:a},a))}function p(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,i.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:n,title:t.label,description:o?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(m,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return r.createElement(f,e);const a=(0,i.MN)(t);return r.createElement("section",{className:(0,o.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(v,{item:e})))))}},2873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(7462),o=(n(7294),n(3905)),i=n(2991);const a={slug:"Intro_Tuto_Dev",tags:["Introduction","Dev"],toc_min_heading_level:2,toc_max_heading_level:4,title:"Les Tutos Dev",keywords:["Intro","Tuto","Dev","Developpeur","developpement","development","developer","Chevalerie"],description:"Intros aux Tutos Dev de Cheche ! <3",image:"https://chevalerie42.github.io/img/Page_Accueil/Photo_Dev.jpg",sidebar_label:"Les Tutos Dev",pagination_label:"Les Tutos Dev",pagination_next:null,pagination_prev:null},l=void 0,c={unversionedId:"Dev/index",id:"Dev/index",title:"Les Tutos Dev",description:"Intros aux Tutos Dev de Cheche ! <3",source:"@site/docs/03 - Dev/index.mdx",sourceDirName:"03 - Dev",slug:"/Dev/Intro_Tuto_Dev",permalink:"/docs/Dev/Intro_Tuto_Dev",draft:!1,editUrl:"https://github.com/chevalerie42/chevalerie42.github.io/edit/main/docs/03 - Dev/index.mdx",tags:[{label:"Introduction",permalink:"/docs/tags/introduction"},{label:"Dev",permalink:"/docs/tags/dev"}],version:"current",lastUpdatedBy:"Chevalerie42",lastUpdatedAt:1674669834,formattedLastUpdatedAt:"25 janv. 2023",frontMatter:{slug:"Intro_Tuto_Dev",tags:["Introduction","Dev"],toc_min_heading_level:2,toc_max_heading_level:4,title:"Les Tutos Dev",keywords:["Intro","Tuto","Dev","Developpeur","developpement","development","developer","Chevalerie"],description:"Intros aux Tutos Dev de Cheche ! <3",image:"https://chevalerie42.github.io/img/Page_Accueil/Photo_Dev.jpg",sidebar_label:"Les Tutos Dev",pagination_label:"Les Tutos Dev",pagination_next:null,pagination_prev:null},sidebar:"tutorialSidebar"},s={},u=[{value:"Qu&#39;est-ce que le developpement ?",id:"quest-ce-que-le-developpement-",level:2},{value:"Que verrons-nous dans cette rubrique ?",id:"que-verrons-nous-dans-cette-rubrique-",level:2}],d={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"quest-ce-que-le-developpement-"},"Qu'est-ce que le developpement ?"),(0,o.kt)("p",null,"Il s'agit de l'action de cr\xe9er des programmes, des applications, des sites web ou des automatisations en utilisant diff\xe9rents langages de programmation. Pour se faire, le d\xe9veloppeur \xe9crit des lignes de code dans un fichier texte, et ainsi cr\xe9e une application fonctionnelle ... ou presque :p "),(0,o.kt)("h2",{id:"que-verrons-nous-dans-cette-rubrique-"},"Que verrons-nous dans cette rubrique ?"),(0,o.kt)("p",null,"Comment cr\xe9er un script (ou un logiciel peut \xeatre ...) de A \xe0 Z. Nous apprendrons \xe0 coder avec diff\xe9rents langages tels que PowerShell, Bash, Python, et bien d'autres !"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},(0,o.kt)("inlineCode",{parentName:"em"},"Voici la liste des tutos disponibles :")))),(0,o.kt)(i.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);