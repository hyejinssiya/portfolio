import React from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

const Home = () => {
  const { scrollYProgress } = useViewportScroll();
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  return (
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
  );
};

export default Home;
