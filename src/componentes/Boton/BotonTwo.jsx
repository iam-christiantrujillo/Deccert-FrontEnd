import React from "react";
import styled from "styled-components";

function BotonTwo({ text, fontSize, buttonLink, textColor, buttonColor, borderButton, borderRadius, margin, padding }) {

    const Button = styled.button`
        text-decoration:none;
        cursor:pointer;
        font-size:${fontSize};
        color:${textColor};
        background-color:${buttonColor};
        border:${borderButton};
        border-radius:${borderRadius};
        margin:${margin};
        padding:${padding};
    `

    return (
        <a href={buttonLink}>
            <Button>
                {text}
            </Button>
        </a>
    )

}

export default BotonTwo;