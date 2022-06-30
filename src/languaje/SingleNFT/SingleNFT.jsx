import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Certificaciones} from '../../data/certifaciones'
import './estilo.css'

function SingleNFT({
    name,
    time,
    data,
    blockNumber
}) {

    const [date, setdate] = useState('')
    const [simbolo, setSimbolo] = useState('')
    const [color, setColor] = useState('snow')


    useEffect(() => {

        setdate(timeConverter(time))
        Certificaciones.forEach(element => {
            if(element.name==data){
                setSimbolo(element.icon)
                setColor(element.colors[0])
            }
        });
    }, [])

    function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month + ' ' + year + ' ' 
        // + hour + ':' + min + ':' + sec ;
        return time;
      }
    
    const Div=styled.div`
        position: relative;
        /* background: radial-gradient(black,${color}); */
        background: seashell;
        box-shadow: 1px 1px 1px 0.5px gray;
        color:black;
        width: 27%;
        display: inline-block;
        margin: auto;
        margin-top: 1%;
        margin-left: 1%;
        font-size: 1.5rem;
        border-radius: 5%;
        padding: 1% 2%;
    `
  return (
    <Div className='div_container_singleNFT'>
        
        

        <h1 className='name_certificado'>{data}</h1>
        

        <p className='p_fecha'>{date}</p>

        <p className='p_nombre_nft'>{name}</p>
        
        
        <p className='numero_bloque_nft'>#{blockNumber}
            <p className='block_number_text'>Block number</p>
        </p>

        {simbolo}
        
    </Div>
  )
}

export default SingleNFT