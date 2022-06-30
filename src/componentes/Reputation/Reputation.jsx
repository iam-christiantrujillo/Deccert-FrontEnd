import React, { useEffect, useState } from 'react'
import {BsStarFill,BsStarHalf} from 'react-icons/bs'

function Reputation({
    number
}) {

    const [lista, setlista] = useState([])
    
    useEffect(() => {
        var _list=[]
        console.log('number: ',number)

        for (let index = 0; index < number; index++) {
            _list.push(1)
            
        }
        setlista(_list)
    }, [])
    
  return (
    <div>
        <p style={{fontSize:'1rem'}}>Reputation</p>
        {/* <BsStarFill/> */}
        {lista.map((item,key)=><BsStarFill 
        style={{marginLeft:'0.5%'}}
        size={40} color={'goldenrod'} key={key}/>)}
    </div>
  )
}

export default Reputation