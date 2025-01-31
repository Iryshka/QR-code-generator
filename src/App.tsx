import Header from "./components/Header/Header.tsx";
import Hero from "./components/Hero/Hero.tsx";
import ToggleButton from "./components/ToggleButton/ToggleButton.tsx";
import MarqueeText from "./components/MarqueeText/MarqueeText.tsx";

function App() {
  return (
    <>
      <MarqueeText />

      <Header />

      <Hero />
    </>
  );
}

export default App;
