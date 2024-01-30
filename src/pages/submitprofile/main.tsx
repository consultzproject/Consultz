import * as Mui from "@mui/material";
import * as Common from "src/pages/common";
import Img1 from "src/assets/submitprofile/submit your profile.svg";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import Axios from "axios";
import { useFormik } from "formik";
import * as Formik from "formik";

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

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      designation: "",
      resume_url: "",
    },
    // validationSchema: validation.Contact,
    onSubmit: (values) => {
      console.log(values, "check this");
      handleSubmits(values);
    },
  });

  const handleSubmits = (values: any) => {
    console.log(values, "checking");

    const options = {
      url: "https://seyalbackend.onrender.com/v1/user/resume",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        name: values.name,
        email: values.email,
        mobile: values.mobile,
        designation: values.designation,
        resume_url: "https://seyalbackend.onrender.com/files/Logo.pdf",
      },
    };
    Axios(options).then((res: any) => {
      console.log(res, "res");
      if (res?.data?.error) {
        alert("Error");
      } else {
        alert("Profile Submitted Successfully");
        formik.resetForm();
      }

      // handler({
      //   message: res?.data?.status || "Login successful",
      //   variant: res?.data?.error ? "success" : "error",
      //   min: true,
      // });
    });
  };

  return (
    <Mui.Grid container>
      <Mui.Grid item xs={12}>
        <Mui.Stack sx={{ height: "100px", background: "#4a4a4a" }} />
      </Mui.Grid>
      <Mui.Grid item xs={12} md={6}>
        <Mui.Stack
          height="90vh"
          sx={{ padding: { xs: "30px 20px", md: "40px 60px 60px 60px" } }}
        >
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
        // sx={{ padding: { xs: "30px 20px", md: "30px 120px" } }}
      >
        <form onSubmit={formik.handleSubmit}>
          <Mui.Stack
            spacing={2}
            width="100%"
            alignItems="center"
            sx={{ padding: { xs: "30px 20px", md: "50px 120px 60px 120px" } }}
          >
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
              <Mui.Stack spacing={2} maxWidth="450px" width="100%">
                <Mui.TextField
                  // error

                  id="name"
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}

                  // defaultValue="9898976541"
                  // helperText="Enter Mobile Number..."
                />
                <Mui.TextField
                  // error
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  // helperText="Enter Mobile Number..."
                />
                <Mui.TextField
                  // error
                  id="mobile"
                  name="mobile"
                  label="Mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="number"
                  // helperText="Enter Mobile Number..."
                />
                <Mui.FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Mui.InputLabel id="demo-simple-select-helper-label">
                    Tech
                  </Mui.InputLabel>
                  <Mui.Select
                    id="tech"
                    name="tech"
                    label="Tech"
                    value={formik.values.designation}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <Mui.MenuItem value={10}>Ten</Mui.MenuItem>
                    <Mui.MenuItem value={20}>Twenty</Mui.MenuItem>
                    <Mui.MenuItem value={30}>Thirty</Mui.MenuItem>
                  </Mui.Select>
                </Mui.FormControl>
                <Mui.TextField
                  // error
                  id="designation"
                  name="designation"
                  label="Designation"
                  value={formik.values.designation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}

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
                  height: "40px",
                  borderRadius: "10px",
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
                <Mui.Button type="submit">Submit</Mui.Button>
              </Mui.Stack>
            </Mui.Stack>
          </Mui.Stack>
        </form>
      </Mui.Grid>
      <Common.Footer />
    </Mui.Grid>
  );
};
