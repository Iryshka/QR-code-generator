import styles from "./Header.module.css";
import Logo from "../Logo/Logo.tsx";
import BurgerMenu from "../BurgerMenu/BurgerMenu.tsx";
import NavBar from "../NavBar/NavBar.tsx";

function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <NavBar />
      <BurgerMenu />
    </header>
  );
}

export default Header;
