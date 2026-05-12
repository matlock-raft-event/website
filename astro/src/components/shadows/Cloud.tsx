import type { HTMLProps } from "react";

type CloudProps = HTMLProps<HTMLDivElement> & {
    color?: string;
};
const Cloud = ({ color, ...props }: CloudProps) => {
    const imgColor = color ?? "#FFC968";
    return (
        <div {...props}>
            <svg fill="none" height="100%" viewBox="0 0 399 43" width="100%" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1155_12868)">
                    <path
                        d="M398.37 25.9199H0V42.5199H398.37V25.9199Z"
                        fill={imgColor}
                    />
                    <path
                        d="M235.15 27.1C235.15 12.13 252.2 0 273.23 0C294.26 0 311.31 12.13 311.31 27.1"
                        fill={imgColor}
                    />
                    <path
                        d="M318.16 31.8701C318.16 20.2701 331.37 10.8701 347.66 10.8701C363.95 10.8701 377.16 20.2701 377.16 31.8701"
                        fill={imgColor}
                    />
                </g>
                <defs>
                    <clipPath id="clip0_1155_12868">
                        <rect fill="white" height="42.52" width="398.37" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
};

export default Cloud;
