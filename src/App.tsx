import { AnimationProvider } from "./context/AnimationContext.tsx";
import { useState } from "react";
import MarqueeText from "./components/MarqueeText/MarqueeText.tsx";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import MobileNav from "./components/MobileNav/MobileNav.tsx";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavVisible((prev) => !prev);
  };
  return (
    <ThemeProvider>
      <AnimationProvider>
        <Header toggleMobileNav={toggleMobileNav} />
        <Hero />
        <AnimatePresence exitBeforeEnter>
          {isMobileNavVisible && (
            <MobileNav
              key="mobileNav"
              isMobileNavVisible={isMobileNavVisible}
              toggleMobileNav={toggleMobileNav}
            />
          )}
        </AnimatePresence>
      </AnimationProvider>
    </ThemeProvider>
  );
}

export default App;
