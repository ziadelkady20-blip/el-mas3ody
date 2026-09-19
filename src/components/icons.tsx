import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5.5 4h3l1.5 4-2 1.5a12.5 12.5 0 0 0 6.5 6.5L16 14l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 3.5 6.2 2 2 0 0 1 5.5 4Z" />
    </svg>
  );
}

export function TankIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="6" width="16" height="13" rx="2.5" />
      <path d="M4 10h16" />
      <path d="M9 3.5h6M12 3.5V6" />
      <path d="M12 12.5c-1.1 1.3-1.7 2.2-1.7 3a1.7 1.7 0 0 0 3.4 0c0-.8-.6-1.7-1.7-3Z" />
    </svg>
  );
}

export function PestIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <ellipse cx="12" cy="13.5" rx="4.5" ry="5.5" />
      <path d="M12 8v11M9.5 5.5 11 8m3.5-2.5L13 8" />
      <path d="M7.5 11.5 4.5 10M7.5 15h-3M8.5 18l-2.5 2M16.5 11.5l3-1.5M16.5 15h3M15.5 18l2.5 2" />
    </svg>
  );
}

export function DrainIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h7a3 3 0 0 1 3 3v3" />
      <path d="M5 4v4M5 4H3.5M15 10h-3.5v4H19v-4H15Z" />
      <path d="M13.5 17c-.8 1-1.2 1.7-1.2 2.3a1.2 1.2 0 0 0 2.4 0c0-.6-.4-1.3-1.2-2.3ZM18 16.5c-.6.8-.9 1.3-.9 1.8a.9.9 0 0 0 1.8 0c0-.5-.3-1-.9-1.8Z" />
    </svg>
  );
}

export function SofaIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 11V8.5A2.5 2.5 0 0 1 7.5 6h9A2.5 2.5 0 0 1 19 8.5V11" />
      <path d="M4.5 18H19.5a0 0 0 0 0 0 0V18a0 0 0 0 0 0 0H4.5a0 0 0 0 0 0 0V18a0 0 0 0 0 0 0Z" />
      <path d="M3 13a1.8 1.8 0 0 1 3.6 0v1.4h10.8V13A1.8 1.8 0 0 1 21 13v3.2a1.8 1.8 0 0 1-1.8 1.8H4.8A1.8 1.8 0 0 1 3 16.2V13Z" />
      <path d="M6 18v1.5M18 18v1.5" />
    </svg>
  );
}

export function FloorIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M3 20h18" />
      <path d="M6 20l9.5-13.5a2 2 0 0 1 3.3 2.3L11.5 20" />
      <path d="M4.5 15.5 6 14m-1 6 3-3" />
      <path d="M18.5 15.5v.01M20 18v.01" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 19 6v5.5c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-2.5Z" />
      <path d="m9 12 2 2 4-4.5" />
    </svg>
  );
}

export function SparkleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4.5c.7 3.6 2 4.9 5.5 5.5-3.5.6-4.8 1.9-5.5 5.5-.7-3.6-2-4.9-5.5-5.5 3.5-.6 4.8-1.9 5.5-5.5Z" />
      <path d="M18.5 15.5c.35 1.8 1 2.45 2.75 2.75-1.75.3-2.4.95-2.75 2.75-.35-1.8-1-2.45-2.75-2.75 1.75-.3 2.4-.95 2.75-2.75Z" />
    </svg>
  );
}

export function DropIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5c3.5 4.2 6 7.4 6 10.3a6 6 0 0 1-12 0c0-2.9 2.5-6.1 6-10.3Z" />
      <path d="M9.5 13.5a3 3 0 0 0 2 3" />
    </svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-6.5-5.3-6.5-10.2A6.5 6.5 0 0 1 12 4.3a6.5 6.5 0 0 1 6.5 6.5C18.5 15.7 12 21 12 21Z" />
      <circle cx="12" cy="10.8" r="2.3" />
    </svg>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="4" width="7" height="7" rx="1.8" />
      <rect x="13" y="4" width="7" height="7" rx="1.8" />
      <rect x="4" y="13" width="7" height="7" rx="1.8" />
      <rect x="13" y="13" width="7" height="7" rx="1.8" />
    </svg>
  );
}

export function HeartIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20s-7.5-4.6-7.5-10A4.4 4.4 0 0 1 12 7.2 4.4 4.4 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10Z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19 5c-9 0-13.5 4-13.5 9.5 0 2.5 1.7 4.5 4.5 4.5C15.5 19 19 12.5 19 5Z" />
      <path d="M6.5 18C9 13.5 12.5 10 16 8" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m4 11 8-7 8 7" />
      <path d="M6 9.5V20h12V9.5" />
      <path d="M10 20v-5h4v5" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M19 12H5m0 0 5.5-5.5M5 12l5.5 5.5" />
    </svg>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h10" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}
