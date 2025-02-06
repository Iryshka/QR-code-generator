import { createContext, useState, useContext, ReactNode } from "react";

const AnimationContext = createContext();

export function AnimationProvider({ children }) {
  const [isAnimating, setIsAnimating] = useState(true);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <AnimationContext.Provider value={{ isAnimating, toggleAnimation }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  return useContext(AnimationContext);
}

export default AnimationContext;
