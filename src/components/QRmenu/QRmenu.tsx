import GeneratorDropDown from "../GeneratorDropDown/GeneratorDropDown.tsx";
import QRmenuStyles from "./QRmenu.module.css";

function QRmenu({ classname }) {
  return (
    <div className={QRmenuStyles.menu}>
      <GeneratorDropDown />
    </div>
  );
}

export default QRmenu;
