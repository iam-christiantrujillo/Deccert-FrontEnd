import React from "react";
import styled from "styled-components";

function Text({text, fontSize, fontWeight, textColor, margin}){

    const Paragraph = styled.p`
        font-size:${fontSize};
        font-weight:${fontWeight};
        color:${textColor};
        margin:${margin};
    `

    return(
        <Paragraph>
            {text}
        </Paragraph>

    )
}

export default Text;