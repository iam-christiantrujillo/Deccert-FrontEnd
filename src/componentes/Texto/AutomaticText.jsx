import React from 'react'
import { FormattedMessage } from 'react-intl'

function AutomaticText({
    id='.',
    defaultMessage='...',
    fontSize='1rem',
    margin='auto',
    width='fit-content',
    textAlign='initial'
}) {
  return (
    <p style={{
        fontSize:fontSize,
        width: width,
        margin:margin,
        textAlign:textAlign
    }}>
        <FormattedMessage 
        id={id}
        defaultMessage={defaultMessage}/>
    </p>
  )
}

export default AutomaticText