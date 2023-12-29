import * as Mui from "@mui/material";
import Image1 from "src/assets/1.jpg";
import Image2 from "src/assets/2.jpg";
import Image3 from "src/assets/3.jpg";

export const Main = () => {
  return (
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
            Projects
          </Mui.Typography>
        </Mui.Grid>

        <Mui.Grid item xs={12} md={4}>
          <Mui.Stack spacing={4}>
            <img src={Image1} />
            <Mui.Stack alignSelf="center">
              <Mui.Typography fontSize={20}>
                Digital Transformation Roadmap
              </Mui.Typography>
              <Mui.Typography fontSize={15} color="grey">
                IT CONSULTANT
              </Mui.Typography>
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item xs={12} md={4}>
          <Mui.Stack spacing={4}>
            <img src={Image2} />
            <Mui.Stack alignSelf="center">
              <Mui.Typography fontSize={20}>
                Market Expansion Strategy
              </Mui.Typography>
              <Mui.Typography fontSize={15} color="grey">
                STRATEGY GURU
              </Mui.Typography>
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item xs={12} md={4}>
          <Mui.Stack spacing={4}>
            <img src={Image3} />
            <Mui.Stack alignSelf="center">
              <Mui.Typography fontSize={20}>
                Supply Chain Optimization Initiative
              </Mui.Typography>
              <Mui.Typography fontSize={15} color="grey">
                SUPPLY CHAIN CONSULTANT
              </Mui.Typography>
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item xs={12} md={4}>
          <Mui.Stack spacing={4}>
            <img src={Image1} />
            <Mui.Stack alignSelf="center">
              <Mui.Typography fontSize={20}>
                Strategic Growth Initiative
              </Mui.Typography>
              <Mui.Typography fontSize={15} color="grey">
                MARKETING STRATEGIST
              </Mui.Typography>
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item xs={12} md={4}>
          <Mui.Stack spacing={4}>
            <img src={Image2} />
            <Mui.Stack alignSelf="center">
              <Mui.Typography fontSize={20}>
                Business Project Reengineering Project
              </Mui.Typography>
              <Mui.Typography fontSize={15} color="grey">
                DATA ANALYTICS CONSULTANT
              </Mui.Typography>
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item xs={12} md={4}>
          <Mui.Stack spacing={4}>
            <img src={Image3} />
            <Mui.Stack alignSelf="center">
              <Mui.Typography fontSize={20}>
                Risk Management And Compliance Audit
              </Mui.Typography>
              <Mui.Typography fontSize={15} color="grey">
                RISK MANAGEMENT CONSULTANT
              </Mui.Typography>
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>
      </Mui.Grid>

      <Mui.Stack
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
      </Mui.Stack>
    </Mui.Stack>
  );
};
