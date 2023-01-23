import React from 'react';
import imagea from "../Assets/image-a.jpg";
import styled from 'styled-components';
import { StyledAbout, StyledDescription, StyledImage, StyledHide } from "../style";



// FramerMotion
import { motion } from 'framer-motion';
import { titleAnimation, fade, photoAnimation } from '../Animation';
import Wave from './Wave';

const About = () => {



    return (
        <StyledAbout >
            {/* Description */}
            <StyledDescription>
                <div className="title">
                    <StyledHide>
                        <motion.h2
                            variants={titleAnimation}

                        >We work to make</motion.h2>

                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}>your <span>dreams</span> come</motion.h2>
                    </StyledHide>
                    <StyledHide>
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                    </StyledHide>
                </div>
                <motion.p variants={fade}>Contact us for any photography or videography ideas, we have professionals with amazing skills.</motion.p>
                <motion.button variants={fade}>Contact Us</motion.button>
            </StyledDescription>

            {/* Image */}
            <StyledImage>
                <img src={imagea} alt="imagea" variants={photoAnimation} />
            </StyledImage>


        </StyledAbout >
    );
}




export default About;


