import PerspectiveTextStyles from "./PerspectiveText.module.css";
function PerspectiveText({ label, className }) {
  return (
    <div
      className={`${PerspectiveTextStyles.perspective__text} ${
        className || ""
      }`}
    >
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
}

export default PerspectiveText;
