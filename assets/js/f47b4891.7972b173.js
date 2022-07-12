"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[2696],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),f=d(a),k=l,s=f["".concat(o,".").concat(k)]||f[k]||c[k]||r;return a?n.createElement(s,i(i({ref:e},m),{},{components:a})):n.createElement(s,i({ref:e},m))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=f;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},2360:function(t,e,a){a(7294)},3029:function(t,e,a){a(7294),a(2389)},3349:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c}});var n=a(7462),l=a(3366),r=(a(7294),a(3905)),i=(a(3029),a(2360),["components"]),p={id:"did_cli",title:"DID CLI Reference",sidebar_label:"13.3 DID CLI Reference",sidebar_position:3},o=void 0,d={unversionedId:"13cli/did_cli",id:"13cli/did_cli",title:"DID CLI Reference",description:"Note about Windows command escaping",source:"@site/docs/13cli/did_cli.mdx",sourceDirName:"13cli",slug:"/13cli/did_cli",permalink:"/docs/13cli/did_cli",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/13cli/did_cli.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"did_cli",title:"DID CLI Reference",sidebar_label:"13.3 DID CLI Reference",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Index of commands",permalink:"/docs/13cli/cli"},next:{title:"13.4 NFT CLI Reference",permalink:"/docs/13cli/nft_cli"}},m={},c=[{value:"Reference",id:"reference",level:2},{value:"<code>create</code>",id:"create",level:3},{value:"<code>get_did</code>",id:"get_did",level:3},{value:"<code>set_name</code>",id:"set_name",level:3}],f={toc:c};function k(t){var e=t.components,a=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},f,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Note about Windows command escaping"),(0,r.kt)("p",null,"This document will use Linux/MacOS RPC syntax. When running rpc commands on Windows, you'll need to escape all quotes with backslashes."),(0,r.kt)("p",null,"For example, here is a typical RPC command on Linux and MacOS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'chia rpc wallet create_new_wallet \'{"wallet_type": "nft_wallet"}\'\n')),(0,r.kt)("p",null,"To run the same command on Windows, you need to escape the quotes, so it looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},'chia rpc wallet create_new_wallet \'{\\"wallet_type\\": \\"nft_wallet\\"}\'\n'))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("h3",{id:"create"},(0,r.kt)("inlineCode",{parentName:"h3"},"create")),(0,r.kt)("p",null,"Functionality: Create a DID wallet"),(0,r.kt)("p",null,"Usage: chia wallet did create ","[OPTIONS]"),(0,r.kt)("p",null,"Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-wp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--wallet-rpc-port"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--fingerprint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the fingerprint to specify which wallet to use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the DID wallet name ","[default: None]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-a"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--amount"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the DID amount in mojos. Value must be an odd number. ","[default: 1]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-m"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--fee"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the fees per transaction, in XCH. ","[default: 0]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("p",null,"Create a new DID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet did create -n My_DID\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Successfully created a DID wallet with name My_DID and id 2 on key 4288332900\nSuccessfully created a DID did:chia:17jvhl9z8zj6jma2uxk4mqj22p90hfpf29svlvlyalu8ksyefsvpql7f403 in the newly created DID wallet\n")),(0,r.kt)("p",null,"View your wallet and DID:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet show\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Wallet height: 1117451\nSync status: Synced\nBalances, fingerprint: 4288332900\n\nChia Wallet:\n   -Total Balance:         0.999989999992 txch (999989999992 mojo)\n   -Pending Total Balance: 0.999989999991 txch (999989999991 mojo)\n   -Spendable:             0.0 txch (0 mojo)\n   -Type:                  STANDARD_WALLET\n   -Wallet ID:             1\n\nMy_DID:\n   -Total Balance:         0.0\n   -Pending Total Balance: 1.0\n   -Spendable:             0.0\n   -Type:                  DECENTRALIZED_ID\n   -DID ID:                did:chia:17jvhl9z8zj6jma2uxk4mqj22p90hfpf29svlvlyalu8ksyefsvpql7f403\n   -Wallet ID:             2\n"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"get_did"},(0,r.kt)("inlineCode",{parentName:"h3"},"get_did")),(0,r.kt)("p",null,"Functionality: Get the DID and Coin ID for a DID wallet"),(0,r.kt)("p",null,"Usage: chia wallet did get_did ","[OPTIONS]"),(0,r.kt)("p",null,"Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-wp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--wallet-rpc-port"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--fingerprint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the fingerprint to specify which wallet to use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-i"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ID of the wallet to use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("p",null,"Get info for DID with ID 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"chia wallet did get_did -i 2\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DID:                    did:chia:17jvhl9z8zj6jma2uxk4mqj22p90hfpf29svlvlyalu8ksyefsvpql7f403\nCoin ID:                0xe6c28c30c7dd2801a4cbfdb0e61186315ae9695dde0a75a6901c1394c3300db8\n"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"set_name"},(0,r.kt)("inlineCode",{parentName:"h3"},"set_name")),(0,r.kt)("p",null,"Functionality: Get the DID and Coin ID for a DID wallet"),(0,r.kt)("p",null,"Usage: chia wallet did get_did ","[OPTIONS]"),(0,r.kt)("p",null,"Options:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Short Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Long Command"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-wp"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--wallet-rpc-port"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the port where the Wallet is hosting the RPC interface. See the rpc_port under wallet in config.yaml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-f"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--fingerprint"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the fingerprint to specify which wallet to use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-i"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"INTEGER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ID of the wallet to use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-n"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--name"),(0,r.kt)("td",{parentName:"tr",align:"left"},"TEXT"),(0,r.kt)("td",{parentName:"tr",align:"left"},"True"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set the DID wallet name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"-h"),(0,r.kt)("td",{parentName:"tr",align:"left"},"--help"),(0,r.kt)("td",{parentName:"tr",align:"left"},"None"),(0,r.kt)("td",{parentName:"tr",align:"left"},"False"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show a help message and exit.")))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Example"),(0,r.kt)("p",null,"Set the name for Wallet ID 2 to ",(0,r.kt)("inlineCode",{parentName:"p"},"New Name"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'chia wallet did set_name -i 2 -n "New Name"\n')),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Successfully set a new name for DID wallet with id 2: New Name\n")),(0,r.kt)("p",null,"Confirm changes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"chia wallet show\n")),(0,r.kt)("p",null,"Response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Wallet height: 1117563\nSync status: Synced\nBalances, fingerprint: 4288332900\n\nChia Wallet:\n   -Total Balance:         0.999989999991 txch (999989999991 mojo)\n   -Pending Total Balance: 0.999989999991 txch (999989999991 mojo)\n   -Spendable:             0.999989999991 txch (999989999991 mojo)\n   -Type:                  STANDARD_WALLET\n   -Wallet ID:             1\n\nNew Name:\n   -Total Balance:         1.0\n   -Pending Total Balance: 1.0\n   -Spendable:             1.0\n   -Type:                  DECENTRALIZED_ID\n   -DID ID:                did:chia:17jvhl9z8zj6jma2uxk4mqj22p90hfpf29svlvlyalu8ksyefsvpql7f403\n   -Wallet ID:             2\n\nConnections:\nType      IP                                     Ports       NodeID      Last Connect      MiB Up|Dwn\nFULL_NODE 127.0.0.1                              58444/58444 f40100b8... Jun 15 12:22:02      0.0|1.7\n                                                 -Height: No Info    -Hash: No Info    -Trusted: True\n"))))}k.isMDXComponent=!0}}]);