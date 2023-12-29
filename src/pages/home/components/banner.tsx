import BannerImg from "src/assets/banner.jpg";
import * as Mui from "@mui/material";

export const Banner = () => {
  return (
    <Mui.Stack style={{ height: "100vh" }}>
      <img
        src={BannerImg}
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      />
    </Mui.Stack>
  );
};
