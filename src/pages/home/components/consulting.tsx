import * as Mui from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Consulting = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const Titles = [
    "IT Talent Management",
    "Tech  Consulting",
    "Project Outsourcing",
    "International Business Consulting ",
  ];
  const subTitle = [
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
        <Mui.Grid item xs={12}>
          {Titles?.map((item, index) => (
            <Mui.Stack direction="row" key={index}>
              <AddIcon />
              <Mui.Typography>{item}</Mui.Typography>
            </Mui.Stack>
          ))}
        </Mui.Grid>
        {subTitle?.map((item, index) => (
          <Mui.Grid item xs={12} md={4}>
            <Mui.Stack key={index}>
              <Mui.Typography variant="h1">{item.performance}</Mui.Typography>
              <Mui.Divider />
              <Mui.Typography variant="h5" pt={2}>
                {item.subHeader}
              </Mui.Typography>
            </Mui.Stack>
          </Mui.Grid>
        ))}
      </Mui.Grid>
    </Mui.Stack>
  );
};
