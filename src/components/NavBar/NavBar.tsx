import navBarStyles from "./NavBar.module.css";
import { Link } from "@tanstack/react-router";

function NavBar() {
  return (
    <nav className={navBarStyles.navbar}>
      <Link to="/about" className={navBarStyles.link}>
        About
      </Link>
      <Link to="/features" className={navBarStyles.link}>
        Features
      </Link>
      <Link to="/pricing" className={navBarStyles.link}>
        Pricing
      </Link>
    </nav>
  );
}

export default NavBar;
