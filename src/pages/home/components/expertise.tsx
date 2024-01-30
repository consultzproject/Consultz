import React from "react";
import * as Mui from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
// import Img1 from "src/assets/1.jpg";
import Img2 from "src/assets/home/Mission Banner.svg";
import Img3 from "src/assets/home/Vision Banner.svg";

export const Expertise = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const Values = [
    {
      name: "Mission",
      content:
        "At Seyal.io, our mission is to elevate businesses by leveraging the wide spread talent pool across the globe. We provide tailored consulting services, guiding organizations to implement, optimize, and evolve the businesses. Through strategic partnerships, continuous innovation, and a commitment to excellence, we aim to reshape the future of the workforce, driving efficiency, engagement, and success for our clients.",
      img: Img2,
      ProjectImplementation: "60",
      PerformanceImprovement: "70",
      TrainingandDevelopment: "60",
    },
    {
      name: "Vision",
      content:
        "To be a catalyst for organizational success through innovative approaches. Empowering businesses to thrive by revolutionizing their human capital strategies in the dynamic landscape of the digital age.",
      img: Img3,
      ProjectImplementation: "60",
      PerformanceImprovement: "60",
      TrainingandDevelopment: "90",
    },
  ];

  return (
    <Mui.Stack
      sx={{ padding: { xs: 3, md: "80px 150px", sm: "10px 20px" } }}
      spacing={3}
    >
      <Mui.Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Mui.Typography
          fontWeight={700}
          color="#203556"
          variant={isMobile ? "h2" : "h2"}
        >
          Talent Management Planning
        </Mui.Typography>
      </Mui.Stack>
      <Mui.Divider />

      {Values?.map((item: any, index: any) => {
        return (
          <Mui.Grid container spacing={isMobile ? 1 : 4}>
            <Mui.Grid item xs={12} md={6}>
              <Mui.Stack sx={{ height: "350px" }}>
                {/* <Mui.Typography fontFamily="Urbanist" fontSize="26px" pb={2}>
              Efficient Cost Reduction
            </Mui.Typography> */}
                <Mui.Stack height="100%" id="imagezoom">
                  <img
                    src={item?.img}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Mui.Stack>
              </Mui.Stack>
            </Mui.Grid>
            <Mui.Grid item xs={12} md={6}>
              <Mui.Stack>
                <Mui.Typography
                  key={index}
                  style={{
                    textDecoration: "underline",
                    cursor: "pointer",
                    fontFamily: "urbanist",
                    padding: "10px 0",
                    textAlign: "left",
                  }}
                  variant="h4"
                >
                  {item.name}
                </Mui.Typography>
                <Mui.Typography variant="h6" fontFamily="urbanist">
                  {item.content}
                </Mui.Typography>
              </Mui.Stack>
            </Mui.Grid>
          </Mui.Grid>
        );
      })}
      {/* <Mui.Grid item xs={12} md={8}>
          <Mui.Typography fontFamily="urbanist" lineHeight={2} color="grey">
            {data?.content}
          </Mui.Typography>
        </Mui.Grid> */}
    </Mui.Stack>
  );
};
