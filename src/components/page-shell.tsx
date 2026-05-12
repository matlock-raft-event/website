import type { ReactNode } from "react";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

type PageShellProps = {
  children: ReactNode;
};

const PageShell = ({ children }: PageShellProps) => (
  <>{children}</>
);

export default PageShell;
