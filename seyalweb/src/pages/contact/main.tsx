import * as Mui from "@mui/material";
import Image1 from "src/assets/contactus/Contact us.svg";
import * as Common from "src/pages/common";
import Axios from "axios";
import { useFormik } from "formik";
import * as validation from "src/validation";
import { useMediaQuery } from "@mui/material";

export const Main = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobileno: "",
      message: "",
    },
    validationSchema: validation.Contact,
    onSubmit: (values) => {
      handleSubmits(values);
    },
  });

  const handleSubmits = (values: any) => {
    const options = {
      url: "https://api.seyal.eu:8080/v1/user/contact",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        name: values.name,
        email: values.email,
        mobile: values.mobileno,
        message: values.message,
      },
    };
    Axios(options).then((res: any) => {
      if (res?.data?.error) {
        alert("Error");
      } else {
        alert("Contact Details sent Successfully");
        formik.resetForm();
      }

      // handler({
      //   message: res?.data?.status || "Login successful",
      //   variant: res?.data?.error ? "success" : "error",
      //   min: true,
      // });
    });
  };
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Mui.Stack>
      <Mui.Stack sx={{ height: "100px", background: "#4a4a4a" }} />
      <Mui.Stack position="relative">
        <Mui.Stack height={isMobile ? "100%" : 400}>
          <img
            src={Image1}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              filter: "brightness(50%)",
            }}
          />
        </Mui.Stack>
        <Mui.Stack
          sx={{
            position: "absolute",
            top: "0",
            height: "80vh",
            overflow: { xs: "visible", md: "auto" },
            width: "100%",
          }}
        >
          <Mui.Stack pt={50}></Mui.Stack>
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
                      +32465957230
                    </Mui.Typography>
                  </Mui.Stack>
                </Mui.Stack>
              </Mui.Grid>
              <Mui.Grid item xs={12} md={6}>
                <form onSubmit={formik.handleSubmit}>
                  <Mui.Stack
                    sx={{ paddingLeft: { xs: 0, md: "100px" } }}
                    spacing={2}
                  >
                    <Mui.TextField
                      fullWidth
                      id="name"
                      name="name"
                      label="Name"
                      variant="standard"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                    <Mui.TextField
                      fullWidth
                      variant="standard"
                      id="email"
                      name="email"
                      label="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                    <Mui.TextField
                      fullWidth
                      id="mobileno"
                      variant="standard"
                      name="mobileno"
                      label="Mobile No"
                      value={formik.values.mobileno}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.mobileno &&
                        Boolean(formik.errors.mobileno)
                      }
                      helperText={
                        formik.touched.mobileno && formik.errors.mobileno
                      }
                    />
                    <Mui.TextField
                      variant="standard"
                      fullWidth
                      id="message"
                      name="message"
                      label="Message"
                      rows={6}
                      multiline
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={
                        formik.touched.message && Boolean(formik.errors.message)
                      }
                      helperText={
                        formik.touched.message && formik.errors.message
                      }
                    />
                    <Mui.Button
                      variant="contained"
                      type="submit"
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
                </form>
              </Mui.Grid>
            </Mui.Grid>
          </Mui.Stack>
          <Common.Footer />
        </Mui.Stack>
      </Mui.Stack>
    </Mui.Stack>
  );
};
