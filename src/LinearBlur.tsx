import React from "react";

interface LinearBlurProps extends React.HTMLAttributes<HTMLDivElement> {
  strength?: number;
  tint?: string;
  side?: "top" | "bottom" | "left" | "right";
  falloffStart?: number; // % откуда начинается блюр (например, 50)
  falloffEnd?: number; // % где заканчивается
}

const LinearBlur = ({
  strength = 24,
  tint = "rgba(255,255,255,0.3)",
  side = "bottom",
  falloffStart = 50,
  falloffEnd = 100,
  ...props
}: LinearBlurProps) => {
  const direction = {
    top: "to bottom",
    bottom: "to top",
    left: "to right",
    right: "to left",
  }[side];

  const maskGradient = `linear-gradient(${direction}, transparent ${falloffStart}%, black ${falloffEnd}%)`;

  return (
    <div
      {...props}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
        WebkitBackdropFilter: `blur(${strength}px)`,
        backdropFilter: `blur(${strength}px)`,
        WebkitMaskImage: maskGradient,
        maskImage: maskGradient,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "100% 100%",
        maskSize: "100% 100%",
        ...props.style,
      }}
    />
  );
};

export { LinearBlur };
