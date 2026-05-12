import type { ReactNode } from "react";

import GlobalThemeProvider from "~/theme";

import "@fontsource-variable/rokkitt";
import "@fontsource-variable/league-spartan";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

type PageShellProps = {
    children: ReactNode;
};

const PageShell = ({ children }: PageShellProps) => (
    <GlobalThemeProvider>
        {children}
    </GlobalThemeProvider>
);

export default PageShell;
