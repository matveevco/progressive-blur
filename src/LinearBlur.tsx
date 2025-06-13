import React from "react";

interface LinearBlurProps extends React.HTMLAttributes<HTMLDivElement> {
  strength?: number;
  tint?: string;
  side?: "top" | "bottom" | "left" | "right";
  topOffset?: number; // % до которого полный блюр, после чего переход к прозрачности
}

const LinearBlur = ({
  strength = 24,
  tint = "rgba(255,255,255,0.3)",
  side = "bottom",
  topOffset = 30,
  ...props
}: LinearBlurProps) => {
  // Создаем правильный градиент в зависимости от стороны
  const getMaskGradient = () => {
    switch (side) {
      case "top":
        return `linear-gradient(to bottom, black 0%, black ${topOffset}%, transparent 100%)`;
      case "bottom":
        // Для фиксированного элемента сверху:
        // 1. Полный блюр от 0% до topOffset%
        // 2. Переход к прозрачности от topOffset% до 100%
        return `linear-gradient(to bottom, black 0%, black ${topOffset}%, transparent 100%)`;
      case "left":
        return `linear-gradient(to right, black 0%, black ${topOffset}%, transparent 100%)`;
      case "right":
        return `linear-gradient(to left, black 0%, black ${topOffset}%, transparent 100%)`;
      default:
        return `linear-gradient(to bottom, black 0%, black ${topOffset}%, transparent 100%)`;
    }
  };

  const maskGradient = getMaskGradient();

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
        backgroundColor: tint,
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
