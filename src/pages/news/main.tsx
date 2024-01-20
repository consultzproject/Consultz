import React from "react";
import * as Mui from "@mui/material";
import * as Common from "src/pages/common";
import Img1 from "src/assets/submitprofile/submit your profile.svg";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";

export const Main = () => {
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  return (
    // <Mui.Stack sx={{ padding: { xs: "40px 20px", md: "60px 120px" } }}>
    //   <Mui.Grid container spacing={8}>
    //     <Mui.Grid item xs={12}>
    //       <Mui.Typography
    //         // variant={{ md: "h1", xs: "h6" }}
    //         textAlign="center"
    //         fontWeight={600}
    //         fontFamily="urbanist"
    //         color="#203556"
    //         sx={{ fontSize: { xs: "50px", md: "100px" } }}
    //       >
    //         News
    //       </Mui.Typography>
    //     </Mui.Grid>

    //     <Mui.Grid item xs={12} md={4}>
    //       <Mui.Stack spacing={4}>
    //         <img src={Image1} />
    //         <Mui.Stack paddingLeft={2} spacing={1}>
    //           <Mui.Typography fontSize={20}>
    //             The Rise of Remote Consulting
    //           </Mui.Typography>
    //           <Mui.Stack direction="row" alignItems="center" spacing={3}>
    //             <Mui.Typography
    //               sx={{
    //                 padding: "4px 10px",
    //                 border: "0.5px solid grey",
    //                 borderRadius: "20px",
    //                 color: "#536C82",
    //                 fontSize: "10px",
    //               }}
    //             >
    //               NEWS
    //             </Mui.Typography>

    //             <Mui.Typography fontSize={10} color="#536C82">
    //               <CalendarTodayIcon sx={{ fontSize: "12px" }} />
    //               &nbsp; MAY 18, 2023
    //             </Mui.Typography>

    //             <Components.Popup />
    //           </Mui.Stack>
    //           <Mui.Typography
    //             fontSize={10}
    //             sx={{ textDecoration: "underline" }}
    //             pt={3}
    //           >
    //             READ MORE
    //           </Mui.Typography>
    //         </Mui.Stack>
    //       </Mui.Stack>
    //     </Mui.Grid>
    //     <Mui.Grid item xs={12} md={4}>
    //       <Mui.Stack spacing={4}>
    //         <img src={Image2} />
    //         <Mui.Stack paddingLeft={2} spacing={2}>
    //           <Mui.Typography fontSize={20}>ESG Consulting</Mui.Typography>
    //           <Mui.Stack direction="row" alignItems="center" spacing={3}>
    //             <Mui.Typography
    //               sx={{
    //                 padding: "4px 10px",
    //                 border: "0.5px solid grey",
    //                 borderRadius: "20px",
    //                 color: "#536C82",
    //                 fontSize: "10px",
    //               }}
    //             >
    //               NEWS
    //             </Mui.Typography>

    //             <Mui.Typography fontSize={10} color="#536C82">
    //               <CalendarTodayIcon sx={{ fontSize: "12px" }} />
    //               &nbsp; MAY 18, 2023
    //             </Mui.Typography>

    //             <Components.Popup />
    //           </Mui.Stack>
    //           <Mui.Typography
    //             fontSize={10}
    //             sx={{ textDecoration: "underline" }}
    //             pt={3}
    //           >
    //             READ MORE
    //           </Mui.Typography>
    //         </Mui.Stack>
    //       </Mui.Stack>
    //     </Mui.Grid>
    //     <Mui.Grid item xs={12} md={4}>
    //       <Mui.Stack spacing={4}>
    //         <img src={Image3} />
    //         <Mui.Stack paddingLeft={2} spacing={2}>
    //           <Mui.Typography fontSize={20}>
    //             Emerging Market Oppurtunities
    //           </Mui.Typography>
    //           <Mui.Stack direction="row" alignItems="center" spacing={3}>
    //             <Mui.Typography
    //               sx={{
    //                 padding: "4px 10px",
    //                 border: "0.5px solid grey",
    //                 borderRadius: "20px",
    //                 color: "#536C82",
    //                 fontSize: "10px",
    //               }}
    //             >
    //               INSIGHTS
    //             </Mui.Typography>

    //             <Mui.Typography fontSize={10} color="#536C82">
    //               <CalendarTodayIcon sx={{ fontSize: "12px" }} />
    //               &nbsp; MAY 18, 2023
    //             </Mui.Typography>

    //             <Components.Popup />
    //           </Mui.Stack>
    //           <Mui.Typography
    //             fontSize={10}
    //             sx={{ textDecoration: "underline" }}
    //             pt={3}
    //           >
    //             READ MORE
    //           </Mui.Typography>
    //         </Mui.Stack>
    //       </Mui.Stack>
    //     </Mui.Grid>
    //     <Mui.Grid item xs={12} md={4}>
    //       <Mui.Stack spacing={4}>
    //         <img src={Image1} />
    //         <Mui.Stack paddingLeft={2} spacing={2}>
    //           <Mui.Typography fontSize={20}>
    //             Industry DisruptionAnd Innovation
    //           </Mui.Typography>
    //           <Mui.Stack direction="row" alignItems="center" spacing={3}>
    //             <Mui.Typography
    //               sx={{
    //                 padding: "4px 10px",
    //                 border: "0.5px solid grey",
    //                 borderRadius: "20px",
    //                 color: "#536C82",
    //                 fontSize: "10px",
    //                 fontFamily: "urbanist",
    //               }}
    //             >
    //               NEWS
    //             </Mui.Typography>

    //             <Mui.Typography fontSize={10} color="#536C82">
    //               <CalendarTodayIcon sx={{ fontSize: "12px" }} />
    //               &nbsp; MAY 18, 2023
    //             </Mui.Typography>

    //             <Components.Popup />
    //           </Mui.Stack>
    //           <Mui.Typography
    //             fontSize={10}
    //             sx={{ textDecoration: "underline" }}
    //             pt={3}
    //           >
    //             READ MORE
    //           </Mui.Typography>
    //         </Mui.Stack>
    //       </Mui.Stack>
    //     </Mui.Grid>
    //     <Mui.Grid item xs={12} md={4}>
    //       <Mui.Stack spacing={4}>
    //         <img src={Image2} />
    //         <Mui.Stack paddingLeft={2} spacing={2}>
    //           <Mui.Typography fontSize={20}>
    //             Risk Management in an Uncertain World
    //           </Mui.Typography>
    //           <Mui.Stack direction="row" alignItems="center" spacing={3}>
    //             <Mui.Typography
    //               sx={{
    //                 padding: "4px 10px",
    //                 border: "0.5px solid grey",
    //                 borderRadius: "20px",
    //                 color: "#536C82",
    //                 fontSize: "10px",
    //               }}
    //             >
    //               INSIGHTS
    //             </Mui.Typography>

    //             <Mui.Typography fontSize={10} color="#536C82">
    //               <CalendarTodayIcon sx={{ fontSize: "12px" }} />
    //               &nbsp; MAY 18, 2023
    //             </Mui.Typography>

    //             <Components.Popup />
    //           </Mui.Stack>
    //           <Mui.Typography
    //             fontSize={10}
    //             sx={{ textDecoration: "underline" }}
    //             pt={3}
    //           >
    //             READ MORE
    //           </Mui.Typography>
    //         </Mui.Stack>
    //       </Mui.Stack>
    //     </Mui.Grid>
    //     <Mui.Grid item xs={12} md={4}>
    //       <Mui.Stack spacing={4}>
    //         <img src={Image3} />
    //         <Mui.Stack paddingLeft={2} spacing={2}>
    //           <Mui.Typography fontSize={20}>
    //             Healthcare Consulting
    //           </Mui.Typography>
    //           <Mui.Stack direction="row" alignItems="center" spacing={3}>
    //             <Mui.Typography
    //               sx={{
    //                 padding: "4px 10px",
    //                 border: "0.5px solid grey",
    //                 borderRadius: "20px",
    //                 color: "#536C82",
    //                 fontSize: "10px",
    //               }}
    //             >
    //               NEWS
    //             </Mui.Typography>

    //             <Mui.Typography fontSize={10} color="#536C82">
    //               <CalendarTodayIcon sx={{ fontSize: "12px" }} />
    //               &nbsp; MAY 18, 2023
    //             </Mui.Typography>

    //             <Components.Popup />
    //           </Mui.Stack>
    //           <Mui.Typography
    //             fontSize={10}
    //             sx={{ textDecoration: "underline" }}
    //             pt={3}
    //           >
    //             READ MORE
    //           </Mui.Typography>
    //         </Mui.Stack>
    //       </Mui.Stack>
    //     </Mui.Grid>
    //   </Mui.Grid>

    //   <Mui.Stack
    //     width="100%"
    //     sx={{ padding: { xs: "40px 0px", md: "200px 0 0 0 " } }}
    //   >
    //     <Mui.Typography
    //       textAlign="center"
    //       fontSize="13px"
    //       fontFamily="urbanist"
    //       fontWeight="500"
    //     >
    //       - 2 0 2 3 &nbsp; C O N S U L T Z &nbsp; C O. -
    //     </Mui.Typography>
    //   </Mui.Stack>
    // </Mui.Stack>
    <Mui.Grid container>
      <Mui.Grid item xs={12} md={6}>
        <Mui.Stack height="90vh">
          <img
            src={Img1}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Mui.Stack>
      </Mui.Grid>
      <Mui.Grid
        item
        xs={12}
        md={6}
        sx={{ padding: { xs: "30px 20px", md: "30px 120px" } }}
      >
        <Mui.Stack spacing={2} width="100%" alignItems="center">
          <Mui.Typography
            // variant={{ md: "h5", xs: "h6" }}
            textAlign="center"
            fontWeight={600}
            fontFamily="urbanist"
            color="#203556"
            sx={{ fontSize: { xs: "30px", md: "50px" } }}
          >
            Submit Your Profile
          </Mui.Typography>
          <Mui.Stack spacing={2} maxWidth="450px" width="100%">
            <Mui.TextField
              // error
              id="outlined-error-helper-text"
              label="Name"
              // defaultValue="9898976541"
              // helperText="Enter Mobile Number..."
            />
            <Mui.TextField
              // error
              id="outlined-error-helper-text"
              label="Email"
              // helperText="Enter Mobile Number..."
            />
            <Mui.TextField
              // error
              id="outlined-error-helper-text"
              label="Mobile Number"
              type="number"
              // helperText="Enter Mobile Number..."
            />
            <Mui.TextField
              // error
              id="outlined-error-helper-text"
              label="Designation"
              // helperText="Enter Mobile Number..."
            />
          </Mui.Stack>
          <Mui.Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload Your Resume
            <VisuallyHiddenInput type="file" />
          </Mui.Button>

          <Mui.Stack
            sx={{
              width: "100px",
              height: "100px",
              borderRadius: "50px",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
              background: "#cfc0ff",
              cursor: "pointer",
              "&:hover": {
                background: "#665699",
              },
            }}
            // onClick={() => Navigate("/register")}
          >
            <Mui.Typography>Submit</Mui.Typography>
          </Mui.Stack>
        </Mui.Stack>
      </Mui.Grid>
      <Common.Footer />
    </Mui.Grid>
  );
};
