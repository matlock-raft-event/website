import { styled, useTheme } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";

import donateImg from "~/assets/images/donate-img.jpg";
import Block from "~/components/Block";
import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import PageShell from "~/components/PageShell";
import SanityImage from "~/components/SanityImage";
import Section from "~/components/Section";
import Waves from "~/components/Waves";
import useResponsive from "~/hooks/useResponsive";
import InnerHeroSection from "~/sections/InnerHeroSection";

const resolveSrc = (asset: unknown): string => (asset as { src?: string }).src ?? (asset as unknown as string);

const ImageContainer = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "1%",
  paddingBottom: "2%",
  boxShadow: theme.shadows[5]
}));

const BlockContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(4)
}));

type SingleUpdatePageProps = {
  update: {
    title?: string;
    slug?: string;
    date?: string;
    img?: unknown;
    content?: unknown;
  };
};

const Content = ({ update }: SingleUpdatePageProps) => {
  const title = update.title ?? "Update";
  const { content } = update;
  const createdOn = update.date ? new Date(update.date).toDateString() : undefined;
  const image = update.img;

  const theme = useTheme();
  const secondaryColor = theme.palette.secondary;

  const isMobile = useResponsive("down", "sm");

  return (
    <main>
      <InnerHeroSection />

      <Section bgColor={secondaryColor}>
        <Heading color={secondaryColor} subtitle={createdOn} title={title} />
        <Grid2
          container
          justifyContent="center"
          pt={!isMobile ? 4 : 0}
          spacing={4}
          sx={{ ...(isMobile && { paddingX: 4 }) }}
        >
          <Grid2 order={{ sm: 1, xs: 2 }} sm={5} xs={9}>
            <ImageContainer>
              {
                image
                  ? (
                    <SanityImage
                      alt={title}
                      image={image}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        objectPosition: "center",
                        borderRadius: theme.shape.borderRadius,
                        display: "block"
                      }}
                    />
                  )
                  : (
                    <img
                      alt={title}
                      src={resolveSrc(donateImg)}
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block"
                      }}
                    />
                  )
              }
            </ImageContainer>
          </Grid2>
          <Grid2 order={{ sm: 2, xs: 1 }} sm={7} xs={12}>
            <BlockContainer>
              {content && <Block value={content as never} />}
            </BlockContainer>
          </Grid2>
        </Grid2>

      </Section>

      <Waves bottomColor={secondaryColor.main} topColor={secondaryColor.main} variant={2} />

      <Footer />
    </main>
  );
};

const SingleUpdatePage = ({ update }: SingleUpdatePageProps) => (
  <PageShell>
    <Content update={update} />
  </PageShell>
);

export default SingleUpdatePage;
