import SanityImage from "~/components/sanity-image";

type SponsorItemProps = {
  image: unknown;
  altText?: string;
  href?: string;
  onClick?: VoidFunction;
  readOnly?: boolean;
};

/* Stays white rather than paper: sponsor logos often carry their own white
   background, which would show as a mismatched box on any other surface. */
const SponsorItem = ({
  image,
  altText,
  href,
  onClick,
  readOnly = false
}: SponsorItemProps) => (
  <a
    className={`flex aspect-square w-full items-center justify-center rounded-[4px] bg-white p-[10%] shadow-card-soft transition-[transform,box-shadow] duration-300 ease-out ${
      readOnly
        ? ""
        : "cursor-pointer hover:-translate-y-1 hover:shadow-card-soft-raised focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pine"
    }`}
    href={href}
    onClick={onClick}
  >
    <SanityImage
      alt={altText}
      image={image}
      width={400}
      style={{
        maxHeight: "100%",
        maxWidth: "100%",
        objectFit: "contain"
      }}
    />
  </a>
);

export default SponsorItem;
