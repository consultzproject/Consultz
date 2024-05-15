import * as Mui from "@mui/material";
import * as Router from "react-router-dom";
import * as Layouts from "src/layouts";

export const Main = () => {
  return (
    <Mui.Box
      sx={
        {
          // pt: 8,
        }
      }
    >
      <Layouts.Main.Views.AppBar />
      <Router.Outlet />
    </Mui.Box>
  );
};
