import React from "react";
import * as Mui from "@mui/material";
import * as Blog from "./content";
import Image3 from "src/assets/blog3.jpeg";
import { mainStack, secStack } from "./blogStyle";
import * as Router from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const Blog3 = () => {
  const Nvaigate = Router.useNavigate();

  return (
    <>
      <Mui.Grid item xs={12}>
        <Mui.Stack sx={{ height: "100px", background: "#4a4a4a" }} />
      </Mui.Grid>
      <Mui.Stack sx={mainStack}>
        <ArrowBackIcon
          onClick={() => Nvaigate(-1)}
          sx={{ cursor: "pointer" }}
        />
        <Mui.Stack height="40vh" id="imagezoom">
          <img
            src={Image3}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Mui.Stack>
        <Mui.Typography
          fontFamily="Urbanist"
          fontSize="26px"
          pt={2}
          fontWeight={600}
        >
          Top In-Demand Tech Skills and How to Source Them
        </Mui.Typography>
        <Mui.Typography>{Blog.Blog3.para1}</Mui.Typography>
        <Mui.Stack pt={4}>
          <Mui.Typography
            fontFamily="Urbanist"
            fontSize="26px"
            pt={2}
            pb={3}
            // fontWeight={600}
          >
            Understanding the Tech Talent Shortage:
          </Mui.Typography>
          {Blog.Blog3.Data?.map((item, index) => {
            return (
              <Mui.Stack key={index} pb={2}>
                <Mui.Stack sx={secStack}>
                  <Mui.Typography fontWeight={600}>
                    {index + 1}.{" "}
                  </Mui.Typography>
                  <Mui.Typography fontWeight={600}>{item.title}</Mui.Typography>
                </Mui.Stack>
                <Mui.Typography>{item.content}</Mui.Typography>
              </Mui.Stack>
            );
          })}
        </Mui.Stack>

        <Mui.Stack>
          <Mui.Typography
            fontFamily="Urbanist"
            fontSize="26px"
            pt={2}
            fontWeight={600}
          >
            Conclusion:
          </Mui.Typography>
          <Mui.Typography>{Blog.Blog3.conclusion}</Mui.Typography>
        </Mui.Stack>
      </Mui.Stack>
    </>
  );
};
