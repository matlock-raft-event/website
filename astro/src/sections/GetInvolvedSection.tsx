import { useTheme } from "@mui/material/styles";
import Grid2 from "@mui/material/Unstable_Grid2";

import donateImg from "~/assets/images/donate-img.jpg";
import helpOutImg from "~/assets/images/help-out-img.jpg";
import sponsorUsImg from "~/assets/images/sponsor-us-img.jpg";
import takePartImg from "~/assets/images/take-part-img.jpg";
import Heading from "~/components/Heading";
import ImageLink from "~/components/ImageLink";
import Section from "~/components/Section";
import useResponsive from "~/hooks/useResponsive";

const resolveSrc = (asset: unknown): string => (asset as { src?: string }).src ?? (asset as unknown as string);

const GetInvolvedSection = () => {
  const theme = useTheme();
  const color = theme.palette.yellow;

  const isMobile = useResponsive("down", "sm");

  return (
    <Section bgColor={color}>
      <Heading color={color} subtitle="It's for a mighty good cause" title="Get Involved" />

      <Grid2 container px={isMobile ? 8 : undefined} spacing={3}>
        <Grid2 md={3} sm={6} xs={12}>
          <ImageLink href="/take-part" label="Take Part" src={resolveSrc(takePartImg)} />
        </Grid2>
        <Grid2 md={3} sm={6} xs={12}>
          <ImageLink href="/volunteer" label="Help Out" src={resolveSrc(helpOutImg)} />
        </Grid2>
        <Grid2 md={3} sm={6} xs={12}>
          <ImageLink href="/donate" label="Donate" src={resolveSrc(donateImg)} />
        </Grid2>
        <Grid2 md={3} sm={6} xs={12}>
          <ImageLink href="/sponsors" label="Sponsor Us" src={resolveSrc(sponsorUsImg)} />
        </Grid2>
      </Grid2>
    </Section>
  );
};

export default GetInvolvedSection;
