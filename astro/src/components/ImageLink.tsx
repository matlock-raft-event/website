import { useState } from "react";
import type { CSSProperties } from "react";
import { Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

import useResponsive from "~/hooks/useResponsive";
import { TITLE_FONT_FAMILY } from "~/theme/typography";

const StyledLink = styled("a")(({ theme }) => ({
    aspectRatio: "3 / 2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    backgroundColor: "#ffffff",
    border: "8px solid white",
    boxShadow: theme.shadows[5],
    transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
    overflow: "hidden",
    position: "relative"
}));

interface ImageLinkProps {
    src: string;
    label: string;
    href: string;
}

const ImageLink = ({ src, label, href }: ImageLinkProps) => {
    const theme = useTheme();
    const [hover, setHover] = useState(false);
    const onMouseEnter = () => setHover(true);
    const onMouseLeave = () => setHover(false);

    const hoverStyles: CSSProperties | null = {
        cursor: "pointer",
        boxShadow: theme.shadows[10],
        transform: "scale(1.01) rotate(-0.5deg)"
    };

    const isMobile = useResponsive("down", "sm");

    return (
        <StyledLink
            href={href}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ ...(hover && hoverStyles) }}
        >
            <img
                alt={label}
                loading="lazy"
                src={src}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                }}
            />
            <Typography
                color="white"
                position="relative"
                sx={{
                    fontFamily: TITLE_FONT_FAMILY,
                    zIndex: 1,
                    ...(isMobile && {
                        fontSize: "2rem"
                    })
                }}
                textTransform="uppercase"
                variant="h3"
            >
                {label}
            </Typography>
        </StyledLink>
    );
};

export default ImageLink;
