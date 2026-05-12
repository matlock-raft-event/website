import { useState } from "react";
import type { CSSProperties } from "react";
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import SanityImage from "~/components/SanityImage";
import { TITLE_FONT_FAMILY } from "~/theme/typography";

const StyledDiv = styled("div")(() => ({
    position: "relative",
    borderRadius: 2,
    transition: "all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)",
    display: "block"
}));

const TypographyMaxLine = styled(Typography)(() => ({
    display: "-webkit-box",
    overflow: "hidden",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 3
}));

interface ImageCardProps {
    aspectRatio?: string;
    image?: unknown;
    fallbackSrc?: string;
    title?: string;
    description?: string;
    onClick?: VoidFunction;
    readOnly?: boolean;
    hideBorders?: boolean;
}

const ImageCard = (
    {
        aspectRatio,
        description,
        image,
        fallbackSrc,
        title,
        onClick = () => null,
        readOnly = false,
        hideBorders = false
    }: ImageCardProps) => {
    const [hover, setHover] = useState(false);
    const onMouseEnter = () => setHover(true);
    const onMouseLeave = () => setHover(false);

    const hoverStyles: CSSProperties | null = readOnly
        ? null
        : ({
            cursor: "pointer",
            transform: "scale(1.01)"
        });

    const borderStyles: CSSProperties | null = hideBorders
        ? null
        : ({
            backgroundColor: "#ffffff"
        });

    return (
        <StyledDiv
            onClick={onClick}
            onKeyDown={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                flexGrow: 1,
                ...(hover && hoverStyles),
                ...(!hideBorders && borderStyles)
            }}
        >
            {
                image
                    ? (
                        <SanityImage
                            alt={title}
                            image={image}
                            style={{
                                height: "auto",
                                width: "100%",
                                aspectRatio,
                                objectFit: "cover",
                                borderRadius: 2,
                                display: "block"
                            }}
                        />
                    )
                    : fallbackSrc && (
                        <img
                            alt={title ?? ""}
                            loading="lazy"
                            src={fallbackSrc}
                            style={{
                                height: "auto",
                                width: "100%",
                                aspectRatio,
                                objectFit: "cover",
                                borderRadius: 2,
                                display: "block"
                            }}
                        />
                    )
            }
            {
                (title || description) && (
                    <Stack
                        sx={{
                            p: 3,
                            py: 2
                        }}
                    >
                        {
                            title &&
                            <Typography fontFamily={TITLE_FONT_FAMILY} variant="h4">
                                {title}
                            </Typography>
                        }
                        {
                            description &&
                            <TypographyMaxLine>
                                {description}
                            </TypographyMaxLine>
                        }
                    </Stack>
                )
            }

        </StyledDiv>
    );
};

export default ImageCard;
