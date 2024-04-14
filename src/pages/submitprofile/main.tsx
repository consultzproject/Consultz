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
      roles:"",
      location: "",
      resume_url: "",
      
    },
    validationSchema: validation.Submit,
    onSubmit: (values) => {
      handleSubmits(values);
    },
  });
  const UploadResume = (val: any) => {
    const formData = new FormData();
    formData.append("selectedFile", val);
    const options = {
      url: "https://seyalbackend-5jdw.onrender.com/v1/user/upload",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: {
        file: val?.target.files[0],
      },
    };
    Axios(options).then((res: any) => {
      if (res?.data?.error) {
        alert("Error");
      } else {
        setResumeFile(res?.data);
        alert("Profile Submitted Successfully");
        // formik.resetForm();
      }
    });
  };
  const currentDate = new Date(Date.now()); // Create a Date object representing the current date and time

  const date = currentDate.getDate().toString().padStart(2, '0'); // Get the day of the month (1-31) and convert it to a two-digit string
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Get the month (0-11) and convert it to a two-digit string
  const year = currentDate.getFullYear(); //

  const handleSubmits = (values: any) => {
        const options = {
      url: "https://seyalbackend-5jdw.onrender.com/v1/user/resume",
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
        roles: values.roles,
        location: values.location,
        resume_url: resumeFile,
        createdDate:`${year}-${month}-${date}`
      },
    };
    Axios(options).then((res: any) => {
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
                    Technology
                  </Mui.InputLabel>
                  <Mui.Select
                    id="designation"
                    name="designation"
                    label="Technology"
                    value={formik.values.designation}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.designation && Boolean(formik.errors.designation)}
                  >
                    <Mui.MenuItem value="Java">Java</Mui.MenuItem>
                    <Mui.MenuItem value="Dot Net">Dotnet</Mui.MenuItem>
                    <Mui.MenuItem value="Testing"> Testing</Mui.MenuItem>
                    <Mui.MenuItem value="Devops">Devops</Mui.MenuItem>
                    <Mui.MenuItem value="Front-end">Front-end</Mui.MenuItem>
                    <Mui.MenuItem value="SAP"> SAP</Mui.MenuItem>
                    <Mui.MenuItem value="SAP"> Salesforce</Mui.MenuItem>
                    <Mui.MenuItem value="Python"> Python</Mui.MenuItem>
                    {/* <Mui.MenuItem value="Business Analyst">
                      {" "}
                      Business Analyst
                    </Mui.MenuItem> */}
                    <Mui.MenuItem value=" M365/SharePoint/Powerplatform">
                      {" "}
                      M365/SharePoint/Powerplatform
                    </Mui.MenuItem>
                    <Mui.MenuItem value="Others"> Others</Mui.MenuItem>
                  </Mui.Select>
                  <Mui.FormHelperText error={formik.touched.designation}>
                    <>
                      {formik.touched.designation && formik.errors.designation
                        ? "Select Techology"
                        : ""}
                    </>
                  </Mui.FormHelperText>
                </Mui.FormControl>
                <Mui.FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Mui.InputLabel id="demo-simple-select-helper-label">
                    Roles
                  </Mui.InputLabel>
                  <Mui.Select
                    id="roles"
                    name="roles"
                    label="Roles"
                    value={formik.values.roles}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.roles && Boolean(formik.errors.roles)}
                  >
                    <Mui.MenuItem value="Developer">Developer</Mui.MenuItem>
                    <Mui.MenuItem value="Tester">Tester</Mui.MenuItem>
                    <Mui.MenuItem value="DevOps Engineer">DevOps Engineer</Mui.MenuItem>
                    <Mui.MenuItem value="Scrum Master">Scrum Master</Mui.MenuItem>
                    <Mui.MenuItem value="Product Owner"> Product Owner</Mui.MenuItem>
                    <Mui.MenuItem value="Project manager"> Project manager</Mui.MenuItem>
                    <Mui.MenuItem value="Bussiness Analyst"> Bussiness Analyst</Mui.MenuItem>
                    <Mui.MenuItem value=" Architect">
                     
                      Architect
                    </Mui.MenuItem>
                    <Mui.MenuItem value="Data scientist/Analyst"> Data scientist/Analyst</Mui.MenuItem>
                    <Mui.MenuItem value="Others"> Others</Mui.MenuItem>
                  </Mui.Select>
                  <Mui.FormHelperText error={formik.touched.roles}>
                    <>
                      {formik.touched.roles && formik.errors.roles
                        ? "Select Roles"
                        : ""}
                    </>
                  </Mui.FormHelperText>
                </Mui.FormControl>
                <Mui.FormControl sx={{ m: 1, minWidth: 120 }}>
                  <Mui.InputLabel id="demo-simple-select-helper-label">
                    Current Location
                  </Mui.InputLabel>
                  <Mui.Select
                    id="location"
                    name="location"
                    label="Country"
                    value={formik.values.location}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={
                      formik.touched.location && Boolean(formik.errors.location)
                    }
                  >
                    {countryList?.map((item: any) => (
                      <Mui.MenuItem value={item?.name}>
                        {item?.name}
                      </Mui.MenuItem>
                    ))}
                  </Mui.Select>
                  <Mui.FormHelperText error={formik.touched.location}>
                    <>
                      {formik.touched.location && formik.errors.location
                        ? "Select Country"
                        : ""}
                    </>
                  </Mui.FormHelperText>
                </Mui.FormControl>
                {/* <Mui.TextField
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
                /> */}
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
