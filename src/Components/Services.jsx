import React from 'react';


import { FcBinoculars } from "react-icons/fc";
import { FcFilmReel } from "react-icons/fc";
import { FcLightAtTheEndOfTunnel } from "react-icons/fc";
import { FcPhotoReel } from "react-icons/fc";
import styled from 'styled-components';
import imageb from "../Assets/image-b.jpg";

import { StyledAbout, StyledImage, StyledDescription } from '../style';


// For Page Scrolling 
import { fade, scrollReveal } from "../Animation";
import { useScroll } from './useScroll';

const Services = () => {

    const [element, controls] = useScroll();

    return (
        <StyledServices
            ref={element}
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
        >
            <StyledDescriptionServices>
                <h2>High <span>quality</span> services.</h2>

                <StyledCards>
                    <StyledCard>
                        <div className="icon">
                            <FcBinoculars />
                            <h3>Fly</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>

                    <StyledCard>
                        <div className="icon">
                            <FcFilmReel />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>

                    <StyledCard>
                        <div className="icon">
                            <FcLightAtTheEndOfTunnel />
                            <h3>Adventure</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>

                    <StyledCard>
                        <div className="icon">
                            <FcPhotoReel />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </StyledCard>
                </StyledCards>

            </StyledDescriptionServices>

            <StyledImage>
                <img src={imageb} alt="imageb" />
            </StyledImage>
        </StyledServices>
    );
}

// Copying styles from styled about
const StyledServices = styled(StyledAbout)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
    @media (max-width:600px){ 
        padding: 5rem 0rem;
    }
    
`

const StyledDescriptionServices = styled(StyledDescription)`
 
    padding-right: 0rem;
    h2{
        @media (max-width:1300px){
        text-align: center;
        }
    }
    @media (max-width:600px){ 
        padding: 5rem 10rem;
    }
   
`

const StyledCards = styled.div` 
    display: flex;
    flex-wrap: wrap;
    gap:1rem;  

    @media (max-width:1300px){
        justify-content: center
    }

    @media (max-width:600px){ 
        padding: 5rem 2rem;
    }
`

const StyledCard = styled.div`
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-basis:300px;
    .icon{ 
        display: flex;
        align-items: center;
        justify-content: center;
        h3{ 
            margin-left: 1rem; 
            color:black;
            padding:1rem; 
            background: white;
        }
        svg{
            font-size: 4rem;
        }
    }
        p{
  
            text-align: center;
        }
`

export default Services;
