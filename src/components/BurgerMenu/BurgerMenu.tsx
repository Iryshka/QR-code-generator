import burgerMenuStyles from "./BurgerMenu.module.css";
function BurgerMenu() {
  return (
    <div className={burgerMenuStyles.burger}>
      <span className={burgerMenuStyles.burger__line}></span>
      <span className={burgerMenuStyles.burger__line}></span>
      <span className={burgerMenuStyles.burger__line}></span>
    </div>
  );
}

export default BurgerMenu;
