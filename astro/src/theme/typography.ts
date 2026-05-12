export const remToPx = (value: string) => Math.round(parseFloat(value) * 16);
export const pxToRem = (value: number) => `${value / 16}rem`;

export const responsiveFontSizes = ({ sm, md, lg }: { sm: number; md: number; lg: number }) => ({
    "@media (min-width:600px)": {
        fontSize: pxToRem(sm)
    },
    "@media (min-width:900px)": {
        fontSize: pxToRem(md)
    },
    "@media (min-width:1200px)": {
        fontSize: pxToRem(lg)
    }
});

export const PRIMARY_FONT_FAMILY = "'avenir', sans-serif";
export const SECONDARY_FONT_FAMILY = "'Rokkitt Variable', serif";
export const TITLE_FONT_FAMILY = "'League Spartan Variable', serif";

const typography = {
    fontFamily: PRIMARY_FONT_FAMILY,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {
        fontFamily: TITLE_FONT_FAMILY,
        fontWeight: 800,
        lineHeight: 80 / 64,
        fontSize: pxToRem(28),
        ...responsiveFontSizes({ sm: 40, md: 48, lg: 64 })
    },
    h2: {
        fontWeight: 800,
        lineHeight: 64 / 48,
        fontSize: pxToRem(32),
        ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 })
    },
    h3: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(24),
        ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 })
    },
    h4: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(20),
        ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 })
    },
    h5: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(18),
        ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 })
    },
    h6: {
        fontFamily: SECONDARY_FONT_FAMILY,
        fontWeight: 500,
        lineHeight: 28 / 18,
        fontSize: pxToRem(14),
        ...responsiveFontSizes({ sm: 16, md: 18, lg: 18 })
    },
    subtitle1: {
        fontFamily: TITLE_FONT_FAMILY,
        fontWeight: 600,
        lineHeight: 1.5,
        fontSize: pxToRem(16)
    },
    subtitle2: {
        fontFamily: TITLE_FONT_FAMILY,
        fontWeight: 600,
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    body1: {
        lineHeight: 1.6,
        fontSize: pxToRem(14),
        ...responsiveFontSizes({ sm: 16, md: 16, lg: 18 })
    },
    body2: {
        lineHeight: 22 / 14,
        fontSize: pxToRem(14)
    },
    caption: {
        lineHeight: 1.5,
        fontSize: pxToRem(12)
    },
    overline: {
        fontWeight: 700,
        lineHeight: 1.5,
        fontSize: pxToRem(12),
        textTransform: "uppercase"
    },
    button: {
        fontWeight: 600,
        lineHeight: 24 / 14,
        fontSize: pxToRem(14),
        textTransform: "capitalize"
    }
} as const;

export default typography;
