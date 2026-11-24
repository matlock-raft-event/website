import RegistrationFormPdf from "~/assets/documents/Registration-Form.pdf";
import RulesPdf from "~/assets/documents/Rules-and-Guidelines.pdf";
import SafetyPdf from "~/assets/documents/Safety-Brief.pdf";
import Section from "~/components/section";
import StepCard from "~/components/step-card";
import { Button } from "~/components/ui/button";
import type { EventDocuments, EventFacts } from "~/lib/event";

/* This year's PDFs are uploaded in the Studio's Event details, in the order the
   steps below use them: read the rules and safety brief, then fill in the form.
   Each falls back to the copy bundled in src/assets/documents, so a button is
   never dead when the Studio has none. The download name is what the file is
   saved as. */
const DOCUMENTS = [
  { key: "rules", label: "Rules & Guidelines", filename: "Rules-and-Guidelines", fallback: RulesPdf },
  { key: "safetyBrief", label: "Safety Brief", filename: "Safety-Brief", fallback: SafetyPdf },
  { key: "registrationForm", label: "Registration Form", filename: "Registration-Form", fallback: RegistrationFormPdf }
] as const satisfies readonly { key: keyof EventDocuments; label: string; filename: string; fallback: string }[];

/* The download attribute is ignored for another origin, so the Sanity CDN is
   asked to serve the file as a download under that name with ?dl=. */
const documentHref = (sanityUrl: string | undefined, filename: string, fallback: string) =>
  sanityUrl ? `${sanityUrl}?dl=${filename}.pdf` : fallback;

/* Meeting point, arrival time and fee come from the Studio's Event details. */
const steps = ({ meetingPoint, arrivalTime, inspectionTime, entryFee }: EventFacts) => [
  {
    key: "Step 1",
    description: "Read and make sure you understand the Rules and Guidelines and Safety Brief"
  },
  {
    key: "Step 2",
    description: "Print out and complete your registration form with all relevant information"
  },
  {
    key: "Step 3",
    description: `Arrive at ${meetingPoint} at around ${arrivalTime} on Boxing Day with your entry fees ` +
            `(${entryFee}) and registration form signed and in hand, and every crew member wearing a wetsuit, ` +
            "semi-dry or dry suit. Suits are compulsory: no suit, no raft. Your mode of transport should be a " +
            "sturdy DIY raft built entirely by the crew, ready for the marshals' inspection by " + inspectionTime
  }
];

type Props = { documents: EventDocuments; facts: EventFacts };

const TakePartSection = ({ documents, facts }: Props) => (
  <Section color="sun" plain>
    <div className="mx-auto w-full max-w-5xl px-4">
      <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                            The Raft Event is approximately 3 miles long, the water is cold and in places deep and
                            turbulent. There is a weir, Masson Weir, with a steep drop: it is the most dangerous part of the course.
                            Are you okay with that? Still want to get cold and wet on Boxing Day? Don’t say we didn’t
                            warn
                            you!
          </p>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                            Welcome to an elite club of individuals that choose to give something back to a great cause
                            on
                            Boxing Day: the RNLI. Do it once and we promise you will be hooked!
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <p className="font-display uppercase text-base">
                            To take part in the raft event, you need to complete the following steps:
          </p>
          {
            steps(facts).map(item => (
              <StepCard
                key={item.key}
                content={
                  <p className="text-sm leading-relaxed">
                    {item.description}
                  </p>
                }
                title={item.key}
              />
            ))
          }
        </div>

        {/* Wraps: the three labels are 620px wide and the Section clips, so
            without this the end buttons are cut off and unreachable on a
            phone. */}
        <div className="flex flex-row flex-wrap py-4 gap-4">
          {
            DOCUMENTS.map(({ key, label, filename, fallback }) => (
              <Button
                download={filename}
                href={documentHref(documents[key], filename, fallback)}
                key={key}
                rel="noreferrer"
                target="_blank"
              >
                {label}
              </Button>
            ))
          }
        </div>

        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                        Once ready and your raft has been checked, be prepared to face whatever the Derbyshire Dales,
                        the River Derwent and thousands of excited spectators have to offer on a typical Boxing Day.
                        Best of luck!
        </p>
        <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                        This event is only possible thanks to the brave drivers and guest participants working hard to
                        create some stunning rafts for all of the spectators to enjoy. The more fun and excitement on
                        the day, the deeper people will dig in their pockets and donate to the RNLI.
        </p>
      </div>
    </div>
  </Section>
);

export default TakePartSection;
