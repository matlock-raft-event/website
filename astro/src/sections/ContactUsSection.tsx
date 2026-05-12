import { Container, Typography } from "@mui/material";
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
        `*[_type == "contactInstructions"][0]{ general, sponsors, press }`
    );

    return (
        <Section bgColor={theme.palette.secondary}>
            <Heading color={theme.palette.secondary} subtitle="Need to get in touch?" title="Contact us" />

            <Container maxWidth="md">

                <Typography mb={4} variant="body1">
                    We&apos;re all ears for participants and those eager to join the excitement! Connect with us on our
                    Facebook page, or become a part of our Facebook group where you can share your event snapshots and
                    videos with the community. Got questions or simply want to chat about the event? We&apos;re here to
                    fill you in on all the details. We&apos;ll get back to you as soon as we can!
                </Typography>

                <Typography variant="subtitle1">General Enquiries</Typography>
                {
                    contactInstructions?.general &&
                    <Block value={contactInstructions.general as never} />
                }

                <Typography variant="subtitle1">Sponsors</Typography>
                {
                    contactInstructions?.sponsors &&
                    <Block value={contactInstructions.sponsors as never} />
                }

                <Typography variant="subtitle1">Press</Typography>
                {
                    contactInstructions?.press &&
                    <Block value={contactInstructions.press as never} />
                }

            </Container>

        </Section>
    );
};

export default ContactUsSection;
