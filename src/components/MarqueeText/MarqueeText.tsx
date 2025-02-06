import { useContext } from "react";
import AnimationContext from "../../context/AnimationContext.tsx";
import MarqueeTextStyles from "./MarqueeText.module.css";

function MarqueeText() {
  const { isAnimating } = useContext(AnimationContext);

  const marqueePhrases = [
    "Faster Access",
    "Instant Sharing",
    "Business Growth",
    "Boost Sales",
    "Engage Customers",
    "Global Reach",
    "Secure & Reliable",
    "Instant Sharing",
    "Quick & Easy",
  ];

  return (
    <div className={MarqueeTextStyles.marquee__wrapper}>
      <div className={MarqueeTextStyles.marquee__text}>
        <div
          className={`${MarqueeTextStyles.marquee__track} ${
            isAnimating ? MarqueeTextStyles.animate : MarqueeTextStyles.stop
          }`}
        >
          {Array(2)
            .fill(marqueePhrases)
            .flat()
            .map((phrase, index) => (
              <p
                key={`${phrase}-${index}`}
                className={MarqueeTextStyles.marquee__phrase}
                aria-hidden={index > marqueePhrases.length}
              >
                {phrase}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MarqueeText;
