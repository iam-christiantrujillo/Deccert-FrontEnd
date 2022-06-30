import { dameCurrentChain } from "./Blockchain"

export async function determinarChain(deployedNetwork,id){

    let array_binance_mainnet=[
        "0x66cafdD687b83663512bCfC99e36724d86b11C7e"//Deccert
        
    ]
    

    let array_binance_testnet=[
        "0x47cc182104e5ed076e9b6D65817dED530d97e812"//Deccer
    
        
    ]
    
    var winner=''
    let chainId=await dameCurrentChain()

    if(chainId=='0x539'){
        //Gananche fake blockchain
        winner=deployedNetwork.address
      }else if(chainId=='0x38'){
        //Binance smart chain
        winner=array_binance_mainnet[id]
      }else if(chainId=='0x1'){
        //Ethereum
        winner='0x66cafdD687b83663512bCfC99e36724d86b11C7e'

      }else if(chainId=='0x61'){
        //Binance testnet
        winner=array_binance_testnet[id]
      }
      return winner

}