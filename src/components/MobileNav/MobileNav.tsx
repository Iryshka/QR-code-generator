import { motion } from "framer-motion";
import MobileNavStyles from "./MobileNavStyles.module.css";

function MobileNav({ isVisible }) {
  function anim(variants, custom) {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  }

  const numberOfColumns = 8;

  const expand = {
    initial: { top: "0%" },
    enter: (index) => ({
      top: "100%",
      transition: {
        duration: 0.5,
        delay: 0.05 * index,
      },
      transitionend: {
        height: 0,
        top: 0,
      },
    }),
    exit: (index) => ({
      height: "100%",
      transition: {
        duration: 0.5,
        delay: 0.05 * index,
      },
    }),
  };

  return (
    <motion.div
      className={MobileNavStyles.page__container}
      initial="initial"
      animate={isVisible ? "enter" : "initial"}
    >
      <div className={MobileNavStyles.background}>
        <nav className={MobileNavStyles.nav}>
          <ul className={MobileNavStyles.menu}>
            <li>About</li>
            <li>Pricing</li>
            <li>Contacts</li>
          </ul>
        </nav>
      </div>
      <div className={MobileNavStyles.transition__container}>
        {[...Array(numberOfColumns)].map((_, index) => (
          <motion.div
            {...anim(expand, numberOfColumns - index)}
            className={MobileNavStyles.column}
            key={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default MobileNav;
