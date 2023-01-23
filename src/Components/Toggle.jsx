import React, { useState } from 'react';

import { motion } from 'framer-motion';

const Toggle = (props) => {
    const [toggle, setToggle] = useState(false);
    return (
        <motion.div layout className='question' onClick={() => setToggle(!toggle)}>
            <motion.h4 layout>{props.title}</motion.h4>
            {toggle ? props.children : ""}
            <div className="faq-line"></div>
        </motion.div>
    );
}

export default Toggle;
