"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[7682],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>y});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(o),d=n,y=h["".concat(s,".").concat(d)]||h[d]||u[d]||a;return o?r.createElement(y,l(l({ref:t},p),{},{components:o})):r.createElement(y,l({ref:t},p))}));function y(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},387:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={title:"Plot Public Keys",slug:"/plot-public-keys"},l=void 0,i={unversionedId:"keys/plot-public-keys",id:"keys/plot-public-keys",title:"Plot Public Keys",description:"So, what is the plot public key shown in the previous section? The plot public key can technically be any BLS public key. As long as the correct signatures are included in the block, full nodes will allow it. However, BLS allows us to combine many public keys into one, which allows native N-of-N signatures without full nodes noticing that a multi-signature is used. In the current versions of chia-blockchain, we use this to our advantage to increase security. Please note that these schemes are not consensus critical, and therefore some farmers might use different strategies for generating their public keys.",source:"@site/docs/keys/plot-public-keys.md",sourceDirName:"keys",slug:"/plot-public-keys",permalink:"/zh/plot-public-keys",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/keys/plot-public-keys.md",tags:[],version:"current",frontMatter:{title:"Plot Public Keys",slug:"/plot-public-keys"},sidebar:"tutorialSidebar",previous:{title:"Plot IDs",permalink:"/zh/plot-ids"},next:{title:"Chia Protocol",permalink:"/zh/chia-protocol"}},s={},c=[{value:"OG Plots",id:"og-plots",level:2},{value:"Pooled Plots",id:"pooled-plots",level:2},{value:"Plot format",id:"plot-format",level:2}],p={toc:c};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"So, what is the plot public key shown in the previous section? The plot public key can technically be any BLS public key. As long as the correct signatures are included in the block, full nodes will allow it. However, BLS allows us to combine many public keys into one, which allows native N-of-N signatures without full nodes noticing that a multi-signature is used. In the current versions of ",(0,n.kt)("inlineCode",{parentName:"p"},"chia-blockchain"),", we use this to our advantage to increase security. Please note that these schemes are not consensus critical, and therefore some farmers might use different strategies for generating their public keys."),(0,n.kt)("p",null,"The plot public key is usually generated in one of two ways, the first for OG Plots, and the second for pooled plots."),(0,n.kt)("h2",{id:"og-plots"},"OG Plots"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The plot public key is a 2/2 BLS aggregate public key, which is generated by combining the farmer public key with the local public key."),(0,n.kt)("li",{parentName:"ul"},"The local public key is a random key that is created for each plot, and put into the plot. They are not children of any BLS keys, and therefore are totally independent between plots."),(0,n.kt)("li",{parentName:"ul"},"The farmer key is a key that the farmer machine stores.")),(0,n.kt)("h2",{id:"pooled-plots"},"Pooled Plots"),(0,n.kt)("p",null,'For plots which are generated for use with the Plot NFT pooling protocol, an additional "taproot" secret key is used, making the aggregate key a 3-of-3. This 3rd key can be derived from public information of the other 2 keys, and it ensures that an attacker cannot create two new keys k1 and k2 such that they both add up to the original aggregate key.'),(0,n.kt)("p",null,"The taproot private key is defined as:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"taproot_sk = BLSKeyGen(sha256(bytes(local_pk + farmer_pk) + bytes(local_pk) + bytes(farmer_pk)))\n")),(0,n.kt)("p",null,"Each block requires a signature from the plot key. This means that we need to combine two (or three) signatures:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"from the local secret key (generated by the harvester)"),(0,n.kt)("li",{parentName:"ol"},"from the farmer secret key (generated by the farmer)"),(0,n.kt)("li",{parentName:"ol"},"(optional) from the taproot key (generated by the farmer)")),(0,n.kt)("p",null,"The farmer combines all the signatures to generate the plot signature, which will look like a normal 1-of-1 BLS signature to the rest of the network."),(0,n.kt)("p",null,"Note that signatures from both the local secret key and the farmer secret key are required for the block to be valid. A pool operator cannot derive the farmer secret key if they gain access to the local secret key."),(0,n.kt)("h2",{id:"plot-format"},"Plot format"),(0,n.kt)("p",null,'The plot format depends on whether "farm to public key" or "farm to contract address" is being used. If farming to a contract address, the puzzle hash (address) is directly encoded into the plot. Otherwise, the pool public key is directly encoded into the plot.'),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This is not the exact plot format, there are a few more details that are left out here.")),(0,n.kt)("p",null,"The important thing is that the harvester is only storing their local key in the plot, but no other keys are required from the harvester. This key alone is not enough to do anything, since it must be combined with the farmer's key. Therefore, compromising the harvester does not allow an attacker to redirect rewards."),(0,n.kt)("figure",null,(0,n.kt)("img",{src:"/img/keys/plot-format.png",alt:"drawing"})))}h.isMDXComponent=!0}}]);