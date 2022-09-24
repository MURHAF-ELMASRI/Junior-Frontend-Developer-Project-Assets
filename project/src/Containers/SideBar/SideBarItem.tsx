import { memo, useCallback, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import Typography from "../../Components/Typography";
import usePage from "../../hooks/usePage";
import SeeLess from "../../icons/SeeLess";
import SeeMore from "../../icons/SeeMore";

const ITEM_HEIGHT = 52;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 12px;
  width: 100%;
  height: 56px;
  background-color: ${(p) => (p.open ? "#F55661" : "")};
  &:hover {
    background-color: ${(p) => (p.open ? "" : "rgba(0, 0, 0, 0.39)")};
  }
`;

const List = styled.div<{ open: boolean; height: number }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.12);
  height: ${(p) => (p.open ? `${p.height}px` : 0)};
  transition: height 0.5s ease-in-out;
  overflow: hidden;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  height: ${ITEM_HEIGHT}px;
  padding-left: 28px;
  text-transform: capitalize;
  &:hover {
    cursor: pointer;
  }
`;

const Dot = styled.div<{ isActive: boolean }>`
  width: 3px;
  height: 3px;
  border-radius: 8px;
  background-color: ${(p) => (p.isActive ? "#F55661" : "#babbbd")};
`;

export default memo(SideBarItem);

interface Props {
  links: string[];
  title: string;
  Icon: React.FunctionComponent<{ color?: string }>;
}

function SideBarItem({ links, title, Icon }: Props) {
  const { page, setPage } = usePage();
  const [open, setOpen] = useState(false);

  const handleClick = useCallback(() => {
    setOpen(!open);
  }, [open]);

  useLayoutEffect(() => {
    setOpen(links.includes(page));
  }, [page, links]);

  return (
    <Container onClick={handleClick}>
      <Section open={open}>
        <Icon color={open ? "white" : undefined} />
        <Typography
          style={{
            textTransform: "uppercase",
            fontWeight: 500,
            marginRight: "auto",
          }}
        >
          {title}
        </Typography>

        {open ? <SeeLess /> : <SeeMore />}
      </Section>
      <List open={open} height={ITEM_HEIGHT * links.length}>
        {links.map((link, idx) => (
          <Item key={idx} onClick={() => setPage(link)}>
            <Dot isActive={page === link} />
            <Typography style={{ color: page === link ? "#F55661" : "#ffff" }}>
              {link}
            </Typography>
          </Item>
        ))}
      </List>
    </Container>
  );
}
