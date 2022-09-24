import { memo } from "react";

export default memo(BarChart);

interface Props {
  color?: string;
}

function BarChart(props: Props) {
  const color = props.color || "none";

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.0149 7.0741L16.6667 1.42228V3.33308H17.4999V0.41656C17.4999 0.18646 17.3133 -0.00014 17.0833 -0.00014H14.1665V0.8332H16.0773L10.4256 6.48494C10.3084 6.60212 10.1541 6.6607 9.99992 6.6607C9.84572 6.6607 9.69144 6.60212 9.5741 6.48494L6.43158 3.34236C6.1518 3.06208 5.78402 2.92212 5.41632 2.92248C5.0488 2.92248 4.6813 3.06244 4.4016 3.34236L0.42212 7.32188L1.0113 7.9111L4.99078 3.9315C5.10822 3.8142 5.2624 3.75568 5.4166 3.75568C5.5707 3.75568 5.72498 3.8142 5.84242 3.9315L8.98492 7.0741C9.2648 7.35416 9.63222 7.49412 9.99992 7.49396C10.3678 7.49376 10.7351 7.35372 11.0149 7.0741ZM-2e-05 19.1664V19.9999H20V19.1664H-2e-05ZM15.4166 18.3332H17.9166C18.3769 18.3332 18.7499 17.9601 18.7499 17.5V6.24988C18.7499 5.78968 18.3769 5.41654 17.9166 5.41654H15.4166C14.9564 5.41654 14.5832 5.78968 14.5832 6.24988V17.5C14.5832 17.9601 14.9564 18.3332 15.4166 18.3332ZM15.4166 6.24988H17.9166V7.5H15.4166V6.24988ZM15.4166 8.33334H17.9166V17.5H15.4166V8.33334ZM12.0833 11.2499C12.0833 10.7897 11.7101 10.4167 11.25 10.4167H8.74998C8.28968 10.4167 7.91658 10.7897 7.91658 11.2499V17.5C7.91658 17.9601 8.28968 18.3332 8.74998 18.3332H11.25C11.7101 18.3332 12.0833 17.9601 12.0833 17.5V11.2499ZM11.25 17.5H8.74998V13.3332H11.25V17.5ZM11.25 12.5H8.74998V11.2499H11.25V12.5ZM5.4166 9.99996C5.4166 9.53976 5.0435 9.16668 4.5832 9.16668H2.08322C1.62302 9.16668 1.24992 9.53976 1.24992 9.99996V17.5C1.24992 17.9601 1.62302 18.3332 2.08322 18.3332H4.5832C5.0435 18.3332 5.4166 17.9601 5.4166 17.5V9.99996ZM4.5832 17.5H2.08322V12.0831H4.5832V17.5ZM4.5832 11.2499H2.08322V9.99996H4.5832V11.2499Z"
        fill="#F55661"
      />
    </svg>
  );
}