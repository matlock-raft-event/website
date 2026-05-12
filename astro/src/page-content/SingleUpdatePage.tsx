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

  const isMobile = useResponsive("down", "sm");

  return (
    <main>
      <InnerHeroSection />

      <Section palette="cream">
        <Heading palette="cream" subtitle={createdOn} title={title} />
        <div
          className={`grid grid-cols-12 gap-8 justify-items-center ${!isMobile ? "pt-8" : "pt-0"} ${isMobile ? "px-8" : ""}`}
        >
          <div className="col-span-9 sm:col-span-5 order-2 sm:order-1">
            <div className="bg-white p-[1%] pb-[2%] shadow-[7px_7px_0_0_rgba(0,0,0,0.25)]">
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
                        borderRadius: 2,
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
            </div>
          </div>
          <div className="col-span-12 sm:col-span-7 order-1 sm:order-2">
            <div className="mt-8">
              {content && <Block value={content as never} />}
            </div>
          </div>
        </div>

      </Section>

      <Waves bottomColor="var(--color-cream)" topColor="var(--color-cream)" variant={2} />

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
