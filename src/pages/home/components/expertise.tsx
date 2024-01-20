import React from "react";
import * as Mui from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
// import Img1 from "src/assets/1.jpg";
import Img2 from "src/assets/home/Mission Banner.svg";
import Img3 from "src/assets/home/Vision Banner.svg";

export const Expertise = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [data, setData] = React.useState<any>({
    name: "Mission",
    content:
      "Our mission is to drive transformative change and unlock the full potential of our clients by delivering strategic insights, innovative solutions, and actionable recommendations. Through collaborative partnerships, we aim to empower organizations to achieve their goals, enhance their competitive advantage, and thrive in an ever-evolving business landscape",
    img: Img2,
    ProjectImplementation: "60",
    PerformanceImprovement: "70",
    TrainingandDevelopment: "60",
  });
  const Values = [
    // {
    //   name: "History",
    //   content:
    //     "Consultz is a leading consulting firm dedicated to helping businesses achieve their goals and navigate complex challenges. With a team of seasoned experts and a data-driven approach, we provide tailored solutions that drive sustainable growth and deliver tangible results. Our comprehensive services span strategic planning, operational optimization, and market expansion.",
    //   img: Img1,
    //   ProjectImplementation: "60",
    //   PerformanceImprovement: "60",
    //   TrainingandDevelopment: "60",
    // },
    {
      name: "Mission",
      content:
        "Our mission is to drive transformative change and unlock the full potential of our clients by delivering strategic insights, innovative solutions, and actionable recommendations. Through collaborative partnerships, we aim to empower organizations to achieve their goals, enhance their competitive advantage, and thrive in an ever-evolving business landscape",
      img: Img2,
      ProjectImplementation: "60",
      PerformanceImprovement: "70",
      TrainingandDevelopment: "60",
    },
    {
      name: "Vision",
      content:
        "This vision statement reflects the consulting company's commitment to helping organizations succeed and flourish in an ever-evolving business environment. It emphasizes the company's focus on empowering clients by providing them with the knowledge, strategies, and resources they need to navigate and thrive amidst constant change.",
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
      >
        <Mui.Typography
          fontWeight={700}
          color="#203556"
          variant={isMobile ? "h2" : "h1"}
        >
          Our Expertise
        </Mui.Typography>

        <Mui.Typography
          sx={{
            textDecoration: "underline",
            fontSize: "20px",
            textAlign: { md: "end", xs: "center" },
            cursor: "pointer",
          }}
        >
          About Us
          <ArrowOutwardIcon />
        </Mui.Typography>
      </Mui.Stack>
      <Mui.Divider />

      <Mui.Grid container spacing={isMobile ? 1 : 4}>
        <Mui.Grid item xs={12} md={6}>
          <Mui.Stack sx={{ height: "350px" }}>
            <Mui.Typography fontFamily="Urbanist" fontSize="26px" pb={2}>
              Partnering for Progress and Prosperity
            </Mui.Typography>
            <Mui.Stack height="300px">
              <img
                src={data?.img}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Mui.Stack>
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item xs={12} md={6}>
          <Mui.Grid container pt={isMobile ? 3 : 10} spacing={3}>
            <Mui.Grid item xs={12} md={4}>
              {Values?.map((item: any, index: any) => {
                return (
                  <Mui.Typography
                    key={index}
                    style={{
                      textDecoration: "underline",
                      cursor: "pointer",
                      color: data?.name === item?.name ? "black" : "grey",
                      fontFamily: "urbanist",
                      fontSize: "20px",
                      padding: "10px 0",
                      textAlign: isMobile ? "left" : "center",
                    }}
                    onClick={() => setData(item)}
                  >
                    {item.name}
                  </Mui.Typography>
                );
              })}
            </Mui.Grid>
            <Mui.Grid item xs={12} md={8}>
              <Mui.Typography fontFamily="urbanist" lineHeight={2} color="grey">
                {data?.content}
              </Mui.Typography>
            </Mui.Grid>
            {/* <Mui.Grid item xs={12} md={12}>
              <Mui.Stack
                padding={isMobile ? "30px" : "10px 40px 10px 60px"}
                sx={{ width: "100%", color: "grey.500" }}
                spacing={2}
              >
                <Mui.Stack>
                  <Mui.Typography color="black" fontSize="14px">
                    Project Implementation
                  </Mui.Typography>
                  <LinearProgress
                    variant="determinate"
                    value={data?.ProjectImplementation}
                    color="inherit"
                  />
                </Mui.Stack>
                <Mui.Stack>
                  <Mui.Typography color="black" fontSize="14px">
                    Performance Improvement
                  </Mui.Typography>
                  <LinearProgress
                    variant="determinate"
                    value={data?.PerformanceImprovement}
                    color="inherit"
                  />
                </Mui.Stack>
                <Mui.Stack>
                  <Mui.Typography color="black" fontSize="14px">
                    Training and Development
                  </Mui.Typography>
                  <LinearProgress
                    variant="determinate"
                    value={data?.TrainingandDevelopment}
                    color="inherit"
                  />
                </Mui.Stack>
              </Mui.Stack>
            </Mui.Grid> */}
          </Mui.Grid>
        </Mui.Grid>
      </Mui.Grid>
    </Mui.Stack>
  );
};
