import { useTheme } from "@mui/material/styles";

import Footer from "~/components/Footer";
import PageShell from "~/components/PageShell";
import Waves from "~/components/Waves";
import BecomeSponsorSection from "~/sections/BecomeSponsorSection";
import InnerHeroSection from "~/sections/InnerHeroSection";
import SponsorsSection from "~/sections/SponsorsSection";

const Content = () => {
    const theme = useTheme();
    return (
        <main>
            <InnerHeroSection />
            <SponsorsSection />
            <Waves bottomColor={theme.palette.primary.main} topColor={theme.palette.secondary.main} variant={2} />
            <BecomeSponsorSection />
            <Waves bottomColor={theme.palette.secondary.main} topColor={theme.palette.primary.main} variant={3} />
            <Footer />
        </main>
    );
};

const SponsorsPage = () => (
    <PageShell>
        <Content />
    </PageShell>
);

export default SponsorsPage;
