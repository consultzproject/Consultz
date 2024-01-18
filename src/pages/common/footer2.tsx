import React from "react";
import * as Mui from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Service3 from "src/assets/6.webp";
import * as Constant from "src/constant";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";


export const Footer2 = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { Service_Content }: any = Constant;
  const navigate = Router.useNavigate();

  return (
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
  );
};

