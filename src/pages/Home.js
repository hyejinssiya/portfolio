import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import MainProject from '../component/MainProject';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
      <motion.div className="progress_bar" style={{ scaleX: scrollYProgress }} /> 
      <MainProject />

      {/* <div style={{ height: '100px' }}>
      <div
        style={{
          position: 'sticky',
          bottom: 0,
          height: '100px',
          width: '100%'
        }}
      >
          <motion.p className="bg_txt" style={{ x }}>
          2022 Portfolio Kwon Hyejin 2022 Portfolio Kwon Hyejin 
          </motion.p>   
        </div>
      </div> */}
   </motion.div>
  );
};

export default Home;
