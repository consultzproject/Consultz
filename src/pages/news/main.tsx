import React from "react";
import * as Mui from "@mui/material";
import Image1 from "src/assets/1.jpg";
import Image2 from "src/assets/2.jpg";
import Image3 from "src/assets/3.jpg";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import * as Components from "./components/index";

export const Main = () => {
  return (
    <Mui.Stack sx={{ padding: { xs: "40px 20px", md: "60px 120px" } }}>
      <Mui.Grid container spacing={8}>
        <Mui.Grid item xs={12}>
          <Mui.Typography
            // variant={{ md: "h1", xs: "h6" }}
            textAlign="center"
            fontWeight={600}
            fontFamily="urbanist"
            color="#203556"
            sx={{ fontSize: { xs: "50px", md: "100px" } }}
          >
            News
          </Mui.Typography>
        </Mui.Grid>

        <Mui.Grid item xs={12} md={4}>
          <Mui.Stack spacing={4}>
            <img src={Image1} />
            <Mui.Stack paddingLeft={2} spacing={1}>
              <Mui.Typography fontSize={20}>
                The Rise of Remote Consulting
              </Mui.Typography>
              <Mui.Stack direction="row" alignItems="center" spacing={3}>
                <Mui.Typography
                  sx={{
                    padding: "4px 10px",
                    border: "0.5px solid grey",
                    borderRadius: "20px",
                    color: "#536C82",
                    fontSize: "10px",
                  }}
                >
                  NEWS
                </Mui.Typography>

                <Mui.Typography fontSize={10} color="#536C82">
                  <CalendarTodayIcon sx={{ fontSize: "12px" }} />
                  &nbsp; MAY 18, 2023
                </Mui.Typography>

                <Components.Popup />
              </Mui.Stack>
              <Mui.Typography
                fontSize={10}
                sx={{ textDecoration: "underline" }}
                pt={3}
              >
                READ MORE
              </Mui.Typography>
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item xs={12} md={4}>
          <Mui.Stack spacing={4}>
            <img src={Image2} />
            <Mui.Stack paddingLeft={2} spacing={2}>
              <Mui.Typography fontSize={20}>ESG Consulting</Mui.Typography>
              <Mui.Stack direction="row" alignItems="center" spacing={3}>
                <Mui.Typography
                  sx={{
                    padding: "4px 10px",
                    border: "0.5px solid grey",
                    borderRadius: "20px",
                    color: "#536C82",
                    fontSize: "10px",
                  }}
                >
                  NEWS
                </Mui.Typography>

                <Mui.Typography fontSize={10} color="#536C82">
                  <CalendarTodayIcon sx={{ fontSize: "12px" }} />
                  &nbsp; MAY 18, 2023
                </Mui.Typography>

                <Components.Popup />
              </Mui.Stack>
              <Mui.Typography
                fontSize={10}
                sx={{ textDecoration: "underline" }}
                pt={3}
              >
                READ MORE
              </Mui.Typography>
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item xs={12} md={4}>
          <Mui.Stack spacing={4}>
            <img src={Image3} />
            <Mui.Stack paddingLeft={2} spacing={2}>
              <Mui.Typography fontSize={20}>
                Emerging Market Oppurtunities
              </Mui.Typography>
              <Mui.Stack direction="row" alignItems="center" spacing={3}>
                <Mui.Typography
                  sx={{
                    padding: "4px 10px",
                    border: "0.5px solid grey",
                    borderRadius: "20px",
                    color: "#536C82",
                    fontSize: "10px",
                  }}
                >
                  INSIGHTS
                </Mui.Typography>

                <Mui.Typography fontSize={10} color="#536C82">
                  <CalendarTodayIcon sx={{ fontSize: "12px" }} />
                  &nbsp; MAY 18, 2023
                </Mui.Typography>

                <Components.Popup />
              </Mui.Stack>
              <Mui.Typography
                fontSize={10}
                sx={{ textDecoration: "underline" }}
                pt={3}
              >
                READ MORE
              </Mui.Typography>
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item xs={12} md={4}>
          <Mui.Stack spacing={4}>
            <img src={Image1} />
            <Mui.Stack paddingLeft={2} spacing={2}>
              <Mui.Typography fontSize={20}>
                Industry DisruptionAnd Innovation
              </Mui.Typography>
              <Mui.Stack direction="row" alignItems="center" spacing={3}>
                <Mui.Typography
                  sx={{
                    padding: "4px 10px",
                    border: "0.5px solid grey",
                    borderRadius: "20px",
                    color: "#536C82",
                    fontSize: "10px",
                    fontFamily: "urbanist",
                  }}
                >
                  NEWS
                </Mui.Typography>

                <Mui.Typography fontSize={10} color="#536C82">
                  <CalendarTodayIcon sx={{ fontSize: "12px" }} />
                  &nbsp; MAY 18, 2023
                </Mui.Typography>

                <Components.Popup />
              </Mui.Stack>
              <Mui.Typography
                fontSize={10}
                sx={{ textDecoration: "underline" }}
                pt={3}
              >
                READ MORE
              </Mui.Typography>
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item xs={12} md={4}>
          <Mui.Stack spacing={4}>
            <img src={Image2} />
            <Mui.Stack paddingLeft={2} spacing={2}>
              <Mui.Typography fontSize={20}>
                Risk Management in an Uncertain World
              </Mui.Typography>
              <Mui.Stack direction="row" alignItems="center" spacing={3}>
                <Mui.Typography
                  sx={{
                    padding: "4px 10px",
                    border: "0.5px solid grey",
                    borderRadius: "20px",
                    color: "#536C82",
                    fontSize: "10px",
                  }}
                >
                  INSIGHTS
                </Mui.Typography>

                <Mui.Typography fontSize={10} color="#536C82">
                  <CalendarTodayIcon sx={{ fontSize: "12px" }} />
                  &nbsp; MAY 18, 2023
                </Mui.Typography>

                <Components.Popup />
              </Mui.Stack>
              <Mui.Typography
                fontSize={10}
                sx={{ textDecoration: "underline" }}
                pt={3}
              >
                READ MORE
              </Mui.Typography>
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item xs={12} md={4}>
          <Mui.Stack spacing={4}>
            <img src={Image3} />
            <Mui.Stack paddingLeft={2} spacing={2}>
              <Mui.Typography fontSize={20}>
                Healthcare Consulting
              </Mui.Typography>
              <Mui.Stack direction="row" alignItems="center" spacing={3}>
                <Mui.Typography
                  sx={{
                    padding: "4px 10px",
                    border: "0.5px solid grey",
                    borderRadius: "20px",
                    color: "#536C82",
                    fontSize: "10px",
                  }}
                >
                  NEWS
                </Mui.Typography>

                <Mui.Typography fontSize={10} color="#536C82">
                  <CalendarTodayIcon sx={{ fontSize: "12px" }} />
                  &nbsp; MAY 18, 2023
                </Mui.Typography>

                <Components.Popup />
              </Mui.Stack>
              <Mui.Typography
                fontSize={10}
                sx={{ textDecoration: "underline" }}
                pt={3}
              >
                READ MORE
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
          fontSize="13px"
          fontFamily="urbanist"
          fontWeight="500"
        >
          - 2 0 2 3 &nbsp; C O N S U L T Z &nbsp; C O. -
        </Mui.Typography>
      </Mui.Stack>
    </Mui.Stack>
  );
};
