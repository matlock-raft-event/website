import Block from "~/components/block";
import Section from "~/components/section";
import type { ContactInstructionsQueryResult } from "~/lib/sanity.types";

type Props = { contactInstructions: ContactInstructionsQueryResult };

const ContactUsSection = ({ contactInstructions }: Props) => (
  <Section color="cream" plain>

    <div className="mx-auto w-full max-w-5xl px-4">

      <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
                    We&apos;re all ears for participants and those eager to join the excitement! Connect with us on our
                    Facebook page, or become a part of our Facebook group where you can share your event snapshots and
                    videos with the community. Got questions or simply want to chat about the event? We&apos;re here to
                    fill you in on all the details. We&apos;ll get back to you as soon as we can!
      </p>

      <h2 className="font-display uppercase text-base">General Enquiries</h2>
      {
        contactInstructions?.general &&
                    <Block value={contactInstructions.general as never} />
      }

      <h2 className="font-display uppercase text-base">Sponsors</h2>
      {
        contactInstructions?.sponsors &&
                    <Block value={contactInstructions.sponsors as never} />
      }

      <h2 className="font-display uppercase text-base">Press</h2>
      {
        contactInstructions?.press &&
                    <Block value={contactInstructions.press as never} />
      }

    </div>

  </Section>
);

export default ContactUsSection;
