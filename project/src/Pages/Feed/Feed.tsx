import { memo } from "react";
import styled from "styled-components";
import Card from "../../Components/Card";
import Typography from "../../Components/Typography";
import { status } from "../../constants/Status";
import data from "../../data.json";

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

const FlexComponent = styled.div<{
  marginTop?: number;
  column?: boolean;
  alignItems?: "center";
  wrap?: boolean;
  gap?: number;
}>`
  display: flex;
  flex-direction: ${(p) => (p.column ? "column" : "")};
  align-items: ${(p) => p.alignItems ?? ""};
  margin-top: ${(p) => `${p.marginTop}px` ?? ""};
  flex-wrap: ${(p) => (p.wrap ? "wrap" : "")};
  gap: ${(p) => `${p.gap}px` ?? ""};
`;

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
              <Typography style={{ color: "#ACACAC" }}>{dateKey}</Typography>
              <FlexComponent wrap gap={32} marginTop={12}>
                {data.posts_by_date[dateKey as any].map((x, idx) => (
                  <Card
                    color={status[x.status].color}
                    publishedAt={x.published_at}
                    message={x.entry.message}
                    key={idx}
                    imageURL={x.entry.image[0]}
                    channel={"twitter"}
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
