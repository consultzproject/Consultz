import * as Mui from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Service3 from "src/assets/home/Footer Banner.svg";
import * as Constant from "src/constant";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";

export const Footer2 = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const { Service_Content }: any = Constant;
  const navigate = Router.useNavigate();
  const PathUrl = window.location.pathname;
  return (
    <Mui.Stack
      style={{
        height: isMobile ? "" : "80vh",
        position: "relative",
        overflow: "hidden", // Ensures that the image doesn't overflow the container
      }}
    >
      <img src={Service3} style={{ filter: "brightness(50%)" }} />
      <div
        style={{
          position: "absolute",
          top: " 30%",
          left: "40%",
          transform: "translate(-40%, -40%)",
          textAlign: "center",
          color: "#fff",
          flexDirection: "column",
          zIndex: 1, // Ensure this content is above the background image
          display: PathUrl?.includes("blog") ? "none" : "block",
          width: isMobile ? "80%" : "",
        }}
      >
        <Mui.Typography
          variant={isMobile ? "h6" : "h2"}
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
              color: isMobile ? "black" : "white",
              bgcolor: isMobile ? "white" : "transparent",
              padding: isMobile ? "8px 15px" : "15px 40px",
              border: "2px solid #fff",
              borderRadius: "20px",
              ":hover": {
                bgcolor: "#fff",
                color: "#000",
              },
            }}
            onClick={() => navigate("/contact")}
          >
            Let's Talk
          </Mui.Button>
        </Mui.Box>
      </div>
    </Mui.Stack>
  );
};
