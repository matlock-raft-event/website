import type { ComponentProps } from "react";
import { ArrowLeftIcon } from "@phosphor-icons/react";

import { Button } from "~/components/ui/button";

export type PageHeaderBackLinkProps = {
  href: string;
  /** The parent page's name, e.g. "Event information". */
  label: string;
};

type Props = PageHeaderBackLinkProps & {
  color: ComponentProps<typeof Button>["color"];
};

/* The way back to the parent page, under the title. It's navigation, so it
   uses the button's link variant, in the ground's navigating colour. The
   padding comes off so it lines up with the title's left edge. */
const PageHeaderBackLink = ({ href, label, color }: Props) => (
  <Button
    className="self-start px-0 has-data-[icon=inline-start]:pl-0"
    color={color}
    href={href}
    size="sm"
    variant="link"
  >
    <ArrowLeftIcon aria-hidden="true" data-icon="inline-start" weight="bold" />
    {label}
  </Button>
);

export default PageHeaderBackLink;
