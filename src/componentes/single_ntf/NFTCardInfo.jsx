import React from 'react';
import Image from '../Imagen/Image';
import StateIndicator from '../state-indicator/StateIndicator';
import Text from '../Texto/Text';
import './estilo.css'

function NFTCardInfo({NFTImage, NFTName, NFTSystem, NFTOwnerName, NFTOwnerImage, NFTValue}) {
  return (
    <div className="card-container">
        <div className='card-image'>
            <Image src={NFTImage} alt={"profile-photo"} width={"14rem"} height={"auto"} borderRadius={"1rem"}/>
        </div>

        <div className='card-name'>
            <Text text={NFTName} fontSize={"20px"} textColor={"white"} margin={"0"}/>
            <StateIndicator text={NFTSystem} fontSize={"10px"} fontWeight={"bold"} textColor={"white"} backgroundColor={"#3B37FF"} borderRadius={"5px"} padding={"4px 10px"}/>
        </div>

        <div className='card-info'>
            <div className='owner-info'>
                <Image src={NFTOwnerImage} alt={"profile-photo"} width={"2rem"} height={"auto"} borderRadius={"5px"}/>
                <div className='owner-name'>
                    <Text text={"Owned by"} fontSize={"10px"} textColor={"white"} margin={"0"}/>
                    <Text text={NFTOwnerName} fontSize={"12px"} textColor={"white"} margin={"0"}/>
                </div>

            </div>

            <div className='nft-current-bid'>
                <Text text={"Current Bid"} fontSize={"10px"} textColor={"white"} margin={"0"}/>
                <Text text={NFTValue} fontSize={"12px"} textColor={"white"} margin={"0"}/>
            </div>
        </div>

    </div>
  )
}

export default NFTCardInfo;