import * as Mui from "@mui/material";
import * as Constant from "src/constant";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import EmailIcon from "@mui/icons-material/Email";
import "./common.css";
import { useMediaQuery } from "@mui/material";

export const Footer = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Mui.Stack
      minHeight={400}
      height="100%"
      width="100%"
      sx={{
        background: "#061e45",
        padding: { md: "10px 50px", xs: "10px 20px" },
        margin: "20px 0px",
        justifyContent: "center",
      }}
    >
      <Mui.Grid container spacing={4}>
        <Mui.Grid item xs={12} md={6}>
          <Mui.Stack color="white">
            <Mui.Stack direction="row" alignItems="center">
              <PhoneRoundedIcon
                sx={{
                  marginTop: "20px",
                  paddingRight: "5px",
                  fontSize: "40px",
                }}
              />
              <Mui.Typography pt={4} fontSize={23} fontFamily="urbanist">
                {Constant?.Service_Content?.officenumber}
              </Mui.Typography>
            </Mui.Stack>
            <Mui.Stack direction="row" alignItems="center">
              <EmailIcon
                sx={{
                  marginTop: "30px",
                  paddingRight: "5px",
                  fontSize: "40px",
                }}
              />
              <Mui.Typography pt={4} fontSize={23} fontFamily="urbanist">
                {Constant?.Service_Content?.officemailid}
              </Mui.Typography>
            </Mui.Stack>
            <Mui.Stack direction="row" alignItems="center">
              <LocationOnRoundedIcon
                sx={{
                  marginTop: "20px",
                  paddingRight: "5px",
                  fontSize: "40px",
                  color: "red",
                }}
              />{" "}
              <Mui.Typography pt={4} fontSize={23} fontFamily="urbanist">
                {Constant?.Service_Content?.officeaddress}
              </Mui.Typography>
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item xs={12} md={6}>
          <Mui.Stack
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: isMobile ? "space-evenly" : "space-between",
              height: "100%",
              minHeight: "180px",
            }}
            direction={isMobile ? "row" : "column"}
          >
            <InstagramIcon
              className="footerIcon"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/seyal.eu?igshid=ZGUzMzM3NWJiOQ%3D%3D"
                )
              }
            />
            <FacebookIcon
              className="footerIcon"
              onClick={() =>
                window.open("https://www.facebook.com/Seyal.eu?mibextid=ZbWKwL")
              }
            />
            <LinkedInIcon
              className="footerIcon"
              onClick={() =>
                window.open("https://www.linkedin.com/company/seyal.eu/")
              }
            />
          </Mui.Stack>
        </Mui.Grid>
      </Mui.Grid>
    </Mui.Stack>
  );
};
