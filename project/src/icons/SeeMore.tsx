import { memo } from "react";

export default memo(SeeMore);

interface Props {
  color?: string;
}

function SeeMore(props: Props) {
  const color = props.color;

  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.18423 14.2497H7.04961V8.06236H0.808395V6.93732H7.04961V0.74976H8.18423V6.93732H14.4254V8.06236H8.18423V14.2497Z"
        fill={color ?? "#1D1D1D"}
      />
    </svg>
  );
}
