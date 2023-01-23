import React from 'react';
import About from '../Components/About';
import Services from '../Components/Services';
import Faq from "../Components/Faq";

// Animations ===
import { motion } from 'framer-motion';
import { pageAnimation } from '../Animation';



// To Scroll Top
import ScrollTop from '../Components/ScrollTop';


const AboutUs = () => {



    return (
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <About />
            <Services />
            <Faq />
            <ScrollTop />
        </motion.div>
    );
}

export default AboutUs;
