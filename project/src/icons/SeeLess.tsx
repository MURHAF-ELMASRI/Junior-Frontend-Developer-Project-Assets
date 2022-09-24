import { memo } from "react";

export default memo(SeeLess);

interface Props {
  color?: string;
}

function SeeLess(props: Props) {
  const color = props.color;
  return (
    <svg
      fill={color}
      width="12"
      height="1"
      viewBox="0 0 12 1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.00957 -8.5e-05H11.0031V0.999811H0.00957V-8.5e-05Z"
        fill={color ?? "#1D1D1D"}
      />
    </svg>
  );
}
