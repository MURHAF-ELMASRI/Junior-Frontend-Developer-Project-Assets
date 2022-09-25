import styled from "styled-components";

interface Props{
    marginTop?: number;
    column?: boolean;
    alignItems?: "center";
    justifyContent?: "center" | "space-between";
    wrap?: boolean;
    gap?: number;
    padding?: string;
    backgroundColor?: string;
    width?: `${number}${"px" | "%"}`;
    height?: number;
  }

const FlexComponent = styled.div<Props>`
  display: flex;
  flex-direction: ${(p) => (p.column ? "column" : "")};
  align-items: ${(p) => p.alignItems ?? ""};
  justify-content: ${(p) => p.justifyContent ?? ""};
  margin-top: ${(p) => `${p.marginTop}px` ?? ""};
  flex-wrap: ${(p) => (p.wrap ? "wrap" : "")};
  gap: ${(p) => `${p.gap}px` ?? ""};
  padding: ${(p) => p.padding ?? ""};
  width: ${(p) => `${p.width}` ?? ""};
  height: ${(p) => `${p.height}px` ?? ""};
  background-color: ${(p) => p.backgroundColor ?? ""};
`;
export default FlexComponent;
