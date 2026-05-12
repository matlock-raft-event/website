import { memo, useMemo } from "react";
import type { BoxProps } from "@mui/material";
import { Box } from "@mui/material";

const FIRST = (
  <svg
    fill="none"
    height="100%"
    viewBox="0 0 81 80"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_i_1721_1821)">
      <ellipse cx="40.4326" cy="42" fill="#FBBA47" rx="32" ry="34" />
    </g>
    <g filter="url(#filter1_i_1721_1821)">
      <ellipse cx="40.5" cy="38" fill="#BC8B35" fillOpacity="0.5" rx="24" ry="22" />
    </g>
    <path
      d="M35.748 48V45.44H38.756V32.544L35.812 32.96L35.684 30.592L42.916 29.696V45.44H45.828V48H35.748Z"
      fill="#2B2C2C"
    />
    <defs>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="68"
        id="filter0_i_1721_1821"
        width="64"
        x="8.43262"
        y="8"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="-8" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1721_1821" />
      </filter>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="44"
        id="filter1_i_1721_1821"
        width="48"
        x="16.5"
        y="16"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1721_1821" />
      </filter>
    </defs>
  </svg>
);

const SECOND = (
  <svg
    fill="none"
    height="100%"
    viewBox="0 0 81 80"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_i_1721_1676)">
      <ellipse cx="40.4326" cy="42" fill="#C9C9C9" rx="32" ry="34" />
    </g>
    <g filter="url(#filter1_i_1721_1676)">
      <ellipse cx="40.5" cy="38" fill="#717171" fillOpacity="0.2" rx="24" ry="22" />
    </g>
    <path
      d="M33.7659 48L33.7979 45.536L39.2699 40.256C40.1019 39.4453 40.7739 38.7413 41.2859 38.144C41.8192 37.5467 42.2139 36.9813 42.4699 36.448C42.7472 35.9147 42.8859 35.3493 42.8859 34.752C42.8859 34.0267 42.6832 33.4187 42.2779 32.928C41.8725 32.416 41.2112 32.16 40.2939 32.16C39.3765 32.16 38.6619 32.448 38.1499 33.024C37.6379 33.5787 37.3819 34.3253 37.3819 35.264C37.3819 35.5413 37.4032 35.84 37.4459 36.16C37.4885 36.4587 37.5419 36.7787 37.6059 37.12H34.1819C34.0965 36.7787 34.0219 36.4267 33.9579 36.064C33.8939 35.7013 33.8619 35.3493 33.8619 35.008C33.8619 33.9413 34.1179 32.9813 34.6299 32.128C35.1419 31.2747 35.8992 30.6027 36.9019 30.112C37.9259 29.6213 39.1632 29.376 40.6139 29.376C42.5552 29.376 44.0699 29.8347 45.1579 30.752C46.2459 31.648 46.7899 32.832 46.7899 34.304C46.7899 35.1787 46.5979 36.0107 46.2139 36.8C45.8299 37.5893 45.2432 38.4107 44.4539 39.264C43.6859 40.096 42.7259 41.0453 41.5739 42.112L37.0619 46.464L36.4539 45.344H44.2299V42.304H46.9499V48H33.7659Z"
      fill="#2B2C2C"
    />
    <defs>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="68"
        id="filter0_i_1721_1676"
        width="64"
        x="8.43262"
        y="8"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="-8" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1721_1676" />
      </filter>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="44"
        id="filter1_i_1721_1676"
        width="48"
        x="16.5"
        y="16"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1721_1676" />
      </filter>
    </defs>
  </svg>
);

const THIRD = (
  <svg
    fill="none"
    height="100%"
    viewBox="0 0 81 80"
    width="100%"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_i_1721_1645)">
      <ellipse cx="40.4326" cy="42" fill="#D39E5C" rx="32" ry="34" />
    </g>
    <g filter="url(#filter1_i_1721_1645)">
      <ellipse cx="40.5" cy="38" fill="#9E7745" fillOpacity="0.6" rx="24" ry="22" />
    </g>
    <path
      d="M40.4614 48.32C38.5627 48.32 36.9947 47.9253 35.7574 47.136C34.5414 46.3467 33.6454 45.2373 33.0694 43.808L36.2054 42.432C36.5894 43.4133 37.1334 44.16 37.8374 44.672C38.5414 45.1627 39.3627 45.408 40.3014 45.408C41.24 45.408 41.9867 45.1733 42.5414 44.704C43.1174 44.2347 43.4054 43.5947 43.4054 42.784C43.4054 41.7813 43.0427 41.0347 42.3174 40.544C41.6134 40.032 40.504 39.776 38.9894 39.776V37.408C40.3334 37.408 41.368 37.1733 42.0934 36.704C42.8187 36.2133 43.1814 35.5093 43.1814 34.592C43.1814 33.8667 42.9467 33.2907 42.4774 32.864C42.008 32.4373 41.3147 32.224 40.3974 32.224C39.48 32.224 38.712 32.4907 38.0934 33.024C37.4747 33.536 37.048 34.2507 36.8134 35.168L33.5494 33.984C33.848 32.96 34.328 32.1067 34.9894 31.424C35.672 30.7413 36.4934 30.2293 37.4534 29.888C38.4347 29.5467 39.512 29.376 40.6854 29.376C42.712 29.376 44.2694 29.824 45.3574 30.72C46.4667 31.616 47.0214 32.7787 47.0214 34.208C47.0214 35.0613 46.8187 35.808 46.4134 36.448C46.008 37.088 45.4534 37.6107 44.7494 38.016C44.0454 38.4 43.2454 38.6347 42.3494 38.72V38.208C43.8 38.3147 45.0054 38.784 45.9654 39.616C46.9467 40.4267 47.4374 41.5573 47.4374 43.008C47.4374 44.1173 47.1494 45.0773 46.5734 45.888C45.9974 46.6773 45.1867 47.2853 44.1414 47.712C43.096 48.1173 41.8694 48.32 40.4614 48.32Z"
      fill="#2B2C2C"
    />
    <defs>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="68"
        id="filter0_i_1721_1645"
        width="64"
        x="8.43262"
        y="8"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="-8" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1721_1645" />
      </filter>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="44"
        id="filter1_i_1721_1645"
        width="48"
        x="16.5"
        y="16"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="4" />
        <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="shape" mode="normal" result="effect1_innerShadow_1721_1645" />
      </filter>
    </defs>
  </svg>
);

interface PodiumBadgeProps extends BoxProps {
  podium: 1 | 2 | 3;
}

const PodiumBadge = ({
  podium,
  ...rest
}: PodiumBadgeProps) => {
  const badges = [FIRST, SECOND, THIRD];
  const badge = useMemo(
    () => badges[podium - 1],
    [podium]
  );

  return (
    <Box {...rest} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
      {badge}
    </Box>
  );
};

export default memo(PodiumBadge);
