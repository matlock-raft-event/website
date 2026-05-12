import { useState } from "react";
import type { CSSProperties } from "react";
import { styled, useTheme } from "@mui/material/styles";

import SanityImage from "~/components/SanityImage";

const StyledButton = styled("a")(({ theme }) => ({
    aspectRatio: "1 / 1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#ffffff",
    boxShadow: theme.shadows[5],
    transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)"
}));

type SponsorItemProps = {
    image: unknown;
    altText?: string;
    href?: string;
    onClick?: VoidFunction;
    readOnly?: boolean;
};

const SponsorItem = ({
    image,
    altText,
    href,
    onClick,
    readOnly = false
}: SponsorItemProps) => {
    const theme = useTheme();

    const [hover, setHover] = useState(false);
    const onMouseEnter = () => setHover(true);
    const onMouseLeave = () => setHover(false);

    const hoverStyles: CSSProperties | null = readOnly
        ? null
        : ({
            cursor: "pointer",
            boxShadow: theme.shadows[10],
            transform: "scale(1.01) rotate(-0.5deg)"
        });

    return (
        <StyledButton
            href={href}
            onClick={onClick}
            onKeyDown={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                ...(hover && hoverStyles)
            }}
        >
            <SanityImage
                alt={altText}
                image={image}
                style={{
                    maxHeight: "100%",
                    maxWidth: "100%",
                    objectFit: "contain"
                }}
            />
        </StyledButton>
    );
};

export default SponsorItem;
