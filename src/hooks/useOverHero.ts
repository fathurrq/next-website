import { useEffect, useRef, useState } from "react";

function useOverHero() {
  const [overHero, setOverHero] = useState(true);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const calc = () => {
      const hero = document.getElementById("hero");
      if (!hero) return setOverHero(false); // on non-hero pages
      const heroH = hero.offsetHeight || window.innerHeight;
      setOverHero(window.scrollY < heroH - 1);
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        calc();
        rafRef.current && cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      });
    };

    calc();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", calc);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", calc);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return overHero;
}

export default useOverHero;