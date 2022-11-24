import React from 'react';
import { motion } from 'framer-motion';

const Project02 = (props) => {
      return (
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
          <ul className="pers_list">
            <li>
              <a href="https://guileless-kitsune-c64a4d.netlify.app/" target="_blank" rel="noreferrer">
                SUBWAY <span>Vue.js</span>
              </a>
            </li>
          </ul>
        </motion.div>
      );
}


export default Project02;
