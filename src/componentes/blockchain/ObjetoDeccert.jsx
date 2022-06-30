// import md5 from "md5"
import Web3 from "web3"
import JSON_Contract from '../../build/Deccert.json'
import { actulizarCuenta } from "./Blockchain"
// import { TransformarToWei } from "./Blockchain"
// import { actulizarCuenta } from "./Pago"

import { determinarChain } from "./FiltroChains"

const web3=new Web3(window.ethereum)

export class ObjetoDeccert{
    constructor(){
        this.contrato={}
        this.account=''
    }

    async load(){
        try {
        const id=await web3.eth.net.getId()
        const deployedNetwork=JSON_Contract.networks[id]
        this.account=await actulizarCuenta()
        
        let winner=await determinarChain(deployedNetwork,0)

          const contrato=new web3.eth.Contract(
            JSON_Contract.abi,
            winner
            )
          
            this.contrato=contrato
            return contrato  
        } catch (error) {
          console.log("error en conexion con Deccert Smart Contract:",error)
          return {}
        }
      
      
    }


    async mint(
        userName,
        _certificado,
        _address){
        try {
            var _res=await this.contrato.methods.create(
                userName,
                _certificado,
                _address
                
            ).send({from:this.account})
            return _res        
        } catch (error) {
            console.log('error en HashimaContract.jsx dameTotalHashimas:',error)
            return {}
        }
    
    }

    async firmar(_account,_hash){
        await window.ethereum.request({ method: 'personal_sign',params:[_account,_hash]})

    }
    
    async getEthSignedMessageHash(_message){
        try {
            var messHash=await this.contrato.methods.getEthSignedMessageHash(_message).call()
            return messHash
        } catch (error) {
            console.log('error en HashimaContract.jsx: balanceHashimasCliente: ',error)
            return ''
    
        }
    
    
    }
 
    async getMessageHash(_mensaje){
        try {
            var _res=await this.contrato.methods.getMessageHash(_mensaje).call()
            return _res        
        } catch (error) {
            console.log('error en HashimaContract.jsx dameTotalHashimas:',error)
            return {}
        }
    
    }

    async Verificar(
        _signer,//Quien firma
        _mensaje//Mensaje
        ,_signature//Firma
        ){
            
        var _resultado=await this.contrato.methods.verify(_signer,_mensaje,_signature).call()
        return _resultado
     
    }

    async get(index){
        try {
            var _res=await this.contrato.methods.get(index).call()
            return _res        
        } catch (error) {
            console.log('error en Deccert.jsx get:',error)
            return {}
        }
    
    }

    async getTotal(){
        try {
            var _res=await this.contrato.methods.getTotal().call()
            return _res        
        } catch (error) {
            console.log('error en HashimaContract.jsx dameTotalHashimas:',error)
            return {}
        }
    
    }

    
}


