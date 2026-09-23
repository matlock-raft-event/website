/* Every ground a page can be built on. One list, shared by the page header
   and the sections under it, so a page can say "this page is river" once and
   have the header, the body and the waves between them agree.

   Decision 014: an inner page is one colour from the header to the closing,
   except where the page is mostly reading — those stay cream, which is the
   only surface that takes ink text. */
export type SurfaceColor = "cream" | "river" | "pine" | "pine-dark" | "raft" | "sun";
