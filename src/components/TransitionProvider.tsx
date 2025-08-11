"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Ctx = {
  startTransition: boolean;
  setStartTransition: (v: boolean) => void;
};

const TransitionCtx = createContext<Ctx | null>(null);

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [startTransition, setStartTransition] = useState(false);
  return (
    <TransitionCtx.Provider value={{ startTransition, setStartTransition }}>
      {children}
    </TransitionCtx.Provider>
  );
}

export function useHeroTransition() {
  const ctx = useContext(TransitionCtx);
  if (!ctx) throw new Error("useHeroTransition must be used inside TransitionProvider");
  return ctx;
}
