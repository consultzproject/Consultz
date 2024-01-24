import * as Mui from "@mui/material";
import * as Constant from "src/constant";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./common.css";
export const Footer = () => {
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
            <Mui.Typography fontWeight={600}>
              {/* {Constant?.Service_Content?.officename} */}
            </Mui.Typography>
            <Mui.Typography pt={3} fontSize={20} fontFamily="urbanist">
              {Constant?.Service_Content?.officenumber}
            </Mui.Typography>
            {/* <Mui.Typography>
                {Constant?.Service_Content?.officemailid}
              </Mui.Typography> */}
            <Mui.Typography pt={3} fontSize={20} fontFamily="urbanist">
              {Constant?.Service_Content?.officeaddress}
            </Mui.Typography>
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item xs={12} md={6}>
          <Mui.Stack
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
              minHeight: "180px",
            }}
          >
            <InstagramIcon className="footerIcon" />
            <FacebookIcon className="footerIcon" />
            <LinkedInIcon className="footerIcon" />
          </Mui.Stack>
        </Mui.Grid>
      </Mui.Grid>
    </Mui.Stack>
  );
};
