import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);
@import url(https://fonts.googleapis.com/css?family=Rubik:300,regular,500,600,700,800,900,300italic,italic,500italic,600italic,700italic,800italic,900italic);
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    html{
        @media (max-width:1200px){
            font-size: 80%;
        }
    }

    body{
        background: #101010;
        font-family: 'Rubik',sans-serif;
        overflow-x: hidden;
    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 2px solid #23d997;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        margin: 2rem 0;
        &:hover{
            background-color: #23d997;
            color: white;
        }
    }

    h2{
        font-weight: lighter;
        font-size: 4rem;
    }

    h3{
        color: white;
    }

    h4{
        font-weight: bold; 
        font-size: 2rem;
    }
    span{
        font-weight: bold;
        color: #23d997;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }
    a{
        font-size: 1.1rem;
    }


`

export default GlobalStyle;