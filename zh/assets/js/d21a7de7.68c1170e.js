"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8475],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(b,l(l({ref:t},u),{},{components:r})):n.createElement(b,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7462),a=r(7294),o=r(6010),l=r(2389),i=r(7392),c=r(7094),s=r(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,r;const{lazy:l,block:d,defaultValue:m,values:b,groupId:f,className:v}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=b?b:h.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),g=(0,i.l)(y,((e,t)=>e.value===t.value));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const T=null===m?m:null!=(t=null!=m?m:null==(r=h.find((e=>e.props.default)))?void 0:r.props.value)?t:h[0].props.value;if(null!==T&&!y.some((e=>e.value===T)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+T+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:C,setTabGroupChoices:O}=(0,c.U)(),[w,k]=(0,a.useState)(T),E=[],{blockElementScrollPositionUntilNextRender:A}=(0,s.o5)();if(null!=f){const e=C[f];null!=e&&e!==w&&y.some((t=>t.value===e))&&k(e)}const j=e=>{const t=e.currentTarget,r=E.indexOf(t),n=y[r].value;n!==w&&(A(t),k(n),null!=f&&O(f,String(n)))},x=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var n;const t=E.indexOf(e.currentTarget)+1;r=null!=(n=E[t])?n:E[0];break}case"ArrowLeft":{var a;const t=E.indexOf(e.currentTarget)-1;r=null!=(a=E[t])?a:E[E.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},y.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>E.push(e),onKeyDown:x,onFocus:j,onClick:j},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=r?r:t)}))),l?(0,a.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},7384:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));r(5488),r(5162);const o={id:"cat2-intro",title:"\u7b80\u4ecb",sidebar_label:"1. \u7b80\u4ecb",sidebar_position:1},l=void 0,i={unversionedId:"cat2/cat2-intro",id:"cat2/cat2-intro",title:"\u7b80\u4ecb",description:"CAT1 \u5c06\u5728\u592a\u5e73\u6d0b\u590f\u5b63\u65f6\u95f47 \u6708 26 \u65e5\u4e0a\u5348 10 \u70b9\u5de6\u53f3\u5728\u7684\u7b2c 2,311,760\u4e2a\u533a\u5757\u7ed3\u675f\u5176\u751f\u547d\u5468\u671f\u3002 \uff08\u8fd9\u662f CAT1 \u6709\u6548\u7684\u6700\u540e\u4e00\u4e2a\u533a\u5757\u3002\uff09\u5728\u8fd9\u4e2a\u533a\u5757\u9ad8\u5ea6\uff0c\u4e00\u5f20\u6240\u6709 CAT1 \u4ee3\u5e01\u53ca\u5b83\u4eec\u6240\u6301\u6709\u7684\u5730\u5740\u7684\u5feb\u7167\u4f1a\u88ab\u62cd\u6444\u3002 \u7136\u540e\uff0cCAT1 \u53d1\u884c\u4eba\u5c06\u80fd\u591f\u53d1\u884c\u65b0\u7684 CAT2 \u4ee3\u5e01\u5e76\u5c06\u5b83\u4eec\u7a7a\u6295\u5230\u6301\u6709 CAT1 \u4ee3\u5e01\u7684\u76f8\u540c\u5730\u5740\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cat2/cat2-intro.mdx",sourceDirName:"cat2",slug:"/cat2/cat2-intro",permalink:"/zh/docs/cat2/cat2-intro",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/cat2/cat2-intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"cat2-intro",title:"\u7b80\u4ecb",sidebar_label:"1. \u7b80\u4ecb",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"2. CAT1\u5feb\u7167\u751f\u6210",permalink:"/zh/docs/cat2/cat2-snapshot"}},c={},s=[],u={toc:s};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/puzzles/cats"},"CAT1")," \u5c06\u5728\u592a\u5e73\u6d0b\u590f\u5b63\u65f6\u95f47 \u6708 26 \u65e5\u4e0a\u5348 10 \u70b9\u5de6\u53f3\u5728\u7684\u7b2c 2,311,760\u4e2a\u533a\u5757\u7ed3\u675f\u5176\u751f\u547d\u5468\u671f\u3002 \uff08\u8fd9\u662f CAT1 \u6709\u6548\u7684\u6700\u540e\u4e00\u4e2a\u533a\u5757\u3002\uff09\u5728\u8fd9\u4e2a\u533a\u5757\u9ad8\u5ea6\uff0c\u4e00\u5f20\u6240\u6709 CAT1 \u4ee3\u5e01\u53ca\u5b83\u4eec\u6240\u6301\u6709\u7684\u5730\u5740\u7684\u5feb\u7167\u4f1a\u88ab\u62cd\u6444\u3002 \u7136\u540e\uff0cCAT1 \u53d1\u884c\u4eba\u5c06\u80fd\u591f\u53d1\u884c\u65b0\u7684 CAT2 \u4ee3\u5e01\u5e76\u5c06\u5b83\u4eec\u7a7a\u6295\u5230\u6301\u6709 CAT1 \u4ee3\u5e01\u7684\u76f8\u540c\u5730\u5740\u3002"),(0,a.kt)("p",null,"Chia 1.5.0 \u7248\u672c\u5c06\u4e8e 7 \u6708 26 \u65e5\u53d1\u5e03\u3002\u6b64\u7248\u672c\u5c06\u4e0d\u4f1a\u5728\u94b1\u5305\u4e2d\u663e\u793a\u4efb\u4f55 CAT1 \u4ee3\u5e01\u3002 \u7528\u6237\u53ea\u4f1a\u770b\u5230\u65b0\u53d1\u884c\u7684 CAT2 \u4ee3\u5e01\uff0c\u5176\u4ef7\u503c\u4e0e\u5176 CAT1 \u4ee3\u5e01\u76f8\u540c\u3002"))}p.isMDXComponent=!0}}]);