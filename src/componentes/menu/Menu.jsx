import React, { useEffect, useState,useContext } from 'react'
import Boton from '../Boton/Boton'
import Logo from '../image/logo_deccert.png'
import {langContext}from '../../context/langContext'
import './estilo.css'
import Banderas from '../Banderas/Banderas'
import {
  NavLink
} from "react-router-dom";
import styled from 'styled-components'
import { animateScroll as scroll, Link as ScrollLink} from 'react-scroll'


function Menu({setEstado}) {

  const idioma=useContext(langContext)
  console.log('idioma: ',idioma)
  const [visible, setVisible] = useState(false)

  useEffect(async() => {
    let _res=await Check()
    setVisible(_res)

  }, [])
  

  const Check=async()=>{
    var resFinal=true

    if (window.ethereum !== 'undefined') {
        await window.ethereum
       .request({ method: 'eth_accounts' })
       .then(accounts=>{
         if (accounts.length === 0) {
           resFinal=false            
         }

       })
      }
    return resFinal
}

 const NavLinkStlyed=styled(NavLink)`
    font-family: Georgia, 'Times New Roman', Times, serif;
    cursor: pointer;
    text-decoration: none;
    color: whitesmoke;
    transition: all 0.5s ease-in-out;
    font-size: 1.3rem;
    display: flex;
    margin-right: 10%;


&:hover{
    color: skyblue;
    font-size: 1.5rem;
    transition: all 0.5s ease-in-out;
}


@media (min-width:320px){
        font-size:0.8rem;
    }
    @media (min-width:1000px){
        font-size:1.4rem;
    }
`

  return (
    
    <div 
    className='div_menu'>
        <nav className='nav_menu'>

        <NavLinkStlyed
        style={{marginLeft:'2%'}}
        to='/mint'>
        <img 
        width='7%' 
        src={Logo}></img>
        </NavLinkStlyed>

        <NavLinkStlyed
        to='/'>
              HOME
        </NavLinkStlyed>  

        <NavLinkStlyed
        to='/'>
        <ScrollLink
            activeClass="active"
            to="seccion_cursos"
            spy={true}
            smooth={true}
            offset={-65}
            duration={1000}>
              
            CURSES
          </ScrollLink>
        </NavLinkStlyed>  

        <NavLinkStlyed
        to='/'>
        <ScrollLink
            activeClass="active"
            to="nfts_id"
            spy={true}
            smooth={true}
            offset={-65}
            duration={1000}>
              
            CLASSES
          </ScrollLink>
        </NavLinkStlyed>  


        <NavLinkStlyed to='/nft'>
              NFTS
        </NavLinkStlyed>

       
     

       <Banderas idioma={idioma}/>

       </nav>
       {!visible&&
        <Boton 
        padding2='0.6%'
        text_id='connect_wallet'
        color1='navy' color2='hotpink'
        text='Connect Wallet' onClick={async()=>await window.ethereum.request({ method: 'eth_requestAccounts' })}/>}
     
    </div>
    
  )
}

export default Menu