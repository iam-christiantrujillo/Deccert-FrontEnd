import React from 'react'
import styled from 'styled-components'
import Boton from '../Boton/Boton'
import NuevoCertificado from '../nuevocertificado/NuevoCertificado'
import Reputation from '../Reputation/Reputation'
import './estilo.css'

function SingleCurso({
  name='Bitcoin',
  description='',
  image='',
  courses=[],
  color1='black',
  reputation='1',
  nfts='1'
}) {

    const Div=styled.div`
        width: 70%;
        min-height: 50vh;
        font-size: 1.5rem; 
        border-radius: 1%;
        text-align: center;
        border: none;
        outline: none;
        box-shadow: 1px 1px 1px 1px white;
        background: rgb(255,255,255,0.1);
        display:block;
        outline: none;
        margin: auto;
        margin-top: 3%;
        color:white;
        font-family: Georgia, 'Times New Roman', Times, serif;

        p{
          font-size: 1.8rem;
        }
        
        &:hover{
            border: 1px solid navy;
            transition: all 0.5s ease-in-out;
        }

        @media (max-width: 500px) {
          width: 98%;
          margin-top: 7%;

          p{
            font-size: 1.8rem;
          }
    
        }
    `
  return (
    <Div>
        <div style={{
          background:'radial-gradient('+color1+',black)',
          height:'26vh',verticalAlign:'top',
          width:'20%',borderRadius:'5%',display:'inline-block'}}>
          <img
          style={{width:'100%',height:'100%'}}
           src={image} alt="" />
        </div>

        <div style={{
          width:'79%',display:'inline-block'}}>

        <p style={{fontFamily:'monospace',fontWeight:'bold'}}>{name}</p>

        <p>{description}</p>
        </div>

        <div style={{display:'inline-block',width:'30%'}}>

        <p className='p_minted_certificades'>Minted certificates: {nfts}</p>

        <Reputation number={reputation}/>

        <Boton 
        fontSize='1.2rem'
        marginLeft='50%'
        marginTop='5%'
        color1={color1}
        text='Website'/>
        </div>

        <div style={{display:'inline-block',width:'70%'}}>
          <h2>Academic plan:</h2>

        {courses.map((item,key)=><p 
          style={{fontFamily:'monospace',fontSize:'1rem'}}
          key={key}>{item}</p>)}

        </div>  


        
    </Div>
  )
}

export default SingleCurso