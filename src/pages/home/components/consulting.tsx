import * as Mui from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AddIcon from "@mui/icons-material/Add";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Consulting = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const Arr = [
    {
      title: "IT Talent Management",
      subHeader: "Enhanced Strategic Planning",
      performance: "89%",
    },
    {
      title: "Tech  Consulting",
      subHeader: "Cost Reduction",
      performance: "65%",
    },
    {
      title: "Project Outsourcing",
      subHeader: "Enhanced Risk Management",
      performance: "95%",
    },
    {
      title: "International Business Consulting ",
      subHeader: "Enhanced Strategic Planning",
      performance: "",
    },
  ];
  return (
    <Mui.Stack
      // sx={{ padding: { xs: "10px 20px", md: "80px 150px" } }}
      sx={{ padding: { xs: 3, md: "80px 150px", sm: "10px 20px" } }}
      spacing={3}
    >
      <Mui.Grid container spacing={isMobile ? 1 : 4}>
        <Mui.Grid item md={8} xs={12}>
          <Mui.Typography
            fontWeight={700}
            // maxWidth={50}
            color="#203556"
            variant={isMobile ? "h2" : "h2"}
          >
            Our Curated Services
          </Mui.Typography>
        </Mui.Grid>
        {/* <Mui.Grid item md={4} xs={12}>
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
        </Mui.Grid> */}
        {Arr?.map((item, index) => (
          <Mui.Grid item xs={12} spacing={4} key={index}>
            <Mui.Stack
              spacing={4}
              direction="row"
              justifyContent="space-between"
            >
              <Mui.Stack>
                <Mui.Stack direction="row">
                  <AddIcon />
                  <Mui.Typography>{item.title}</Mui.Typography>
                </Mui.Stack>
                <Mui.Typography paddingLeft="25px">
                  {item.subHeader}
                </Mui.Typography>
              </Mui.Stack>
              <Mui.Typography variant="h3">{item.performance}</Mui.Typography>
            </Mui.Stack>
          </Mui.Grid>
        ))}
      </Mui.Grid>
    </Mui.Stack>
  );
};
