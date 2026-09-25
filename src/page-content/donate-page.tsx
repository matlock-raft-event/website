import ClosingCta from "~/components/closing-cta";
import Footer from "~/components/footer";
import { PageHeader } from "~/components/page-header";
import PageShell from "~/components/page-shell";
import Section from "~/components/section";
import { Button } from "~/components/ui/button";
import type { DonationQueryResult } from "~/lib/sanity.types";

type Props = { donation: DonationQueryResult };

const FACEBOOK_PAGE = "https://www.facebook.com/matlockraftevent/";

/* Names the fundraiser's platform in the copy, so a donor knows where the
   button is taking them before they tap it. */
const PLATFORMS: [RegExp, string][] = [
  [/(^|\.)facebook\.com$/, "Facebook"],
  [/(^|\.)justgiving\.com$/, "JustGiving"],
  [/(^|\.)(gofundme\.com|gofund\.me)$/, "GoFundMe"]
];

const platformOf = (url: string): string | null => {
  try {
    const host = new URL(url).hostname;
    return PLATFORMS.find(([pattern]) => pattern.test(host))?.[1] ?? null;
  } catch {
    return null;
  }
};

const paragraph = "text-sm sm:text-base lg:text-lg leading-relaxed";

/* Each year's fundraiser is set up nearer Boxing Day, so for most of the year
   there is nothing to link to. The page follows the Studio's "Online donation
   link": with one, it's a donate page; without one, it says when giving opens
   and where the link will appear, rather than sending people to last year's
   closed fundraiser. */
const Content = ({ donation }: Props) => {
  const url = donation?.donationUrl;
  const platform = url ? platformOf(url) : null;
  const fundraiser = `${donation?.year ? `${donation.year} ` : ""}online fundraiser`;

  return (
    <main id="main" tabIndex={-1}>
      <PageHeader backLink={{ href: "/get-involved", label: "Get involved" }} background="stripes" color="sun" eyebrow="Help us to raise more than ever" title="Donate" />
      <Section color="sun" plain>
        <div className="mx-auto w-full max-w-5xl px-4">
          <div className="flex flex-col items-center gap-4">
            <p className={paragraph}>
              Every Boxing Day, our volunteer bucket collectors line the route to collect donations
              for the RNLI from our generous spectators. Any and all donations are appreciated so
              greatly: even the smallest amount can help to make a difference.
            </p>
            {
              url
                ? (
                  <>
                    <p className={paragraph}>
                      Can&apos;t make it this year, or can&apos;t wait until Boxing Day to support the
                      RNLI? You can give now through our {fundraiser}
                      {platform ? ` on ${platform}` : ""}. Thank you all for your support.
                    </p>
                    <Button href={url} rel="noreferrer" size="lg" target="_blank">
                      Donate online now
                      <span className="sr-only"> (opens in a new tab)</span>
                    </Button>
                  </>
                )
                : (
                  <>
                    <p className={paragraph}>
                      Our {fundraiser} opens nearer Boxing Day. Follow us on Facebook and we&apos;ll
                      share the link as soon as it&apos;s live, or bring some change on the day.
                      Thank you all for your support.
                    </p>
                    <Button color="pine" href={FACEBOOK_PAGE} rel="noreferrer" target="_blank">
                      Follow us on Facebook
                      <span className="sr-only"> (opens in a new tab)</span>
                    </Button>
                  </>
                )
            }
          </div>
        </div>
      </Section>
      <ClosingCta
        primary={{ label: "Take part", href: "/take-part" }}
        secondary={{ label: "Become a sponsor", href: "/sponsors" }}
        text="Donating is just one way to help. You could enter a raft, volunteer on the day, or sponsor the event."
        title="Fancy doing even more?"
        waveTopColor="var(--color-sun)"
      />
      <Footer waveTopColor="var(--color-pine-dark)" />
    </main>
  );
};

const DonatePage = (props: Props) => (
  <PageShell>
    <Content {...props} />
  </PageShell>
);

export default DonatePage;
