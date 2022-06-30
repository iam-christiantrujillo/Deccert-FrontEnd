import React, { useEffect} from 'react'
import {GiBookshelf, GiTeacher, GiWorld,GiMedal} from 'react-icons/gi'
import {FormattedMessage, FormattedNumber,FormattedDate} from 'react-intl'
import Fondo1 from '../image/cabecera_1.jpeg'
import {Certificaciones} from '../../data/certifaciones.js'
import AutomaticText from '../Texto/AutomaticText'
import Cursos from '../cursos/Cursos'
import Boton from '../Boton/Boton'
import {motion,MotionConfig} from 'framer-motion/dist/framer-motion'
import './estilo.css'
import SingleCertificado from '../single_certificado/SingleCertificado'
import NFT_Types from '../NFT_Types/NFT_Types'
import Input from '../Input/Input'


export default function Welcome() {
  
  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <motion.div 
      initial={{width:0}}
      animate={{width:'100%'}}
      exit={{x:window.innerWidth}}
      className='div_main_welcome'>
        {/* <img 
        className='imagen_fondo_welcome'
        src={Fondo1} alt="" /> */}

            <div className='div_header_welcome'>

              <p className='p_texto_principal'>
              <FormattedMessage 
                id='text_welcome'
                defaultMessage='Diplomas NFT para descentralizar la educacion'/>
              </p>

              

              <Boton 
              onClick={async()=>await window.open('https://deccert.com/')}
              marginTop='10%'
              marginLeft='5%'
              fontSize='1.5rem'
              borderRadius='10%'
              padding2='1%'
              colorBorder='lightgreen'
              color1='fuchsia'
              color2='fuchsia'
              display='inline-block'
              text='Landing Page'
              fontWeight='bold'
              />
        

              

            </div>
          
          
          <>
    
            <div className='div_part_welcome'>
              <GiWorld size={95} style={{display:'block',margin:'auto'}}/>

              
                <AutomaticText
                fontSize='1.6rem'
                id='acceso_ilimitado'
                defaultMessage='Ilimited Access'
                />
              <AutomaticText
                  id='protocolo_sin_fronteras'
                  defaultMessage='Ilimited Access'
              />
            </div>

            <div className='div_part_welcome'>
              <GiBookshelf size={95} style={{display:'block',margin:'auto'}}/>


                <AutomaticText
                fontSize='1.6rem'
                id='our_courses'
                defaultMessage='Our Courses'
                />


                <AutomaticText
                fontSize='1.2rem'
                id='actualizacion_automatica_descentralizada'
                defaultMessage='Automatic decentralized update'
                />

            </div>


            <div className='div_part_welcome'>
              <GiTeacher size={95} style={{display:'block',margin:'auto'}}/>
            
                <AutomaticText 
                fontSize='1.6rem'
                defaultMessage='Work with us' 
                id='work_with_us'/>

              <AutomaticText
                fontSize='1.2rem'
                textAlign='center'
                id='academic_process'
                defaultMessage='Use 2.0 NFT´s for your academic process'
                />
            </div>

            
            <div className='div_part_welcome'>
              <GiMedal size={95} style={{display:'block',margin:'auto'}}/>
              
                <AutomaticText
                fontSize='1.6rem'
                id='nft_and_learning'
                defaultMessage='NFT´s 2.0 and Learning'
                />
              <AutomaticText
              fontSize='1.2rem'
              id='blockchain_digital_school'
              defaultMessage='Blockchain in digital schools'
              />
            </div>

            </>


            
      <Cursos/>

      <NFT_Types 
      title='Our Soul Bond DECCERT NFT´s'
      marginTop='20%'/>


      </motion.div>
    </MotionConfig>
  )
}

