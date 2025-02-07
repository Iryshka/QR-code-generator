import { Link } from "@tanstack/react-router";
import logoStyles from "./Logo.module.css";
function Logo() {
  return (
    <Link to="/" className={logoStyles.logo__link}>
      <h2 className={logoStyles.logo}>QRize</h2>
    </Link>
  );
}

export default Logo;
