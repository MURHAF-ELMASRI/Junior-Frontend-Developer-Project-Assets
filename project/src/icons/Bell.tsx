import { memo } from "react";

export default memo(Bell);

interface Props {
  color?: string;
}

function Bell(props: Props) {
  const color = props.color;

  return (
    <svg
      width="20"
      height="18"
      viewBox="0 0 20 18"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.0261 14.0515H4.42011V13.1455L5.72011 11.8105V9.19453C5.68628 7.28346 7.01377 5.61739 8.88411 5.22353V4.84453C8.86901 4.53573 9.02516 4.24371 9.29034 4.08479C9.55553 3.92587 9.88668 3.92587 10.1519 4.08479C10.4171 4.24371 10.5732 4.53573 10.5581 4.84453V5.22653C12.4279 5.61971 13.7559 7.28411 13.7241 9.19453V11.8075L15.0241 13.1425V14.0485L15.0261 14.0515ZM9.72611 16.2865C9.09715 16.2591 8.592 15.7582 8.55911 15.1295H10.8841C10.8515 15.756 10.3497 16.2561 9.72311 16.2865H9.72611ZM15.9511 12.5465L14.8071 11.3735V9.19453C14.8318 7.08847 13.5545 5.18554 11.5961 4.41053C11.41 3.52675 10.6303 2.89415 9.72711 2.89415C8.82395 2.89415 8.04424 3.52675 7.85811 4.41053C5.90008 5.18586 4.62329 7.08872 4.64811 9.19453V11.3695L3.50411 12.5425C3.40223 12.646 3.34512 12.7853 3.34511 12.9305V14.5945C3.34566 14.8924 3.58726 15.1335 3.88511 15.1335H7.48511C7.48511 16.3712 8.48844 17.3745 9.72611 17.3745C10.9638 17.3745 11.9671 16.3712 11.9671 15.1335H15.5671C15.865 15.1335 16.1066 14.8924 16.1071 14.5945V12.9335C16.1061 12.7888 16.0491 12.6501 15.9481 12.5465H15.9511Z"
        fill={color ?? "#F55661"}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2031 2.27152L12.9401 2.91152C12.892 3.02779 12.9458 3.16117 13.0611 3.21152C14.8097 4.02657 15.9642 5.74176 16.0611 7.66852C16.0644 7.7932 16.1664 7.89257 16.2911 7.89252H16.9811C17.0435 7.89256 17.1033 7.86723 17.1466 7.82236C17.19 7.77748 17.2133 7.7169 17.2111 7.65452C17.1062 5.27115 15.6754 3.14725 13.5061 2.15452C13.3901 2.10336 13.2546 2.15569 13.2031 2.27152ZM14.0771 0.138524L13.8161 0.778524C13.7925 0.834485 13.7921 0.897531 13.815 0.953792C13.8379 1.01005 13.8821 1.05492 13.9381 1.07852C16.5451 2.25034 18.2619 4.79926 18.3681 7.65552C18.3708 7.78059 18.473 7.88055 18.5981 7.88052H19.2881C19.3502 7.88055 19.4096 7.85549 19.4529 7.81105C19.4962 7.76661 19.5197 7.70656 19.5181 7.64452C19.4053 4.33029 17.412 1.37069 14.3831 0.0205244C14.3269 -0.00493799 14.2629 -0.00678319 14.2054 0.0154029C14.1478 0.037589 14.1016 0.0819482 14.0771 0.138524V0.138524ZM6.3151 2.27152L6.5781 2.91152C6.6262 3.02779 6.57241 3.16117 6.4571 3.21152C4.70762 4.02551 3.55272 5.74132 3.4571 7.66852C3.45385 7.7932 3.35182 7.89257 3.2271 7.89252H2.5371C2.47478 7.89228 2.4152 7.86687 2.37189 7.82205C2.32858 7.77724 2.30522 7.71682 2.3071 7.65452C2.41249 5.2713 3.84309 3.14761 6.0121 2.15452C6.12809 2.10336 6.26361 2.15569 6.3151 2.27152V2.27152ZM5.4411 0.138524L5.7021 0.778524C5.72571 0.834485 5.72612 0.897531 5.70324 0.953792C5.68036 1.01005 5.63607 1.05492 5.5801 1.07852C2.97296 2.25015 1.25604 4.79919 1.1501 7.65552C1.14738 7.78059 1.0452 7.88055 0.920104 7.88052H0.230104C0.168137 7.88027 0.108869 7.85513 0.065619 7.81075C0.0223687 7.76637 -0.00123755 7.70648 0.00010427 7.64452C0.113115 4.33036 2.10642 1.37089 5.1351 0.0205244C5.1913 -0.00465689 5.25522 -0.00635846 5.31268 0.0157976C5.37013 0.0379536 5.41637 0.082133 5.4411 0.138524V0.138524Z"
        fill={color ?? "#484F58"}
      />
    </svg>
  );
}
