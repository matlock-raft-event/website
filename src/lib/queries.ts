import { defineQuery } from "groq";

export const heroQuery = defineQuery(
  `*[_type == "hero" && _id == "hero"][0]{ title, titleAccent, buttonLink, buttonText, secondaryButtonLink, secondaryButtonText }`
);

/* latestUpdate: when the event is cancelled, the banner links to the update
   that explains why, which is the newest one. */
export const eventQuery = defineQuery(
  `*[_type == "event"][0]{
    date,
    meetingPoint,
    arrivalTime,
    entryFee,
    donationUrl,
    status,
    "latestUpdate": *[_type == "update" && defined(slug)] | order(date desc)[0]{ title, slug }
  }`
);

export const summaryQuery = defineQuery(
  `*[_type == "summary"][0]{ _id, yearsActive, bio, eventCount, moneyRaised }`
);

export const winnersQuery = defineQuery(
  `*[_type == "winner"]{ name, year, position, img }`
);

export const updatesQuery = defineQuery(
  `*[_type == "update"]{ title, slug, date, img, content }`
);

export const updatesForPathsQuery = defineQuery(
  `*[_type == "update" && defined(slug)]{ title, slug, date, img, content }`
);

export const aboutQuery = defineQuery(
  `*[_type == "about"][0]{ bio, rnliBio, rnliLink, dasacBio, dasacLink }`
);

export const contactInstructionsQuery = defineQuery(
  `*[_type == "contactInstructions"][0]{ general, sponsors, press }`
);

export const faqsQuery = defineQuery(
  `*[_type == "faq"]{ question, answer, audience }`
);

export const sponsorsQuery = defineQuery(
  `*[_type == "sponsor"]{ name, url, logo, logoTrimmed }`
);

export const sponsorTestimonialsQuery = defineQuery(
  `*[_type == "sponsor" && defined(testimonial)]{ name, url, testimonial, logo, logoTrimmed }`
);

export const galleryQuery = defineQuery(
  `*[_type == "galleryImage"]{ _id, year, author, img, cover }`
);

export const cookiesInfoQuery = defineQuery(
  `*[_type == "cookiesInfo"][0]{ content }`
);

export const volunteerPageQuery = defineQuery(
  `*[_type == "volunteerPage"][0]{
    intro,
    roles[]{
      title,
      image,
      body,
      contactInstructions
    }
  }`
);
