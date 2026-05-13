import { defineQuery } from "groq";

export const heroQuery = defineQuery(
  `*[_type == "hero"][0]{ title, subtitle, buttonLink, buttonText }`
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
  `*[_type == "faq"]{ question, answer }`
);

export const sponsorsQuery = defineQuery(
  `*[_type == "sponsor"]{ name, slug, logo }`
);

export const sponsorsForPathsQuery = defineQuery(
  `*[_type == "sponsor" && defined(slug)]{ name, slug, logo, url, address, description, testimonial }`
);

export const galleryQuery = defineQuery(
  `*[_type == "galleryImage"]{ _id, year, author, img }`
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
