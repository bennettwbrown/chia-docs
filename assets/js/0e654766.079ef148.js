"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={title:"Seeder User Guide",slug:"/guides/seeder-user-guide"},o=void 0,s={unversionedId:"guides/seeder-user-guide",id:"guides/seeder-user-guide",title:"Seeder User Guide",description:"The seeder is a tool designed to keep track of the most reliable nodes on the Chia network. Each instance of the seeder maintains its own separate list of IP addresses for these nodes.",source:"@site/docs/guides/seeder-user-guide.md",sourceDirName:"guides",slug:"/guides/seeder-user-guide",permalink:"/guides/seeder-user-guide",draft:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/guides/seeder-user-guide.md",tags:[],version:"current",frontMatter:{title:"Seeder User Guide",slug:"/guides/seeder-user-guide"},sidebar:"guides",previous:{title:"Simulator User Guide",permalink:"/guides/simulator-user-guide"},next:{title:"Why Chia is Great",permalink:"/guides/why-chia-is-great-video-series"}},l={},d=[{value:"Expectations for Seeder Operators",id:"expectations-for-seeder-operators",level:2},{value:"Installation",id:"installation",level:2},{value:"Special instructions on Ubuntu",id:"special-instructions-on-ubuntu",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Running",id:"running",level:2},{value:"Stopping",id:"stopping",level:2}],u={toc:d},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The seeder is a tool designed to keep track of the most reliable nodes on the Chia network. Each instance of the seeder maintains its own separate list of IP addresses for these nodes."),(0,a.kt)("p",null,"It does so by crawling through the network, periodically revisiting known nodes from its list. If a node is either no longer available, or has exhibited unexpected behavior, the seeder instance removes that node from its list."),(0,a.kt)("p",null,"The seeder runs a mini-DNS server. Anyone can obtain an entry point into Chia's decentralized and permissionless network via a simple DNS request for reliable node IPs."),(0,a.kt)("p",null,"The seeder has very low memory and CPU requirements."),(0,a.kt)("p",null,"Chia's core developers have already been running an instance of the seeder for some time."),(0,a.kt)("p",null,"You can view the current status of this instance by running one of the following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# IPv4\ndig dns-introducer.chia.net\n\n# IPv6\ndig -t AAAA dns-introducer.chia.net\n")),(0,a.kt)("p",null,"Chia has decided to release the seeder as a tool for anyone to maintain their own list of reliable nodes, which contributes to the further decentralization of Chia's network by taking this tool off of the core team's hands."),(0,a.kt)("p",null,"Features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Implements peer statistics and exponentially moving averages over various time-windows, akin to those maintained by its relative, ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/sipa/bitcoin-seeder"},"the bitcoin-seeder"),"."),(0,a.kt)("li",{parentName:"ul"},"Runs a mini-DNS server on port 53, along with a full node to crawl the network."),(0,a.kt)("li",{parentName:"ul"},"Stores peer IPs and peer statistics into a database, so that they are persisted across runs.")),(0,a.kt)("h2",{id:"expectations-for-seeder-operators"},"Expectations for Seeder Operators"),(0,a.kt)("p",null,"The Chia network core developers endeavor to minimize the level of trust in the DNS servers associated with a seeder. In this regard, it is expected for each seeder to be run by an individual or organization recognized as well-intentioned within the Chia community (at the company's discretion)."),(0,a.kt)("p",null,"This entails following good host security practices, maintaining control of the underlying infrastructure, and not transferring control of the seeder they operate."),(0,a.kt)("p",null,"Logging of DNS queries must not be retained longer than necessary (as might be required for the operation of the service), and must not be communicated to any third-party."),(0,a.kt)("p",null,"Each entity maintaining a seeder DNS server is encouraged to make publicly available the details of their operating practices."),(0,a.kt)("p",null,"In keeping with all the previous recommendations, a reachable email address must be published for inquiries regarding said operating practices."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sh install.sh\n. ./activate\nchia init\n")),(0,a.kt)("p",null,"You most certainly will want to specify your own configuration of a domain name server. Do so by editing the config file located at ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.chia/mainnet/config/config.yaml"),", or by running ",(0,a.kt)("inlineCode",{parentName:"p"},"chia configure"),". Please refer to the relevant section below for more details, or enter ",(0,a.kt)("inlineCode",{parentName:"p"},"chia configure --help"),"."),(0,a.kt)("h2",{id:"special-instructions-on-ubuntu"},"Special instructions on Ubuntu"),(0,a.kt)("p",null,"On Ubuntu, it is possible that systemd-resolved already binds port 53. The seeder's built-in DNS server is run on the same port, and systemd-resolved takes precedence by default."),(0,a.kt)("p",null,"Here are special instructions to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/team-exor/generic-seeder#exclamation-special-instructions-for-ubuntu-users-exclamation"},"free port 53"),". Check out point #2 and #3."),(0,a.kt)("p",null,"This amounts to editing ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/systemd/resolved.conf")," to disable binding of systemd-resolved to port 53, or, alternatively, entirely disabling the systemd-resolved service."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"The config file is ",(0,a.kt)("inlineCode",{parentName:"p"},".chia/mainnet/config/config.yaml")," The default values are for running a DNS seeder for mainnet. At the very least, in the ",(0,a.kt)("inlineCode",{parentName:"p"},"seeder:")," section of config.yaml, the variables ",(0,a.kt)("inlineCode",{parentName:"p"},"domain_name"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"nameserver")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"soa")," need to be changed to reflect the NS entry for your server in a domain record."),(0,a.kt)("p",null,"For a local DNS server setup, you will need control of a top-level domain (TLD) allowing administrator access for the purpose of creating additional DNS entries. Any domain registrar should be fine to use."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"While it may be possible to use an existing domain, it is recommended to register a new domain name to specifically run the seeder address.")),(0,a.kt)("p",null,"Proceed by logging into your domain registrar and navigating to the section pertaining to managing DNS records for your domain. Next, click or activate the button or mechanism for creating a new DNS record. Finally, create a new DNS record of type ",(0,a.kt)("inlineCode",{parentName:"p"},"A"),", along with another new DNS record of type ",(0,a.kt)("inlineCode",{parentName:"p"},"NS"),"."),(0,a.kt)("p",null,"For instance, if you want to run a seeder's DNS server on ",(0,a.kt)("inlineCode",{parentName:"p"},"my-chia-seeder.example.com"),", an authoritative NS record in ",(0,a.kt)("inlineCode",{parentName:"p"},"example.com"),"'s domain record will be required, which might point, e.g., to ",(0,a.kt)("inlineCode",{parentName:"p"},"vps.example.com"),"."),(0,a.kt)("p",null,"You can check that this is the case by running the following command (please ensure that you have ",(0,a.kt)("inlineCode",{parentName:"p"},"dig")," on your system by installing the ",(0,a.kt)("inlineCode",{parentName:"p"},"dnsutils")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"bind9-dnsutils")," package; for instance, on Ubuntu, ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo apt install dnsutils")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"$ sudo apt install bind9-dnsutils"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dig -t NS my-chia-seeder.example.com\n")),(0,a.kt)("p",null,"whose output should display, among other information, the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},";; ANSWER SECTION\nmy-chia-seeder.example.com.    86400    IN    NS    vps.example.com\n")),(0,a.kt)("p",null,"Please refer to the following video, from 9:40 onward. For another example on how to ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=DsaxbwwVEXk&t=580s"},"set-up ",(0,a.kt)("inlineCode",{parentName:"a"},"A")," and ",(0,a.kt)("inlineCode",{parentName:"a"},"NS")," records for your domain using DigitalOcean"),"."),(0,a.kt)("h2",{id:"running"},"Running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},". ./activate\nchia start seeder crawler\n")),(0,a.kt)("p",null,"will run both a crawler and a DNS server.\nAlternatively,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},". ./activate\nchia start crawler\n")),(0,a.kt)("p",null,"gives you the option to merely crawl the network so as to get a list of the connectable nodes, without having to set up a DNS server."),(0,a.kt)("h2",{id:"stopping"},"Stopping"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},". ./activate\nchia stop -d all\n")))}p.isMDXComponent=!0}}]);