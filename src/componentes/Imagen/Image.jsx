import React from "react";
import styled from "styled-components";

function Image({src, alt, width, height,borderRadius }){

    const Img = styled.img`
        width:${width};
        height:${height};
        border-radius:${borderRadius};
    `

    return(
        <Img src={src} alt={alt}/>
    )
}

export default Image;