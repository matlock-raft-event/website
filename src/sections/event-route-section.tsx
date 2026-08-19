/* eslint-disable max-len */

import Map from "~/assets/images/event-map.svg";
import Heading from "~/components/heading";
import { Button } from "~/components/ui/button";

import "~/assets/event-route.css";
import Section from "~/components/section.tsx";
import { resolveAssetSrc } from "~/lib/assets";

const EventRouteSection = () => (
    <Section palette="cream">
        <Heading
            palette="cream"
            subtitle="Where we're going, we don't need roads..."
            title="Event Route"
        />
        <div className="flex flex-col items-center gap-8">
            <div className="mx-auto w-full max-w-4xl px-4">
                <img
                    className="rounded-lg"
                    alt="Event route map"
                    src={resolveAssetSrc(Map)}
                    style={{ width: "100%" }}
                />
            </div>
            <Button
                href="https://www.google.com/maps/d/u/1/embed?mid=18splrRLhcfp5U0n8gu5NM7mCgs-K5pY&ehbc=2E312F"
                rel="noreferrer"
                target="_blank"
            >
                View Interactive Map
            </Button>
        </div>
    </Section>
);

export default EventRouteSection;
