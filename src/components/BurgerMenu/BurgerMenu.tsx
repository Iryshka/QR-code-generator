import burgerMenuStyles from "./BurgerMenu.module.css";
function BurgerMenu({ toggleNav }) {
  return (
    <div className={burgerMenuStyles.burger} onClick={toggleNav}>
      <span className={burgerMenuStyles.burger__line}></span>
      <span className={burgerMenuStyles.burger__line}></span>
      <span className={burgerMenuStyles.burger__line}></span>
    </div>
  );
}

export default BurgerMenu;
