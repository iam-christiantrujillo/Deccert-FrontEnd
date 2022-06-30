import React from 'react'
import { Button } from 'react-scroll'
import MexicoFlag from '../image/mexico_1.png'
import UsaFlag from '../image/estados-unidos_1.png'

function Banderas({
  idioma,
  widthBandera='100%',
  displayBanderas='inline-block'
}) {

  const tamano='20%'
  return (
    <div style={{width:'20%',display:displayBanderas,marginLeft:'auto'}}>

      <button 
      style={{
        background:'transparent',border:'transparent',
      display:'inline-block',width:tamano
    }}
      >
        <img
        onClick={()=>idioma.setLanguaje('en-US')}
          style={{width:widthBandera}}
         src={UsaFlag}/>
        </button>  

      <button 
      style={{
        background:'transparent',border:'transparent',
        display:displayBanderas,width:tamano}}

      onClick={()=>idioma.setLanguaje('es-MX')}>
        <img
          style={{width:widthBandera}}
          src={MexicoFlag}/>
        
        </button>  
    </div>
  )
}

export default Banderas