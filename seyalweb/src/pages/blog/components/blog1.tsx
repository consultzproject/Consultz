import * as Mui from "@mui/material";
import * as Blog from "./content";
import Image1 from "src/assets/blog1.jpeg";
import { mainStack, secStack } from "./blogStyle";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import * as Router from "react-router-dom";

export const Blog1 = () => {
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
        <Mui.Stack height="50vh" id="imagezoom">
          <img
            src={Image1}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Mui.Stack>
        <Mui.Typography
          fontFamily="Urbanist"
          fontSize="26px"
          pt={2}
          fontWeight={600}
        >
          Navigating the Tech Talent Shortage
        </Mui.Typography>
        <Mui.Typography>{Blog.Blog1.para1}</Mui.Typography>
        <Mui.Stack>
          <Mui.Typography fontFamily="Urbanist" fontSize="26px" pt={2} pb={3}>
            Understanding the Tech Talent Shortage:
          </Mui.Typography>
          <Mui.Typography>{Blog.Blog1.para2}</Mui.Typography>
        </Mui.Stack>
        {Blog.Blog1.Data?.map((item, index) => {
          return (
            <Mui.Stack key={index} pb={2}>
              <Mui.Stack sx={secStack}>
                <Mui.Typography fontWeight={600}>{index + 1}. </Mui.Typography>
                <Mui.Typography fontWeight={600}>{item.title}</Mui.Typography>
              </Mui.Stack>
              <Mui.Typography>{item.content}</Mui.Typography>
            </Mui.Stack>
          );
        })}
        <Mui.Stack>
          <Mui.Typography
            fontFamily="Urbanist"
            fontSize="26px"
            pt={2}
            fontWeight={600}
          >
            Conclusion:
          </Mui.Typography>
          <Mui.Typography>{Blog.Blog1.conclusion}</Mui.Typography>
        </Mui.Stack>
      </Mui.Stack>
    </>
  );
};
