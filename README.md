<h1 align="center">saga.tv</h1>

> Next.js frontend for saga.tv dapp on Solana

## Setup

First, install dependencies and copy the .env file:

```bash
npm install & cp .env.example .env.local
```

Then start the app:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## .env

- **`NEXT_PUBLIC_SOLANA_CLUSTER`** can be either `mainnet-beta`, `testnet` or `devnet`. Rule of thumb is to use `devnet` on localhost development, and `mainnet-beta` for production applications
- **`NEXT_PUBLIC_SOLANA_RPC_NODE_ENDPOINT`** is necessary for application to be able to execute any blockchain-specific actions. Not all nodes are reliable 100% of time so it's best to be aware of alternatives! If your default Solana node is underperforming, feel free to find a new one [here](https://www.allthatnode.com/solana.dsrv) or [here](https://github.com/open-sauce-labs/solomon/blob/master/src/constants/rpcNodeProviders.ts). To understand limitations of the default node check out official [Solana RPC endpoint documentation](https://docs.solana.com/cluster/rpc-endpoints)
