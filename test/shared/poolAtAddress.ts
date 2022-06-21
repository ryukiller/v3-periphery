import { abi as POOL_ABI } from '@ariswap/v3-core/artifacts/contracts/AriswapV3Pool.sol/AriswapV3Pool.json'
import { Contract, Wallet } from 'ethers'
import { IAriswapV3Pool } from '../../typechain'

export default function poolAtAddress(address: string, wallet: Wallet): IAriswapV3Pool {
  return new Contract(address, POOL_ABI, wallet) as IAriswapV3Pool
}
