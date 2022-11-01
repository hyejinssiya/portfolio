import React from 'react';
import { motion, useScroll } from 'framer-motion';
import MainProject from '../component/MainProject';

const Home = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
      <motion.div className="progress_bar" style={{ scaleX: scrollYProgress }} /> 
      <MainProject />
   </motion.div>
  );
};

export default Home;
