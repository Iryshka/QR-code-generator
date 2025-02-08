import { AnimatePresence, motion } from "framer-motion";
import HeaderStyles from "./Header.module.css";
import Logo from "../Logo/Logo.tsx";
import MobileNav from "../MobileNav/MobileNav.tsx";
import { useState, useEffect } from "react";
import ThemeButton from "../ThemeButton/ThemeButton.tsx";
import MarqueeText from "../MarqueeText/MarqueeText.tsx";
import ToggleButton from "../ToggleButton/ToggleButton.tsx";
import AnimatedButton from "../AnimatedButton/AnimatedButton.tsx";

function getResponsiveVariants() {
  const screenWidth = window.innerWidth;

  if (screenWidth <= 375) {
    return {
      open: { width: 250, height: 300, top: "-20px", right: "-20px" },
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
  } else if (screenWidth <= 768) {
    return {
      open: { width: 300, height: 350, top: "-15px", right: "-15px" },
      closed: {
        width: 70,
        height: 30,
        top: "0px",
        right: "0px",
        transition: {
          duration: 0.75,
          delay: 0.15,
          ease: [0.76, 0, 0.24, 1],
        },
      },
    };
  } else {
    return {
      open: { width: 350, height: 400, top: "-10px", right: "-10px" },
      closed: {
        width: 70,
        height: 30,
        top: "0px",
        right: "0px",
        transition: {
          duration: 0.75,
          delay: 0.15,
          ease: [0.76, 0, 0.24, 1],
        },
      },
    };
  }
}

function Header() {
  const [isActive, setIsActive] = useState(false);
  const [variants, setVariants] = useState(getResponsiveVariants());

  useEffect(() => {
    const handleResize = () => setVariants(getResponsiveVariants());
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
      <header className={HeaderStyles.header}>
        <div className={HeaderStyles.marquee}>
          <MarqueeText />
        </div>
        <div className={HeaderStyles.header__wrapper}>
          <Logo />
          <div className={HeaderStyles.header__flex}>
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
