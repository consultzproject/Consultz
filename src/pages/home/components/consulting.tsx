import * as Mui from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AddIcon from "@mui/icons-material/Add";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Consulting = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Mui.Stack
      // sx={{ padding: { xs: "10px 20px", md: "80px 150px" } }}
      sx={{ padding: { xs: 3, md: "80px 150px", sm: "10px 20px" },}}
      spacing={3}
    >
      <Mui.Grid container spacing={isMobile ? 1 : 4}>
        <Mui.Grid item md={8} xs={12}>
          <Mui.Typography
            fontWeight={700}
            maxWidth={50}
            color="#203556"
            variant={isMobile ? "h2" : "h1"}
          >
            Consulting Services
          </Mui.Typography>
        </Mui.Grid>

        <Mui.Grid item md={8} xs={12}>
          <Mui.Divider className="w-full" />
          <Mui.Typography fontFamily="Urbanist" fontSize="26px" pt={2}>
            Empowering Businesses through Strategic Consulting
          </Mui.Typography>
        </Mui.Grid>
        <Mui.Grid item md={4} xs={12}>
          <Mui.Typography
            sx={{
              textDecoration: "underline",
              fontSize: "20px",
              textAlign: { md: "end", xs: "center" },
              cursor: "pointer",
            }}
          >
            All Services
            <ArrowOutwardIcon />
          </Mui.Typography>
        </Mui.Grid>
        <Mui.Grid item md={4} xs={12} spacing={4}>
          <Mui.Stack spacing={4}>
            <Mui.Stack spacing={1}>
              <Mui.Stack direction="row" alignItems="center">
                <AddIcon />
                <Mui.Typography>Strategy Consulting</Mui.Typography>
              </Mui.Stack>

              <Mui.Stack direction="row" alignItems="center">
                <AddIcon />
                <Mui.Typography>Management Consulting</Mui.Typography>
              </Mui.Stack>

              <Mui.Stack direction="row" alignItems="center">
                <AddIcon />
                <Mui.Typography>IT Consulting</Mui.Typography>
              </Mui.Stack>
            </Mui.Stack>
            <Mui.Stack spacing={1}>
              <Mui.Typography variant="h1">89%</Mui.Typography>
              <Mui.Divider />
              <Mui.Typography>Enhanced Strategy Planning</Mui.Typography>
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>

        <Mui.Grid item md={4} xs={12}>
          <Mui.Stack spacing={4}>
            <Mui.Stack spacing={1}>
              <Mui.Stack direction="row" alignItems="center">
                <AddIcon />
                <Mui.Typography>Human Resources Consulting</Mui.Typography>
              </Mui.Stack>

              <Mui.Stack direction="row" alignItems="center">
                <AddIcon />
                <Mui.Typography>Marketing and Sales Consulting</Mui.Typography>
              </Mui.Stack>

              <Mui.Stack direction="row" alignItems="center">
                <AddIcon />
                <Mui.Typography>Operations Consulting</Mui.Typography>
              </Mui.Stack>
            </Mui.Stack>
            <Mui.Stack spacing={1}>
              <Mui.Typography variant="h1">65%</Mui.Typography>
              <Mui.Divider />
              <Mui.Typography>Cost Reduction</Mui.Typography>
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item md={4} xs={12}>
          <Mui.Stack spacing={4}>
            <Mui.Stack spacing={1}>
              <Mui.Stack direction="row" alignItems="center">
                <AddIcon />
                <Mui.Typography>Risk Management Consulting</Mui.Typography>
              </Mui.Stack>

              <Mui.Stack direction="row" alignItems="center">
                <AddIcon />
                <Mui.Typography>Legal Consulting</Mui.Typography>
              </Mui.Stack>

              <Mui.Stack direction="row" alignItems="center">
                <AddIcon />
                <Mui.Typography>
                  International Business Consulting
                </Mui.Typography>
              </Mui.Stack>
            </Mui.Stack>
            <Mui.Stack spacing={1}>
              <Mui.Typography variant="h1">95%</Mui.Typography>
              <Mui.Divider />
              <Mui.Typography>Enhanced Risk Management</Mui.Typography>
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>
      </Mui.Grid>
    </Mui.Stack>
  );
};
