import { Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import PageShell from "~/components/PageShell";
import Section from "~/components/Section";

const StyledCode = styled("code")(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  padding: 4,
  backgroundColor: theme.palette.secondary.dark,
  borderRadius: theme.shape.borderRadius
}));

const Content = () => {
  const theme = useTheme();
  const isDev = import.meta.env.DEV;

  return (
    <main>
      <Section bgColor={theme.palette.secondary}>
        <Heading color={theme.palette.secondary} title="Page Not Found" />
        <Typography my={12} variant="body1">
                    Sorry 😔, we couldn’t find what you were looking for.
          <br />
          {
            isDev
              ? (
                <>
                  <br />
                                    Try creating a page in
                  {" "}
                  <StyledCode>astro/src/pages/</StyledCode>
                                    .
                  <br />
                </>
              )
              : null
          }
          <br />
          <a href="/">Go home</a>
                    .
        </Typography>
      </Section>
      <Footer />
    </main>
  );
};

const NotFoundPage = () => (
  <PageShell>
    <Content />
  </PageShell>
);

export default NotFoundPage;
