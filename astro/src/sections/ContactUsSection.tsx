import { useTheme } from "@mui/material/styles";

import Block from "~/components/Block";
import Heading from "~/components/Heading";
import Section from "~/components/Section";
import useSanityFetch from "~/hooks/useSanityFetch";

type ContactInstructions = {
  general?: unknown;
  sponsors?: unknown;
  press?: unknown;
};

const ContactUsSection = () => {
  const theme = useTheme();

  const { data: contactInstructions } = useSanityFetch<ContactInstructions>(
    "*[_type == \"contactInstructions\"][0]{ general, sponsors, press }"
  );

  return (
    <Section bgColor={theme.palette.secondary}>
      <Heading color={theme.palette.secondary} subtitle="Need to get in touch?" title="Contact us" />

      <div className="mx-auto w-full max-w-4xl px-4">

        <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-8">
                    We&apos;re all ears for participants and those eager to join the excitement! Connect with us on our
                    Facebook page, or become a part of our Facebook group where you can share your event snapshots and
                    videos with the community. Got questions or simply want to chat about the event? We&apos;re here to
                    fill you in on all the details. We&apos;ll get back to you as soon as we can!
        </p>

        <p className="font-display font-semibold text-base">General Enquiries</p>
        {
          contactInstructions?.general &&
                    <Block value={contactInstructions.general as never} />
        }

        <p className="font-display font-semibold text-base">Sponsors</p>
        {
          contactInstructions?.sponsors &&
                    <Block value={contactInstructions.sponsors as never} />
        }

        <p className="font-display font-semibold text-base">Press</p>
        {
          contactInstructions?.press &&
                    <Block value={contactInstructions.press as never} />
        }

      </div>

    </Section>
  );
};

export default ContactUsSection;
