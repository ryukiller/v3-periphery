# Ariswap V3 Periphery

[![Tests](https://github.com/Ariswap/uniswap-v3-periphery/workflows/Tests/badge.svg)](https://github.com/Ariswap/uniswap-v3-periphery/actions?query=workflow%3ATests)
[![Lint](https://github.com/Ariswap/uniswap-v3-periphery/workflows/Lint/badge.svg)](https://github.com/Ariswap/uniswap-v3-periphery/actions?query=workflow%3ALint)

This repository contains the periphery smart contracts for the Ariswap V3 Protocol.
For the lower level core contracts, see the [uniswap-v3-core](https://github.com/Ariswap/uniswap-v3-core)
repository.

## Bug bounty

This repository is subject to the Ariswap V3 bug bounty program,
per the terms defined [here](./bug-bounty.md).

## Local deployment

In order to deploy this code to a local testnet, you should install the npm package
`@ariswap/v3-periphery`
and import bytecode imported from artifacts located at
`@ariswap/v3-periphery/artifacts/contracts/*/*.json`.
For example:

```typescript
import {
  abi as SWAP_ROUTER_ABI,
  bytecode as SWAP_ROUTER_BYTECODE,
} from '@ariswap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json'

// deploy the bytecode
```

This will ensure that you are testing against the same bytecode that is deployed to
mainnet and public testnets, and all Ariswap code will correctly interoperate with
your local deployment.

## Using solidity interfaces

The Ariswap v3 periphery interfaces are available for import into solidity smart contracts
via the npm artifact `@ariswap/v3-periphery`, e.g.:

```solidity
import '@ariswap/v3-periphery/contracts/interfaces/ISwapRouter.sol';

contract MyContract {
  ISwapRouter router;

  function doSomethingWithSwapRouter() {
    // router.exactInput(...);
  }
}

```
