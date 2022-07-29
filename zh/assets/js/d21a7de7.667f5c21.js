"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[8475],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var o=a.createContext({}),u=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),k=u(n),m=l,C=k["".concat(o,".").concat(m)]||k[m]||c[m]||r;return n?a.createElement(C,p(p({ref:e},s),{},{components:n})):a.createElement(C,p({ref:e},s))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,p=new Array(r);p[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:l,p[1]=i;for(var u=2;u<r;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},5162:(t,e,n)=>{n.d(e,{Z:()=>p});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function p(t){let{children:e,hidden:n,className:p}=t;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,p),hidden:n},e)}},5488:(t,e,n)=>{n.d(e,{Z:()=>m});var a=n(7462),l=n(7294),r=n(6010),p=n(2389),i=n(7392),o=n(7094),u=n(2466);const s="tabList__CuJ",c="tabItem_LNqP";function k(t){var e,n;const{lazy:p,block:k,defaultValue:m,values:C,groupId:T,className:d}=t,N=l.Children.map(t.children,(t=>{if((0,l.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=C?C:N.map((t=>{let{props:{value:e,label:n,attributes:a}}=t;return{value:e,label:n,attributes:a}})),A=(0,i.l)(h,((t,e)=>t.value===e.value));if(A.length>0)throw new Error('Docusaurus error: Duplicate values "'+A.map((t=>t.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===m?m:null!=(e=null!=m?m:null==(n=N.find((t=>t.props.default)))?void 0:n.props.value)?e:N[0].props.value;if(null!==f&&!h.some((t=>t.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+h.map((t=>t.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:b,setTabGroupChoices:g}=(0,o.U)(),[v,y]=(0,l.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=T){const t=b[T];null!=t&&t!==v&&h.some((e=>e.value===t))&&y(t)}const E=t=>{const e=t.currentTarget,n=w.indexOf(e),a=h[n].value;a!==v&&(O(e),y(a),null!=T&&g(T,String(a)))},x=t=>{var e;let n=null;switch(t.key){case"ArrowRight":{var a;const e=w.indexOf(t.currentTarget)+1;n=null!=(a=w[e])?a:w[0];break}case"ArrowLeft":{var l;const e=w.indexOf(t.currentTarget)-1;n=null!=(l=w[e])?l:w[w.length-1];break}}null==(e=n)||e.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",s)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":k},d)},h.map((t=>{let{value:e,label:n,attributes:p}=t;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===e?0:-1,"aria-selected":v===e,key:e,ref:t=>w.push(t),onKeyDown:x,onFocus:E,onClick:E},p,{className:(0,r.Z)("tabs__item",c,null==p?void 0:p.className,{"tabs__item--active":v===e})}),null!=n?n:e)}))),p?(0,l.cloneElement)(N.filter((t=>t.props.value===v))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},N.map(((t,e)=>(0,l.cloneElement)(t,{key:e,hidden:t.props.value!==v})))))}function m(t){const e=(0,p.Z)();return l.createElement(k,(0,a.Z)({key:String(e)},t))}},7384:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));n(5488),n(5162);const r={id:"cat2-intro",title:"\u7b80\u4ecb",sidebar_label:"1. \u7b80\u4ecb",sidebar_position:1},p=void 0,i={unversionedId:"cat2/cat2-intro",id:"cat2/cat2-intro",title:"\u7b80\u4ecb",description:"CAT1 \u5c06\u5728\u592a\u5e73\u6d0b\u590f\u5b63\u65f6\u95f47 \u6708 26 \u65e5\u4e0a\u5348 10 \u70b9\u5de6\u53f3\u5728\u7684\u7b2c 2,311,760\u4e2a\u533a\u5757\u7ed3\u675f\u5176\u751f\u547d\u5468\u671f\u3002 \uff08\u8fd9\u662f CAT1 \u6709\u6548\u7684\u6700\u540e\u4e00\u4e2a\u533a\u5757\u3002\uff09\u5728\u8fd9\u4e2a\u533a\u5757\u9ad8\u5ea6\uff0c\u4e00\u5f20\u6240\u6709 CAT1 \u4ee3\u5e01\u53ca\u5b83\u4eec\u6240\u6301\u6709\u7684\u5730\u5740\u7684\u5feb\u7167\u4f1a\u88ab\u62cd\u6444\u3002 \u7136\u540e\uff0cCAT1 \u53d1\u884c\u4eba\u5c06\u80fd\u591f\u53d1\u884c\u65b0\u7684 CAT2 \u4ee3\u5e01\u5e76\u5c06\u5b83\u4eec\u7a7a\u6295\u5230\u6301\u6709 CAT1 \u4ee3\u5e01\u7684\u76f8\u540c\u5730\u5740\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cat2/cat2-intro.mdx",sourceDirName:"cat2",slug:"/cat2/cat2-intro",permalink:"/zh/docs/cat2/cat2-intro",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/cat2/cat2-intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"cat2-intro",title:"\u7b80\u4ecb",sidebar_label:"1. \u7b80\u4ecb",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"2. CAT1\u5feb\u7167\u751f\u6210",permalink:"/zh/docs/cat2/cat2-snapshot"}},o={},u=[{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"Chia\u5e94\u7528\u95ee\u9898",id:"chia\u5e94\u7528\u95ee\u9898",level:3},{value:"cat1.chia.net Website questions",id:"cat1chianet-website-questions",level:3},{value:"\u94b1\u5305\u5f00\u53d1\u8005\u95ee\u9898",id:"\u94b1\u5305\u5f00\u53d1\u8005\u95ee\u9898",level:2}],s={toc:u};function c(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/puzzles/cats"},"CAT1")," \u5c06\u5728\u592a\u5e73\u6d0b\u590f\u5b63\u65f6\u95f47 \u6708 26 \u65e5\u4e0a\u5348 10 \u70b9\u5de6\u53f3\u5728\u7684\u7b2c 2,311,760\u4e2a\u533a\u5757\u7ed3\u675f\u5176\u751f\u547d\u5468\u671f\u3002 \uff08\u8fd9\u662f CAT1 \u6709\u6548\u7684\u6700\u540e\u4e00\u4e2a\u533a\u5757\u3002\uff09\u5728\u8fd9\u4e2a\u533a\u5757\u9ad8\u5ea6\uff0c\u4e00\u5f20\u6240\u6709 CAT1 \u4ee3\u5e01\u53ca\u5b83\u4eec\u6240\u6301\u6709\u7684\u5730\u5740\u7684\u5feb\u7167\u4f1a\u88ab\u62cd\u6444\u3002 \u7136\u540e\uff0cCAT1 \u53d1\u884c\u4eba\u5c06\u80fd\u591f\u53d1\u884c\u65b0\u7684 CAT2 \u4ee3\u5e01\u5e76\u5c06\u5b83\u4eec\u7a7a\u6295\u5230\u6301\u6709 CAT1 \u4ee3\u5e01\u7684\u76f8\u540c\u5730\u5740\u3002"),(0,l.kt)("p",null,"Chia 1.5.0 \u7248\u672c\u5c06\u4e8e 7 \u6708 26 \u65e5\u53d1\u5e03\u3002\u6b64\u7248\u672c\u5c06\u4e0d\u4f1a\u5728\u94b1\u5305\u4e2d\u663e\u793a\u4efb\u4f55 CAT1 \u4ee3\u5e01\u3002 \u7528\u6237\u53ea\u4f1a\u770b\u5230\u65b0\u53d1\u884c\u7684 CAT2 \u4ee3\u5e01\uff0c\u5176\u4ef7\u503c\u4e0e\u5176 CAT1 \u4ee3\u5e01\u76f8\u540c\u3002"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4ec0\u4e48\u662fCAT\uff1f")),(0,l.kt)("p",null,"CAT \u662f Chia Asset Token (Chia\u8d44\u4ea7\u4ee3\u5e01)\u3002 CAT \u662f\u5728 Chia \u533a\u5757\u94fe\u4e0a\u53d1\u884c\u7684\u540c\u8d28\u5316\u4ee3\u5e01\u3002 CAT1 \u6807\u51c6\u4e8e 2022 \u5e74 1 \u6708\u5b8c\u6210\u3002\u8be5\u6807\u51c6\u53ef\u5728 ",(0,l.kt)("a",{parentName:"p",href:"https://chialisp.com/docs/puzzles/cats/"},"chialisp.com/docs/puzzles/cats/")," \u627e\u5230\u3002 \u4f8b\u5982\u8fd9\u4e9bCAT\uff0c Stable USD (USDS), Spacebucks (SBX) \u548c Marmot (MRMT)\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48 Chia \u8d44\u4ea7\u4ee3\u5e01\u4f1a\u53d1\u751f\u53d8\u5316\uff1f")),(0,l.kt)("p",null,"CAT \u6807\u51c6\u5347\u7ea7\u4e3a CAT2\u662f\u57fa\u4e8e\u5916\u90e8\u5b89\u5168\u5ba1\u8ba1\u53d1\u73b0\u7684\u5b89\u5168\u6f0f\u6d1e\u3002\u8fd9\u4f7f\u5f97\u6211\u4eec\u9700\u8981\u66f4\u65b0 \u94b1\u5305\u5e94\u7528\u7a0b\u5e8f\u3002\u6240\u6709 CAT1 \u4ee3\u5e01\u7684\u539f\u59cb\u53d1\u884c\u4eba\u4e5f\u9700\u8981\u6309\u7167 CAT2 \u6807\u51c6\u91cd\u65b0\u53d1\u884c\u4ed6\u4eec\u7684\u4ee3\u5e01\uff0c\u5e76\u4e3a \u6c70\u6362CAT1\u63d0\u4f9b\u6280\u672f\u652f\u6301\u3002 Chia \u6b63\u5728\u79ef\u6781\u4e0e\u793e\u533a\u6210\u5458\u5408\u4f5c\u4ee5\u4f7f\u8fd9\u4e00\u8fc7\u7a0b\u5c3d\u53ef\u80fd\u65e0\u7f1d\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6b64\u66f4\u6539\u662f\u5426\u4f1a\u5f71\u54cd Chia Network \u7684\u5b89\u5168\u6027\uff1f")),(0,l.kt)("p",null,"\u4e0d\u4f1a\u3002Chia Network \u6280\u672f\u6216 Chia \u533a\u5757\u94fe\u7684\u5b89\u5168\u6027\u4e0d\u4f1a\u53d7\u5230\u5a01\u80c1\u3002 \u8be5\u66f4\u65b0\u4ec5\u5c06\u4fee\u8865CAT1\u7684\u6f0f\u6d1e\u3002\xa0"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"CAT1 \u7684\u5468\u671f\u4f55\u65f6\u7ed3\u675f\uff1f")),(0,l.kt)("p",null,"\u751f\u547d\u5468\u671f\u7ed3\u675f\u7684\u533a\u5757\u9ad8\u5ea6\u4e3a 2,311,760\uff0c\u5927\u7ea6\u662f\u4e16\u754c\u6807\u51c6\u65f6\u95f4\uff08UTC\uff09 17:00 \u5de6\u53f3\u3002  \u8fd9\u662f\u62cd\u6444\u5feb\u7167\u7684\u65f6\u95f4\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5982\u4f55\u5728\u5feb\u7167\u65f6\u67e5\u770b\u6211\u7684 CAT1 \u4f59\u989d\uff1f")),(0,l.kt)("p",null,"\u8bbf\u95ee ",(0,l.kt)("a",{parentName:"p",href:"https://cat1.chia.net"},"cat1.chia.net")," \u5e76\u63d0\u4f9b\u60a8\u7684\u516c\u94a5\u4ee5\u67e5\u770b\u91cd\u65b0\u53d1\u884c\u65f6\u5c06\u7a7a\u6295\u7ed9\u60a8\u7684 CAT \u4f59\u989d\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6bcf\u4e2a\u4eba\u90fd\u5fc5\u987b\u5347\u7ea7\u5417\uff1f")),(0,l.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u6240\u6709 CAT\uff08\u5305\u62ec USDS\uff09\u6301\u6709\u8005\u5c3d\u5feb\u5347\u7ea7\u5230 1.5\u3002  \u5728\u751f\u547d\u5468\u671f\u7ec8\u6b62\u7684\u533a\u5757 (2,311,760) \u4e4b\u540e\uff0c\u5c06\u4e0d\u518d\u652f\u6301\u5728 1.4 \u548c\u66f4\u65e9\u7248\u672c\u4e0a\u53ef\u89c1\u7684 CAT1\u3002  \u5982\u679c\u60a8\u6ca1\u6709\u4efb\u4f55 CAT\uff08\u4f8b\u5982\uff0c\u5982\u679c\u60a8\u662f\u4e00\u4e2a\u4e0d\u5c06 XCH \u5151\u6362\u4e3a USDS \u6216\u4efb\u4f55\u5176\u4ed6 CAT \u7684\u519c\u573a\u4e3b\uff09\uff0c\u90a3\u4e48\u60a8\u4e0d\u9700\u8981\u5347\u7ea7\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6211\u9700\u8981\u5347\u7ea7\u6211\u7684\u6536\u5272\u673a\u5417\uff1f")),(0,l.kt)("p",null,"\u6b64\u66f4\u65b0\u4ec5\u5f71\u54cd\u94b1\u5305\u8f6f\u4ef6\uff0c\u56e0\u6b64\u60a8\u65e0\u9700\u66f4\u65b0\u6536\u5272\u673a\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6211\u7684 NFT \u6216 XCH \u6709\u98ce\u9669\u5417\uff1f")),(0,l.kt)("p",null,"\u4e0d\u4f1a\u3002NFT \u548c XCH \u4e0d\u53d7\u8be5\u6f0f\u6d1e\u5f71\u54cd\uff0c\u56e0\u6b64\u65e0\u9700\u5bf9\u5176\u8fdb\u884c\u4efb\u4f55\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5728\u8fc7\u6e21\u671f\u95f4\u662f\u5426\u5b58\u5728\u4e8f\u635f\u6216\u4f59\u989d\u4e0d\u6b63\u786e\u7684\u98ce\u9669\uff1f  \u5982\u679c\u53d1\u751f\u8be5\u600e\u4e48\u529e\uff1f")),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u7684\u94b1\u5305\u4e2d\u6709\u4efb\u4f55 CAT\uff0c\u60a8\u5c06\u5e0c\u671b\u5c3d\u5feb\u5347\u7ea7\u5230 1.5\uff0c\u5e76\u786e\u4fdd\u5728\u8fbe\u5230\u751f\u547d\u5468\u671f\u7ec8\u6b62\u9ad8\u5ea6 (2,311,760) \u4e4b\u540e\u4e0d\u4e0e\u4efb\u4f55CAT1\u4ee3\u5e01\u4ea4\u4e92\uff0c\u76f4\u5230\u60a8\u5347\u7ea7\u5230 1.5\u3002  \u8fd9\u5c06\u6709\u52a9\u4e8e\u786e\u4fdd\u60a8\u671f\u671b\u7684\u4f59\u989d\u662f\u5728\u91cd\u65b0\u53d1\u884c CAT \u65f6\u5c06\u7a7a\u6295\u7ed9\u60a8\u7684\u4f59\u989d\u3002 CAT1 \u7f51\u7ad9\u51c6\u786e\u53cd\u6620\u4e86\u60a8\u7684\u94b1\u5305\u5728\u751f\u547d\u5468\u671f\u7ed3\u675f\u516c\u544a\u65f6\u7684 CAT1 \u4f59\u989d\u3002  \u5b83\u4e0d\u4f1a\u52a8\u6001\u66f4\u65b0\uff0c\u4f46\u6211\u4eec\u9884\u8ba1\u91cd\u65b0\u53d1\u884c\u8fc7\u7a0b\u5927\u7ea6\u9700\u8981\u4e00\u5468\u65f6\u95f4\u624d\u80fd\u5b8c\u5168\u5b8c\u6210\uff0c\u56e0\u6b64\u5728\u8be5\u8fc7\u7a0b\u5b8c\u6210\u4e4b\u524d\uff0c\u60a8\u94b1\u5305\u4e2d\u7684 CAT2 \u4f59\u989d\u53ef\u80fd\u4e0e CAT1 \u7f51\u7ad9\u4f59\u989d\u4e0d\u540c\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5728\u516c\u544a\u548c\u751f\u547d\u5468\u671f\u7ed3\u675f\u5757\u9ad8\u5ea6\u4e4b\u95f4\uff0c\u4f5c\u4e3a\u7528\u6237\u6211\u5e94\u8be5\u505a\u4ec0\u4e48\uff1f")),(0,l.kt)("p",null,"\u5efa\u8bae\u60a8\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u53d6\u6d88\u60a8\u94b1\u5305\u4e2d\u4efb\u4f55\u94fe\u4e0a\u516c\u5f00\u7684 CAT\u62a5\u4ef7\uff08Offer\uff09")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u4e0d\u63a5\u53d7 1.4 \u6216\u66f4\u4f4e\u7248\u672c\u94b1\u5305\u4e2d\u7684\u4efb\u4f55 CAT\u62a5\u4ef7")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8bb0\u4e0b\u60a8\u5f53\u524d\u7684 CAT1 \u4f59\u989d")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5c3d\u5feb\u5347\u7ea7\u5230\u6700\u65b0\u7684Chia\u94b1\u5305\u5e94\u7528\u7a0b\u5e8f\uff081.5.0\u6216\u66f4\u9ad8\u7248\u672c\uff09"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6211\u600e\u6837\u624d\u80fd\u786e\u8ba4\u5df2\u7ecf\u53d6\u6d88\u4e86\u6240\u6709\u7684\u516c\u5f00\u62a5\u4ef7\uff1f")),(0,l.kt)("p",null,"\u6700\u91cd\u8981\u7684\u662f\uff0c\u60a8\u9700\u8981\u786e\u4fdd\u6ca1\u6709\u62a5\u4ef7\u53ef\u4ee5\u5c06\u60a8\u7684 XCH \u4ea4\u6613\u4e3a CAT\u3002 \u9664\u4e86\u53d6\u6d88\u94b1\u5305\u4e2d\u7684\u62a5\u4ef7\u5916\uff0c\u60a8\u8fd8\u53ef\u4ee5\u5c06\u60a8\u7684 XCH \u603b\u4f59\u989d\u53d1\u9001\u7ed9\u81ea\u5df1\u3002 \u7531\u4e8e chia\u7684\u5e01\u6a21\u578b\uff0c\u8fd9\u5c06\u786e\u4fdd\u6240\u6709 XCH \u5e01\u5728\u5bf9\u65b9\u63a5\u53d7\u9057\u5fd8\u7684\u62a5\u4ef7\u65f6\u5c06\u4e0d\u53ef\u7528\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6211\u56e0\u4ea4\u6613\u800c\u4e8f\u635f\uff0c\u6211\u73b0\u5728\u8be5\u600e\u4e48\u529e\uff1f")),(0,l.kt)("p",null,"\u4e0d\u5e78\u7684\u662f\uff0c\u5728\u751f\u547d\u533a\u5757\u9ad8\u5ea6\u7ed3\u675f\u540e\u53d1\u751f\u7684\u4efb\u4f55 CAT1 \u4ea4\u6613\u90fd\u5c06\u65e0\u6cd5\u6062\u590d\u3002  \u5982\u9700\u8fdb\u4e00\u6b65\u786e\u8ba4\uff0c\u8bf7\u8054\u7cfb\u6211\u4eec\u7684\u534f\u52a9\u56e2\u961f\uff0c\u4ee5\u4fbf\u4ed6\u4eec\u5e2e\u52a9\u68c0\u67e5\u4ea4\u6613\u53d1\u751f\u7684\u65f6\u95f4\uff0c\u5e76\u5e2e\u52a9\u786e\u5b9a\u8d44\u91d1\u662f\u5426\u4e22\u5931\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6211\u9700\u8981\u53d6\u6d88\u6211\u7684 XCH \u6362 NFT \u62a5\u4ef7\u5417\uff1f")),(0,l.kt)("p",null,"\u4e0d\u4f1a\u3002\u53ea\u6709 CAT1 \u4ee3\u5e01\u53d7\u5230\u5f71\u54cd\u3002 NFT \u6ca1\u6709\u4efb\u4f55\u53d8\u5316\u3002  \u4f46\u662f\uff0c\u5982\u679c\u60a8\u6709\u4e00\u4e2a\u5f00\u653e\u7684 CAT-for-NFT \u62a5\u4ef7\uff0c\u90a3\u4e48\u60a8\u5e94\u8be5\u53d6\u6d88\u5b83\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6211\u600e\u4e48\u80fd\u76f8\u4fe1\u6211\u6240\u6709\u7684\u8d27\u5e01\u90fd\u4f1a\u88ab\u9002\u5f53\u5730\u8f6c\u79fb\uff1f")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u60a8\u53ef\u4ee5\u4f7f\u7528\u60a8\u7684  \u516c\u94a5\u901a\u8fc7\u6211\u4eec\u7684",(0,l.kt)("a",{parentName:"p",href:"https://cat1.chia.net/"},"\u7f51\u7ad9"),"\u67e5\u770b\u5feb\u7167\u65f6\u60a8\u7684 CAT1 \u4f59\u989d\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6211\u4eec\u6b63\u5728\u4e3a\u793e\u533a\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u5de5\u5177\u548c\u652f\u6301\uff0c\u4ee5\u5e2e\u52a9\u786e\u4fdd\u4ed6\u4eec\u80fd\u591f\u53ca\u65f6\u91cd\u65b0\u53d1\u5e03\u65b0\u7684  CAT\u3002 \u6240\u6709 CAT \u7684\u518d\u53d1\u884c\u5c06\u4e0e\u751f\u547d\u5468\u671f\u7ed3\u675f\u65f6\u4f7f\u7528\u4ee3\u5e01\u4f59\u989d\u76f8\u540c\u3002"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6211\u7684 CAT1 \u4f1a\u600e\u6837\uff1f")),(0,l.kt)("p",null,"\u4f60\u73b0\u6709\u7684 CAT1 \u4ee3\u5e01\u4ecd\u7136\u5b58\u5728\u4e8e\u533a\u5757\u94fe\u4e0a\uff0c\u4f46\u968f\u7740\u6bcf\u4e2a\u4eba\u90fd\u5347\u7ea7\u5230 CAT2\uff0c\u5b83\u4eec\u4e0d\u518d\u6709\u7528\u3002  \u6839\u636e\u60a8\u622a\u81f3\u533a\u5757\u9ad8\u5ea6 2,311,760 \u7684\u4f59\u989d\uff0c\u60a8\u5c06\u88ab\u7a7a\u6295 CAT2 \u4ee5\u66ff\u6362\u60a8\u7684 CAT1\u3002  \u5347\u7ea7\u5230 1.5 \u540e\uff0c\u60a8\u5c06\u4e0d\u518d\u770b\u5230\u539f\u59cb CAT \u7684\u4efb\u4f55\u4f59\u989d\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u9700\u8981\u591a\u957f\u65f6\u95f4\u624d\u80fd\u5c06\u6240\u6709\u4ee3\u5e01\u7a7a\u6295\u7ed9\u6211\uff1f")),(0,l.kt)("p",null,"\u8fd9\u5c06\u53d6\u51b3\u4e8e\u539f\u59cb\u53d1\u884c\u4eba\u4f55\u65f6\u6839\u636e\u65b0\u7684 CAT2 \u6807\u51c6\u91cd\u65b0\u53d1\u884c\u5176\u4ee3\u5e01\u3002  \u6211\u4eec\u5e0c\u671b\u5b83\u5728 CAT1 EOL \u65e5\u671f\u4e4b\u540e\u4e0d\u4e45\u3002  \u5efa\u8bae\u5173\u6ce8\u76f8\u5173\u793e\u4ea4\u5a92\u4f53\uff0c\u6216\u5173\u6ce8 CAT \u4ee3\u5e01\u9879\u76ee\uff0c\u8fd9\u6837\u60a8\u5c31\u53ef\u4ee5\u76f4\u63a5\u4e86\u89e3\u4f55\u65f6\u53ef\u4ee5\u9884\u671f\u7a7a\u6295\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5982\u679c\u6211\u5728\u533a\u5757\u9ad8\u5ea6\u5feb\u7167\u4e4b\u540e\u4ea4\u6613CAT1 \u4ee3\u5e01\u7684\u4ea4\u6613\u4f1a\u53d1\u751f\u4ec0\u4e48\uff1f")),(0,l.kt)("p",null,"\u60a8\u53ea\u4f1a\u6536\u5230\u5728\u62cd\u6444\u5feb\u7167\u65f6\u7a7a\u6295\u4ee3\u5e01\u4f59\u989d\u3002  \u5feb\u7167\u540e\u53d1\u751f\u7684\u4efb\u4f55\u4ea4\u6613\u90fd\u4e0d\u4f1a\u8ba1\u5165\u63d0\u4f9b\u7ed9\u60a8\u7684\u7a7a\u6295\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6211\u600e\u4e48\u80fd\u76f8\u4fe1\u6211\u6240\u6709\u7684\u8d27\u5e01\u90fd\u4f1a\u88ab\u9002\u5f53\u5730\u8f6c\u79fb\uff1f  \u5728\u8fc7\u6e21\u671f\u95f4\u662f\u5426\u5b58\u5728\u4e8f\u635f\u6216\u4f59\u989d\u4e0d\u6b63\u786e\u7684\u98ce\u9669\uff1f  \u5982\u679c\u662f\u8fd9\u6837\uff0c\u6211\u8be5\u600e\u4e48\u529e\uff1f")),(0,l.kt)("p",null,"\u60a8\u7684 CAT1 \u4ee3\u5e01\u4e0d\u4f1a\u88ab\u8f6c\u79fb\u3002  \u76f8\u53cd\uff0c\u60a8\u5c06\u83b7\u5f97\u4e00\u7ec4\u76f8\u540c\uff08\u4ef7\u503c\uff09\u7684 CAT2 \u4ee3\u5e01\u3002  \u533a\u5757\u94fe\u5df2\u7ecf\u5305\u542b\u4e86\u786c\u5e01\u96c6\u4e2d\u6240\u6709\u786c\u5e01\u7684\u5b8c\u6574\u8bb0\u5f55\u3002  \u6211\u4eec\u5f00\u53d1\u4e86\u4e00\u4e2a\u5de5\u5177\uff0c\u5c06\u4f7f\u7528\u533a\u5757\u94fe\u6765\u8ba1\u7b97 CAT1 \u4ee3\u5e01\u7684\u5b8c\u6574\u5feb\u7167\u3002  \u6b64\u5feb\u7167\u51c6\u786e\u663e\u793aCAT1 \u7684\u751f\u547d\u5468\u671f\u7ed3\u675f\u65f6\u7684\u6570\u989d\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\uff0cCAT1 \u53d1\u884c\u8005\u786e\u5b9e\u9700\u8981\u6267\u884c CAT2 \u4ee3\u5e01\u7684\u5b8c\u6574\u7a7a\u6295\u3002  \u5982\u679c\u7a7a\u6295\u6ca1\u6709\u5b8c\u6210\uff0c\u751a\u81f3\u6ca1\u6709\u5f00\u59cb\uff0c\u90a3\u4e48\u60a8\u5c31\u6709\u53ef\u80fd\u6536\u4e0d\u5230\u5347\u7ea7\u540e\u7684 CAT2 \u4ee3\u5e01\u3002  \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u60a8\u5e94\u8be5\u8981\u6c42\u53d1\u884c\u4eba\u8fdb\u884c\u5347\u7ea7\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6211\u662f CAT1 \u4ee3\u5e01\u7684\u53d1\u884c\u4eba\u3002  \u6211\u5e94\u8be5\u600e\u4e48\u529e\uff1f")),(0,l.kt)("p",null,"\u6309\u7167\u6b64\u6587\u6863\u7684 ","[\u6dfb\u52a0\u94fe\u63a5]","\uff0c\u5b83\u5c06\u6307\u5bfc\u60a8\u5b8c\u6210\u5c06\u4ee3\u5e01\u91cd\u65b0\u53d1\u884c\u4e3a CAT2 \u7684\u8fc7\u7a0b\u3002"),(0,l.kt)("h3",{id:"chia\u5e94\u7528\u95ee\u9898"},"Chia\u5e94\u7528\u95ee\u9898"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6211\u5347\u7ea7\u5230 1.5\uff0c\u4f46\u6211\u8fd8\u6ca1\u6709\u770b\u5230\u6211\u7684\u4efb\u4f55\u4ee3\u5e01\u3002  \u6211\u505a\u9519\u4ec0\u4e48\u4e86\u5417\uff1f")),(0,l.kt)("p",null,"\u4e0d\uff0c\u4f60\u6ca1\u6709\u505a\u9519\u4efb\u4f55\u4e8b\u3002  \u4ece 1.5 \u5f00\u59cb\uff0cChia \u94b1\u5305\u5e94\u7528\u7a0b\u5e8f\u4ec5\u663e\u793a\u60a8\u7684 XCH \u548c CAT2 \u4f59\u989d\u3002  \u7531\u4e8e\u5e76\u975e\u6240\u6709 CAT \u90fd\u4f1a\u7acb\u5373\u91cd\u65b0\u53d1\u884c\uff0c\u56e0\u6b64\u60a8\u7684 CAT2 \u4f55\u65f6\u51fa\u73b0\u5728\u60a8\u7684\u94b1\u5305\u4e2d\u53d6\u51b3\u4e8e\u539f\u59cb\u53d1\u884c\u8005\u4f55\u65f6\u53d1\u884c\u5176\u66f4\u65b0\u7684 CAT2\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6211\u7684\u94b1\u5305\u91cc\u7684\u7a7a\u6295\u4f59\u989d\u4e0e\u7f51\u7ad9\u663e\u793a\u7684\u4f59\u989d\u4e0d\u7b26\uff0c\u6211\u8be5\u600e\u4e48\u529e\uff1f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u9996\u5148\uff0c\u8bf7\u8bbf\u95ee CAT1 \u4f59\u989d\u7f51\u7ad9\u4ee5\u67e5\u770b\u60a8\u7684\u5386\u53f2 CAT1 \u4f59\u989d\u3002  \u6211\u4eec\u9884\u8ba1\u5b8c\u6574\u7684\u91cd\u65b0\u53d1\u884c\u8fc7\u7a0b\u5927\u7ea6\u9700\u8981\u4e00\u5468\u65f6\u95f4\u624d\u80fd\u5b8c\u6210\u3002\xa0\xa0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u60a8\u5728 1.5.0 \u94b1\u5305\u4e2d\u7684 CAT2 \u4f59\u989d\u4e0e CAT1 \u5386\u53f2\u53c2\u8003\u4e0d\u5339\u914d\uff0c\u8bf7\u68c0\u67e5\u60a8\u7684\u94b1\u5305\u884d\u751f\u6307\u6570\uff08derivation index\uff09\u662f\u591a\u5c11\uff0c\u5e76\u5c06\u5176\u4e0e\u884d\u751f\u6307\u6570\uff08derivation index\uff09\u8fdb\u884c\u6bd4\u8f83\u3002  \u884d\u751f\u6307\u6570\u663e\u793a\u5728\u4ee3\u5e01\u5c4f\u5e55\u4e0a\u7684\u4f59\u989d\u4e2d\u3002![Graphical user interface, application"),(0,l.kt)("img",{src:"/img/cat2/wallet-derivation-index.png",alt:"Derivation Index in the wallet"})),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u60a8\u94b1\u5305\u4e2d\u7684\u884d\u751f\u6307\u6570\u4f4e\u4e8e\u7f51\u7ad9\u4e0a\u7684\u6700\u9ad8\u884d\u751f\u6307\u6570\uff0c\u60a8\u5c06\u9700\u8981\u66f4\u65b0\u94b1\u5305\u4e2d\u7684\u884d\u751f\u6307\u6570\u3002  \u4e3a\u6b64\uff0c\u8bf7\u8f6c\u5230\u8bbe\u7f6e -> \u884d\u751f\u6307\u6570\uff08derivation index\uff09\u5e76\u8f93\u5165\u60a8\u4ece cat1.chia.net \u7f51\u7ad9\u83b7\u5f97\u7684\u6570\u5b57\u3002"),(0,l.kt)("img",{src:"/img/cat2/settings-derivation-index.png",alt:"Derivation Index in the settings"}))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6211\u5df2\u7ecf\u5c1d\u8bd5\u4e86\u6240\u6709\u5efa\u8bae\uff0c\u4f46\u91cd\u65b0\u53d1\u884c\u4eba\u6ca1\u6709\u8ba9\u6211\u7684\u94b1\u5305\u4f59\u989d\u6b63\u786e\u3002  \u6211\u5e94\u8be5\u600e\u4e48\u529e\uff1f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5728\u5c1d\u8bd5\u4e86\u4ee5\u4e0a\u6240\u6709\u6b65\u9aa4\u540e\uff0c\u8ddd\u516c\u544a\u81f3\u5c11\u4e00\u5468\u8fc7\u53bb\u4e86\uff0c\u60a8\u7684 CAT2 \u7a7a\u6295\u4f59\u989d\u4ecd\u7136\u4e0d\u5339\u914d\uff0c\u90a3\u4e48\u6211\u4eec\u5efa\u8bae\u76f4\u63a5\u8054\u7cfb\u76f8\u5173 CAT1 \u4ee3\u5e01\u7684\u91cd\u65b0\u53d1\u884c\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5982\u4f55\u53d6\u6d88\u6211\u7684\u4ea4\u6362 CAT\u7684\u516c\u5f00\u62a5\u4ef7\uff1f")),(0,l.kt)("p",null,"\u4ece Chia \u94b1\u5305\u7528\u6237\u754c\u9762\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'\u8f6c\u5230\u5de6\u4fa7\u7684"\u62a5\u4ef7"\u9009\u9879\u5361')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'\u67e5\u627e\u60a8\u521b\u5efa\u7684\u6240\u6709\u663e\u793a"\u7b49\u5f85\u63a5\u53d7"\u72b6\u6001\u7684\u62a5\u4ef7')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'\u70b9\u51fb"Actions"\u4e0b\u7684\u4e09\u4e2a\u70b9')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'\u70b9\u51fb"\u53d6\u6d88\u62a5\u4ef7"')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'\u786e\u4fdd\u9009\u62e9"\u5728\u533a\u5757\u94fe\u4e0a\u53d6\u6d88"\u9009\u9879')),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8f93\u5165\u8d39\u7528\uff08\u53ef\u9009\uff0c\u4f46\u63a8\u8350\uff09")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'\u70b9\u51fb"\u53d6\u6d88\u62a5\u4ef7"'))),(0,l.kt)("p",null,"\u4ece Chia \u94b1\u5305\u547d\u4ee4\u884c\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'\u8fd0\u884c"chia wallet cancel_offer"\u4ee5\u53ca\u53d6\u6d88\u4efb\u4f55\u516c\u5f00\u62a5\u4ef7\u6240\u9700\u7684\u53c2\u6570\u3002  \u6709\u5173\u5982\u4f55\u4f7f\u7528\u547d\u4ee4\u884c\u53c2\u6570\u7684\u6587\u6863\uff0c\u8bf7\u53c2\u89c1',(0,l.kt)("a",{parentName:"li",href:"https://docs.chia.net/docs/13cli/nft_cli/"},"\u6b64\u5904"),"\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5347\u7ea7\u5230 1.5 \u540e\uff0c\u6211\u4e22\u5931\u4e86\u6240\u6709\u94b1\u5305\u4ea4\u6613\u8bb0\u5f55\u3002  \u5982\u4f55\u8bbf\u95ee\u6211\u4ee5\u524d\u4f7f\u7528 CAT \u6216 XCH \u7684\u4ea4\u6613\u5386\u53f2\uff1f")),(0,l.kt)("p",null,"\u5347\u7ea7\u5230 1.5 \u540e\uff0c\u5c06\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u94b1\u5305\u6570\u636e\u5e93\u4ee5\u4fdd\u7559\u4efb\u4f55\u4ee5\u524d\u7684\u94b1\u5305\u6570\u636e\u5e93\u526f\u672c\u3002  \u60a8\u53ef\u4ee5\u5b89\u88c5\u4ee5\u524d\u7248\u672c\u7684 Chia \u94b1\u5305\u5e94\u7528\u7a0b\u5e8f\uff0c\u8be5\u65e7\u5ba2\u6237\u7aef\u5c06\u67e5\u627e\u60a8\u4ee5\u524d\u7684\u94b1\u5305\u6570\u636e\u5e93\u5e76\u663e\u793a\u5347\u7ea7\u5230 1.5 \u4e4b\u524d\u8be5\u94b1\u5305\u4e2d\u53d1\u751f\u7684 XCH\u3001CAT \u548c NFT \u7684\u4ea4\u6613\u5386\u53f2"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6211\u5982\u4f55\u77e5\u9053\u66f4\u65b0\u7684\u4ee3\u5e01\u4f55\u65f6\u7a7a\u6295\u5230\u6211\u7684\u94b1\u5305\uff1f")),(0,l.kt)("p",null,'\u60a8\u5e94\u8be5\u5173\u6ce8\u60a8\u62e5\u6709\u7684\u4ee3\u5e01\u7684\u9879\u76ee\uff0c\u4ee5\u4fbf\u5728\u4ed6\u4eec\u5f00\u59cb\u8fd0\u884c\u7a7a\u6295\u65f6\u6536\u5230\u901a\u77e5\u3002  \u60a8\u8fd8\u53ef\u4ee5\u76d1\u63a7\u60a8\u7684 Chia \u94b1\u5305\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u5728"\u7ba1\u7406\u4ee3\u5e01\u5217\u8868"\u4e0b\u67e5\u770b\u662f\u5426\u6709\u65b0\u7684 CAT2 \u7a7a\u6295\u7ed9\u60a8\u3002'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48\u6211\u94b1\u5305\u4e2d\u7684\u4f59\u989d\u4e0e\u7f51\u7ad9\u4e0a\u62a5\u544a\u7684\u4f59\u989d\u4e0d\u5339\u914d\uff1f")),(0,l.kt)("p",null,"\u4ece\u7f51\u7ad9\u83b7\u53d6\u884d\u751f\u6307\u6570\uff0c\u5e76\u5728 Chia \u94b1\u5305\u5e94\u7528\u7a0b\u5e8f\u4e2d\u66f4\u65b0\u884d\u751f\u6307\u6570\uff08derivation index\uff09\u3002  \u8fd9\u5c06\u786e\u4fdd\u7f51\u7ad9\u4e0a\u62a5\u544a\u7684\u4f59\u989d\u4e0e\u60a8\u94b1\u5305\u4e2d\u7684\u4f59\u989d\u76f8\u5339\u914d\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},'\u4ec0\u4e48\u662f"\u884d\u751f\u6307\u6570"\uff1f')),(0,l.kt)("p",null,"\u6d3e\u751f\u7d22\u5f15\u662f\u4e00\u4e2a\u6570\u503c\uff0c\u7528\u4e8e\u6839\u636e\u6700\u8fd1\u7684\u4ea4\u6613\u8ddf\u8e2a\u4f7f\u7528\u4e86\u591a\u5c11\u94b1\u5305\u5730\u5740\u3002  \u8fd9\u6709\u52a9\u4e8e\u5efa\u7acb\u4e00\u4e2a\u7a97\u53e3\uff0c\u7528\u4e8e\u5728\u533a\u5757\u94fe\u4e0a\u626b\u63cf\u94b1\u5305\u5730\u5740\uff0c\u4ee5\u67e5\u627e\u7279\u5b9a\u94b1\u5305\u62e5\u6709\u7684\u6240\u6709\u53ef\u80fd\u7684\u786c\u5e01\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48\u5728\u6211\u7684 1.5 \u94b1\u5305\u4e2d\u770b\u5230\u591a\u4e2a\u5177\u6709\u76f8\u540c\u4ef7\u503c\u7684\u4ee3\u5e01\uff1f")),(0,l.kt)("p",null,'\u60a8\u53ef\u80fd\u4ece\u4e0d\u540c\u65b9\u6536\u5230\u4e86\u591a\u4e2a\u76f8\u540c\u7684\u7a7a\u6295\u3002  \u5176\u4e2d\u53ea\u6709\u4e00\u4e2a\u662f\u771f\u6b63\u7684 CAT2 \u4ee3\u5e01\u3002  \u8981\u786e\u5b9a\u54ea\u4e2a\u662f\u771f\u5b9e\u7684\uff0c\u8bf7\u5355\u51fb"MANAGE TOKEN LIST"\uff0c\u7136\u540e\u5355\u51fb"Search on Tail Database"\u3002  \u53ea\u6709\u6700\u521d\u7684 CAT1 \u53d1\u884c\u8005\u624d\u88ab\u5141\u8bb8\u5728 Tail Database \u4e0a\u6ce8\u518c\u4ed6\u4eec\u7684 CAT2 \u7b49\u4ef7\u7269\uff0c\u56e0\u6b64\u60a8\u5e94\u8be5\u4f7f\u7528\u5b83\u4f5c\u4e3a\u547d\u540d\u60a8\u7684 CAT2 \u4ee3\u5e01\u7684\u771f\u5b9e\u6765\u6e90\u3002'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5982\u679c\u6211\u6709\u4efb\u4f55\u95ee\u9898\u6216\u7591\u95ee\uff0c\u6211\u53ef\u4ee5\u8054\u7cfb\u8c01\uff1f")),(0,l.kt)("p",null,"Chia Network\u56e2\u961f\uff0c\u53ef\u5728\u5b98\u65b9 Support Keybase \u9891\u9053\u4e2d\u63d0\u51fa\u95ee\u9898\u5e76\u901a\u8fc7\u6b64\u6d41\u7a0b\u83b7\u5f97\u5e2e\u52a9"),(0,l.kt)("h3",{id:"cat1chianet-website-questions"},"cat1.chia.net Website questions"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5982\u4f55\u627e\u5230\u8f93\u5165\u8fdb\u7f51\u7ad9\u7684\u516c\u94a5\uff1f")),(0,l.kt)("p",null," \u4ece Chia \u94b1\u5305\u7528\u6237\u754c\u9762\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},'\u8f6c\u5230"\u9009\u62e9\u5bc6\u94a5"\u5c4f\u5e55\u5e76\u5355\u51fb"\u67e5\u770b\u79c1\u94a5"')),(0,l.kt)("img",{src:"/img/cat2/key-selection.png",alt:"Key selection screen"}),(0,l.kt)("p",null,'2.\u4ece\u53ef\u7528\u5bc6\u94a5\u5217\u8868\u4e2d\u590d\u5236"\u516c\u94a5"'),(0,l.kt)("p",null,"\xa0\xa0\u4ece Chia \u94b1\u5305\u547d\u4ee4\u884c\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u8fd0\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"Chia keys show"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'\u4ece\u53ef\u7528\u5bc6\u94a5\u5217\u8868\u4e2d\u590d\u5236"\u4e3b\u516c\u94a5"'))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6211\u67e5\u770b\u4e86\u7f51\u7ad9 (cat1.chia.net)\uff0c\u6211\u6ca1\u6709\u770b\u5230\u6211\u7684\u94b1\u5305\u6709\u4efb\u4f55\u4ee3\u5e01\uff0c\u4f46\u5e94\u8be5\u6709\u3002  \u6211\u80fd\u505a\u4e9b\u4ec0\u4e48\uff1f")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u786e\u8ba4\u60a8\u5728\u7f51\u7ad9\u4e0a\u8f93\u5165\u7684\u516c\u94a5\u662f\u6b63\u786e\u7684\uff0c\u5e76\u4e14\u6709 CAT1 \u4ee3\u5e01\u4f59\u989d\uff0c\u5e76\u4e14\u662f\u672a\u786c\u5316\u7684\u5bc6\u94a5")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},'\u70b9\u51fb"Search next 1000"\u67e5\u770b\u60a8\u7684\u4f59\u989d\u662f\u5426\u5df2\u66f4\u65b0'))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8be5\u7f51\u7ad9\u62a5\u544a\u7684\u4f59\u989d\u4e0e\u6211\u7684\u9884\u671f\u4e0d\u7b26\u3002  \u6211\u5e94\u8be5\u600e\u4e48\u529e\uff1f")),(0,l.kt)("p",null,'\u7f51\u7ad9\u4f1a\u626b\u63cf\u524d 1000 \u4e2a\u94b1\u5305\u63a5\u6536\u5730\u5740\uff0c\u5982\u679c\u4f59\u989d\u4e0d\u7b26\u5408\u60a8\u7684\u9884\u671f\uff0c\u90a3\u4e48\u60a8\u5e94\u8be5\u70b9\u51fb"search next 1000"\u8ba9\u7f51\u7ad9\u626b\u63cf\u5e76\u66f4\u65b0\u627e\u5230\u7684\u4f59\u989d\u3002  \u6211\u4eec\u5e0c\u671b\u5927\u591a\u6570\u7528\u6237\u80fd\u591f\u4ece\u521d\u59cb\u641c\u7d22\u4e2d\u83b7\u5f97\u6b63\u786e\u7684\u5e73\u8861\uff0c\u4f46\u6709\u4e9b\u7528\u6237\u53ef\u80fd\u9700\u8981\u6269\u5c55\u641c\u7d22\u3002'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6211\u7684 CH21 \u4f59\u989d\u5728\u7f51\u7ad9\u4e0a\u6709\u8bef\u3002  \u6211\u5e94\u8be5\u600e\u4e48\u529e\uff1f")),(0,l.kt)("p",null,"CH21 \u4ee3\u5e01\u662f\u9881\u53d1\u7ed9\u975e\u89c2\u5bdf\u8005\u5bc6\u94a5\u7684\uff0c\u56e0\u6b64\u5b83\u4eec\u4e0d\u4f1a\u51fa\u73b0\u5728\u7f51\u7ad9\u4e0a\uff0c\u9664\u975e\u5b83\u4eec\u5728\u67d0\u4e2a\u65f6\u5019\u4f7f\u7528\u65e0\u5f3a\u5236\u975e\u89c2\u5bdf\u8005\u5bc6\u94a5\u652f\u6301\u7684\u94b1\u5305\u8f6c\u79fb\u3002 CAT \u6807\u51c6\u662f\u5728\u652f\u6301\u89c2\u5bdf\u8005\u5bc6\u94a5\u7684\u540c\u65f6\u53d1\u5e03\u7684\uff0c\u56e0\u6b64\u901a\u5e38\u5927\u591a\u6570 CAT \u548c\u94b1\u5305\u90fd\u4f1a\u88ab\u7f51\u7ad9\u652f\u6301\u3002  \u5373\u4f7f\u60a8\u7684 CH21 \u4ee3\u5e01\u6ca1\u6709\u663e\u793a\u5728\u7f51\u7ad9\u4e0a\uff0cCAT2 \u7248\u672c\u4ecd\u7136\u4f1a\u7a7a\u6295\u5230\u60a8\u7684 1.5 \u94b1\u5305\u4e2d\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6211\u6b63\u5728\u8fd0\u884c 1.5\uff0c\u5f53\u6211\u67e5\u770b\u62a5\u4ef7\u65f6\uff0c\u6211\u770b\u5230\u7684\u662f XCH\uff0c\u800c\u4e0d\u662f CAT \u4ee4\u724c\u3002  \u8fd9\u662f\u600e\u4e48\u56de\u4e8b\uff1f")),(0,l.kt)("p",null,"\u60a8\u53ef\u80fd\u6b63\u5728\u67e5\u770b CAT1 \u7684\u62a5\u4ef7\uff0c\u8be5\u62a5\u4ef7\u4ece 1.5 \u7248\u5f00\u59cb\u5c06\u662f\u65e0\u6548\u62a5\u4ef7\u3002  \u539f\u56e0\u662f\u94b1\u5305\u4e0d\u518d\u8bc6\u522b CAT1 \u7684\u5c3e\u90e8 ID\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<img src="/img/cat2/offer-summary.png" alt="Offer summary screen"/>\n')),(0,l.kt)("h2",{id:"\u94b1\u5305\u5f00\u53d1\u8005\u95ee\u9898"},"\u94b1\u5305\u5f00\u53d1\u8005\u95ee\u9898"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6211\u6b63\u5728\u5f00\u53d1 Chia \u94b1\u5305\u3002  \u6211\u9700\u8981\u5bf9\u6211\u7684\u4ee3\u7801\u8fdb\u884c\u54ea\u4e9b\u66f4\u6539\uff1f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'CAT2 \u7684\u5185\u5c42Puzzle\u4e0d\u9700\u8981\u7ed9announcement\u52a0\u4e0a\u56fa\u5b9a\u524d\u7f00\u3002  \u5982\u679c\u60a8\u7ed9announcement\u52a0\u4e0a\u4e86"0xca"\u524d\u7f00\uff08\u8fd9\u662f CAT1 \u7684\u8981\u6c42\uff09\uff0c\u90a3\u4e48\u516c\u544a\u9a8c\u8bc1\u5c06\u5931\u8d25\u5e76\u663e\u793a"ANNOUNCE_CONSUMED_FAILED"\u3002  \u603b\u4e4b\uff0c\u4e0d\u8981\u7ed9\u5185\u90e8Puzzle\u7684announcement\u6dfb\u52a0\u4efb\u4f55\u524d\u7f00\u3002')),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'\u8bf7\u6ce8\u610f\uff0c\u6765\u81ea CAT \u5c42\u7684\u7ed9announcement\u4ecd\u7136\u9700\u8981\u5728\u524d\u9762\u52a0\u4e0a"0xcb"\u3002  \u8fd9\u5728 CAT2 \u4e2d\u6ca1\u6709\u6539\u53d8\u3002'))))}c.isMDXComponent=!0}}]);