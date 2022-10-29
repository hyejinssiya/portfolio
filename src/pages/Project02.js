import React from 'react';
import { motion } from 'framer-motion';

const Project02 = (props) => {
      return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
          <h2>대기중인 페이지입니다 ;)</h2>
        </motion.div>
      );
}


export default Project02;
