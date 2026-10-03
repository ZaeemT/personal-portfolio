"use client";

import { createContext, useContext, useState } from "react";

/**
 * The page's first appearance is choreographed: nothing animates in until the
 * loading screen begins to lift, so the sidebar, hero and scroll reveals all
 * start from behind the curtain rather than under it. This is the one flag
 * they share. It starts false on both server and client so hydration matches;
 * the loader flips it — immediately, if there is nothing to show.
 */
type IntroState = {
  revealed: boolean;
  reveal: () => void;
};

const IntroContext = createContext<IntroState>({
  revealed: true,
  reveal: () => {},
});

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <IntroContext.Provider value={{ revealed, reveal: () => setRevealed(true) }}>
      {children}
    </IntroContext.Provider>
  );
}

export function useIntro() {
  return useContext(IntroContext);
}
