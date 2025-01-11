"use strict";(self.webpackChunkcyber_xplorer=self.webpackChunkcyber_xplorer||[]).push([[39],{6031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"R\xe9seau/OSI/index","title":"Le Mod\xe8le OSI","description":"Introduction au mod\xe8le OSI","source":"@site/docs/01 - R\xe9seau/OSI/index.mdx","sourceDirName":"01 - R\xe9seau/OSI","slug":"/R\xe9seau/OSI/Intro_OSI","permalink":"/docs/R\xe9seau/OSI/Intro_OSI","draft":false,"unlisted":false,"editUrl":"https://github.com/chevalerie42/chevalerie42.github.io/edit/main/docs/01 - R\xe9seau/OSI/index.mdx","tags":[{"inline":true,"label":"Introduction","permalink":"/docs/tags/introduction"},{"inline":true,"label":"R\xe9seau","permalink":"/docs/tags/reseau"},{"inline":true,"label":"OSI","permalink":"/docs/tags/osi"},{"inline":true,"label":"TCP/IP","permalink":"/docs/tags/tcp-ip"}],"version":"current","frontMatter":{"slug":"Intro_OSI","tags":["Introduction","R\xe9seau","OSI","TCP/IP"],"toc_min_heading_level":2,"toc_max_heading_level":4,"title":"Le Mod\xe8le OSI","keywords":["Intro","Tuto","Reseau","TCP/IP","LAN","WAN","Chevalerie","OSI","DOD"],"description":"Introduction au mod\xe8le OSI","image":"https://chevalerie42.github.io/img/Page_Accueil/Photo_R\xe9seau.jpg","sidebar_label":"Le Mod\xe8le OSI","pagination_label":"Le Mod\xe8le OSI","pagination_next":"R\xe9seau/OSI/Couche Physique","pagination_prev":"R\xe9seau/index"},"sidebar":"tutorialSidebar","previous":{"title":"Les Tutos R\xe9seau","permalink":"/docs/R\xe9seau/Intro_Reseau"},"next":{"title":"Couche 1 - Physique","permalink":"/docs/R\xe9seau/OSI/OSI_Couche_Physique"}}');var o=n(4848),i=n(8453),s=n(3514);const a={slug:"Intro_OSI",tags:["Introduction","R\xe9seau","OSI","TCP/IP"],toc_min_heading_level:2,toc_max_heading_level:4,title:"Le Mod\xe8le OSI",keywords:["Intro","Tuto","Reseau","TCP/IP","LAN","WAN","Chevalerie","OSI","DOD"],description:"Introduction au mod\xe8le OSI",image:"https://chevalerie42.github.io/img/Page_Accueil/Photo_R\xe9seau.jpg",sidebar_label:"Le Mod\xe8le OSI",pagination_label:"Le Mod\xe8le OSI",pagination_next:"R\xe9seau/OSI/Couche Physique",pagination_prev:"R\xe9seau/index"},c=void 0,l={},u=[{value:"En cours de r\xe9daction!!!!",id:"en-cours-de-r\xe9daction",level:2}];function d(e){const t={code:"code",em:"em",h2:"h2",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"en-cours-de-r\xe9daction",children:"En cours de r\xe9daction!!!!"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.em,{children:(0,o.jsx)(t.code,{children:"Voici la liste des Write-Up disponibles :"})})})}),"\n","\n",(0,o.jsx)(s.A,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>x});n(6540);var r=n(4164),o=n(6972),i=n(8774),s=n(5846),a=n(6654),c=n(1312),l=n(1107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(4848);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:o,description:i}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),i&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function g(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(g,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function I(e){let{className:t}=e;const n=(0,o.$S)();return(0,d.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(I,{...e});const i=(0,o.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},5846:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(6540),o=n(4586);const i=["zero","one","two","few","many","other"];function s(e){return i.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),i=n.pluralForms.indexOf(o);return r[Math.min(i,r.length-1)]}(n,t,e)}}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);