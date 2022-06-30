import React from 'react'
import styled from 'styled-components'

const InputStyled=styled.input`
font-size: ${props=>props.fontSize};
border-radius: ${props=>props.borderRadius};
text-align: ${props=>props.textAllign};
padding: ${props=>props.padding} ${props=>props.padding2};
font-family: Georgia, 'Times New Roman', Times, serif;
font-weight: 900;
border: none;
background: ${props=>props.background};
color: ${props=>props.color};;
outline-width: 0;
`

function Input({
  fontSize='4rem',
  borderRadius='10%',
  placeholder='',
  textAllign='center',
  padding='1%' ,
  padding2='1%',
  width='56%',
  margin='auto',
  display='block',
  onChange=()=>{},
  value='',
  background='transparent',
  color='black'
}) {



  return (
    <InputStyled style={{
      width:width,
      margin:margin,
      display:display
    }}
    type='text' 
    placeholder={placeholder} 
    fontSize={fontSize}
    borderRadius={borderRadius} 
    textAllign={textAllign} 
    padding={padding} 
    padding2={padding2} 
    onChange={onChange}
    value={value}
    background={background}
    color={color}
    />
   
  )
}

export default Input