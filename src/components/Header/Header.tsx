import HeaderStyles from "./Header.module.css";
import Logo from "../Logo/Logo.tsx";
import BurgerMenu from "../BurgerMenu/BurgerMenu.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import { useContext, useState } from "react";
import ThemeButton from "../ThemeButton/ThemeButton.tsx";
import ThemeContext from "../../context/ThemeContext.tsx";
import MarqueeText from "../MarqueeText/MarqueeText.tsx";
import ToggleButton from "../ToggleButton/ToggleButton.tsx";
import AnimatedButton from "../AnimatedButton/AnimatedButton.tsx";

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
          <NavBar />
          <AnimatedButton isActive={isActive} setIsActive={setIsActive} />
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
