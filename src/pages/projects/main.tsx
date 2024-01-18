import * as Mui from "@mui/material";
import Image1 from "src/assets/blog1.jpeg";
import Image2 from "src/assets/blog2.jpeg";
import Image3 from "src/assets/blog3.jpeg";
import * as MuiIcons from "@mui/icons-material";
import * as Router from "react-router-dom";
import * as Common from "src/pages/common";
import * as Pages from "src/pages";

export const Main = () => {
  const navigate = Router.useNavigate();

  return (
    <>
      <Mui.Stack sx={{ padding: { xs: "30px 20px", md: "60px 120px" } }}>
        <Mui.Grid container spacing={8}>
          <Mui.Grid item xs={12}>
            <Mui.Typography
              textAlign="center"
              fontWeight={600}
              fontFamily="urbanist"
              color="#203556"
              sx={{ fontSize: { xs: "50px", md: "100px" } }}
            >
              Blog
            </Mui.Typography>
          </Mui.Grid>

          <Mui.Grid item xs={12} md={4}>
            <Mui.Stack
              spacing={4}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("blog1")}
            >
              <img src={Image1} />
              <Mui.Stack alignSelf="center">
                <Mui.Typography fontSize={20}>
                  Navigating the Tech Talent Shortage
                </Mui.Typography>
                <Mui.Typography fontSize={15} color="grey">
                  Creative Solutions for Recruitment
                </Mui.Typography>
              </Mui.Stack>
            </Mui.Stack>
          </Mui.Grid>
          <Mui.Grid item xs={12} md={4}>
            <Mui.Stack
              spacing={4}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("blog2")}
            >
              <img src={Image2} />
              <Mui.Stack alignSelf="center">
                <Mui.Typography fontSize={20}>
                  Upskilling and Reskilling in Tech
                </Mui.Typography>
                <Mui.Typography fontSize={15} color="grey">
                  Strategies for Future-Proofing Your Workforce
                </Mui.Typography>
              </Mui.Stack>
            </Mui.Stack>
          </Mui.Grid>
          <Mui.Grid item xs={12} md={4}>
            <Mui.Stack
              spacing={4}
              sx={{ cursor: "pointer" }}
              onClick={() => navigate("blog3")}
            >
              <img src={Image3} />
              <Mui.Stack alignSelf="center">
                <Mui.Typography fontSize={20}>
                  Top In-Demand Tech Skills and How to Source Them
                </Mui.Typography>
                {/* <Mui.Typography fontSize={15} color="grey">
                SUPPLY CHAIN CONSULTANT
              </Mui.Typography> */}
              </Mui.Stack>
            </Mui.Stack>
          </Mui.Grid>
        </Mui.Grid>

        {/* <Mui.Stack
        width="100%"
        sx={{ padding: { xs: "40px 0px", md: "200px 0 0 0 " } }}
      >
        <Mui.Typography
          textAlign="center"
          fontSize="15px"
          fontFamily="urbanist"
          fontWeight="500"
        >
          - 2 0 2 3 &nbsp; C O N S U L T Z &nbsp; C O. -
        </Mui.Typography>
      </Mui.Stack> */}
      </Mui.Stack>
      <Common.Footer2 />
      <Common.Footer />
    </>
  );
};
