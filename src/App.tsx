import { AnimationProvider } from "./context/AnimationContext.tsx";
import MarqueeText from "./components/MarqueeText/MarqueeText.tsx";
import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";

function App() {
  return (
    <AnimationProvider>
      <MarqueeText />
      <Header />
      <Hero />
    </AnimationProvider>
  );
}

export default App;
