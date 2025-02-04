import { motion } from "framer-motion";
import MobileNavStyles from "./MobileNavStyles.module.css";

function MobileNav({ isMobileNavVisible }) {
  console.log(isMobileNavVisible);
  const numberOfColumns = 8;
  function anim(variants, custom) {
    return {
      initial: "initial",
      animate: "enter",
      exit: "exit",
      variants,
      custom,
    };
  }

  const expand = {
    initial: { top: "0%" },
    enter: (index) => ({
      top: "100%",
      transition: {
        duration: 0.5,
        delay: 0.05 * index,
      },
      transitionEnd: {
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

  const shrink = {
    initial: { bottom: "0" },
    enter: (index) => ({
      bottom: "100%",
      transition: {
        duration: 0.5,
        delay: 0.05 * index,
      },
      transitionEnd: {
        height: 0,
        bottom: 0,
      },
    }),
    exit: (index) => ({
      height: "0",
      transition: {
        duration: 0.5,
        delay: 0.05 * index,
      },
    }),
  };

  const animation = isMobileNavVisible ? expand : shrink;

  return (
    <motion.div
      className={MobileNavStyles.page__container}
      initial="initial"
      animate={isMobileNavVisible ? "enter" : "initial"}
      exit="exit"
    >
      <div className={MobileNavStyles.background}>
        <nav className={MobileNavStyles.nav}>
          <ul className={MobileNavStyles.menu}>
            <li className={MobileNavStyles.menu__item}>About</li>
            <li className={MobileNavStyles.menu__item}>Pricing</li>
            <li className={MobileNavStyles.menu__item}>Contacts</li>
          </ul>
        </nav>
      </div>
      <div className={MobileNavStyles.transition__container}>
        {[...Array(numberOfColumns)].map((_, index) => (
          <motion.div
            {...anim(animation, numberOfColumns - index)}
            className={MobileNavStyles.column}
            key={index}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default MobileNav;
