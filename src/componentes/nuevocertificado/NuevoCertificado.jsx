import React, { useState } from 'react'
import { ObjetoCertificado } from '../blockchain/Certificado'
import Cursos from '../cursos/Cursos'
import Input from '../Input/Input'
import Insight from '../image/logo.png'
import {FormattedMessage} from 'react-intl'
import styled from 'styled-components'



function NuevoCertificado({
  name,
  color1='navy',
  color2='aqua'
}) {

  const [data, setdata] = useState('')
  const [curso, setcurso] = useState(0)
  const [visible, setvisible] = useState(false)

  const GenerarNFT=async()=>{
    let ob=new ObjetoCertificado()
    await ob.load()

    let res=await ob.get(5)


    if(!data.length>0) return
    await ob.create(data,1)
  }


  const Button=styled.button`
    font-size: 2.2rem;
    background: linear-gradient(45deg,${color1},${color2});
    border-radius: 10%;
    padding: 1% 2%;
    color: whitesmoke;
    transition: all 1s ease-in-out;


    &:hover{
      transition: all 0.5s ease-in-out;
      letter-spacing: 0.1em;
    }

    @media (max-width: 500px) {
          font-size: 1.3rem;
    
    }
  `

  return (<Button 
          style={{display:'block',margin:'auto',marginTop:'1%'}}
          onClick={!visible?()=>setvisible(true):GenerarNFT}
          >
            <FormattedMessage 
            id='button.certify_me' 
            defaultMessage='Certify me'/>
           </Button>
  )
}

export default NuevoCertificado