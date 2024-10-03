function Arrow({ color = "#FAF9F6" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="24"
      fill="none"
      viewBox="0 0 14 24"
    >
      <g>
        <path
          fill={color}
          d="M10 22.154L.346 12.5 10 2.846l1.42 1.42L3.183 12.5l8.235 8.234-1.42 1.42z"
        ></path>
      </g>
    </svg>
  );
}

export default Arrow;
