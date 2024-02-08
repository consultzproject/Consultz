import * as Mui from "@mui/material";
import * as Common from "src/pages/common";
import Img1 from "src/assets/submitprofile/submit your profile.svg";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import Axios from "axios";
import { useFormik } from "formik";
import { useMediaQuery } from "@mui/material";
import { countryList } from "src/constant/country-list";
import * as validation from "src/validation";
import React from "react";

export const Main = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [resumeFile, setResumeFile] = React.useState("");
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
      tech: "",
      country: "",
      resume_url: "",
    },
    validationSchema: validation.Submit,
    onSubmit: (values) => {
      console.log(values, "check this");
      handleSubmits(values);
    },
  });
  const UploadResume = (val: any) => {
    console.log(val?.target.files[0]);
    const formData = new FormData();
    formData.append("selectedFile", val);
    const options = {
      url: "http://localhost:8080/v1/user/upload",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: {
        file: val?.target.files[0],
      },
    };
    Axios(options).then((res: any) => {
      console.log(res, "res");
      if (res?.data?.error) {
        alert("Error");
      } else {
        setResumeFile(res?.data);
        alert("Profile Submitted Successfully");
        // formik.resetForm();
      }
    });
  };
  const handleSubmits = (values: any) => {
    const options = {
      url: "http://localhost:8080/v1/user/resume",
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
        tech: values.tech,
        country: values.country,
        resume_url: resumeFile,
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
    });
  };

  return (
    <Mui.Grid container>
      <Mui.Grid item xs={12}>
        <Mui.Stack sx={{ height: "100px", background: "#4a4a4a" }} />
      </Mui.Grid>
      <Mui.Grid item xs={12} md={6}>
        <Mui.Stack
          height={isMobile ? "100%" : "90vh"}
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
                  id="name"
                  name="name"
                  label="Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <Mui.TextField
                  id="email"
                  name="email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <Mui.TextField
                  id="mobile"
                  name="mobile"
                  label="Mobile"
                  value={formik.values.mobile}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="number"
                  error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                  helperText={formik.touched.mobile && formik.errors.mobile}
                />
                <Mui.FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Mui.InputLabel id="demo-simple-select-helper-label">
                    Tech
                  </Mui.InputLabel>
                  <Mui.Select
                    id="tech"
                    name="tech"
                    label="Tech"
                    value={formik.values.tech}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.tech && Boolean(formik.errors.tech)}
                  >
                    <Mui.MenuItem value="Java">Java</Mui.MenuItem>
                    <Mui.MenuItem value="Dot Net">Dot Net</Mui.MenuItem>
                    <Mui.MenuItem value="Testing"> Testing</Mui.MenuItem>
                    <Mui.MenuItem value="Sap"> Sap</Mui.MenuItem>
                    <Mui.MenuItem value="Business Analyst">
                      {" "}
                      Business Analyst
                    </Mui.MenuItem>
                    <Mui.MenuItem value="Share Point">
                      {" "}
                      Share Point
                    </Mui.MenuItem>
                    <Mui.MenuItem value="Others"> Others</Mui.MenuItem>
                  </Mui.Select>
                  <Mui.FormHelperText error={formik.touched.tech}>
                    <>
                      {formik.touched.tech && formik.errors.tech
                        ? "select Tech"
                        : ""}
                    </>
                  </Mui.FormHelperText>
                </Mui.FormControl>
                <Mui.FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Mui.InputLabel id="demo-simple-select-helper-label">
                    Select Country
                  </Mui.InputLabel>
                  <Mui.Select
                    id="country"
                    name="country"
                    label="Country"
                    value={formik.values.country}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.country && Boolean(formik.errors.country)
                    }
                  >
                    {countryList?.map((item: any) => (
                      <Mui.MenuItem value={item?.name}>
                        {item?.name}
                      </Mui.MenuItem>
                    ))}
                  </Mui.Select>
                  <Mui.FormHelperText error={formik.touched.country}>
                    <>
                      {formik.touched.country && formik.errors.country
                        ? "select country"
                        : ""}
                    </>
                  </Mui.FormHelperText>
                </Mui.FormControl>
                <Mui.TextField
                  id="designation"
                  name="designation"
                  label="Designation"
                  value={formik.values.designation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.designation &&
                    Boolean(formik.errors.designation)
                  }
                  helperText={
                    formik.touched.designation && formik.errors.designation
                  }
                />
              </Mui.Stack>
              <Mui.Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
              >
                Upload Your Resume
                <VisuallyHiddenInput
                  type="file"
                  onChange={(e) => UploadResume(e)}
                />
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
                <Mui.Button
                  type="submit"
                  sx={{ color: "black" }}
                  disabled={resumeFile === ""}
                >
                  Submit
                </Mui.Button>
              </Mui.Stack>
            </Mui.Stack>
          </Mui.Stack>
        </form>
      </Mui.Grid>
      <Common.Footer />
    </Mui.Grid>
  );
};
