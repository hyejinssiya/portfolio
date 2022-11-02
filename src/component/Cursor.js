import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 1000 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const [link, setLink] = useState('');
  const zoomIn = () => document.querySelector('.cursor').classList.add('zoom');
  const zoomout = () =>
    document.querySelector('.cursor').classList.remove('zoom');

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);

      if (setLink)
        Array.from(document.querySelectorAll('a')).map((el) => setLink(el));
    };

    Array.from(document.querySelectorAll('a, button, input[type="submit"], .scroll_down')).map((el) => {
      el.addEventListener('mouseenter', zoomIn);
      el.addEventListener('mouseleave', zoomout);
    });

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY, link]);

  return (
      <motion.div
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring
        }}
      />
  );
}