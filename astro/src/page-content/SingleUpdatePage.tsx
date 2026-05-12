import { styled, useTheme } from "@mui/material/styles";

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
        <div
          className={`grid grid-cols-12 gap-8 justify-items-center ${!isMobile ? "pt-8" : "pt-0"} ${isMobile ? "px-8" : ""}`}
        >
          <div className="col-span-9 sm:col-span-5 order-2 sm:order-1">
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
          </div>
          <div className="col-span-12 sm:col-span-7 order-1 sm:order-2">
            <BlockContainer>
              {content && <Block value={content as never} />}
            </BlockContainer>
          </div>
        </div>

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
