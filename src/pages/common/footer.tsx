import React from "react";
import * as Mui from "@mui/material";

export const Footer = () => {
  return (
    <Mui.Stack>
      <Mui.Stack
        minHeight={400}
        sx={{
          background: "#061e45",
          padding: { md: "150px 200px", xs: "10px 20px" },
        }}
      >
        <Mui.Grid container spacing={4}>
          <Mui.Grid item xs={12} md={4}>
            <Mui.Stack color="white">
              <Mui.Typography fontWeight={600}>New york Office</Mui.Typography>
              <Mui.Typography pt={3}>555-1234</Mui.Typography>
              <Mui.Typography>info@consultz .com</Mui.Typography>
              <Mui.Typography pt={3}>
                123 Main Street, Suite 200 City:
              </Mui.Typography>
              <Mui.Typography>Anytown State: StateName</Mui.Typography>
            </Mui.Stack>
          </Mui.Grid>
          <Mui.Grid item xs={12} md={4}>
            <Mui.Stack color="white">
              <Mui.Typography fontWeight={600}>Paris Office</Mui.Typography>
              <Mui.Typography pt={3}>5+33 1 23 45 67 89</Mui.Typography>
              <Mui.Typography>info@consultz .com</Mui.Typography>
              <Mui.Typography pt={3}>
                123 Rue de la Paix, 75002 Paris, France
              </Mui.Typography>
            </Mui.Stack>
          </Mui.Grid>
          <Mui.Grid item xs={12} md={4}>
            <Mui.Stack color="white">
              <Mui.Typography fontWeight={600}>Berlin Office</Mui.Typography>
              <Mui.Typography pt={3}>+49 30 12345678</Mui.Typography>
              <Mui.Typography>info@consultzberlin.com</Mui.Typography>
              <Mui.Typography pt={3}>
                Mauerstrasse 45, 10117 Berlin, Germany
              </Mui.Typography>
            </Mui.Stack>
          </Mui.Grid>
        </Mui.Grid>
      </Mui.Stack>
      <Mui.Stack width="100%" sx={{ padding: "100px 0" }}>
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
