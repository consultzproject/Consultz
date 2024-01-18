import BannerImg from "src/assets/banner.jpg";
import * as Mui from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Banner = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Mui.Stack style={{ height: isMobile ? "auto" : "80vh" }}>
      <img
        src={BannerImg}
        style={{ height: "100%", width: "100%", objectFit: "cover" }}
      />
    </Mui.Stack>
  );
};
