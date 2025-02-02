import HeaderStyles from "./Header.module.css";
import Logo from "../Logo/Logo.tsx";
import BurgerMenu from "../BurgerMenu/BurgerMenu.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import { useContext, useState } from "react";
import ThemeButton from "../ThemeButton/ThemeButton.tsx";
import ThemeContext from "../../context/ThemeContext.tsx";

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  function toggleNav() {
    setIsNavVisible(!isNavVisible);
  }
  return (
    <header className={HeaderStyles.header}>
      <Logo />
      <NavBar />
      <ThemeButton />
      <BurgerMenu toggleNav={toggleNav} />
    </header>
  );
}

export default Header;
