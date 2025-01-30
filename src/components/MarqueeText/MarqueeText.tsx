import marqueeStyles from "./MarqueeText.module.css";
function MarqueeText() {
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
    <div className={marqueeStyles.marquee__wrapper}>
      <div className={marqueeStyles.marquee__text}>
        <div className={marqueeStyles.marquee__track}>
          {Array(2)
            .fill(marqueePhrases)
            .flat()
            .map((phrase, index) => (
              <p
                key={`${phrase}-${index}`}
                className={marqueeStyles.marquee__phrase}
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
