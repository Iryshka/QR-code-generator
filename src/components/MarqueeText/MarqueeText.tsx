import marqueeStyles from "./MarqueeText.module.css";
function MarqueeText() {
  return (
    <div className={marqueeStyles.marquee__wrapper}>
      <div className={marqueeStyles.marquee__text}>
        <div className={marqueeStyles.marquee__track}>
          <p className={marqueeStyles.marquee__phrase}>Faster Access </p>
          <p className={marqueeStyles.marquee__phrase}>Instant Sharing</p>
          <p className={marqueeStyles.marquee__phrase}>Business Growth</p>
          <p className={marqueeStyles.marquee__phrase}>Boost Sales</p>
          <p className={marqueeStyles.marquee__phrase}>Engage Customers</p>
          <p className={marqueeStyles.marquee__phrase}>Global Reach</p>
          <p className={marqueeStyles.marquee__phrase}>Secure & Reliable</p>
          <p className={marqueeStyles.marquee__phrase}>Instant Sharing</p>
          <p className={marqueeStyles.marquee__phrase}>Quick & Easy</p>
          <p className={marqueeStyles.marquee__phrase} aria-hidden="true">
            Faster Access
          </p>
          <p className={marqueeStyles.marquee__phrase} aria-hidden="true">
            Instant Sharing
          </p>
          <p className={marqueeStyles.marquee__phrase} aria-hidden="true">
            Business Growth
          </p>
          <p className={marqueeStyles.marquee__phrase} aria-hidden="true">
            Boost Sales
          </p>
          <p className={marqueeStyles.marquee__phrase} aria-hidden="true">
            Engage Customers
          </p>
          <p className={marqueeStyles.marquee__phrase} aria-hidden="true">
            Global Reach
          </p>
          <p className={marqueeStyles.marquee__phrase} aria-hidden="true">
            Secure & Reliable
          </p>
          <p className={marqueeStyles.marquee__phrase} aria-hidden="true">
            Instant Sharing
          </p>
          <p className={marqueeStyles.marquee__phrase} aria-hidden="true">
            Quick & Easy
          </p>
        </div>
      </div>
    </div>
  );
}

export default MarqueeText;
