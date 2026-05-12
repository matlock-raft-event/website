import Footer from "~/components/Footer";
import Heading from "~/components/Heading";
import PageShell from "~/components/PageShell";
import Section from "~/components/Section";

const Content = () => {
  const isDev = import.meta.env.DEV;

  return (
    <main>
      <Section palette="cream">
        <Heading palette="cream" title="Page Not Found" />
        <p className="my-24 text-sm sm:text-base lg:text-lg leading-relaxed">
                    Sorry 😔, we couldn’t find what you were looking for.
          <br />
          {
            isDev
              ? (
                <>
                  <br />
                                    Try creating a page in
                  {" "}
                  <code className="text-[var(--color-cream-contrast)] p-1 bg-[var(--color-cream-dark)] rounded-sm">astro/src/pages/</code>
                                    .
                  <br />
                </>
              )
              : null
          }
          <br />
          <a href="/">Go home</a>
                    .
        </p>
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
