"use strict";(self.webpackChunkles_tutos_de_che_che=self.webpackChunkles_tutos_de_che_che||[]).push([[1928],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>p});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(t),f=a,p=m["".concat(c,".").concat(f)]||m[f]||d[f]||l;return t?r.createElement(p,o(o({ref:n},u),{},{components:t})):r.createElement(p,o({ref:n},u))}));function p(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3901:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294),a=t(3743);const l="tableOfContentsInline_prmo";function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:o}=e;return r.createElement("div",{className:l},r.createElement(a.Z,{toc:n,minHeadingLevel:t,maxHeadingLevel:o,className:"table-of-contents",linkClassName:null}))}},3743:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(7462),a=t(7294),l=t(6668);function o(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):r.push(a)})),r}function i(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return n.flatMap((e=>{const n=i({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[{...e,children:n}]:n}))}function c(e){const n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function s(e,n){let{anchorTopOffset:t}=n;const r=e.find((e=>c(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function u(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,l.L)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){const n=(0,a.useRef)(void 0),t=u();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),i=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const r=[];for(let a=n;a<=t;a+=1)r.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),c=s(i,{anchorTopOffset:t.current}),u=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===u)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,t])}function d(e){let{toc:n,className:t,linkClassName:r,isChild:l}=e;return n.length?a.createElement("ul",{className:l?void 0:t},n.map((e=>a.createElement("li",{key:e.id},a.createElement("a",{href:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),a.createElement(d,{isChild:!0,toc:e.children,className:t,linkClassName:r}))))):null}const f=a.memo(d);function p(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:c="table-of-contents__link",linkActiveClassName:s,minHeadingLevel:u,maxHeadingLevel:d,...p}=e;const v=(0,l.L)(),b=u??v.tableOfContents.minHeadingLevel,h=d??v.tableOfContents.maxHeadingLevel,g=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return(0,a.useMemo)((()=>i({toc:o(n),minHeadingLevel:t,maxHeadingLevel:r})),[n,t,r])}({toc:n,minHeadingLevel:b,maxHeadingLevel:h});return m((0,a.useMemo)((()=>{if(c&&s)return{linkClassName:c,linkActiveClassName:s,minHeadingLevel:b,maxHeadingLevel:h}}),[c,s,b,h])),a.createElement(f,(0,r.Z)({toc:g,className:t,linkClassName:c},p))}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(7294),a=t(6010);const l="tabItem_Ymn6";function o(e){let{children:n,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:t},n)}},5488:(e,n,t)=>{t.d(n,{Z:()=>f});var r=t(7462),a=t(7294),l=t(6010),o=t(2389),i=t(7392),c=t(7094),s=t(2466);const u="tabList__CuJ",m="tabItem_LNqP";function d(e){const{lazy:n,block:t,defaultValue:o,values:d,groupId:f,className:p}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??v.map((e=>{let{props:{value:n,label:t,attributes:r}}=e;return{value:n,label:t,attributes:r}})),h=(0,i.l)(b,((e,n)=>e.value===n.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===o?o:o??v.find((e=>e.props.default))?.props.value??v[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:E}=(0,c.U)(),[L,O]=(0,a.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=f){const e=y[f];null!=e&&e!==L&&b.some((n=>n.value===e))&&O(e)}const k=e=>{const n=e.currentTarget,t=N.indexOf(n),r=b[t].value;r!==L&&(x(n),O(r),null!=f&&E(f,String(r)))},C=e=>{let n=null;switch(e.key){case"Enter":k(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}n?.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},p)},b.map((e=>{let{value:n,label:t,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:L===n?0:-1,"aria-selected":L===n,key:n,ref:e=>N.push(e),onKeyDown:C,onClick:k},o,{className:(0,l.Z)("tabs__item",m,o?.className,{"tabs__item--active":L===n})}),t??n)}))),n?(0,a.cloneElement)(v.filter((e=>e.props.value===L))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==L})))))}function f(e){const n=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(n)},e))}}}]);