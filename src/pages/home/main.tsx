import * as Components from "./components";
import * as Mui from "@mui/material";
import * as Common from "src/pages/common";
import "./index.css";

export const Main = () => {
  return (
    <Mui.Stack>
      <Components.Banner />
      <Components.Consulting />
      <Components.Insights />
      <Components.Expertise />
      <Components.Process />
      {/* <Components.Consultants /> */}
      <Common.Footer2 />
      <Common.Footer />
    </Mui.Stack>
  );
};
