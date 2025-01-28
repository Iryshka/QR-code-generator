import { useEffect } from "react";
import gsap from "gsap";
import runningLineStyles from "./RunningLine.module.css";
import { Observer } from "gsap/Observer";

function RunningLine() {
  useEffect(() => {
    gsap.registerPlugin(Observer); // Register the Observer plugin

    // Get all the h4 elements inside the rail class
    const scrollingText = gsap.utils.toArray(`.${runningLineStyles.rail} h4`);

    // Define the horizontal loop animation
    const tl = horizontalLoop(scrollingText, {
      repeat: -1,
    });

    // Observer for scroll interactions (example of how you can interact with the animation)
    Observer.create({
      target: window, // Target the window to observe scrolling
      type: "wheel", // Observe wheel scrolling
      onDown: () => tl.pause(), // Pause the animation when scrolling down
      onUp: () => tl.play(), // Resume the animation when scrolling up
    });

    // Define your horizontal loop function
    function horizontalLoop(items, config) {
      items = gsap.utils.toArray(items);
      config = config || {};
      let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
      });

      let length = items.length;
      let startX = items[0].offsetLeft;
      let totalWidth = 0;
      items.forEach((item) => {
        totalWidth += item.offsetWidth + 2 * 16; // Adding margin to width calculation
      });

      // Set the initial position and animate
      tl.to(items, {
        x: -totalWidth,
        duration: totalWidth / 100,
        repeat: config.repeat,
      });

      return tl;
    }
  }, []); // Run only once when component mounts
  return (
    <div className={runningLineStyles.scrollingText}>
      <div className={runningLineStyles.rail}>
        <h4>Lorem Ipsum Sit Dolor</h4>
        <h4>Lorem Ipsum Sit Dolor</h4>
        <h4>Lorem Ipsum Sit Dolor</h4>
      </div>
    </div>
  );
}

export default RunningLine;
