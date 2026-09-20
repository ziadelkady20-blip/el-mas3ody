type BrandLogoProps = { className?: string; priority?: boolean };

export default function BrandLogo({ className = "", priority = false }: BrandLogoProps) {
  const filterId = "mas3ody-logo-cutout";

  return (
    <svg
      viewBox="0 0 1050 900"
      role="img"
      aria-label="شعار المسعودي — لخدمات التنظيف والصيانة والعزل"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter id={filterId} colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    -0.2126 -0.7152 -0.0722 0 1"
          />
          <feComponentTransfer>
            <feFuncA type="gamma" amplitude="1" exponent="0.62" offset="0" />
          </feComponentTransfer>
        </filter>
      </defs>
      <image
        href="/images/logo.png"
        x="-100"
        y="-150"
        width="1254"
        height="1254"
        preserveAspectRatio="none"
        filter={`url(#${filterId})`}
      />
    </svg>
  );
}
