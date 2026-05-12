import { useTheme } from "@mui/material/styles";

import Footer from "~/components/Footer";
import PageShell from "~/components/PageShell";
import Waves from "~/components/Waves";
import InnerHeroSection from "~/sections/InnerHeroSection";
import UpdatesSection from "~/sections/UpdatesSection";

const Content = () => {
    const theme = useTheme();
    return (
        <main>
            <InnerHeroSection />
            <UpdatesSection />
            <Waves bottomColor={theme.palette.secondary.main} topColor={theme.palette.secondary.main} variant={2} />
            <Footer />
        </main>
    );
};

const UpdatesPage = () => (
    <PageShell>
        <Content />
    </PageShell>
);

export default UpdatesPage;
