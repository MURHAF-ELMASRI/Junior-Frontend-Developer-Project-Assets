import { memo } from "react";
import styled from "styled-components";
import SideBar from "./Containers/SideBar/SideBar";
import { PageContextProvider } from "./hooks/usePage";
import Pages from "./Pages/Pages";

export default memo(App);

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
  background-color: #f5f7f8;
`;

function App() {
  return (
    <PageContextProvider>
      <Container>
        <SideBar />
        <Pages />
      </Container>
    </PageContextProvider>
  );
}
