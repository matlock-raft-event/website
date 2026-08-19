import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

/**
 * The design-language entrance: a single 700ms rise-and-fade, once, when the
 * element first scrolls into view. Content is visible by default (SSR and
 * no-JS safe) — only elements that mount below the fold get hidden and
 * observed, and a fallback timer guarantees nothing stays hidden.
 * prefers-reduced-motion collapses the transition via the global override.
 */
const Reveal = ({ children, className = "" }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top <= window.innerHeight * 0.9) return;

    setHidden(true);
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setHidden(false);
          io.disconnect();
        }
      });
    }, { threshold: 0.12 });
    io.observe(el);
    const fallback = setTimeout(() => setHidden(false), 4000);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      className={`${className} transition-[opacity,transform] duration-700 ease-out ${hidden ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"}`}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default Reveal;
