import React from "react";
import * as Mui from "@mui/material";
import BannerImg from "src/assets/banner.jpg";
import Service1 from "src/assets/4.jpg";
import Service2 from "src/assets/5.jpg";
import Service3 from "src/assets/6.webp";
import AddIcon from "@mui/icons-material/Add";
import * as MuiIcons from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as Common from "src/pages/common";
import * as Constant from "src/constant";
import * as Router from "react-router-dom";
import "./index.css";

export const Content = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { Service_Content }: any = Constant;
  const scrollRef1 = React.useRef<HTMLDivElement | null>(null);
  const scrollRef2 = React.useRef<HTMLDivElement | null>(null);
  const scrollRef3 = React.useRef<HTMLDivElement | null>(null);
  const scrollRef4 = React.useRef<HTMLDivElement | null>(null);
  const navigate = Router.useNavigate();

  const handleService1 = () => {
    if (scrollRef1.current) {
      scrollRef1.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleService2 = () => {
    if (scrollRef2.current) {
      scrollRef2.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleService3 = () => {
    if (scrollRef3.current) {
      scrollRef3.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleService4 = () => {
    if (scrollRef4.current) {
      scrollRef4.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Mui.Stack>
      <Mui.Stack style={{ height: isMobile ? "auto" : "80vh" }}>
        <img
          src={BannerImg}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </Mui.Stack>
      <Mui.Stack
        sx={{
          padding: { xs: 6, md: "40px 150px", sm: "20px 100px" },
        }}
        spacing={3}
      >
        <Mui.Grid container spacing={isMobile ? 1 : 4}>
          <Mui.Grid item lg={6} md={8} xs={12}>
            <Mui.Typography
              fontWeight={700}
              maxWidth={50}
              color="#203556"
              variant={isMobile ? "h2" : "h1"}
            >
              {Service_Content?.header}
            </Mui.Typography>
            <Mui.Divider sx={{ width: "100%" }} />
          </Mui.Grid>
          <Mui.Grid item container md={6} xs={12} alignItems="center">
            <Mui.Grid item md={6} xs={12}>
              <Mui.Stack spacing={4}>
                <Mui.Stack spacing={1}>
                  <Mui.Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ cursor: "pointer" }}
                    onClick={handleService1}
                  >
                    <AddIcon />
                    <Mui.Typography> {Service_Content?.title1}</Mui.Typography>
                  </Mui.Stack>

                  <Mui.Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ cursor: "pointer" }}
                    onClick={handleService2}
                  >
                    <AddIcon />
                    <Mui.Typography> {Service_Content?.title2}</Mui.Typography>
                  </Mui.Stack>
                </Mui.Stack>
              </Mui.Stack>
            </Mui.Grid>
            <Mui.Grid item md={6} xs={12}>
              <Mui.Stack spacing={4}>
                <Mui.Stack spacing={1}>
                  <Mui.Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ cursor: "pointer" }}
                    onClick={handleService3}
                  >
                    <AddIcon />
                    <Mui.Typography> {Service_Content?.title3}</Mui.Typography>
                  </Mui.Stack>

                  <Mui.Stack
                    direction="row"
                    alignItems="center"
                    spacing={2}
                    sx={{ cursor: "pointer" }}
                    onClick={handleService4}
                  >
                    <AddIcon />
                    <Mui.Typography> {Service_Content?.title4}</Mui.Typography>
                  </Mui.Stack>
                </Mui.Stack>
              </Mui.Stack>
            </Mui.Grid>
          </Mui.Grid>
          <Mui.Grid item md={12} xs={12}>
            <Mui.Typography
              fontFamily="Urbanist"
              fontSize="32px"
              fontWeight={500}
              pt={2}
              color="#536c82"
            >
              {Service_Content?.subheader}
            </Mui.Typography>
            <Mui.Divider sx={{ width: "100%", mt: 1, mb: 1 }} />
          </Mui.Grid>
          <Mui.Grid item lg={6} md={12} xs={12} ref={scrollRef1}>
            <Mui.Stack style={{ height: isMobile ? "auto" : "100vh" }}>
              <img
                src={Service2}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </Mui.Stack>
          </Mui.Grid>
          <Mui.Grid item lg={6} md={12} xs={12}>
            <Mui.Stack spacing={4} mt={4}>
              <Mui.Stack spacing={1}>
                <Mui.Stack direction="column">
                  <Mui.Typography variant="h5" color="#536c82">
                    {Service_Content?.subtitle1}
                  </Mui.Typography>
                  <Mui.Divider sx={{ width: "100%", mb: 1, mt: 1 }} />
                  <Mui.Typography variant="subtitle1" p={2} color="#536c82">
                    {Service_Content?.subtitledescription1}
                  </Mui.Typography>
                </Mui.Stack>

                <Mui.Stack direction="column" ref={scrollRef2}>
                  <Mui.Typography variant="h5" color="#536c82">
                    {Service_Content?.subtitle2}
                  </Mui.Typography>
                  <Mui.Divider sx={{ width: "100%", mb: 2, mt: 2 }} />
                  <Mui.Typography variant="subtitle1" p={2} color="#536c82">
                    {Service_Content?.subtitledescription2}
                  </Mui.Typography>
                </Mui.Stack>
              </Mui.Stack>
            </Mui.Stack>
          </Mui.Grid>
          <Mui.Grid item lg={6} md={12} xs={12} ref={scrollRef3} sx={{ mt: 7 }}>
            <Mui.Stack spacing={4} mt={4}>
              <Mui.Typography fontSize="28px" color="#536c82" fontWeight={400}>
                Expert services for development and interior design.
              </Mui.Typography>
              <Mui.Stack spacing={1}>
                <Mui.Stack direction="column">
                  <Mui.Typography variant="h5" color="#536c82">
                    {Service_Content?.subtitle3}
                  </Mui.Typography>
                  <Mui.Divider sx={{ width: "100%", mb: 1, mt: 1 }} />
                  <Mui.Typography variant="subtitle1" p={2} color="#536c82">
                    {Service_Content?.subtitledescription3}
                  </Mui.Typography>
                </Mui.Stack>

                <Mui.Stack direction="column" ref={scrollRef4}>
                  <Mui.Typography variant="h5" color="#536c82">
                    {Service_Content?.subtitle4}
                  </Mui.Typography>
                  <Mui.Divider sx={{ width: "100%", mb: 1, mt: 1 }} />
                  <Mui.Typography variant="subtitle1" p={2} color="#536c82">
                    {Service_Content?.subtitledescription4}
                  </Mui.Typography>
                </Mui.Stack>
              </Mui.Stack>
            </Mui.Stack>
          </Mui.Grid>
          <Mui.Grid item lg={6} md={12} xs={12} sx={{ mt: 7 }}>
            <Mui.Stack style={{ height: isMobile ? "auto" : "100vh" }}>
              <img
                src={Service1}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </Mui.Stack>
          </Mui.Grid>{" "}
          <Mui.Grid item xs={12} md={12} sx={{ mt: { md: 8, xs: 2 } }}>
            <Mui.Stack
              direction={{ md: "row", xs: "column" }}
              justifyContent="space-between"
              spacing={2}
            >
              <Mui.Typography
                fontWeight={700}
                color="#203556"
                variant={isMobile ? "h2" : "h1"}
              >
                {Service_Content.header2}
              </Mui.Typography>
              <Mui.Stack
                direction="row"
                spacing={1}
                sx={{ cursor: "pointer" }}
                onClick={() => navigate("/contact")}
              >
                <Mui.Typography
                  variant="h5"
                  fontWeight="bolder"
                  sx={{ textDecoration: "underline" }}
                >
                  Contact us
                </Mui.Typography>
                <MuiIcons.ArrowOutward />
              </Mui.Stack>
            </Mui.Stack>
            <Mui.Divider sx={{ width: "100%", mb: 2, mt: 2 }} />
            <Mui.Typography
              fontFamily="Urbanist"
              fontSize="32px"
              fontWeight={500}
              pt={2}
            >
              {Service_Content.header2title}
            </Mui.Typography>
          </Mui.Grid>
        </Mui.Grid>
      </Mui.Stack>
      <Mui.Stack
        style={{
          height: isMobile ? "60vh" : "80vh",
          position: "relative",
          overflow: "hidden", // Ensures that the image doesn't overflow the container
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: `url(${Service3}) center/cover no-repeat`,
            filter: "blur(10px)", // Apply a background lens effect (blur)
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "40%",
            transform: "translate(-40%, -40%)",
            textAlign: "center",
            color: "#fff",
            flexDirection: "column",
            zIndex: 1, // Ensure this content is above the background image
          }}
        >
          <Mui.Typography
            variant={isMobile ? "h4" : "h2"}
            mt={isMobile ? 4 : 0}
            fontWeight="bolder"
          >
            {Service_Content?.imageheader}
          </Mui.Typography>
          <div className="typing-animation-container">
            <Mui.Typography
              variant={isMobile ? "h6" : "h4"}
              mt={4}
              className="typing-animation"
            >
              {Service_Content?.imagetitle}
            </Mui.Typography>
          </div>
          <Mui.Box mt={4}>
            <Mui.Button
              endIcon={<MuiIcons.ArrowOutward />}
              variant="contained"
              sx={{
                textTransform: "capitalize",
                fontWeight: "bolder",
                bgcolor: "transparent",
                padding: "15px 40px",
                border: "2px solid #fff",
                borderRadius: "20px",
                ":hover": {
                  bgcolor: "#fff",
                  color: "#000",
                },
              }}
              onClick={() => navigate("/contact")}
            >
              Let`s Talk
            </Mui.Button>
          </Mui.Box>
        </div>
      </Mui.Stack>
      <Common.Footer />
    </Mui.Stack>
  );
};
