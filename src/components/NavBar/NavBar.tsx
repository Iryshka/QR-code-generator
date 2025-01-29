import navBarStyles from "./NavBar.module.css";
function NavBar() {
  return (
    <nav className={navBarStyles.navbar}>
      <a href="#">Features</a>
      <a href="#">Solutions</a>
      <a href="#">Pricing</a>
    </nav>
  );
}

export default NavBar;
