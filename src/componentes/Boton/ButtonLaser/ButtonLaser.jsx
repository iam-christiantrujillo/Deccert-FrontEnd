import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'


import './estilo.css'

function ButtonLaser({
    texto='Bitcoin',
    color='hotpink',
    display='block',
    margin='auto',
    fontSize='1.4rem',
    id=''
}) {

    const A=styled.a`
    display: ${display};
    width: fit-content;
    margin: ${margin};
    font-size: ${fontSize};
    &:hover{
        box-shadow: 0 0 35px ${color};
        letter-spacing: 0.2em;
        background: ${color};
        color: ${color};
    }
    `
  return (
    <A
    className='boton_laser'><span>
    <FormattedMessage
      fontSize='1.2rem'
      id={id}
      defaultMessage={texto}
      />
      </span>
    <i></i>
    </A>
  )
}

export default ButtonLaser
