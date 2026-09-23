import Block from "~/components/block";
import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import SanityImage from "~/components/sanity-image";
import Section from "~/components/section";
import type { VolunteerPageQueryResult } from "~/lib/sanity.types";

type Props = { volunteerPage: VolunteerPageQueryResult };

const Content = ({ volunteerPage }: Props) => (
  <main id="main" tabIndex={-1}>
    <PageHeader backLink={{ href: "/get-involved", label: "Get involved" }} background="stripes" color="sun" eyebrow="How to help out" title="Volunteer" />
    <Section color="sun" plain>
      {/* Same max-w-5xl width as the site's other grid and image sections */}
      <div className="mx-auto w-full max-w-5xl px-4">
        <div className="flex flex-col gap-12">
          <div>
            {volunteerPage?.intro && <Block value={volunteerPage.intro as never} />}
          </div>
          {volunteerPage?.roles?.map((role, idx) => (
            <div
              key={role.title ?? idx}
              className={`flex flex-col gap-6 md:flex-row md:items-center md:gap-10 ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="flex flex-col md:flex-1">
                {role.title && (
                  <h2 className="font-display uppercase text-3xl md:text-4xl mb-4">
                    {role.title}
                  </h2>
                )}
                {role.body && <Block startLevel={3} value={role.body as never} />}
                {role.contactInstructions && (
                  <div className="mt-2">
                    <Block startLevel={3} value={role.contactInstructions as never} />
                  </div>
                )}
              </div>
              {role.image && (
                <div className="md:flex-1">
                  <SanityImage
                    alt={role.title ?? undefined}
                    image={role.image}
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: 360,
                      objectFit: "cover",
                      display: "block"
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Section>
    <Footer waveTopColor="var(--color-sun)" />
  </main>
);

const VolunteerPage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default VolunteerPage;
