import React from 'react';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Images ====
import work1 from "../Assets/work1.jpg";
import work2 from "../Assets/work2.jpg";
import work3 from "../Assets/work3.jpg";





// Animations ===
import { motion } from 'framer-motion';
import { pageAnimation, fade, photoAnimation, lineAnimation, slider, scrollReveal } from '../Animation';

// Scroll Animation
import { useScroll } from '../Components/useScroll';


// To Scroll Top
import ScrollTop from '../Components/ScrollTop';

const OurWork = () => {

    // Scroll Animation
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    const [element3, controls3] = useScroll();

    return (
        <StyledWork
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ background: "#fff" }}
        >

            {/* Frame Animation */}
            <Frame1 variants={slider} />
            <Frame2 variants={slider} />
            <Frame3 variants={slider} />
            <Frame4 variants={slider} />


            <StyledMovie variants={scrollReveal} animate={controls} ref={element} initial="hidden">
                <motion.h2 variants={fade}>Middle East</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/work/middle-east">
                    {/* Hiding overflow */}
                    <Hide>
                        <motion.img variants={photoAnimation} src={work1} alt="work1" />
                    </Hide>
                </Link>
            </StyledMovie>

            <StyledMovie variants={scrollReveal} animate={controls2} ref={element2} initial="hidden" >
                <motion.h2 variants={fade}>The Desert</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/work/middle-east">
                    {/* Hiding overflow */}
                    <Hide>
                        <motion.img variants={photoAnimation} src={work2} alt="work2" />
                    </Hide>
                </Link>
            </StyledMovie>

            <StyledMovie variants={scrollReveal} animate={controls3} ref={element3} initial="hidden">
                <motion.h2 variants={fade}>The Sanctuary</motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/work/middle-east">
                    {/* Hiding overflow */}
                    <Hide>
                        <motion.img variants={photoAnimation} src={work3} alt="work3" />
                    </Hide>
                </Link>
            </StyledMovie>



            <ScrollTop />
        </StyledWork>
    );
}


const StyledWork = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 2rem;
    h2{
        padding: 1rem 0rem;
        text-align: center;
    }
`


const StyledMovie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
    @media (max-width:600px){
        padding: 5rem 1rem;
    }
`

const Hide = styled.div`
    overflow: hidden;
`


// Frame Animation
const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`

const Frame2 = styled(Frame1)`
    background: #ff8efb; 
`

const Frame3 = styled(Frame1)`
    background: #8ed2ff; 
`

const Frame4 = styled(Frame1)`
    background: #8effa0; 
`

export default OurWork;
