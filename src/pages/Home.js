import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const Home = () => {
  const { scrollYProgress } = useViewportScroll();
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
    >
      <div style={{ height: '300vh' }}>
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%'
        }}
      >
          <motion.p className="bg_txt" style={{ x }}>
          Hello, I'm PUBLISHER Hello, I'm PUBLISHER Hello, I'm PUBLISHER
          </motion.p>   
      </div>
    </div>
   </motion.div>
  );
};

export default Home;
