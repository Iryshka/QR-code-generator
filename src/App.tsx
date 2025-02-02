import { AnimationProvider } from "./context/AnimationContext.tsx";
import MarqueeText from "./components/MarqueeText/MarqueeText.tsx";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";

function App() {
  return (
    <ThemeProvider>
      <AnimationProvider>
        <MarqueeText />
        <Header />
        <Hero />
      </AnimationProvider>
    </ThemeProvider>
  );
}

export default App;
