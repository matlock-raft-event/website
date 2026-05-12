import { useTheme } from "@mui/material/styles";

import Footer from "~/components/Footer";
import PageShell from "~/components/PageShell";
import Waves from "~/components/Waves";
import ContactUsSection from "~/sections/ContactUsSection";
import InnerHeroSection from "~/sections/InnerHeroSection";

const Content = () => {
  const theme = useTheme();
  return (
    <main>
      <InnerHeroSection />
      <ContactUsSection />
      <Waves bottomColor={theme.palette.secondary.main} topColor={theme.palette.secondary.main} variant={2} />
      <Footer />
    </main>
  );
};

const ContactPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default ContactPage;
