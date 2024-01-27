import BannerImg1 from "src/assets/home/Home Banner 1.svg";
import BannerImg2 from "src/assets/home/Home banner2.svg";
import BannerImg3 from "src/assets/home/Home banner3.svg";
import BannerImg4 from "src/assets/home/Home-banner4.svg";
import BannerImg5 from "src/assets/home/Home banner5.svg";
import * as Mui from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowCircleLeftRoundedIcon from "@mui/icons-material/ArrowCircleLeftRounded";
import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import React from "react";
export const Banner = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const [Numbe, setNumbe] = React.useState(0);
  const [Data, setData] = React.useState({
    title: "Navigating Your Talent Frontier",
    img: BannerImg1,
  });
  const CountIncrement = () => {
    setNumbe(Numbe < 4 ? Numbe + 1 : 0);
  };
  const CountDecrement = () => {
    setNumbe(Numbe === 0 ? 4 : Numbe - 1);
  };
  React.useEffect(() => {
    setData(ContentArr[Numbe]);
    setTimeout(() => {
      setNumbe(Numbe < 4 ? Numbe + 1 : 0);
    }, 3000);
  }, [Numbe]);

  const ContentArr = [
    {
      title: "Navigating Your Talent Frontier",
      img: BannerImg1,
    },
    {
      title: "Strategic & Seamless HR, Solutions",
      img: BannerImg2,
    },
    {
      title: "Tailored Talent Solutions",
      img: BannerImg3,
    },
    {
      title: "Unlocking Fullest Potential",
      img: BannerImg4,
    },
    {
      title: "Crafting Careers",
      img: BannerImg5,
    },
  ];

  return (
    <Mui.Stack
      style={{ height: isMobile ? "auto" : "100vh", position: "relative" }}
    >
      <Mui.Typography
        sx={{
          color: "white",
          position: "absolute",
          top: "30%",
          left: "12%",
          fontWeight: 600,
          zIndex: 999,
          fontFamily: "urbanist",
          paddingTop: 13,
        }}
        maxWidth={2480}
        variant="h1"
        id="fade-in"
      >
        {Data?.title}
      </Mui.Typography>
      <ArrowCircleRightRoundedIcon
        style={{
          position: "absolute",
          top: "80%",
          right: "5%",
          color: "white",
          zIndex: 999,
          fontSize: 50,
          cursor: "pointer",
        }}
        onClick={() => CountIncrement()}
      />
      <ArrowCircleLeftRoundedIcon
        style={{
          position: "absolute",
          top: "80%",
          right: "10%",
          color: "white",
          zIndex: 999,
          cursor: "pointer",
          fontSize: 55,
        }}
        onClick={() => CountDecrement()}
      />
      <img
        src={Data?.img}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          filter: "brightness(50%)",
        }}
        className="examplediv"
      />
    </Mui.Stack>
  );
};
