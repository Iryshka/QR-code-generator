import { useContext } from "react";
import AnimationContext from "../../context/AnimationContext.tsx";
import ToggleButtonStyles from "./ToggleButton.module.css";

function ToggleButton() {
  const { isAnimating, toggleAnimation } = useContext(AnimationContext);

  return (
    <button
      onClick={toggleAnimation}
      className={`${ToggleButtonStyles.toggle__button} ${
        isAnimating ? ToggleButtonStyles.on : ToggleButtonStyles.off
      }`}
    >
      {isAnimating ? "on" : "off"}
    </button>
  );
}

export default ToggleButton;
