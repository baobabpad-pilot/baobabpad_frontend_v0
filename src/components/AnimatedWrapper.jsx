import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const AnimatedWrapper = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible")
    }
  }, [isInView]);
  return (
    <div ref={ref} className="relative overflow-hidden w-full h-full">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.50 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimatedWrapper;
