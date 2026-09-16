import type { SVGProps } from "react";

const base: SVGProps<SVGSVGElement> = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} width={16} height={16} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export function RocketIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2c2.8 1.6 4.5 4.6 4.5 8.2 0 2.3-.7 4.4-2 6.2l-2.5 3-2.5-3c-1.3-1.8-2-3.9-2-6.2C7.5 6.6 9.2 3.6 12 2Z" />
      <circle cx="12" cy="9.5" r="1.8" />
      <path d="M8.5 15.5 6 18l1 3 2.7-2" />
      <path d="M15.5 15.5 18 18l-1 3-2.7-2" />
    </svg>
  );
}

export function LayersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="m12 3 8 4.5-8 4.5-8-4.5Z" />
      <path d="m4 12 8 4.5 8-4.5" />
      <path d="m4 16.5 8 4.5 8-4.5" />
    </svg>
  );
}

export function CompassIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m14.5 9.5-2 5-3 1.5 2-5Z" />
    </svg>
  );
}

export const focusIcons = [RocketIcon, LayersIcon, CompassIcon];
