import { Icon } from "@iconify/react";
import { memo, useCallback } from "react";
import styled from "styled-components";
import brokenImage from "../assets/no-post-image.png";
import FlexComponent from "./FlexComponent";
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


const Img = styled.img`
  height: 250px;
  width: 100%;
  object-fit: cover;
`;

const StatusIcon = styled(Icon)`
  color: #fff;
  width: 24px;
  height: 24px;
`;
const StatIcon = styled(Icon)`
  color: #959595;
`;
const ActionIcon = styled(Icon)`
  color: #acacac;
  position: relative;
`;

interface Props {
  color: string;
  publishedAt: string;
  message: string;
  imageURL: string;
  channel: "facebook" | "twitter";
  likesCount: number;
  commentsCount: number;
  sharesCount: number;
  viewsCount: number;
}

const iconByChannel = {
  facebook: "bxl:facebook",
  twitter: "bxl:twitter",
};

function Card(props: Props) {
  const {
    color,
    publishedAt,
    message,
    imageURL,
    channel,
    likesCount,
    commentsCount,
    sharesCount,
    viewsCount,
  } = props;

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
        <FlexComponent justifyContent="space-between">
          <FlexComponent>
            <Typography style={{ color: "#ACACAC" }}>{publishedAt}</Typography>
          </FlexComponent>
          <FlexComponent gap={12}>
            <ActionIcon icon="ri:delete-bin-6-line" width={20} />
            <ActionIcon icon="fluent:more-circle-32-regular" width={20} />
          </FlexComponent>
        </FlexComponent>

        <FlexComponent marginTop={24} column gap={12}>
          <Typography
            style={{
              color: "#959595",
              fontWeight: 700,
              height: 60,
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {message}
          </Typography>

          <FlexComponent justifyContent="center">
            <Img onError={addDefaultSrc} src={imageURL} />
          </FlexComponent>
          <FlexComponent gap={12}>
            <FlexComponent alignItems="center" gap={8}>
              <StatIcon icon="ant-design:like-outlined" width={20} />
              <Typography style={{ color: "#000" }}>{likesCount}</Typography>
            </FlexComponent>
            <FlexComponent alignItems="center" gap={8}>
              <StatIcon icon="ic:outline-mode-comment" width={20} />
              <Typography style={{ color: "#000" }}>{commentsCount}</Typography>
            </FlexComponent>
            <FlexComponent alignItems="center" gap={8}>
              <StatIcon icon="ant-design:share-alt-outlined" width={20} />
              <Typography style={{ color: "#000" }}>{sharesCount}</Typography>
            </FlexComponent>
            <FlexComponent alignItems="center" gap={8}>
              <StatIcon icon="ant-design:eye-outlined" width={20} />
              <Typography style={{ color: "#000" }}>{viewsCount}</Typography>
            </FlexComponent>
          </FlexComponent>
        </FlexComponent>
      </FlexComponent>
    </Container>
  );
}
