import { Icon } from "@iconify/react";
import { memo, useCallback } from "react";
import styled from "styled-components";
import brokenImage from "../assets/no-post-image.png";
import Typography from "./Typography";

export default memo(Card);

const Container = styled.div`
  display: flex;
  border: 1px solid #e5e6ee;
  width: 369px;
  height: 446px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
`;

const FlexComponent = styled.div<{
  marginTop?: number;
  column?: boolean;
  alignItems?: "center";
  justifyContent?: "center";
  wrap?: boolean;
  gap?: number;
  padding?: string;
  backgroundColor?: string;
  width?: `${number}${"px" | "%"}`;
  height?: number;
}>`
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

const Img = styled.img`
  max-height: 250px;
  width: 100%;
  object-fit: cover;
`;

const StatusIcon = styled(Icon)`
  color: #fff;
  width: 24px;
  height: 24px;
`;

interface Props {
  color: string;
  publishedAt: string;
  message: string;
  imageURL: string;
  channel: "facebook" | "twitter";
}

const iconByChannel = {
  facebook: "bxl:facebook",
  twitter: "bxl:twitter",
};

function Card(props: Props) {
  const { color, publishedAt, message, imageURL, channel } = props;

  const addDefaultSrc = useCallback((event: any) => {
    event.target.src = brokenImage;
  }, []);

  return (
    <Container>
      <FlexComponent
        justifyContent="center"
        backgroundColor={color}
        alignItems="center"
        width="40px"
      >
        <StatusIcon icon={iconByChannel[channel]} />
      </FlexComponent>
      <FlexComponent padding="27px 21px" width="100%" column>
        <FlexComponent>
          <Typography style={{ color: "#ACACAC" }}>{publishedAt}</Typography>
        </FlexComponent>
        <FlexComponent marginTop={24} column gap={12}>
          <Typography style={{ color: "#959595", fontWeight: 700 }}>
            {message}
          </Typography>

          <FlexComponent justifyContent="center">
            <Img onError={addDefaultSrc} src={imageURL} />
          </FlexComponent>
        </FlexComponent>
      </FlexComponent>
    </Container>
  );
}
