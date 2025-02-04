import burgerMenuStyles from "./BurgerMenu.module.css";
function BurgerMenu({ toggleMobileNav }) {
  return (
    <div className={burgerMenuStyles.burger} onClick={toggleMobileNav}>
      <span className={burgerMenuStyles.burger__line}></span>
      <span className={burgerMenuStyles.burger__line}></span>
      <span className={burgerMenuStyles.burger__line}></span>
    </div>
  );
}

export default BurgerMenu;
