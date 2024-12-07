import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type ParallaxProps = {
  children: React.ReactNode;
  offset?: number; // How much the parallax effect is applied
};

const Parallax: React.FC<ParallaxProps> = ({ children, offset = 50 }) => {
  const { scrollY } = useScroll(); // Get the scroll position
  const y = useTransform(scrollY, [0, 1], [0, -offset]); // Create parallax effect

  return (
    <motion.div style={{ y }} className=" transition-all">
      {children}
    </motion.div>
  );
};

export default Parallax;