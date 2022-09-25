import { memo } from "react";
import styled from "styled-components";
import Card from "../../Components/Card";
import FlexComponent from "../../Components/FlexComponent";
import Typography from "../../Components/Typography";
import { status } from "../../constants/status";
import data from "../../data.json";
import formatDate from "../../util/formatedDate";

const Container = styled.div`
  padding: 36px 52px;
  overflow: auto;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  gap: 20px;
`;

const Section = styled.div``;

export default memo(Feed);

function Feed() {
  return (
    <Container>
      <Header>
        {status.map((x) => (
          <Status color={x.color} name={x.name} />
        ))}
      </Header>

      <FlexComponent column>
        {Object.keys(data.posts_by_date).map((dateKey) => {
          return (
            <FlexComponent marginTop={28} column>
              <Typography
                style={{ color: "#ACACAC", fontWeight: 500, fontSize: 18 }}
              >
                {formatDate(dateKey)}
              </Typography>
              <FlexComponent wrap gap={32} marginTop={12}>
                {data.posts_by_date[dateKey as any].map((x, idx) => (
                  <Card
                    color={status[x.status].color}
                    publishedAt={formatDate(x.published_at)}
                    message={x.entry.message}
                    key={idx}
                    imageURL={x.entry.image[0]}
                    channel={x.account.channel}
                    commentsCount={63}
                    likesCount={124}
                    viewsCount={1426}
                    sharesCount={4}
                  />
                ))}
              </FlexComponent>
            </FlexComponent>
          );
        })}
      </FlexComponent>
    </Container>
  );
}

const StatusContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Dot = styled.div<{ color: string }>`
  background-color: ${(p) => p.color};
  border-radius: 50%;
  width: 10px;
  height: 10px;
`;

function Status({ color, name }: { color: string; name: string }) {
  return (
    <StatusContainer>
      <Dot color={color} />
      <Typography style={{ color: "#444444" }}>{name}</Typography>
    </StatusContainer>
  );
}
