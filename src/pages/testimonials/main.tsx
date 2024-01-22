import React from "react";
import * as Common from "src/pages/common";
import * as Mui from "@mui/material";
import Image from "src/assets/testimonials/AdobeStock-9OI4A1wQN2 (1).svg";
export const Main = () => {
  return (
    <Mui.Stack>
      <Mui.Grid container>
        <Mui.Grid item xs={12} md={6}>
          <Mui.Stack height="90vh">
            <img
              src={Image}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid
          item
          xs={12}
          md={6}
          sx={{ padding: { xs: "30px 20px", md: "30px 120px" } }}
        >
          <Mui.Stack
            sx={{
              alignItems: "center",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <Mui.Typography variant="h5" fontFamily="urbanist">
              The services rendered by Seyal to Rishvaware Technologies was
              unparalleled in every vertical. The timely response and their
              staunch, uncompromising attitude towards delivering what was
              promised is something that I admired from the very beginning. On a
              personal note, I would vouch for their services and would strongly
              recommend anyone in need!!
            </Mui.Typography>
          </Mui.Stack>
        </Mui.Grid>
        <Common.Footer />
      </Mui.Grid>
      <Common.Footer />
    </Mui.Stack>
  );
};
