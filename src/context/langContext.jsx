import React, { useState } from 'react'
import LenguajeEnglish from '../languaje/en-US.json'
import LenguajeSpanish from '../languaje/es-MX.json'
import {IntlProvider} from 'react-intl'


const langContext=React.createContext()

const LangProvider=({children})=>{
    const [mensajes, setMensajes] = useState(LenguajeEnglish)
    const [locale, setlocale] = useState('en-US')

    const setLanguaje=(lenguaje)=>{

      switch(lenguaje){
        case 'es-MX':
          setMensajes(LenguajeSpanish)
          setlocale('es-MX')
          break
        case 'en-US':
          setMensajes(LenguajeEnglish)
          setlocale('en-US')
          break

        default:
          setMensajes(LenguajeEnglish)
          setlocale('en-US')
          

        
      }
    }

  return (
    <langContext.Provider value={{setLanguaje:setLanguaje}}>
      <IntlProvider
      locale={locale}
      messages={mensajes}
      >{children}</IntlProvider>
        
    </langContext.Provider>
  )
}
export {LangProvider,langContext}

