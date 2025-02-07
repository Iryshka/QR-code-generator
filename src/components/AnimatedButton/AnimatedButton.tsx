import AnimatedButtonStyles from "./AnimatedButtonStyles.module.css";
import { motion } from "framer-motion";

function AnimatedButton({ isActive, setIsActive }) {
  console.log(isActive);
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      onClick={() => setIsActive(!isActive)}
      className={AnimatedButtonStyles.button}
    >
      <motion.div
        className={AnimatedButtonStyles.slider}
        animate={{
          transform: isActive ? "translateY(-50%)" : "translateY(0%)",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className={AnimatedButtonStyles.el}>
          <p>Menu</p>
        </div>
        <div className={AnimatedButtonStyles.el}>
          <p>Close</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default AnimatedButton;
