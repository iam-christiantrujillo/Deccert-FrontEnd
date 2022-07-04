import React from "react";
import ProfileInfo from "../../containers/profile/ProfileInfo";
import ProfileNFTs from "../../containers/nft-group/ProfileNFTs";

function Profile(){
    return(
        <div>
            <ProfileInfo/>
            <ProfileNFTs/>
        </div>
        
    )
}

export default Profile;