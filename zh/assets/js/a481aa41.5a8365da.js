"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6482],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,y=u["".concat(s,".").concat(d)]||u[d]||h[d]||a;return r?o.createElement(y,i(i({ref:t},p),{},{components:r})):o.createElement(y,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1168:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:3},i="9.3 Plot Public Keys",l={unversionedId:"09keys/plot_public_keys",id:"09keys/plot_public_keys",title:"9.3 Plot Public Keys",description:"So, what is the plot public key shown in the previous section? The plot public key can technically be any BLS public key. As long as the correct signatures are included in the block, full nodes will allow it. However, BLS allows us to combine many public keys into one, which allows native N-of-N signatures without full nodes noticing that a multi-signature is used. In the current versions of chia-blockchain, we use this to our advantage to increase security. Please note that these schemes are not consensus critical, and therefore some farmers might use different strategies for generating their public keys.",source:"@site/docs/09keys/plot_public_keys.md",sourceDirName:"09keys",slug:"/09keys/plot_public_keys",permalink:"/zh/docs/09keys/plot_public_keys",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/09keys/plot_public_keys.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"9.2 Plot IDs",permalink:"/zh/docs/09keys/plot_ids"},next:{title:"9.4 Architecture",permalink:"/zh/docs/09keys/architecture"}},s={},c=[{value:"OG Plots",id:"og-plots",level:2},{value:"Pooled Plots",id:"pooled-plots",level:2},{value:"Plot format",id:"plot-format",level:2}],p={toc:c};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"93-plot-public-keys"},"9.3 Plot Public Keys"),(0,n.kt)("p",null,"So, what is the plot public key shown in the previous section? The plot public key can technically be any BLS public key. As long as the correct signatures are included in the block, full nodes will allow it. However, BLS allows us to combine many public keys into one, which allows native N-of-N signatures without full nodes noticing that a multi-signature is used. In the current versions of ",(0,n.kt)("inlineCode",{parentName:"p"},"chia-blockchain"),", we use this to our advantage to increase security. Please note that these schemes are not consensus critical, and therefore some farmers might use different strategies for generating their public keys."),(0,n.kt)("p",null,"The plot public key is usually generated in one of two ways, the first for OG Plots, and the second for pooled plots."),(0,n.kt)("h2",{id:"og-plots"},"OG Plots"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The plot public key is a 2/2 BLS aggregate public key, which is generated by combining the farmer public key with the local public key."),(0,n.kt)("li",{parentName:"ul"},"The local public key is a random key that is created for each plot, and put into the plot. They are not children of any BLS keys, and therefore are totally independent between plots."),(0,n.kt)("li",{parentName:"ul"},"The farmer key is a key that the farmer machine stores.")),(0,n.kt)("h2",{id:"pooled-plots"},"Pooled Plots"),(0,n.kt)("p",null,'For plots which are generated for use with the Plot NFT pooling protocol, an additional "taproot" secret key is used, making the aggregate key a 3-of-3. This 3rd key can be derived from public information of the other 2 keys, and it ensures that an attacker cannot create two new keys k1 and k2 such that they both add up to the original aggregate key.'),(0,n.kt)("p",null,"The taproot private key is defined as: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"taproot_sk = BLSKeyGen(sha256(bytes(local_pk + farmer_pk) + bytes(local_pk) + bytes(farmer_pk)))\n")),(0,n.kt)("p",null,"Each block requires a signature from the plot key. This means that we need to combine two (or three) signatures:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"from the local secret key (generated by the harvester)"),(0,n.kt)("li",{parentName:"ol"},"from the farmer secret key (generated by the farmer)"),(0,n.kt)("li",{parentName:"ol"},"(optional) from the taproot key (generated by the farmer)")),(0,n.kt)("p",null,"The farmer combines all the signatures to generate the plot signature, which will look like a normal 1-of-1 BLS signature to the rest of the network."),(0,n.kt)("p",null,"Note that signatures from both the local secret key and the farmer secret key are required for the block to be valid. A pool operator cannot derive the farmer secret key if they gain access to the local secret key."),(0,n.kt)("h2",{id:"plot-format"},"Plot format"),(0,n.kt)("p",null,'The plot format depends on whether "farm to public key" or "farm to contract address" is being used. If farming to a contract address, the puzzle hash (address) is directly encoded into the plot. Otherwise, the pool public key is directly encoded into the plot.'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Note that this is not the exact plot format, there are a few more details that are left out here.")),(0,n.kt)("p",null,"The important thing is that the harvester is only storing their local key in the plot, but no other keys are required from the harvester. This key alone is not enough to do anything, since it must be combined with the farmer's key. Therefore, compromising the harvester does not allow an attacker to redirect rewards."),(0,n.kt)("figure",null,(0,n.kt)("img",{src:"/img/keys/plot_format.png",alt:"drawing"})))}h.isMDXComponent=!0}}]);