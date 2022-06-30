import React from 'react'
import {FormattedMessage} from 'react-intl'
import styled from 'styled-components'

function Boton({
  text='..',
  onClick=()=>{},
  color1='white' ,
  color2='black',
  color='white',
  fontSize='1rem',
  text_id='.',
  display='block',
  margin='auto',
  marginTop='1%',
  marginLeft='null',
  padding2='1%',
  borderRadius='5%',
  colorBorder='transparent',
  fontWeight='100'
}) {

    const Button=styled.button`
        background: linear-gradient(-45deg,${color1},${color2});
        color:${color};
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: ${fontSize};
        font-weight:${fontWeight};
        border: 1px solid ${colorBorder};
        border-radius: ${borderRadius};
        transition: all 0.5s ease-in-out;
        display: ${display};
        margin: ${margin};
        margin-top: ${marginTop};
        padding:0.5%;
        margin-bottom: 1%;
        margin-left: ${marginLeft};
        &:hover{
            border-radius: 10%;
            padding:${padding2};
            transition: all 1s ease-in-out;
        }
    `
  return (
    <Button onClick={onClick}>
      <FormattedMessage 
      id={text_id}
      defaultMessage={text}/>
    </Button>
  )
}

export default Boton