import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import MainVisual from '../component/MainVisual';
import MainProject from '../component/MainProject';
import Contact from '../component/Contact';

const Home = () => {
  const { scrollYProgress } = useScroll();
  
  const projectSection = useRef(null);

  
  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
      <motion.div className="progress_bar" style={{ scaleX: scrollYProgress }} /> 
      <MainVisual />
      <MainProject ref={projectSection} />
      <Contact />
   </motion.div>
  );
};

export default Home;
