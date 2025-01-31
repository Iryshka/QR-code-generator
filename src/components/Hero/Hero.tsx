import styles from "./Hero.module.css";
import Generator from "../Generator/Generator.tsx";

function Hero() {
  function ToggleButton() {
    console.log("i'm toggled");
  }
  return (
    <div className={styles.hero__wrapper}>
      <ToggleButton />
      <h1 className={styles.hero__title}>FREE ONLINE QR GENERATOR</h1>

      <h3 className={styles.hero__subtitle}>
        "Unlimited QR Codes in a flash! 100% free, no sign-ups, no stress—just
        convenience."
      </h3>

      <Generator />
    </div>
  );
}

export default Hero;
