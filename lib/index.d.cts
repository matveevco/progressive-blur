import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface LinearBlurProps extends React.HTMLAttributes<HTMLDivElement> {
    strength?: number;
    tint?: string;
    side?: "top" | "bottom" | "left" | "right";
    topOffset?: number;
}
declare const LinearBlur: ({ strength, tint, side, topOffset, ...props }: LinearBlurProps) => react_jsx_runtime.JSX.Element;

interface RadialBlurProps extends React.HTMLAttributes<HTMLDivElement> {
    strength?: number;
    steps?: number;
    falloffPercentage?: number;
    tint?: string;
}
declare function RadialBlur({ strength, steps, falloffPercentage, tint, ...props }: RadialBlurProps): react_jsx_runtime.JSX.Element;

export { LinearBlur, RadialBlur };
