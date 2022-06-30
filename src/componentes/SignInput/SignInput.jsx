import React, { useEffect, useState } from 'react'
import { actulizarCuenta } from '../blockchain/Blockchain'
import { ObjetoDeccert } from '../blockchain/ObjetoDeccert'

function SignInput() {

    const [account, setaccount] = useState('')
    const [data, setdata] = useState('')
    const [firma, setFirma] = useState('')

    let objeto=new ObjetoDeccert()

    useEffect(async() => {
      let acc=await actulizarCuenta()
      setaccount(acc)
      

    }, [])
    

    const GenerarFirma=async()=>{
      await objeto.load()
      let hash_message=await objeto.getMessageHash(data)
      let _firma=await window.ethereum.request({ method: 'personal_sign',params:[account,hash_message]})
      setFirma(_firma)
    }



    const VerificarFirma=async()=>{
      await objeto.load()
      console.log('cuenta: ',account,
      'firma: ',firma,
      'data',data)
      let verificacion=await objeto.Verificar(account,data,firma)
      console.log('verificar: ',verificacion)
    }



  return (
    <div style={{background:'navy',padding:'5%',margin:'auto',display:'block',color:'white'}}>

        <input 
        type="text"
        value={data}
        onChange={(e)=>setdata(e.target.value)}
        />
        {firma}
        <button onClick={GenerarFirma}>Generar firma</button>
        <button onClick={VerificarFirma}>Verifar</button>

    </div>
  )
}

export default SignInput