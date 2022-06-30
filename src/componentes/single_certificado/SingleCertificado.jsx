import React, { useEffect, useState } from 'react'
import { ObjetoCertificado } from '../blockchain/Certificado'
import {FormattedMessage} from 'react-intl'
import Logo from '../image/logo.png'
import './estilo.css'
import styled from 'styled-components'


function SingleCertificado({
    id=1,
    name='',
    color='lightgreen',
    icon,
    setcertificado,
    certificado,
    colored=false
}) {

    const [data, setdata] = useState({})
    const [selected, setSelected] = useState(false)


    useEffect(() => {
        getData()
        if(certificado==name)setSelected(true)
        
        if(certificado!=name)setSelected(false)

    }, [certificado])
    
const getData=async()=>{
    let ob=new ObjetoCertificado()
    await ob.load()
    let res=await ob.get(id)
    console.log('res: ',res)
    setdata({...data,userName:res.name,academy:res.academy,address:res.owner,
        blockNumber:res.blockNumber,class:res.class})
    
    }
    
    const Div=styled.div`
        background: ${selected?'linear-gradient(-45deg,'+color+',black)':colored?'linear-gradient(-45deg,'+color+',black)':'snow'};
        color: ${selected?'whitesmoke':colored?'white':'gray'};

        &:hover{
            transition: all 0.5 ease-in-out;
            border: 1px dashed ${color};
            letter-spacing: 0.1em;
            background: linear-gradient(-45deg,${color},black);
            color: whitesmoke;
        }
        
    `
  return (
    <Div 
    onClick={()=>setcertificado(name)}
    className='div_central'>
        <h1 className='h1_titulo_certificado'>{name}</h1>

        {icon}
        
        <p className='p_certificado'>
            <FormattedMessage 
            id='titulo_certificado' 
            defaultMessage='Certificate'/>
        </p>
        
    </Div>
  )
}

export default SingleCertificado