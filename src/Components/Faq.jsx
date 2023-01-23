import React, { useState } from 'react';

import styled from 'styled-components';
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from "../style";


//For toggle animation
import { AnimateSharedLayout } from "framer-motion";
import Toggle from './Toggle';


// For Page Scrolling 
import { fade, scrollReveal } from "../Animation";
import { useScroll } from './useScroll';

const Faq = () => {

    const [element, controls] = useScroll();

    return (
        <StyledFaq
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}
        >
            <h2>Any questions? <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How Do I Start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, expedita.</p>
                    </div>
                </Toggle>

                <Toggle title="What products do you offer?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, expedita.</p>
                    </div>
                </Toggle>

                <Toggle title="Daily Schedule">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, expedita.</p>
                    </div>
                </Toggle>

                <Toggle title="Payment Methods">

                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, expedita.</p>
                    </div>

                </Toggle>
            </AnimateSharedLayout>
        </StyledFaq >
    );
}


const StyledFaq = styled(StyledAbout)`
    display: block;
        user-select: none;
    span{
        display: block;
    }
    h2{
        padding-bottom:2rem;
        font-weight: lighter; 
    }

    h4{
        
        cursor: pointer;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin:2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem; 
        p{
            padding: 1rem 0rem;
            font-size: 1rem; 
        }
    }


`

export default Faq;
