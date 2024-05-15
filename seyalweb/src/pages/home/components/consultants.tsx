import * as Mui from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import img1 from "src/assets/3.jpg";
import img2 from "src/assets/4.jpg";
import img3 from "src/assets/5.jpg";
import "src/App.css";
export const Consultants = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const Data = [
    {
      name: "Alisson Taylor",
      img: img1,
      role: "Team Manager",
    },
    {
      name: "Roger",
      img: img2,
      role: "CEO",
    },
    {
      name: "Jangaur",
      img: img3,
      role: "CTO",
    },
  ];
  return (
    <Mui.Stack
      sx={{ padding: { xs: 3, md: "80px 150px", sm: "10px 20px" } }}
      spacing={3}
    >
      <Mui.Typography
        fontWeight={700}
        color="#203556"
        variant={isMobile ? "h2" : "h1"}
      >
        Meet Our Expert Consultants
      </Mui.Typography>
      <Mui.Divider />
      <Mui.Typography fontFamily="Urbanist" fontSize="26px" pb={2}>
        The Driving Force Behind Our Success
      </Mui.Typography>
      <Mui.Grid container>
        {Data?.map((item, index) => {
          return (
            <Mui.Grid item xs={12} md={4} key={index} padding={2}>
              <Mui.Stack id="consultantmain">
                <Mui.Stack id="consultant">
                  <img
                    src={item.img}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Mui.Stack>
                <Mui.Stack id="consultantcontent" padding="2px 20px">
                  <Mui.Typography sx={{ fontSize: "22px" }}>
                    {item.name}
                  </Mui.Typography>
                  <Mui.Typography sx={{ fontSize: "15px", color: "grey" }}>
                    {" "}
                    {item.role}
                  </Mui.Typography>
                </Mui.Stack>
              </Mui.Stack>
            </Mui.Grid>
          );
        })}

        {/* <Mui.Grid item xs={12} md={4}>
          <Mui.Stack>
            <img src={img2} />
          </Mui.Stack>
        </Mui.Grid>
        <Mui.Grid item xs={12} md={4}>
          {" "}
          <Mui.Stack>
            <img src={img3} />
          </Mui.Stack>
        </Mui.Grid> */}
      </Mui.Grid>
    </Mui.Stack>
  );
};
