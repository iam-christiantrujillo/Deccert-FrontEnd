import React from "react";
import BotonTwo from "../../componentes/Boton/BotonTwo";
import Image from "../../componentes/Imagen/Image";
import Text from "../../componentes/Texto/Text";
import profilePhoto from "../../componentes/image/profile-photo-example.jpg"
import './estilo.css'

function ProfileInfo(){
    return(
        <div className="profile-info-container">
            <div className="account-info">
                <div className="account-photo">
                    <Image src={profilePhoto} alt={"profile-photo"} width={"26rem"} height={"auto"} borderRadius={"2rem"}/>

                </div>

                <div className="account-description">
                    <Text text={"Blockchain Developer"} fontSize={"1.5rem"} textColor={"white"} margin={"4rem 0 0"}/>
                    <Text text={"Satoshi Nakamoto"} fontSize={"4rem"} textColor={"white"} margin={"0"}/>
                    <div className="account-about-text">
                        <Text text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."} 
                            fontSize={"20px"} 
                            textColor={"white"}
                            margin={"2rem 0"}
                        />
                    </div>
                </div>
            </div>

            <div className="account-modifiders">
                <BotonTwo 
                    text={"Edit"} 
                    fontSize={"18px"}
                    buttonLink={"/nft"}
                    textColor={"white"}
                    buttonColor={"black"}
                    borderButton={"1px solid #FFFFFF"}
                    borderRadius={"26px"}
                    padding={"14px 40px"}
                    margin={"10px 0"}
                />
            </div>
        </div>

        
    )
}

export default ProfileInfo;