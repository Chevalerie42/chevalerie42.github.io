"use strict";(self.webpackChunkcyber_xplorer=self.webpackChunkcyber_xplorer||[]).push([[213],{541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"Dev/index","title":"Les Tutos Dev","description":"Intros aux Tutos Dev de Cheche ! <3","source":"@site/docs/03 - Dev/index.mdx","sourceDirName":"03 - Dev","slug":"/Dev/Intro_Tuto_Dev","permalink":"/docs/Dev/Intro_Tuto_Dev","draft":false,"unlisted":false,"editUrl":"https://github.com/chevalerie42/chevalerie42.github.io/edit/main/docs/03 - Dev/index.mdx","tags":[{"inline":true,"label":"Introduction","permalink":"/docs/tags/introduction"},{"inline":true,"label":"Dev","permalink":"/docs/tags/dev"}],"version":"current","frontMatter":{"slug":"Intro_Tuto_Dev","tags":["Introduction","Dev"],"toc_min_heading_level":2,"toc_max_heading_level":4,"title":"Les Tutos Dev","keywords":["Intro","Tuto","Dev","Developpeur","developpement","development","developer","Chevalerie"],"description":"Intros aux Tutos Dev de Cheche ! <3","image":"https://chevalerie42.github.io/img/Page_Accueil/Photo_Dev.jpg","sidebar_label":"Les Tutos Dev","pagination_label":"Les Tutos Dev","pagination_next":null,"pagination_prev":null},"sidebar":"tutorialSidebar"}');var o=n(4848),s=n(8453),i=n(3514);const l={slug:"Intro_Tuto_Dev",tags:["Introduction","Dev"],toc_min_heading_level:2,toc_max_heading_level:4,title:"Les Tutos Dev",keywords:["Intro","Tuto","Dev","Developpeur","developpement","development","developer","Chevalerie"],description:"Intros aux Tutos Dev de Cheche ! <3",image:"https://chevalerie42.github.io/img/Page_Accueil/Photo_Dev.jpg",sidebar_label:"Les Tutos Dev",pagination_label:"Les Tutos Dev",pagination_next:null,pagination_prev:null},c=void 0,a={},u=[{value:"Qu&#39;est-ce que le developpement ?",id:"quest-ce-que-le-developpement-",level:2},{value:"Que verrons-nous dans cette rubrique ?",id:"que-verrons-nous-dans-cette-rubrique-",level:2}];function d(e){const t={code:"code",em:"em",h2:"h2",hr:"hr",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"quest-ce-que-le-developpement-",children:"Qu'est-ce que le developpement ?"}),"\n",(0,o.jsxs)(t.p,{children:["Il s'agit de l'action de cr\xe9er des programmes, des applications, des sites web ou des automatisations en utilisant diff\xe9rents langages de programmation. Pour se faire, le d\xe9veloppeur \xe9crit des lignes de code dans un fichier texte, et ainsi cr\xe9e une application fonctionnelle ... ou presque ",":p"]}),"\n",(0,o.jsx)(t.h2,{id:"que-verrons-nous-dans-cette-rubrique-",children:"Que verrons-nous dans cette rubrique ?"}),"\n",(0,o.jsx)(t.p,{children:"Comment cr\xe9er un script (ou un logiciel peut \xeatre ...) de A \xe0 Z. Nous apprendrons \xe0 coder avec diff\xe9rents langages tels que PowerShell, Bash, Python, et bien d'autres !"}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.em,{children:(0,o.jsx)(t.code,{children:"Voici la liste des tutos disponibles :"})})})}),"\n","\n",(0,o.jsx)(i.A,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},3514:(e,t,n)=>{n.d(t,{A:()=>x});n(6540);var r=n(4164),o=n(6972),s=n(8774),i=n(5846),l=n(6654),c=n(1312),a=n(1107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(4848);function p(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:o,description:s}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function h(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function v(e){let{item:t}=e;const n=(0,l.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(v,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,o.$S)();return(0,d.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(f,{...e});const s=(0,o.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},5846:(e,t,n)=>{n.d(t,{W:()=>a});var r=n(6540),o=n(4586);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function a(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),s=n.pluralForms.indexOf(o);return r[Math.min(s,r.length-1)]}(n,t,e)}}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>l});var r=n(6540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);