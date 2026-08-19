import Footer from "~/components/footer";
import Heading from "~/components/heading";
import PageShell from "~/components/page-shell";
import Section from "~/components/section";
import { Button } from "~/components/ui/button";

const recoveryLinks = [
  { label: "Take part", to: "/take-part" },
  { label: "Donate", to: "/donate" },
  { label: "Event info", to: "/info" },
  { label: "Contact us", to: "/contact" }
];

const Content = () => {
  const isDev = import.meta.env.DEV;

  return (
    <main id="main" tabIndex={-1}>
      <h1 className="sr-only">Page not found</h1>
      <Section palette="cream">
        <Heading
          palette="cream"
          subtitle="Error 404"
          title="Page Not Found"
        />
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8 text-center">
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            Sorry 😔, we couldn’t find the page you were looking for. It may have
            moved, or the link might be out of date. Try one of these instead:
          </p>

          <div className="flex flex-row flex-wrap justify-center gap-4">
            {
              recoveryLinks.map(link => (
                <Button color="raft" href={link.to} key={link.to} size="lg">
                  {link.label}
                </Button>
              ))
            }
          </div>

          <Button color="ink" href="/" variant="link">
            ← Back to the homepage
          </Button>

          {
            isDev && (
              <p className="text-sm leading-relaxed text-cream-contrast">
                Dev hint: create a page in
                {" "}
                <code className="rounded-sm bg-[var(--color-cream-dark)] p-1 text-[var(--color-cream-contrast)]">
                  astro/src/pages/
                </code>
              </p>
            )
          }
        </div>
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
