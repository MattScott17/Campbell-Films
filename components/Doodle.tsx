import Image from "next/image";

interface DoodleProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  rotation?: number;
  opacity?: number;
  hideOnMobile?: boolean;
}

export default function Doodle({
  src,
  alt,
  width,
  height,
  top,
  right,
  bottom,
  left,
  rotation = 0,
  opacity = 0.8,
  hideOnMobile = true,
}: DoodleProps) {
  const positionStyles: React.CSSProperties = {
    position: "absolute",
    top: top || "auto",
    right: right || "auto",
    bottom: bottom || "auto",
    left: left || "auto",
    transform: `rotate(${rotation}deg)`,
    opacity,
    pointerEvents: "none",
    zIndex: 10,
  };

  const containerClasses = hideOnMobile ? "hidden md:block" : "block";

  return (
    <div className={containerClasses} style={positionStyles}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={80}
        className="transition-transform duration-300 hover:scale-110"
      />
    </div>
  );
}
