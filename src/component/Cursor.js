import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
/*   const variants = {
    default: {
      opacity: 1,
      height: 10,
      width: 10,
      backgroundColor: "#fff",
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.6
      }
    },
    aEvent: {
      opacity: 1,
      backgroundColor: "#FFBCBC",
      height: 40,
      width: 40,
      x: mouseXPosition - 48,
      y: mouseYPosition - 48
    }
    };
    
      function aEventEnter(event) {
        setCursorVariant("contact");
      }
    
      function aEventLeave(event) {
        setCursorVariant("default");
      } */

  return (
      <motion.div
        className="cursor"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
        }}
      />
  );
}