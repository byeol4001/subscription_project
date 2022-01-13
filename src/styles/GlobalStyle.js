import {createGlobalStyle} from "styled-components"
import reset from "styled-reset"

const GlobalStyle = createGlobalStyle`
    ${reset}
    body{
        padding: 0;
        margin: 0;
        font-family: "Secular One", "Noto Sans KR", sans-serif;
        font-size: 16px;
        letter-spacing: -0.02rem;
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    };
    a{
        text-decoration:none;
    }
`

export default GlobalStyle
