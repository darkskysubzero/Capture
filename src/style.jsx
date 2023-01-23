import styled from "styled-components"
import { motion } from "framer-motion";

export const StyledAbout = styled(motion.div)`
    min-height: 90vh;
    display: flex; 
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
    position: relative; 
    overflow: hidden;
 
    @media (max-width:1300px){
        display: block;
    }

    @media (max-width:600px){ 
        padding: 5rem 0rem;
    }
`

export const StyledDescription = styled.div` 
    flex: 1 1 500px;
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }
    z-index: 2;

    @media (max-width:1300px){
        padding: 0;
    }

    @media (max-width:600px){ 
        padding: 5rem 10rem;
    }
`

export const StyledImage = styled.div` 
    flex: 1 1 450px;
    overflow: hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
    z-index: 2;

    @media (max-width:600px){ 
        padding: 5rem 2rem;
    }

`

export const StyledHide = styled.div`
    overflow: hidden;
`