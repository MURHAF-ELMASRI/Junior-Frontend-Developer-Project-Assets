import { memo } from "react";
import styled from "styled-components";
import Typography from "../../Components/Typography";
import SideBarItem from "./SideBarItem";

import BarChart from "../../icons/BarChart";
import Bell from "../../icons/Bell";
import Chart from "../../icons/Chart";
import Chat from "../../icons/Chat";
import PublishIcon from "../../icons/PublishIcon";
import Wave from "../../icons/Wave";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 208px;
  background-color: #393d42;
  height: 100%;
`;

const UpperSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #393d42;
  width: 100%;
  height: 52px;
`;

export default memo(SideBar);

const ListItems = [
  { title: "notification", links: [], icon: Bell },
  { title: "summary", links: [], icon: Chart },
  { title: "publish", links: ["compose", "feed"], icon: PublishIcon },
  { title: "engage", links: [], icon: Chat },
  { title: "listen", links: [], icon: Wave },
  { title: "report", links: [], icon: BarChart },
];

function SideBar() {
  return (
    <Container>
      <UpperSection>
        <Typography style={{ color: "#000", fontSize: 32, fontWeight: 700 }}>
          Sociality
          <span style={{ fontWeight: 500 }}>.io</span>
        </Typography>
      </UpperSection>

      {ListItems.map((item, idx) => (
        <SideBarItem
          links={item.links}
          key={idx}
          title={item.title}
          Icon={item.icon}
        />
      ))}
    </Container>
  );
}
