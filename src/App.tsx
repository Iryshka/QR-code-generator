import { AnimationProvider } from "./context/AnimationContext.tsx";
import { useState } from "react";
import MarqueeText from "./components/MarqueeText/MarqueeText.tsx";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import MobileNav from "./components/MobileNav/MobileNav.tsx";

function App() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    console.log("toggle");
    setIsMobileNavVisible((prev) => !prev);
  };
  return (
    <ThemeProvider>
      <AnimationProvider>
        <MarqueeText />
        <Header toggleMobileNav={toggleMobileNav} />
        <Hero />
        {isMobileNavVisible && <MobileNav />}
      </AnimationProvider>
    </ThemeProvider>
  );
}

export default App;
