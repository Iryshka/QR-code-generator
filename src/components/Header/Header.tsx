import styles from "./Header.module.css";
import Logo from "../Logo/Logo.tsx";
import BurgerMenu from "../BurgerMenu/BurgerMenu.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import { useState } from "react";
import ToggleButton from "../ToggleButton/ToggleButton.tsx";

function Header() {
  const [isNavVisible, setIsNavVisible] = useState(false);

  function toggleNav() {
    setIsNavVisible(!isNavVisible);
  }
  return (
    <header className={styles.header}>
      <Logo />
      <NavBar />

      <BurgerMenu toggleNav={toggleNav} />
    </header>
  );
}

export default Header;
