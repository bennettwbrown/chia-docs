"use strict";(self.webpackChunkchia_docs=self.webpackChunkchia_docs||[]).push([[729],{1395:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=s(5893),o=s(1151);const r={title:"Wallet Protocol",slug:"/wallet-protocol"},i=void 0,l={id:"protocol/wallet-protocol",title:"Wallet Protocol",description:"This protocol is a bidirectional protocol for communication between full nodes and wallets in the Chia system. This is also sometimes referred to as the light client protocol.",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/protocol/wallet-protocol.md",sourceDirName:"protocol",slug:"/wallet-protocol",permalink:"/zh-Hans/wallet-protocol",draft:!1,unlisted:!1,editUrl:"https://github.com/Chia-Network/chia-docs/blob/main/docs/protocol/wallet-protocol.md",tags:[],version:"current",frontMatter:{title:"Wallet Protocol",slug:"/wallet-protocol"},sidebar:"tutorialSidebar",previous:{title:"Pool Protocol 1.0 Specification",permalink:"/zh-Hans/pool-protocol-specification"},next:{title:"\u6458\u8981",permalink:"/zh-Hans/green-paper-abstract"}},a={},c=[{value:"Privacy Protocol",id:"privacy-protocol",level:2},{value:"Fast Sync Protocol (recommended)",id:"fast-sync-protocol-recommended",level:2},{value:"request_puzzle_solution",id:"request_puzzle_solution",level:2},{value:"respond_puzzle_solution",id:"respond_puzzle_solution",level:2},{value:"reject_puzzle_solution",id:"reject_puzzle_solution",level:2},{value:"send_transaction",id:"send_transaction",level:2},{value:"transaction_ack",id:"transaction_ack",level:2},{value:"new_peak_wallet",id:"new_peak_wallet",level:2},{value:"request_block_header",id:"request_block_header",level:2},{value:"respond_block_header",id:"respond_block_header",level:2},{value:"reject_header_request",id:"reject_header_request",level:2},{value:"request_removals",id:"request_removals",level:2},{value:"respond_removals",id:"respond_removals",level:2},{value:"reject_removals_request",id:"reject_removals_request",level:2},{value:"request_additions",id:"request_additions",level:2},{value:"respond_additions",id:"respond_additions",level:2},{value:"reject_additions_request",id:"reject_additions_request",level:2},{value:"request_header_blocks",id:"request_header_blocks",level:2},{value:"reject_header_blocks",id:"reject_header_blocks",level:2},{value:"respond_header_blocks",id:"respond_header_blocks",level:2},{value:"register_for_ph_updates",id:"register_for_ph_updates",level:2},{value:"respond_to_ph_updates",id:"respond_to_ph_updates",level:2},{value:"register_for_coin_updates",id:"register_for_coin_updates",level:2},{value:"respond_to_coin_updates",id:"respond_to_coin_updates",level:2},{value:"coin_state_update",id:"coin_state_update",level:2},{value:"request_children",id:"request_children",level:2},{value:"respond_children",id:"respond_children",level:2},{value:"request_ses_info",id:"request_ses_info",level:2},{value:"respond_ses_info",id:"respond_ses_info",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This protocol is a bidirectional protocol for communication between full nodes and wallets in the Chia system. This is also sometimes referred to as the light client protocol."}),"\n",(0,t.jsx)(n.p,{children:"The wallet protocol contains two sub protocols by which a wallet can sync transaction from a node."}),"\n",(0,t.jsx)(n.h2,{id:"privacy-protocol",children:"Privacy Protocol"}),"\n",(0,t.jsx)(n.p,{children:"The first is the privacy protocol, where the wallet downloads each header and checks the filter for transactions. It is more private, but much slower."}),"\n",(0,t.jsx)(n.h2,{id:"fast-sync-protocol-recommended",children:"Fast Sync Protocol (recommended)"}),"\n",(0,t.jsx)(n.p,{children:"The second is the fast sync protocol, where the wallet directly asks the node to look for certain coin ids or puzzle hashes. It has less privacy but is much faster. The following is the flow for syncing for a wallet that any wallet developer should follow. It is important to connect to several random nodes to increase security. This sync protocol should be very fast for users who don't have many transactions."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Perform a DNS lookup to obtain random node IPS: ",(0,t.jsx)(n.code,{children:"dig dns-introducer.chia.net"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Connect to a few nodes, to ensure the server does not omit transactions. The nodes will send a ",(0,t.jsx)(n.code,{children:"new_peak_wallet"})," message with their claimed peaks."]}),"\n",(0,t.jsx)(n.li,{children:"Download a weight proof from one of the nodes (or several) with the heaviest peak"}),"\n",(0,t.jsx)(n.li,{children:"Verify the weight proof to make sure the claimed peak is correct"}),"\n",(0,t.jsx)(n.li,{children:"Subscribe to first 100 puzzle hashes for our key (both observer and non-observer)"}),"\n",(0,t.jsx)(n.li,{children:"Validate the puzzle hash subscription state returned from the full node. This requires making sure the block in which these coins are included is part of the chain of SubEpochSummaries. Only the block hashes have to be checked here. Furthermore, a few block headers (around 30-50) should be validated after this block to make sure it is properly buried."}),"\n",(0,t.jsx)(n.li,{children:"From step 5, we obtain all coin IDs which we are interested in, and we restore any CAT wallets for coins which have our puzzle hash in the hint."}),"\n",(0,t.jsx)(n.li,{children:"Subscribe to interesting coin IDs"}),"\n",(0,t.jsx)(n.li,{children:"Validate the coin subscription returned from the full node, similar to how it's done in step 5"}),"\n"]}),"\n",(0,t.jsx)(n.h1,{id:"protocol-messages",children:"Protocol Messages"}),"\n",(0,t.jsx)(n.h2,{id:"request_puzzle_solution",children:"request_puzzle_solution"}),"\n",(0,t.jsx)(n.p,{children:"A request from the wallet to the full node for the puzzle and solution of a certain spent coin ID."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RequestPuzzleSolution(Streamable):\n    coin_name: bytes32  # ID of the spent coin\n    height: uint32      # Spent height\n"})}),"\n",(0,t.jsx)(n.h2,{id:"respond_puzzle_solution",children:"respond_puzzle_solution"}),"\n",(0,t.jsxs)(n.p,{children:["A response to a ",(0,t.jsx)(n.code,{children:"request_puzzle_solution"})," request."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"\nclass RespondPuzzleSolution(Streamable):\n    response: PuzzleSolutionResponse\n\nclass PuzzleSolutionResponse(Streamable):\n    coin_name: bytes32\n    height: uint32\n    puzzle: Program\n    solution: Program\n"})}),"\n",(0,t.jsx)(n.h2,{id:"reject_puzzle_solution",children:"reject_puzzle_solution"}),"\n",(0,t.jsxs)(n.p,{children:["A rejection to a ",(0,t.jsx)(n.code,{children:"request_puzzle_solution"})," request."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RejectPuzzleSolution(Streamable):\n    coin_name: bytes32\n    height: uint32\n"})}),"\n",(0,t.jsx)(n.h2,{id:"send_transaction",children:"send_transaction"}),"\n",(0,t.jsx)(n.p,{children:"A message by which a wallet can send a transaction to the mempool and broadcast it to the network. The full node will attempt to include it into the mempool."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class SendTransaction(Streamable):\n    transaction: SpendBundle\n"})}),"\n",(0,t.jsx)(n.h2,{id:"transaction_ack",children:"transaction_ack"}),"\n",(0,t.jsxs)(n.p,{children:["A response to a ",(0,t.jsx)(n.code,{children:"send_transaction"})," message. After attempting to include the transaction, the mempool inclusion status is returned, with an optional english error string in case it did not succeed."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class MempoolInclusionStatus(IntEnum):\n    SUCCESS = 1  # Transaction added to mempool\n    PENDING = 2  # Transaction not yet added to mempool\n    FAILED = 3  # Transaction was invalid and dropped\n\nclass TransactionAck(Streamable):\n    txid: bytes32\n    status: uint8  # MempoolInclusionStatus\n    error: Optional[str]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"new_peak_wallet",children:"new_peak_wallet"}),"\n",(0,t.jsx)(n.p,{children:"A notification from the full node to the wallet that the blockchain's peak has changed."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class NewPeakWallet(Streamable):\n    header_hash: bytes32       # New peak of the blockchain\n    height: uint32             # New peak's height\n    weight: uint128            # New peak's weight\n    fork_point_with_previous_peak: uint32\n"})}),"\n",(0,t.jsx)(n.h2,{id:"request_block_header",children:"request_block_header"}),"\n",(0,t.jsx)(n.p,{children:"A request from the wallet to the full node for a HeaderBlock at a specific height."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RequestBlockHeader(Streamable):\n    height: uint32  # Height of the header block\n"})}),"\n",(0,t.jsx)(n.h2,{id:"respond_block_header",children:"respond_block_header"}),"\n",(0,t.jsxs)(n.p,{children:["A response to a ",(0,t.jsx)(n.code,{children:"request_block_header"})," request."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RespondBlockHeader(Streamable):\n    header_block: HeaderBlock\n"})}),"\n",(0,t.jsx)(n.h2,{id:"reject_header_request",children:"reject_header_request"}),"\n",(0,t.jsxs)(n.p,{children:["A rejection to a ",(0,t.jsx)(n.code,{children:"request_block_header"})," request."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RejectHeaderRequest(Streamable):\n    height: uint32\n"})}),"\n",(0,t.jsx)(n.h2,{id:"request_removals",children:"request_removals"}),"\n",(0,t.jsxs)(n.p,{children:["A request from the wallet to the full node for the removals (removed coins) of a certain block. If ",(0,t.jsx)(n.code,{children:"coin_names"})," is None, we are requesting all removals in the block. Otherwise, we are requesting only these specific removal coin IDs."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RequestRemovals(Streamable):\n    height: uint32        # Height of the block\n    header_hash: bytes32  # Header hash of the block\n    coin_names: Optional[List[bytes32]]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"respond_removals",children:"respond_removals"}),"\n",(0,t.jsxs)(n.p,{children:["A response to a ",(0,t.jsx)(n.code,{children:"request_removals"})," request. If ",(0,t.jsx)(n.code,{children:"coin_names"})," is None, all removals are returned, and ",(0,t.jsx)(n.code,{children:"proofs"})," is set to None. Otherwise, only the requested coins are returned, (id to coin tuples) and a proof is returned for each coin id (id to proof tuples). The proofs are merkle set inclusion proofs. See ",(0,t.jsx)(n.code,{children:"merkle_set.py"})," in chia-blockchain for more info on how to verify these proofs."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RespondRemovals(Streamable):\n    height: uint32\n    header_hash: bytes32\n    coins: List[Tuple[bytes32, Optional[Coin]]]\n    proofs: Optional[List[Tuple[bytes32, bytes]]]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"reject_removals_request",children:"reject_removals_request"}),"\n",(0,t.jsxs)(n.p,{children:["A rejection to a ",(0,t.jsx)(n.code,{children:"request_removals"})," request."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RejectRemovalsRequest(Streamable):\n    height: uint32\n    header_hash: bytes32\n"})}),"\n",(0,t.jsx)(n.h2,{id:"request_additions",children:"request_additions"}),"\n",(0,t.jsxs)(n.p,{children:["A request from the wallet to the full node for the additions (added coins) of a certain block. If ",(0,t.jsx)(n.code,{children:"puzzle_hashes"})," is None, we are requesting all additions in the block. Otherwise, we are requesting only additions which have this puzzle hash."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RequestAdditions(Streamable):\n    height: uint32\n    header_hash: Optional[bytes32]\n    puzzle_hashes: Optional[List[bytes32]]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"respond_additions",children:"respond_additions"}),"\n",(0,t.jsxs)(n.p,{children:["A response to a ",(0,t.jsx)(n.code,{children:"request_additions"})," request. If ",(0,t.jsx)(n.code,{children:"puzzle_hashes"})," is None, all additions are returned, and ",(0,t.jsx)(n.code,{children:"proofs"})," is set to None. Otherwise, only the requested coins are returned, (puzzle_hash to list of coin tuples, since multiple coins can have the same puzzle hash) and a proof is returned for each coin (puzzle_hash, proof, proof2 tuples). The proofs are merkle set inclusion proofs. See ",(0,t.jsx)(n.code,{children:"merkle_set.py"})," in chia-blockchain for more info on how to verify these proofs. ",(0,t.jsx)(n.code,{children:"proof"})," refers to a proof of the puzzle hash in the merkle set, and ",(0,t.jsx)(n.code,{children:"proof2"})," is the merkle proof of ",(0,t.jsx)(n.code,{children:"sha256(concatenation of coin ids)"})," for each puzzle hash, in the merkle set. Both are included as elements in the merkle set for each block."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RespondAdditions(Streamable):\n    height: uint32\n    header_hash: bytes32\n    coins: List[Tuple[bytes32, List[Coin]]]     # puzzle hash => List[Coin] with that puzzle hash\n    proofs: Optional[List[Tuple[bytes32, bytes, Optional[bytes]]]]  # Puzzle hash. proof, proof2\n"})}),"\n",(0,t.jsx)(n.h2,{id:"reject_additions_request",children:"reject_additions_request"}),"\n",(0,t.jsxs)(n.p,{children:["A rejection to a ",(0,t.jsx)(n.code,{children:"request_additions"})," request"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RejectAdditionsRequest(Streamable):\n    height: uint32\n    header_hash: bytes32\n"})}),"\n",(0,t.jsx)(n.h2,{id:"request_header_blocks",children:"request_header_blocks"}),"\n",(0,t.jsx)(n.p,{children:"A request from the wallet to the full node for a list of consecutive header blocks, inclusive."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RequestHeaderBlocks(Streamable):\n    start_height: uint32\n    end_height: uint32\n"})}),"\n",(0,t.jsx)(n.h2,{id:"reject_header_blocks",children:"reject_header_blocks"}),"\n",(0,t.jsxs)(n.p,{children:["A rejection for a ",(0,t.jsx)(n.code,{children:"request_header_blocks"})," request."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RejectHeaderBlocks(Streamable):\n    start_height: uint32\n    end_height: uint32\n"})}),"\n",(0,t.jsx)(n.h2,{id:"respond_header_blocks",children:"respond_header_blocks"}),"\n",(0,t.jsxs)(n.p,{children:["A response to a ",(0,t.jsx)(n.code,{children:"request_header_blocks"})," request."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RespondHeaderBlocks(Streamable):\n    start_height: uint32\n    end_height: uint32\n    header_blocks: List[HeaderBlock]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"register_for_ph_updates",children:"register_for_ph_updates"}),"\n",(0,t.jsxs)(n.p,{children:["A request from the wallet to the full node to register for updates to a puzzle hash. This is part of the fast sync protocol. Whenever a new coin with one of these puzzle hashes (or hint) is created or spent, the full node will send a notification to the wallet (",(0,t.jsx)(n.code,{children:"coin_state_update"}),"). Also, a one time notification is sent back with all the updates (",(0,t.jsx)(n.code,{children:"respond_to_ph_updates"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RegisterForPhUpdates(Streamable):\n    puzzle_hashes: List[bytes32]\n    min_height: uint32\n"})}),"\n",(0,t.jsx)(n.h2,{id:"respond_to_ph_updates",children:"respond_to_ph_updates"}),"\n",(0,t.jsxs)(n.p,{children:["A one-time response to ",(0,t.jsx)(n.code,{children:"register_for_ph_updates"})," with all the confirmation or spent heights, and all the CoinStates. CoinState is an object that shows a change in a coin. if ",(0,t.jsx)(n.code,{children:"spent_height"})," is not None, that means the coin was spent. If ",(0,t.jsx)(n.code,{children:"created_height"})," is not None, that means the coin was created but not spent. If both are None, it means the coin was reverted (reorged out of the chain) and no longer exists."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RespondToPhUpdates(Streamable):\n    puzzle_hashes: List[bytes32]\n    min_height: uint32\n    coin_states: List[CoinState]\n\nclass CoinState(Streamable):\n    coin: Coin\n    spent_height: Optional[uint32]\n    created_height: Optional[uint32]\n`\n"})}),"\n",(0,t.jsx)(n.h2,{id:"register_for_coin_updates",children:"register_for_coin_updates"}),"\n",(0,t.jsxs)(n.p,{children:["A request from the wallet to the full node to register for updates to a coin ID. This is part of the fast sync protocol. Whenever a new coin with one of these coin IDs is created or spent, the full node will send a notification to the wallet (",(0,t.jsx)(n.code,{children:"coin_state_update"}),"). Also, a one time notification is sent back with all the updates (",(0,t.jsx)(n.code,{children:"respond_to_coin_updates"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RegisterForCoinUpdates(Streamable):\n    coin_ids: List[bytes32]\n    min_height: uint32\n"})}),"\n",(0,t.jsx)(n.h2,{id:"respond_to_coin_updates",children:"respond_to_coin_updates"}),"\n",(0,t.jsxs)(n.p,{children:["A one-time response to ",(0,t.jsx)(n.code,{children:"register_for_coin_updates"})," with all the confirmation or spent heights, and all the CoinStates."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RespondToCoinUpdates(Streamable):\n    coin_ids: List[bytes32]\n    min_height: uint32\n    coin_states: List[CoinState]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"coin_state_update",children:"coin_state_update"}),"\n",(0,t.jsx)(n.p,{children:"This is an update but not in response to a request. The full node will send the update whenever a new block is confirmed which contains removals or additions that are interesting to the wallet."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class CoinStateUpdate(Streamable):\n    height: uint32\n    fork_height: uint32\n    peak_hash: bytes32\n    items: List[CoinState]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"request_children",children:"request_children"}),"\n",(0,t.jsx)(n.p,{children:"A request from the wallet to the node for the children of a certain (spent) coin ID."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RequestChildren(Streamable):\n    coin_name: bytes32\n"})}),"\n",(0,t.jsx)(n.h2,{id:"respond_children",children:"respond_children"}),"\n",(0,t.jsxs)(n.p,{children:["A response to a ",(0,t.jsx)(n.code,{children:"request_children"})," request."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RespondChildren(Streamable):\n    coin_states: List[CoinState]\n"})}),"\n",(0,t.jsx)(n.h2,{id:"request_ses_info",children:"request_ses_info"}),"\n",(0,t.jsx)(n.p,{children:"A request from the wallet to the full node for SubEpochSummary heights. This is used for the fast sync protocol, to know where sub epochs start and end."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RequestSESInfo(Streamable):\n    start_height: uint32\n    end_height: uint32\n"})}),"\n",(0,t.jsx)(n.h2,{id:"respond_ses_info",children:"respond_ses_info"}),"\n",(0,t.jsxs)(n.p,{children:["A response to a ",(0,t.jsx)(n.code,{children:"request_ses_info"})," request."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class RespondSESInfo(Streamable):\n    reward_chain_hash: List[bytes32]\n    heights: List[List[uint32]]\n"})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>l,a:()=>i});var t=s(7294);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);