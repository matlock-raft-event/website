import { useEffect, useState } from "react";

type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

type Query = "up" | "down" | "between" | "only";

type Value = Breakpoint | number;

const BREAKPOINTS: Record<Breakpoint, number> = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1200,
  xl: 1536,
};

const ORDER: Breakpoint[] = ["xs", "sm", "md", "lg", "xl"];

const toPx = (value: Value): number =>
  typeof value === "number" ? value : BREAKPOINTS[value];

const nextLarger = (value: Value): number | null => {
  if (typeof value === "number") return null;
  const index = ORDER.indexOf(value);
  if (index === -1 || index === ORDER.length - 1) return null;
  return BREAKPOINTS[ORDER[index + 1]];
};

const buildQuery = (query: Query, start?: Value, end?: Value): string => {
  if (query === "up") {
    return `(min-width: ${toPx(start as Value)}px)`;
  }

  if (query === "down") {
    return `(max-width: ${toPx(start as Value) - 0.05}px)`;
  }

  if (query === "between") {
    return `(min-width: ${toPx(start as Value)}px) and (max-width: ${toPx(end as Value) - 0.05}px)`;
  }

  // "only"
  const lower = toPx(start as Value);
  const upper = nextLarger(start as Value);
  if (upper === null) {
    return `(min-width: ${lower}px)`;
  }
  return `(min-width: ${lower}px) and (max-width: ${upper - 0.05}px)`;
};

const useMatchMedia = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia(query);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    setMatches(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
};

const useResponsive = (query: Query, start?: Value, end?: Value): boolean => {
  const mediaQuery = buildQuery(query, start, end);
  return useMatchMedia(mediaQuery);
};

export default useResponsive;
