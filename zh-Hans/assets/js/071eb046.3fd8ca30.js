"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[376],{5188:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>h});var o=t(5893),i=t(1151);const s={sidebar_label:"Introduction",title:"Coin Set Intro",slug:"/coin-set-intro"},a=void 0,l={id:"coin-set-model/intro",title:"Coin Set Intro",description:'In any given blockchain, one of the most fundamental questions is, "How do we keep track of the state of the whole system?" Bitcoin uses the Unspent Transaction Output (UTXO) model. Ethereum, along with many other blockchains, use the account model. Chia uses the coin set model, which is similar to UTXO.',source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/coin-set-model/intro.md",sourceDirName:"coin-set-model",slug:"/coin-set-intro",permalink:"/zh-Hans/coin-set-intro",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/coin-set-model/intro.md",tags:[],version:"current",frontMatter:{sidebar_label:"Introduction",title:"Coin Set Intro",slug:"/coin-set-intro"},sidebar:"tutorialSidebar",previous:{title:"Logging Reference",permalink:"/zh-Hans/troubleshooting/logging-reference"},next:{title:"Costs",permalink:"/zh-Hans/coin-set-costs"}},c={},h=[{value:"Key Features",id:"key-features",level:2},{value:"Blockchain",id:"blockchain",level:2},{value:"Puzzles",id:"puzzles",level:2},{value:"Spends",id:"spends",level:2},{value:"Value Added and Spent",id:"value-added-and-spent",level:2},{value:"Account Model vs Coin Set Model",id:"account-model-vs-coin-set-model",level:2},{value:"Benefits of the Account Model",id:"benefits-of-the-account-model",level:3},{value:"Benefits of the Coin Set Model",id:"benefits-of-the-coin-set-model",level:3}];function r(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:['In any given blockchain, one of the most fundamental questions is, "How do we keep track of the state of the whole system?" Bitcoin uses the Unspent Transaction Output (UTXO) model. Ethereum, along with many other blockchains, use the account model. Chia uses the ',(0,o.jsx)(n.em,{children:"coin set"})," model, which is similar to UTXO."]}),"\n",(0,o.jsxs)(n.p,{children:["The differences between the above models will be covered in the ",(0,o.jsx)(n.a,{href:"/coin-set-vs-utxo",children:"Coin Set vs UTXO page"})," and the ",(0,o.jsx)(n.a,{href:"/coin-set-vs-account",children:"Coin Set vs Account page"}),". For now, we'll start with a brief explanation of the coin set model."]}),"\n",(0,o.jsxs)(n.p,{children:["The mantra ",(0,o.jsx)(n.em,{children:"everything is a coin"})," will go a long way in helping you to understand the coin set model. There are no accounts. There are only coins."]}),"\n",(0,o.jsx)(n.p,{children:"Coins may only be spent once and anyone can attempt to spend them. However coins are locked with specific rules. They are written in Chialisp, a Turing-complete language with no side effects, allowing for complex functionality, including composability and interoperability between coins."}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://chialisp.com/standard-transactions/",children:"majority of Chia's coins"}),' have one simple rule \u2013 "Anyone with the right private key can spend me."']}),"\n",(0,o.jsx)(n.h2,{id:"key-features",children:"Key Features"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"As stated above, Chia's blockchain only understands coins. There are no accounts at the blockchain level."}),"\n",(0,o.jsx)(n.li,{children:'Technically the coins do not have owners. Anyone can attempt to spend any coin. Most coins are secured such that only someone who possesses a certain public/private key pair may spend them. This person is the coin\'s de facto "owner."'}),"\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.em,{children:"coin set"})," is the total set of all coins on Chia's blockchain."]}),"\n",(0,o.jsxs)(n.li,{children:["The minimum value of a coin is 0 mojos. The theoretical maximum value of a coin is around 18 million XCH (2^64-1 mojos). Each coin can be of any value within this range.","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Note 1: One use case for a zero-mojo coin is to convey information. For example, upon being spent, a zero-mojo coin could make an announcement for a singleton to recreate itself"}),"\n",(0,o.jsxs)(n.li,{children:["Note 2: ",(0,o.jsx)(n.a,{href:"https://chialisp.com/singletons",children:"Singletons"})," must have an odd-numbered value, so their minimum value is 1 mojo (1 trillionth of an XCH)"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"The first block of Chia's blockchain introduced four coins to the coin set, with a total value of 21 million XCH. This is the pre-farm, controlled by Chia Network Inc."}),"\n",(0,o.jsxs)(n.li,{children:["Each additional block introduces a reward of two coins to the coin set (see the ",(0,o.jsx)(n.a,{href:"/block-rewards#farmer-vs-pool-reward",children:"Block Rewards page"})," for more info). For the first three years of Chia's blockchain, the targeted daily average to be introduced is 9216 XCH. This amount will be cut in half in 2024, 2027, 2030, and 2033, after which the targeted daily average will always be 576 XCH. While the exact amount introduced on any given day will vary slightly, one can predict the total amount of XCH in the coin set at any given time, with a high degree of accuracy."]}),"\n",(0,o.jsx)(n.li,{children:"Each coin can only be spent once. Thus, a coin has only two states: unspent and spent. (Technically, there is a third state: not created. This happens when there is a re-org and the creation transaction gets reverted. Re-orgs in Chia are rare, though possible.)"}),"\n",(0,o.jsx)(n.li,{children:"A coin's value cannot be destroyed. Instead, when a coin is spent, its value is released. One or more new coins will be created in the same block, the total value of which will equal the value of the spent coin."}),"\n",(0,o.jsx)(n.li,{children:"The coins themselves are highly programmable, so a wide variety of behavior is possible when a coin is spent."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"blockchain",children:"Blockchain"}),"\n",(0,o.jsx)(n.p,{children:"The Chia blockchain, as explained in the consensus section, is a linked list of blocks, agreed upon by nodes. Nodes also maintain a table of coins. At a low level, a coin in Chia is a record of ownership of a certain amount of XCH, which can be unlocked by providing the correct puzzle and a valid solution."}),"\n",(0,o.jsx)(n.p,{children:"These 3 properties make up each coin, and when hashed together form its id:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Parent Coin Id"}),"\n",(0,o.jsx)(n.li,{children:"Puzzle Hash (hash of the program)"}),"\n",(0,o.jsx)(n.li,{children:"Amount (in mojos)"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The ID of a coin is computed by hashing together its three fields, where amount is encoded in CLVM format:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-chialisp",children:"(sha256 parent_coin_id puzzle_hash amount)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Because the id is a sha256 hash, coins can never be changed. They can only be created and then spent once."}),"\n",(0,o.jsx)(n.h2,{id:"puzzles",children:"Puzzles"}),"\n",(0,o.jsxs)(n.p,{children:["A puzzle is a type of CLVM program that outputs ",(0,o.jsx)(n.a,{href:"https://chialisp.com/conditions",children:"conditions"})," that determine the result of the spend."]}),"\n",(0,o.jsx)(n.p,{children:"Each coin has a puzzle associated with it that determines how, when, and by whom this coin can be spent. It must be chosen at the time of the coin's creation."}),"\n",(0,o.jsx)(n.p,{children:"For example, if Bob wanted to pay Alice, Bob would create a coin with a puzzle (and thus a puzzle hash) which Alice knows how to unlock. Bob can create a coin worth 5 XCH using Alice's puzzle hash, so that only Alice can unlock it."}),"\n",(0,o.jsx)(n.p,{children:"Puzzle hashes are addresses. When you send XCH to someone's address, you're doing this exact thing."}),"\n",(0,o.jsx)(n.h2,{id:"spends",children:"Spends"}),"\n",(0,o.jsx)(n.p,{children:"When Alice wants to spend her coin, she creates a spend bundle that reveals the coin she will spend, the original puzzle, and the solution to that puzzle. The solution usually involves things such as conditions (which can include recipients of the coin). In a standard transaction, Alice is the only one that knows the private key used to sign the transaction, and thus controls that coin."}),"\n",(0,o.jsx)(n.p,{children:"The network has no concept of accounts, or of coin ownership. Anybody can attempt to spend any coin on the network. It's up to the puzzles to prevent coins from being stolen or spent in unintended ways."}),"\n",(0,o.jsx)(n.p,{children:"The data required to spend a coin is:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Coin Id"}),"\n",(0,o.jsx)(n.li,{children:"Puzzle (serialized CLVM program)"}),"\n",(0,o.jsx)(n.li,{children:"Solution (serialized CLVM value)"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"A coin also has the option of requiring an aggregate signature in order to spend it."}),"\n",(0,o.jsxs)(n.p,{children:["You can read more on the ",(0,o.jsx)(n.a,{href:"/spend-bundles",children:"Spend Bundle page"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"value-added-and-spent",children:"Value Added and Spent"}),"\n",(0,o.jsx)(n.p,{children:'Value may only be added to the coin set via the pre-farm (a one-time occurrence) and block rewards (which occur with each transaction block). Value can never be destroyed, though it can be "bricked," for example by sending it to an address for which nobody possesses the private keys.'}),"\n",(0,o.jsx)(n.p,{children:"Typically, in a block's combined spend bundle, value added will be equal to value spent, other than the block rewards. By definition, there are two possible exceptions:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Value added > value spent -- This is not allowed, so the transaction will be rejected. The rejection will usually happen at the mempool level, though a malicious actor could write their own mempool to accept the transaction, in which case the blockchain will reject it."}),"\n",(0,o.jsx)(n.li,{children:"Value added < value spent -- This is allowed, so the transaction will succeed. If the value added is less than the value spent the remaining value will be rewarded to the farmer of the block containing the transaction awarded as a tip (you probably don't want to do that!)."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"account-model-vs-coin-set-model",children:"Account Model vs Coin Set Model"}),"\n",(0,o.jsx)(n.p,{children:"In the account model, which is used by Ethereum and many other systems, balances are kept in accounts. These are permanent data structures which do not get destroyed when they send funds. There are some tradeoffs between the account model and the coin set model (similar to Bitcoin's UTXO model)."}),"\n",(0,o.jsx)(n.h3,{id:"benefits-of-the-account-model",children:"Benefits of the Account Model"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"All logic and state can be stored in one program and one account, simplifying development."}),"\n",(0,o.jsx)(n.li,{children:"It is simple to combine multiple transactions that affect the same dApp in one block."}),"\n",(0,o.jsx)(n.li,{children:"Users and wallets only have to keep track of one account for all of their balances (although the UTXO model can support this)."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"benefits-of-the-coin-set-model",children:"Benefits of the Coin Set Model"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Very parallelizable since each coin spend is independent."}),"\n",(0,o.jsx)(n.li,{children:"Coin value is split between many coins, increasing sandboxing and security. One program cannot call or affect another."}),"\n",(0,o.jsx)(n.li,{children:"Deterministic operation of every spend."}),"\n",(0,o.jsx)(n.li,{children:"More efficient storage of state (although this depends on implementation)."}),"\n",(0,o.jsx)(n.li,{children:"Increased privacy, since one user usually has many coins."}),"\n",(0,o.jsx)(n.li,{children:"Re-applying mempool transactions after a new block is not necessary due to deterministic results."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var o=t(7294);const i={},s=o.createContext(i);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);