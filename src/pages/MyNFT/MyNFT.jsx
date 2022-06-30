import React, { useEffect, useState } from 'react'
import NothingHere from '../../animations/NothingHere/NothingHere'
import { actulizarCuenta } from '../../componentes/blockchain/Blockchain'
import { ObjetoDeccert } from '../../componentes/blockchain/ObjetoDeccert'
import Boton from '../../componentes/Boton/Boton'
import SingleNFT from '../../languaje/SingleNFT/SingleNFT'
import {motion} from 'framer-motion/dist/framer-motion'
import './estilo.css'

function MyNFT() {

    const [listaNFT, setlistaNFT] = useState([])

    useEffect(async() => {
      let objeto=new ObjetoDeccert()
      let account=await actulizarCuenta()
      await objeto.load()
      let _total=await objeto.getTotal()
      var _lista=[]

      for (let index = 1; index < _total+1; index++) {
          let certificado=await objeto.get(index)
          console.log('certificado: ',certificado)
          if(certificado['owner']==account)_lista.push(certificado)
      }
      setlistaNFT(_lista)
    
    }, [])
    
  return (
    <motion.div
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x:window.innerWidth}}>

        {listaNFT.map((item,key)=><SingleNFT 
        id={item[0]}
        name={item['name']}
        time={item['time']}
        data={item['data']}
        blockNumber={item['blockNumber']}
        key={key}/>)}

        {listaNFT.length==0&&
        <>
        {/* <Boton 
        borderRadius='15%'
        padding2='2%'
        fontSize='2.2rem'
        color1='coral'
        color2='darkorange'
        text='Certifications available'/> */}
        <NothingHere/>
        </>}
    </motion.div>
  )
}

export default MyNFT