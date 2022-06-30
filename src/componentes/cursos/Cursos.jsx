import React from 'react'
import {FormattedMessage} from 'react-intl'
import SingleCurso from './SingleCurso'
import ListaCursos from '../../data/academias.json'
import ButtonLaser from '../Boton/ButtonLaser/ButtonLaser'
import {motion,MotionConfig} from 'framer-motion/dist/framer-motion'



function Cursos({setcurso}) {

  return (
    <MotionConfig transition={{ duration: 0.8 }}>
    <motion.div 
    id='seccion_cursos'
    style={{color:'white',marginTop:'10%'}}
    initial={{width:0}}
    animate={{width:'100%'}}
    exit={{x:window.innerWidth}}>
        <ButtonLaser 
        fontSize='2rem'
        color='skyblue'
        id='join_us'
        texto='Join us'/>
        
        <h1 style={{
          width:'fit-content',
          display:'block',
          margin:'auto',
          fontSize:'2.6rem'}}>
            <FormattedMessage 
            id='titulo.cursos' 
            defaultMessage='Our partners'/>
            </h1>


        {ListaCursos.map((curso,key)=>
          
        <SingleCurso 
        key={key}
        onClick={()=>setcurso(curso.tipo)}
        name={curso.name}
        image={curso.image}
        color1={curso.color[0]}
        description={curso.description}
        courses={curso.courses}
        type={curso.type}
        nfts={curso.nfts}
        reputation={curso.reputation}
        />
     
        )
        }

    </motion.div>
    </MotionConfig>
  )
}

export default Cursos