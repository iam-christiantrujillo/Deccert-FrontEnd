import React from 'react'
import {Certificaciones} from '../../data/certifaciones.js'
import SingleCertificado from '../single_certificado/SingleCertificado.jsx'


function NFT_Types({
    marginTop='none',
    title='DECCERT NFT'
}) {
  return (
    <div style={{
        display:'block',
        margin:'auto',
        marginTop:marginTop,
        marginBottom:'2%',
        width:'90%'}}
        id='nfts_id'
        >
        <p 
        className='p_mint_name_of_the_user'>{title}</p>

        {Certificaciones.map((item,key)=><SingleCertificado
        name={item.name}
        icon={item.icon}
        imagen={item.image}
        color={item.colors[0]}
        colored={true}
        key={key}/>)}
        

        </div>
  )
}

export default NFT_Types