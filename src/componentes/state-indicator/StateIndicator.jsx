import React from 'react'
import styled from 'styled-components'
import Text from '../Texto/Text'

function StateIndicator({text, fontSize, fontWeight, textColor, backgroundColor, borderRadius, margin, padding}) {

    const State = styled.div`
        text-align:center;
        padding:${padding};
        margin:${margin};
        border-radius:${borderRadius};
        background-color:${backgroundColor};
    `

  return (
    <State>
        <Text text={text} fontSize={fontSize} fontWeight={fontWeight} textColor={textColor} margin={0}/>
    </State>
  )
}

export default StateIndicator