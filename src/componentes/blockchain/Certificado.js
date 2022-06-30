import Web3 from "web3"
import Json from '../../build/Deccert.json'
import { actulizarCuenta, dameCurrentChain } from "./Blockchain"


const web3=new Web3(window.ethereum)

export class ObjetoCertificado{
    constructor(){
        this.contrato={}
        this.account=''
    }

    async load(){
        const id=await web3.eth.net.getId()
        const deployedNetwork=Json.networks[id]
        var winner=''  
        this.account=await actulizarCuenta()
        // let binanceChainContract='0xD0055681c89841aE5c50787b0F18B5769a5091b9'
        let chainId=await dameCurrentChain()
        

        if(chainId=='0x539'){
           
          winner=deployedNetwork.address

        }else if(chainId=='0x38'){
          // winner='0xD0055681c89841aE5c50787b0F18B5769a5091b9'
          winner='0x66cafdD687b83663512bCfC99e36724d86b11C7e'
        }else{
          
          winner='0x99Dc4a0CF0823b329F75D21278B2941bAffe1Ed7'
        }
        // winner='0xDe002d43CC54d21af12f914C86bBBbEa4D5679A2'
        
        try {
          const contrato=new web3.eth.Contract(
            Json.abi,
            winner
            )
          
            this.contrato=contrato
            return contrato  
        } catch (error) {
          console.log("error en conexion load: ",error)
          return {}
        }
      
      
    }

    async get(_index){
        try {
            var _hashi=await this.contrato.methods.get(_index).call()
            return _hashi        
        } catch (error) {
            console.log('error en HashimaContract.jsx ,dameHashima: ',error)
            return {}       
        }
    
    
    }
    
    async create(
        _name,
        _tipo
        ){

        var _resultado=await this.contrato.methods.createCertificate(
            _name,
            _tipo
            ).send({from:this.account,value:100})
        return _resultado.status
    }


    async dameTotal(){

        try {
            var _res=await this.contrato.methods.dameTotal().call()
            return _res        
        } catch (error) {
            console.log('error en HashimaContract.jsx dameTotalHashimas:',error)
            return {}
        }
    
    }

 

}

