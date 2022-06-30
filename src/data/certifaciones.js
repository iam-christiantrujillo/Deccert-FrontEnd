import {GiWaterRecycling} from 'react-icons/gi'
import {MdCastForEducation} from 'react-icons/md'
import {GiHand} from 'react-icons/gi'
import {BiDonateHeart} from 'react-icons/bi'
import {BsGem} from 'react-icons/bs'
import {SiAdguard} from 'react-icons/si'

const size1=60
export const Certificaciones=[
    {name:'Recycling',colors:['lightgreen','lightblue'],icon:<GiWaterRecycling size={size1}/>},
    {name:'Educational',colors:['lightcoral','yellow','black'],icon:<MdCastForEducation size={size1}/>},
    {name:'Participation',colors:['navy','orange'],icon:<GiHand size={size1}/>},
    {name:'Charity',colors:['orange','orange'],icon:<BiDonateHeart size={size1}/>},
    {name:'Authenticity',colors:['hotpink','orange'],icon:<BsGem size={size1}/>},
    {name:'Guarantee',colors:['indigo','orange'],icon:<SiAdguard size={size1}/>},

]