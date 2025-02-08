import { AnimatePresence, motion } from "framer-motion";
import HeaderStyles from "./Header.module.css";
import Logo from "../Logo/Logo.tsx";
import MobileNav from "../MobileNav/MobileNav.tsx";
import BurgerMenu from "../BurgerMenu/BurgerMenu.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import { useContext, useState } from "react";
import ThemeButton from "../ThemeButton/ThemeButton.tsx";
import ThemeContext from "../../context/ThemeContext.tsx";
import MarqueeText from "../MarqueeText/MarqueeText.tsx";
import ToggleButton from "../ToggleButton/ToggleButton.tsx";
import AnimatedButton from "../AnimatedButton/AnimatedButton.tsx";

const variants = {
  open: { width: 300, height: 400, top: "-15px", right: "-15px" },
  closed: {
    height: 30,
    width: 70,
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.15,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

function Header() {
  const [isActive, setIsActive] = useState(false);
  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.marquee}>
        <MarqueeText />
      </div>
      <div className={HeaderStyles.header__wrapper}>
        <Logo />
        <div className={HeaderStyles.header__flex}>
          {/*<NavBar />*/}
          <div className={HeaderStyles.menu__flex}>
            <motion.div
              variants={variants}
              animate={isActive ? "open" : "closed"}
              initial="closed"
              className={HeaderStyles.menu}
            >
              <AnimatePresence>{isActive && <MobileNav />}</AnimatePresence>
            </motion.div>
            <AnimatedButton isActive={isActive} setIsActive={setIsActive} />
          </div>
          {/*<BurgerMenu toggleMobileNav={toggleMobileNav} />*/}
          <div className={HeaderStyles.buttons__flex}>
            <ThemeButton />
            <ToggleButton />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
