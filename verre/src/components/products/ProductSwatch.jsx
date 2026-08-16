function ProductSwatch({ color, shape, size = 96 }) {
  const roundedness = shape === 'Round' ? 40 : shape === 'Square' ? 6 : 14;

  return (
    <svg
      className="product-swatch"
      width={size}
      height={size}
      viewBox="0 0 96 96"
      role="img"
      aria-label={`${shape} frame in ${color}`}
    >
      <rect width="96" height="96" rx="10" fill="#f0ede6" />
      <g stroke={color} strokeWidth="4" fill="none">
        <rect x="10" y="34" width="30" height="24" rx={roundedness / 2} />
        <rect x="56" y="34" width="30" height="24" rx={roundedness / 2} />
        <path d="M40 44 h16" />
        <path d="M10 40 L4 34" />
        <path d="M86 40 L92 34" />
      </g>
    </svg>
  );
}

export default ProductSwatch;
