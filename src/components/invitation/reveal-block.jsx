import { motion } from "framer-motion";

const directionOffset = {
  up: { y: 42, x: 0 },
  down: { y: -42, x: 0 },
  left: { y: 0, x: 42 },
  right: { y: 0, x: -42 },
};

export const RevealBlock = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
}) => {
  const offset = directionOffset[direction] ?? directionOffset.up;

  return (
    <motion.div
      initial={{ opacity: 0, ...offset, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
