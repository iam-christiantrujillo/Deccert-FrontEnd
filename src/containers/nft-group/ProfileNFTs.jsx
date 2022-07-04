import React from 'react'
import NFTCardInfo from '../../componentes/single_ntf/NFTCardInfo'
import NFTImage from "../../componentes/image/image-card-nft-example.png"
import StateIndicator from '../../componentes/state-indicator/StateIndicator'
import profilePhoto from "../../componentes/image/profile-photo-example.jpg"
import './estilo.css'

function ProfileNFTs() {
  return (
    <div className='nfts-group'>
      <div className='group-one'>
        <div className='group-name'>
          <StateIndicator text="Recycling" fontSize={"16px"} fontWeight={"bold"} textColor={"white"} backgroundColor={"black"} borderRadius={"10px"} padding={"20px 10px"} margin={"10px 0"} />
        </div>
        <div className='group-cards-container'>
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />

        </div>
      </div>

      <div className='group-two'>
        <div className='group-name'>
          <StateIndicator text="Educational" fontSize={"16px"} fontWeight={"bold"} textColor={"white"} backgroundColor={"black"} borderRadius={"10px"} padding={"20px 10px"} margin={"10px 0"} />
        </div>

        <div className='group-cards-container'>
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />

        </div>
      </div>

      <div className='group-three'>
        <div className='group-name'>
          <StateIndicator text="Participation" fontSize={"16px"} fontWeight={"bold"} textColor={"white"} backgroundColor={"black"} borderRadius={"10px"} padding={"20px 10px"} margin={"10px 0"} />
        </div>

        <div className='group-cards-container'>
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />

        </div>
      </div>

      <div className='group-four'>
        <div className='group-name'>
          <StateIndicator text="Charity" fontSize={"16px"} fontWeight={"bold"} textColor={"white"} backgroundColor={"black"} borderRadius={"10px"} padding={"20px 10px"} margin={"10px 0"} />
        </div>

        <div className='group-cards-container'>
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />

        </div>
      </div>

      <div className='group-five'>
        <div className='group-name'>
          <StateIndicator text="Authenticity" fontSize={"16px"} fontWeight={"bold"} textColor={"white"} backgroundColor={"black"} borderRadius={"10px"} padding={"20px 10px"} margin={"10px 0"} />
        </div>

        <div className='group-cards-container'>
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />

        </div>
      </div>

      <div className='group-six'>
        <div className='group-name'>
          <StateIndicator text="Guarantee" fontSize={"16px"} fontWeight={"bold"} textColor={"white"} backgroundColor={"black"} borderRadius={"10px"} padding={"20px 10px"} margin={"10px 0"} />
        </div>

        <div className='group-cards-container'>
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />
          <NFTCardInfo NFTImage={NFTImage} NFTName={"Lorem ipsum dolor"} NFTOwnerName={"Satoshi Nakamoto"} NFTOwnerImage={profilePhoto} NFTValue={"1.32 ETH"} NFTSystem={"BSC"} />

        </div>
      </div>

    </div>
  )
}

export default ProfileNFTs