import { useTheme } from "@mui/material/styles";

import Block from "~/components/Block";
import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import PageShell from "~/components/PageShell";
import Section from "~/components/Section";
import Waves from "~/components/Waves";
import useSanityFetch from "~/hooks/useSanityFetch";
import InnerHeroSection from "~/sections/InnerHeroSection";

type CookiesInfo = {
  content?: unknown;
};

const Content = () => {
  const theme = useTheme();
  const { data } = useSanityFetch<CookiesInfo>(
    "*[_type == \"cookiesInfo\"][0]{ content }"
  );

  return (
    <main>
      <InnerHeroSection />
      <Section bgColor={theme.palette.secondary}>
        <Heading color={theme.palette.secondary} title="Cookies Policy" />
        {data?.content && <Block value={data.content as never} />}
      </Section>
      <Waves bottomColor={theme.palette.secondary.main} topColor={theme.palette.secondary.main} />
      <Footer />
    </main>
  );
};

const CookiesPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default CookiesPage;
