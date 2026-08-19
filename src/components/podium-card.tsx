import PodiumBadge from "~/components/podium-badge";
import SanityImage from "~/components/sanity-image";

interface PodiumCardProps {
  image: unknown;
  podium: 1 | 2 | 3;
  title: string;
}

const PodiumCard = ({ image, podium, title }: PodiumCardProps) => (
  <div className="relative p-[4%] pb-[8%] rounded-[4px] bg-paper shadow-card-hard transition-[transform,box-shadow] duration-[600ms] ease-[cubic-bezier(0.165,0.84,0.44,1)] flex">
    <div
      style={{
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: "-10%",
        zIndex: 99,
        left: 0
      }}
    >
      <PodiumBadge className="h-[inherit] w-1/4" podium={podium} />
    </div>
    <div className="flex w-full flex-col gap-2">
      <SanityImage
        alt={title}
        image={image}
        style={{
          height: "100%",
          width: "100%",
          aspectRatio: "1 / 1",
          objectFit: "cover",
          borderRadius: 2,
          maxHeight: "100%",
          maxWidth: "100%"
        }}
      />
      <h3 className="font-display uppercase text-xl md:text-2xl text-center">
        {title}
      </h3>
    </div>
  </div>
);

export default PodiumCard;
