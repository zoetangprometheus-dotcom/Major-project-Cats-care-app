import catImage from "../assets/bangbang-cat.png";

type BangBangCatImageProps = {
  variant?: "hero" | "card" | "avatar";
  className?: string;
};

export function BangBangCatImage({ variant = "hero", className = "" }: BangBangCatImageProps) {
  const sizeClass =
    variant === "avatar"
      ? "h-[78px] w-[78px] rounded-full"
      : variant === "card"
        ? "h-[154px] w-[154px]"
        : "h-[246px] w-[246px]";
  const isAvatar = variant === "avatar";

  return (
    <div
      className={`${sizeClass} cat-image-frame bg-transparent ${
        isAvatar ? "overflow-hidden rounded-full" : "overflow-visible"
      } ${className}`}
    >
      <div className="relative h-full w-full">
        <img
          src={catImage}
          alt="梆梆"
          className={`relative z-10 h-full w-full bg-transparent object-contain object-center ${
            isAvatar
              ? ""
              : "mix-blend-multiply drop-shadow-[0_16px_24px_rgba(120,90,50,0.08)] [mask-image:radial-gradient(ellipse_at_center,#000_48%,rgba(0,0,0,0.78)_68%,rgba(0,0,0,0)_88%)] [mask-repeat:no-repeat] [mask-size:100%_100%]"
          }`}
          draggable={false}
        />
      </div>
    </div>
  );
}
