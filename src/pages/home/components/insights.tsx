import Image from "src/assets/home/Home Rolling Banner.svg";
import * as Mui from "@mui/material";

export const Insights = () => {
  return (
    <Mui.Stack sx={{ height: "400px", position: "relative" }}>
      {/* <Mui.Stack width="100%" direction="row">
        <Mui.Typography className="insightsFont" variant="h3" width="1050px">
          Expert Insights Smart Solutions
        </Mui.Typography>
        <Mui.Typography className="insightsFont" variant="h3" width="1050px">
          Navigating Complexity
        </Mui.Typography>
        <Mui.Typography className="insightsFont" variant="h3" width="1050px">
          Strategic Excellence
        </Mui.Typography>
      </Mui.Stack> */}

      <section className="container">
        <p className="loop-text">
          Expert Insights &nbsp; &nbsp; &nbsp;Smart Solutions&nbsp; &nbsp;
          &nbsp; Navigating Complexity &nbsp; &nbsp; &nbsp;Strategic Excellence
        </p>
      </section>

      <img
        src={Image}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Mui.Stack>
  );
};
