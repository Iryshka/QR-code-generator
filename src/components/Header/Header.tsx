import HeaderStyles from "./Header.module.css";
import Logo from "../Logo/Logo.tsx";
import BurgerMenu from "../BurgerMenu/BurgerMenu.tsx";
import NavBar from "../NavBar/NavBar.tsx";
import { useContext, useState } from "react";
import ThemeButton from "../ThemeButton/ThemeButton.tsx";
import ThemeContext from "../../context/ThemeContext.tsx";

function Header({ toggleMobileNav }) {
  return (
    <header className={HeaderStyles.header}>
      <Logo />
      <NavBar />
      <div className={HeaderStyles.header__flex}>
        <BurgerMenu toggleMobileNav={toggleMobileNav} />
        <ThemeButton />
      </div>
    </header>
  );
}

export default Header;
