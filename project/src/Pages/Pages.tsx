import { memo } from "react";
import Maybe from "../Components/Maybe";
import usePage from "../hooks/usePage";
import Compose from "./Compose/Compose";
import Feed from "./Feed/Feed";

export default memo(Pages);

function Pages() {
  const { page } = usePage();
  return (
    <>
      <Maybe shouldRender={page === "feed"}>
        <Feed />
      </Maybe>
      <Maybe shouldRender={page === "compose"}>
        <Compose />
      </Maybe>
    </>
  );
}
