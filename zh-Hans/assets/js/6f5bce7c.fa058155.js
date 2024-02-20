"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[6885],{604:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=n(5893),i=n(1151);n(4866),n(5162);const a={sidebar_label:"Farming Guide",title:"Beginner's Guide to Farming",slug:"/farming-guide"},l=void 0,r={id:"getting-started/farming-guide",title:"Beginner's Guide to Farming",description:"So you want to be a Chia farmer? You've come to the right place!",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/getting-started/farming-guide.md",sourceDirName:"getting-started",slug:"/farming-guide",permalink:"/zh-Hans/farming-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/getting-started/farming-guide.md",tags:[],version:"current",frontMatter:{sidebar_label:"Farming Guide",title:"Beginner's Guide to Farming",slug:"/farming-guide"},sidebar:"tutorialSidebar",previous:{title:"Intro to Chia",permalink:"/zh-Hans/introduction"},next:{title:"Wallet Guide",permalink:"/zh-Hans/getting-started/wallet-guide"}},s={},c=[{value:"Obtain hardware",id:"obtain-hardware",level:2},{value:"Computer",id:"computer",level:3},{value:"Plot storage",id:"plot-storage",level:3},{value:"Database SSD",id:"database-ssd",level:3},{value:"Install Chia",id:"install-chia",level:2},{value:"Run and configure Chia",id:"run-and-configure-chia",level:2},{value:"Create a wallet",id:"create-a-wallet",level:3},{value:"Fund your wallet",id:"fund-your-wallet",level:3},{value:"Sync your node",id:"sync-your-node",level:3},{value:"Join a pool",id:"join-a-pool",level:3},{value:"Create a plot",id:"create-a-plot",level:2},{value:"Start farming",id:"start-farming",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"\u5982\u4f55\u83b7\u5f97\u5e2e\u52a9",id:"\u5982\u4f55\u83b7\u5f97\u5e2e\u52a9",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"So you want to be a Chia farmer? You've come to the right place!"}),"\n",(0,o.jsx)(t.p,{children:"Chia plotting and farming can seem daunting at first, but it's a relatively straightforward process:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#obtain-hardware",children:"Obtain hardware"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#install-chia",children:"Install Chia"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#run-and-configure-chia",children:"Run and configure Chia"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#create-a-plot",children:"Create a plot"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"#start-farming",children:"Start farming"})}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"This guide will take you through each of these steps. We will set up a Chia farm, which includes syncing a full node and creating your first plot. This will take anywhere from an hour to several days, depending on a number of factors. But don't worry -- most of this time will not require you to be active on your computer."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"This guide is intentionally light on technical details. It is only intended to help new users set up a basic farm, ideally using equipment they already own. Subsequent pages on this website will go into the concepts introduced in this guide in much greater detail."})}),"\n",(0,o.jsx)(t.p,{children:"Ready? Let's get started!"}),"\n",(0,o.jsx)(t.h2,{id:"obtain-hardware",children:"Obtain hardware"}),"\n",(0,o.jsx)(t.p,{children:"You may already have everything you need, but let's make sure. (All you need for this tutorial is the minimum requirements. We'll cover more optimized setups later.)"}),"\n",(0,o.jsx)(t.h3,{id:"computer",children:"Computer"}),"\n",(0,o.jsx)(t.p,{children:"Most computers made after 2010 can be used for farming, as long as they have a 64-bit CPU. Windows, Linux, and Mac OS are supported. This entire guide was created from a Windows laptop."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Farming"})," does not require a fast computer. The minimum spec is a Raspberry Pi4 with 4 GB of RAM for a CLI farm, or 8 GB for a GUI farm. (This guide will show you how to set up a GUI farm.) Many farmers choose a Pi because it consumes very little electricity."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"Plotting"}),", on the other hand, is resource-intensive. Luckily, once a plot has been created, it can be farmed for many years. A Pi ",(0,o.jsx)(t.em,{children:"can"})," be used for plotting, but it will be quite slow. As will a laptop. Long-term, these are not great options."]}),"\n",(0,o.jsx)(t.p,{children:"However, for creating your first plot, it's a good idea to use the equipment you already own. Once you get a feel for Chia farming, you will have a much better idea of what to acquire later."}),"\n",(0,o.jsx)(t.h3,{id:"plot-storage",children:"Plot storage"}),"\n",(0,o.jsx)(t.p,{children:"For this guide, we will create a single plot. This will require:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["4 GB of available RAM","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"If you don't have this much, you can use Linux swap space, but it will be very slow"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["275 GB of temporary storage","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"An HDD will work, but it will be slow"}),"\n",(0,o.jsx)(t.li,{children:"An SSD will be much faster; it's a good option for this tutorial"}),"\n",(0,o.jsx)(t.li,{children:"RAM is the fastest option (the minimum for RAM plotting is 256 GB; if you don't have that much, don't worry about it for now)"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["108.8 GB of free space where the plot will live","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"An SSD will work, but is overkill"}),"\n",(0,o.jsx)(t.li,{children:"The vast majority of plots are stored on HDDs"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"A laptop or desktop with 400 GB of free space will satisfy these requirements. A 512-GB external SSD (available for ~$35 on Amazon) is another option."}),"\n",(0,o.jsx)(t.h3,{id:"database-ssd",children:"Database SSD"}),"\n",(0,o.jsx)(t.p,{children:"In order to store the blockchain database, an SSD with at least 520 MB/s read/write speeds is required (it doesn't need to be a high-speed NVMe SSD, but unfortunately HDDs aren't fast enough). As of mid-2023 the database is ~130 GB; a 256 GB SSD will likely be usable until 2025. External and internal SSDs are both fine."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"Let's say you have a computer without much free space. If you add a 1024-GB external SSD, it will be sufficient to create and store a plot, as well as to store the blockchain database. This will not be an ideal setup for creating a larger farm. But if you already have this equipment, you can set up a small farm without spending any money."})}),"\n",(0,o.jsx)(t.p,{children:"Once you have the required hardware, it's time to install Chia."}),"\n",(0,o.jsx)(t.h2,{id:"install-chia",children:"Install Chia"}),"\n",(0,o.jsxs)(t.p,{children:["Head to ",(0,o.jsx)(t.a,{href:"https://www.chia.net/downloads/",children:"the official download page"}),"; download and run the installer for your Operating System. The default settings are fine for most setups."]}),"\n",(0,o.jsxs)(t.p,{children:["Two check boxes will be shown on the last screen after the install has completed. It's a good idea to check both of them. Doing so will allow you to type ",(0,o.jsx)(t.code,{children:"chia"})," in a terminal window without requiring the full path, and it will automatically start the application."]}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/01.png",alt:"Check both boxes",width:"50%"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.h2,{id:"run-and-configure-chia",children:"Run and configure Chia"}),"\n",(0,o.jsxs)(t.p,{children:["The first time Chia starts, you will be given the option to run in either Wallet Mode or Farming Mode. You will be setting up a Chia farm, so click ",(0,o.jsx)(t.code,{children:"CHOOSE FARMING MODE"}),":"]}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/02.png",alt:"Choose farming mode"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.h3,{id:"create-a-wallet",children:"Create a wallet"}),"\n",(0,o.jsxs)(t.p,{children:["Assuming you don't have a wallet yet, click ",(0,o.jsx)(t.code,{children:"CREATE A NEW WALLET KEY"})," (If you already have a wallet, you can import it by clicking the green ",(0,o.jsx)(t.code,{children:"ADD WALLET"})," button):"]}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/03.png",alt:"Create a new wallet key"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.p,{children:"You will be presented with a list of twenty-four words. This is your wallet's recovery phrase. These words are all that are needed to recover your wallet on a new computer. Write them down and store them in a safe place. The order of the words is also important."}),"\n",(0,o.jsxs)(t.p,{children:["You can also choose a custom name for your wallet. Click ",(0,o.jsx)(t.code,{children:"NEXT"})," when you are finished."]}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"If someone obtains a copy of these words, they can steal your entire wallet, including all of its funds. Be sure to store your recovery phrase in a safe place."})}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/04.png",alt:"Wallet seed phrase"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.p,{children:"You will be taken to your wallet, which will show a zero-XCH balance. There will be two round icons in the upper-right corner, one for the full node and one for the wallet:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Full node -- this icon will appear red until you connect to at least one peer. At this point it will turn yellow, which indicates that your full node is syncing."}),"\n",(0,o.jsx)(t.li,{children:"Wallet -- this icon will appear yellow at first. Your wallet will attempt to connect to three peers for syncing. It should be synced within a few seconds, at which point the icon will turn green."}),"\n"]}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/05.png",alt:"Zero wallet balance"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.h3,{id:"fund-your-wallet",children:"Fund your wallet"}),"\n",(0,o.jsxs)(t.p,{children:["If you think you will ever want to join a pool (recommended for small and medium farms), you will need at least one mojo (one trillionth of an XCH). To help with this, we have set up an online faucet. To use the faucet, you will need a receive address. Click ",(0,o.jsx)(t.code,{children:"RECEIVE"})," to display one:"]}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/06.png",alt:"Receive address"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(t.p,{children:["Copy your receive address (it will begin with ",(0,o.jsx)(t.code,{children:"xch"}),") and head to our ",(0,o.jsx)(t.a,{href:"https://faucet.chia.net/",children:"faucet page"}),'. Paste your address, click the "I\'m not a robot" check box, and click ',(0,o.jsx)(t.code,{children:"Submit"}),":"]}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/07.png",alt:"Faucet",width:"75%"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.p,{children:"You should receive a message stating that your money is on the way. Note that you can only use this faucet once."}),"\n",(0,o.jsx)(t.p,{children:"Within a few minutes, your wallet's balance should increase:"}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/08.png",alt:"Wallet with 100 mojos"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"You can continue with this guide while waiting for your 100 mojos to arrive."})}),"\n",(0,o.jsx)(t.h3,{id:"sync-your-node",children:"Sync your node"}),"\n",(0,o.jsxs)(t.p,{children:["Click the ",(0,o.jsx)(t.code,{children:"Full Node"})," icon on the left side of your wallet:"]}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/09.png",alt:"Syncing from genesis"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.p,{children:"This screen shows your node's syncing status. In order to farm Chia, your node needs to be fully synced. You have two options to achieve this:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Sync from genesis -- the above image shows this happening. Your node will connect with up to 80 peers and download information for each block. This is the most secure way to sync a node, and the only way to be sure that the information is accurate. However, it will take at least a few days, and possibly a week or more to sync from genesis, depending on your node's speed, your internet connection, and the quality of the peers to which you connect."}),"\n",(0,o.jsxs)(t.li,{children:["Download a checkpoint database -- this option will allow you to sync much faster, but you have to trust that the information is accurate. For most users, this will be a worthwhile tradeoff.","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Head to our official ",(0,o.jsx)(t.a,{href:"https://www.chia.net/downloads/#database-checkpoint",children:"checkpoint download page"})," and click the ",(0,o.jsx)(t.code,{children:"Torrent"})," link for the mainnet Database."]}),"\n",(0,o.jsxs)(t.li,{children:["When your download has completed, use ",(0,o.jsx)(t.a,{href:"https://www.bittorrent.com/",children:"BitTorrent"})," to open it; be sure to verify it with the checksum listed on the download page."]}),"\n",(0,o.jsx)(t.li,{children:"Move the database to the appropriate destination (see below)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Never"})," download a database from a third party. A database or torrent file with a checksum that does not match the checksum from the official download page is likely malware. Installing malware will result in all of your XCH being stolen, or worse."]})}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsxs)(t.p,{children:["By default, the database will be stored in ",(0,o.jsx)(t.code,{children:"~/.chia/mainnet/db"}),". If you don't want to store it there (for example, if your computer lacks sufficient free space), you will need to change your configuration:"]}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Edit ",(0,o.jsx)(t.code,{children:"~/.chia/mainnet/config/config.yaml"})," -- this is this primary configuration file for all Chia settings."]}),"\n",(0,o.jsxs)(t.li,{children:["Search for ",(0,o.jsx)(t.code,{children:"database_path"})," in the ",(0,o.jsx)(t.code,{children:"full_node:"})," section.","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["The default value is ",(0,o.jsx)(t.code,{children:"db/blockchain_v2_CHALLENGE.sqlite"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["Change the path to the location of your database. For example, to store the database on an external SSD, you might change this to ",(0,o.jsx)(t.code,{children:"/media/externalSSD/db/blockchain_v2_CHALLENGE.sqlite"}),". You do not need to change the name of the .sqlite file."]}),"\n"]}),"\n"]}),"\n"]}),(0,o.jsx)(t.p,{children:"If you change this setting, you will need to restart Chia for the change to be applied."})]}),"\n",(0,o.jsx)(t.p,{children:"Even if you choose to download the checkpoint database, it will take some time for your node to sync. This is because the checkpoint database is only updated once every three months. You will therefore need to sync from the time the checkpoint was taken until the head of the chain."}),"\n",(0,o.jsx)(t.p,{children:"Regardless of which method you choose for syncing, you can continue with this guide while waiting."}),"\n",(0,o.jsx)(t.h3,{id:"join-a-pool",children:"Join a pool"}),"\n",(0,o.jsx)(t.p,{children:"Over the long term, your reward for farming will be directly proportional to the total space on the network (AKA netspace). For example, if your farm controls 1% of the netspace, it will win 1% of the rewards, on average."}),"\n",(0,o.jsxs)(t.p,{children:["Over the short-to-medium term, luck can play a large factor in your winnings. Small farms ",(0,o.jsx)(t.em,{children:"could"})," get lucky and win an outsized number of rewards very quickly, but they are equally likely to be unlucky."]}),"\n",(0,o.jsx)(t.p,{children:"For this tutorial, we are creating a single plot, the smallest farm possible. As of this writing, a single-plot farm will only collect a reward once every 161 years!"}),"\n",(0,o.jsx)(t.p,{children:"So why even bother trying?"}),"\n",(0,o.jsxs)(t.p,{children:["That's where pooling becomes valuable. Pools, well, ",(0,o.jsx)(t.em,{children:"pool"})," their farming resources. When one member of a pool wins a reward, it is split among all participants according to the amount of space they contributed. The effect is a smoothing out of one's rewards over time, resulting in a consistent payout. Most users with small farms (and even some with large farms) join a pool."]}),"\n",(0,o.jsxs)(t.p,{children:["Click the ",(0,o.jsx)(t.code,{children:"Pooling"})," icon on the left side of your wallet, and click ",(0,o.jsx)(t.code,{children:"JOIN A POOL"}),":"]}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/10.png",alt:"Join a pool"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.p,{children:"Before you can join a pool, you will need to create a plot NFT. This will allow you to easily change pools later."}),"\n",(0,o.jsxs)(t.p,{children:["Select ",(0,o.jsx)(t.code,{children:"Connect to pool"}),". You will need to enter a valid pool URL. We will use OpenChia for this example, but there are many great pools to choose from. For a list of reputable pools, see ",(0,o.jsx)(t.a,{href:"https://chialinks.com/pools/",children:"Chialinks.com"}),". (Chia Network, Inc. does not run a pool, and is not affiliated with OpenChia or Chialinks)."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["If you don't want to join a pool, select ",(0,o.jsx)(t.code,{children:"Self pool"}),". This will assign you to a pool with only one participant: you. Later, you can join a pool with the same plot NFT if desired."]})}),"\n",(0,o.jsx)(t.p,{children:"Creating a plot NFT requires an on-chain transaction that will cost one mojo. You are also recommended to enter a blockchain fee. If you used the faucet, you will now have 100 mojos. Depending on how busy the network is, a one-mojo fee is typically enough to complete your transaction within a few minutes."}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/11.png",alt:"Create a plot NFT"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsx)(t.p,{children:"If you have not received your faucet payment, unfortunately you will not be able to create a plot NFT. This is a really important step. If you skip it, you will only ever be able to solo farm with the plots you create. You are therefore not recommended to skip this step."}),(0,o.jsxs)(t.p,{children:["If your faucet payout has not arrived after more than 10 minutes, someone on ",(0,o.jsx)(t.a,{href:"https://discord.gg/chia",children:"Discord"})," might be willing to send you some mojos if you ask nicely."]})]}),"\n",(0,o.jsxs)(t.p,{children:["If you entered a valid pool URL, the details will pop up. For example, this pool has a fee of 1%. If everything looks acceptable, click ",(0,o.jsx)(t.code,{children:"CREATE"}),":"]}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/12.png",alt:"Pool details"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.p,{children:"Your transaction will be pushed to the blockchain. While it is pending, a new screen will appear:"}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/13.png",alt:"Plot NFT pending"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.p,{children:"After the transaction has been finalized (typically 1-3 minutes), the details of your plot NFT will appear:"}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/14.png",alt:"Plot NFT details"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(t.p,{children:['A two-word name will automatically be assigned to your plot NFT, in this case "Harlequin Koala". In order to determine how much space you are contributing, your pool will periodically send you challenges. If you want to change pools later, simply return to this screen and click ',(0,o.jsx)(t.code,{children:"CHANGE POOL"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"Pools typically require you to wait for 30 minutes before leaving. This is to prevent you from leaving the pool when you are about to farm a block, thus keeping the reward for yourself."})}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["Chia's pooling protocol has several significant advantages over pools on other blockchains. Read more about these advantages, as well as the technical details of how the protocol works, in our ",(0,o.jsx)(t.a,{href:"/introduction#pooling",children:"pooling section"}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"create-a-plot",children:"Create a plot"}),"\n",(0,o.jsx)(t.p,{children:"Plots are large files that consist almost entirely of cryptographic data to be used in Chia farming. The plot creation process does not require a full node or wallet to be synced. In fact, it doesn't even require an internet connection."}),"\n",(0,o.jsx)(t.p,{children:"For this tutorial, we will create a plot from inside the same application that runs the node and wallet. For the creation of subsequent plots, you may want to offload this work to a computer that has been optimized for plotting."}),"\n",(0,o.jsxs)(t.p,{children:["From the Chia application, click the ",(0,o.jsx)(t.code,{children:"Farm"})," icon and click ",(0,o.jsx)(t.code,{children:"ADD A PLOT"}),":"]}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/15.png",alt:"Add a plot"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.p,{children:"If you previously created a plot NFT, it will show up now. The plots you create will be associated with this NFT. It is important that you associate all of your plots to the same NFT in order to farm to a pool, as well as to be able to change pools easily if desired. As long as your plot NFT shows up here, there is no need to change it:"}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/16.png",alt:"Plot NFT"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(t.p,{children:["Next, you will need to choose a plotter. When creating a single plot, ",(0,o.jsx)(t.code,{children:"Chia Proof of Space"})," and ",(0,o.jsx)(t.code,{children:"madMAx"})," both will work on almost all hardware. The plot from this example was created with ",(0,o.jsx)(t.code,{children:"madMAx"})," because it requires the smallest amount of temporary disk space."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["When building a larger farm, the plotter you choose will depend greatly on your available hardware. It may help to experiment with multiple plotters to get a feel for which ones work best for your setup. For details on each of the available plotters, see our ",(0,o.jsx)(t.a,{href:"/plotting-software",children:"Plotting Software"})," section."]})}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/18.png",alt:"Choose plotter"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(t.p,{children:["For the ",(0,o.jsx)(t.code,{children:"Keys"})," section, you typically won't need to change anything."]}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/19.png",alt:"\u5bc6\u94a5"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(t.p,{children:["Next, you will need to choose a ",(0,o.jsx)(t.code,{children:"k"})," value, and possibly a compression level."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"k"})," is a constant that dictates the size of the plot. The minimum ",(0,o.jsx)(t.code,{children:"k"})," for Chia's mainnet is 32. This is also the most common size used, by far. With each increment in this value, all of a plot's associated parameters are doubled. For example, a k33 plot is twice as large as a k32 plot, and it requires twice the memory, temporary storage, and time to be created."]}),"\n",(0,o.jsx)(t.p,{children:"For this tutorial, we'll choose k32. Note that some plotters are only capable of creating k32 plots, so you might not see any other options."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["Due to advancements in technology, the minimum ",(0,o.jsx)(t.code,{children:"k"})," value will likely need to be increased at some point. This would require you to replot all k32 plots. However, there are currently no plans to increase the minimum ",(0,o.jsx)(t.code,{children:"k"}),", and we will do our best to give you at least a one-year notice if any such plans are made."]})}),"\n",(0,o.jsxs)(t.p,{children:["Certain plotters are also capable of creating compressed plots, which are discussed in great detail in the ",(0,o.jsx)(t.a,{href:"/plotting-basics",children:"Plotting Basics"})," section. If the ",(0,o.jsx)(t.code,{children:"Compression Level"})," dropdown appears, fee free to select ",(0,o.jsx)(t.code,{children:"3"}),". This is a modest level of compression that even low-power systems can harvest. Most farmers will want to create compressed plots, but for now we just want to get a feel for creating a single plot. A C0 (uncompressed) plot is fine for accomplishing this goal."]}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/20.png",alt:"Choose K value"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.p,{children:"Next, you need to select the temporary and final directories for your plot. The medium for temporary storage will greatly affect the speed at which your plot is created:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"RAM"})," -- For plots created entirely in RAM, there is no temporary storage. RAM plotters can typically create k32 plots in a few minutes, but they also require a significant amount of memory (256 GB - 416 GB, depending on the plotter)."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"SSD"})," -- Most farmers choose to use an enterprise NVMe SSD for the temporary storage. These SSDs can handle large amounts of reads and writes in their lifetimes."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"HDD"})," -- If you don't mind plotting slowly, you can choose a directory located on an HDD."]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"The final directory is where the plot will be copied after it has been created. Most farmers will choose to use an HDD as the final directory. However, for this tutorial an NVMe SSD was used for both the temporary and final directories."}),"\n",(0,o.jsx)(t.admonition,{type:"warning",children:(0,o.jsx)(t.p,{children:"SSDs are rated for a certain number of writes. Creating a plot is write-intensive. If you plan to create thousands of plots, avoid doing so on a consumer SSD or you will risk wearing it out."})}),"\n",(0,o.jsx)(t.p,{children:"You will also need to choose how many plots to create. Certain plotters can be optimized by creating multiple plots in parallel. However, we will only create a single plot for this tutorial:"}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/21.png",alt:"Temporary and final directories"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(t.p,{children:["After you have gone through all of these settings, click ",(0,o.jsx)(t.code,{children:"CREATE"}),". You will be taken to a progress panel:"]}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/22.png",alt:"Plot creation progress"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(t.p,{children:"The amount of time required to create this plot is highly dependent on your hardware. The world record time to create a k32 plot is around 30 seconds. The plot for this tutorial was created on a laptop in around 3 hours."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"Some of the available plotters can create k25 plots. These plots are significantly smaller than k32, so they can be created quickly. However, they are for testing purposes only. Any proof of space taken from a plot smaller than k32 on mainnet will be rejected."})}),"\n",(0,o.jsx)(t.p,{children:'While waiting for your plot to be created, feel free to browse through the Chia application. However, if you shut down the application, the plotting process will be stopped and all progress will be lost. There is no "pause" button for plotting.'}),"\n",(0,o.jsx)(t.h2,{id:"start-farming",children:"Start farming"}),"\n",(0,o.jsxs)(t.p,{children:["Before you can begin farming, you need to be running a synced full node. Earlier in this tutorial, you either chose to sync from genesis, or to sync from a checkpoint database. In both cases, the ",(0,o.jsx)(t.code,{children:"Full Node"})," screen will eventually show a status of ",(0,o.jsx)(t.code,{children:"Synced"}),":"]}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/23.png",alt:"Synced node"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(t.p,{children:["Your node is now synced. If your plot has finished being created, you are also farming. To verify this, click the ",(0,o.jsx)(t.code,{children:"Farm"})," icon:"]}),"\n",(0,o.jsx)("div",{style:{textAlign:"left"},children:(0,o.jsx)("img",{src:"/img/first_plot/24.png",alt:"Farm health"})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsxs)(t.p,{children:["You will be shown a number of details about your farm. As long as the ",(0,o.jsx)(t.code,{children:"Farm Health"})," section has all green icons, everything is working as expected."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Congratulations! You have become a Chia farmer."})}),"\n",(0,o.jsx)(t.p,{children:"There is still a lot to learn, but you already have the basic knowledge needed to grow your farm."}),"\n",(0,o.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,o.jsx)(t.p,{children:"Once you have a small farm up and running, you can decide whether to expand, and how to do so. The following pages will show you:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/plotting-basics",children:"Basic details of Chia plots"}),', including "compressed" versus "uncompressed" plots']}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/plotting-hardware",children:"How to select the optimal computer for plotting"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/plotting-software",children:"List of Chia plotting software"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/plotting-compression",children:"How to choose a plot compression level"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/plotting-how-to",children:"How to create Chia plots"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"/ssd-endurance",children:"Notes about SSD encurance"})}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/moving-plots",children:"How to move plots"})," to their final destinations"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"\u5982\u4f55\u83b7\u5f97\u5e2e\u52a9",children:"\u5982\u4f55\u83b7\u5f97\u5e2e\u52a9"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Get help on CNI's official ",(0,o.jsx)(t.a,{href:"https://discord.gg/chia",children:"Discord"}),", in the ",(0,o.jsx)(t.code,{children:"#farming-and-plotting"})," and ",(0,o.jsx)(t.code,{children:"#support"})," channels."]}),"\n",(0,o.jsxs)(t.li,{children:["\u5728",(0,o.jsx)(t.a,{href:"/plotting-faq",children:"\u751f\u6210\u5730\u5757\u95ee\u7b54"}),"\u4e2d\u83b7\u53d6\u66f4\u591a\u95ee\u9898\u7684\u89e3\u7b54\u3002"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>l});n(7294);var o=n(512);const i={tabItem:"tabItem_Ymn6"};var a=n(5893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,l),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var o=n(7294),i=n(512),a=n(2466),l=n(6550),r=n(469),s=n(1980),c=n(7392),h=n(12);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:i}}=e;return{value:t,label:n,attributes:o,default:i}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=u(e),[l,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[c,d]=f({queryString:n,groupId:i}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,h.Nk)(n);return[i,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),y=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,r.Z)((()=>{y&&s(y)}),[y]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(5893);function x(e){let{className:t,block:n,selectedValue:o,selectValue:l,tabValues:r}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),h=e=>{const t=e.currentTarget,n=s.indexOf(t),i=r[n].value;i!==o&&(c(t),l(i))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:r.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>s.push(e),onKeyDown:d,onClick:h,...a,className:(0,i.Z)("tabs__item",y.tabItem,a?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function b(e){const t=m(e);return(0,w.jsxs)("div",{className:(0,i.Z)("tabs-container",y.tabList),children:[(0,w.jsx)(x,{...e,...t}),(0,w.jsx)(j,{...e,...t})]})}function v(e){const t=(0,g.Z)();return(0,w.jsx)(b,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>l});var o=n(7294);const i={},a=o.createContext(i);function l(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);