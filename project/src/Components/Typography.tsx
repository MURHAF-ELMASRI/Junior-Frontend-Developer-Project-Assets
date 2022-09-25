import { memo, ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";

const Text = styled.p`
  font-size: 14;
  color: #fffefe;
  font-weight: 400;
  font-family: "Raleway", sans-serif;
  user-select: none;
  line-break: anyWhere;
`;

export default memo(SideBarItem);

interface Props {
  children: ReactNode;
  style?: CSSProperties;
}

function SideBarItem({ style, children }: Props) {
  return <Text style={style}>{children}</Text>;
}
