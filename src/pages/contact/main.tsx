import * as Mui from "@mui/material";
import Image1 from "src/assets/contactus/Contact us.svg";
import * as Common from "src/pages/common";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export const Main = () => {
  return (
    <Mui.Stack>
      <Mui.Stack height={400}>
        <img
          src={Image1}
          style={{ height: "100%", width: "100%", objectFit: "cover" }}
        />
      </Mui.Stack>
      <Mui.Stack
        sx={{
          position: "absolute",
          top: "0",
          height: "100vh",
          overflow: { xs: "visible", md: "auto" },
          width: "100%",
        }}
      >
        <Mui.Stack pt={60}></Mui.Stack>
        <Mui.Stack
          sx={{
            background: "white",
            padding: { md: "40px 150px", xs: "10px 20px" },
          }}
        >
          <Mui.Grid container>
            <Mui.Grid item xs={12} md={6}>
              <Mui.Stack>
                <Mui.Typography
                  fontWeight={700}
                  fontFamily="urbanist"
                  color="#203556"
                  sx={{ fontSize: { xs: "30px", md: "110px" } }}
                >
                  Let's Talk
                </Mui.Typography>
                <Mui.Divider />
                <Mui.Typography fontFamily="urbanist" fontSize={25} pt={2}>
                  Got a project on your mind? Let's discuss about the details
                </Mui.Typography>

                <Mui.Stack spacing={1} pt={10}>
                  <Mui.Typography
                    color="#203556"
                    fontWeight={500}
                    fontSize={20}
                  >
                    Call Us
                  </Mui.Typography>
                  <Mui.Typography
                    color="#203556"
                    fontWeight={800}
                    fontSize={24}
                  >
                    04916030669
                  </Mui.Typography>

                  <Mui.Stack
                    direction="row"
                    alignItems="center"
                    spacing={3}
                    pt={5}
                  >
                    <FacebookIcon sx={{ color: "grey" }} />
                    <YouTubeIcon sx={{ color: "grey" }} />
                    <TwitterIcon sx={{ color: "grey" }} />
                  </Mui.Stack>
                </Mui.Stack>
              </Mui.Stack>
            </Mui.Grid>
            <Mui.Grid item xs={12} md={6}>
              <Mui.Stack
                sx={{ paddingLeft: { xs: 0, md: "100px" } }}
                spacing={2}
              >
                <Mui.TextField label="Name" variant="standard" fullWidth />
                <Mui.TextField label="Email" variant="standard" />
                <Mui.TextField
                  label="Message"
                  variant="standard"
                  multiline
                  // maxRows={4}
                  rows={6}
                />
                <Mui.Button
                  variant="contained"
                  sx={{
                    borderRadius: "20px",
                    background: "#203556",
                    width: "fit-content",
                    textTransform: "capitalize",
                  }}
                >
                  Submit
                </Mui.Button>
              </Mui.Stack>
            </Mui.Grid>
          </Mui.Grid>
        </Mui.Stack>
        <Common.Footer />
      </Mui.Stack>
    </Mui.Stack>
  );
};
