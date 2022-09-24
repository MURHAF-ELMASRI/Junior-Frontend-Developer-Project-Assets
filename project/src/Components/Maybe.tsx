import { memo, ReactElement } from "react";

export default memo(Maybe);

interface Props {
  shouldRender: boolean;
  children: ReactElement;
}
function Maybe({ shouldRender, children }: Props) {
  return <>{shouldRender ? children : null}</>;
}
