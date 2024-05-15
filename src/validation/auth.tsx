import * as yup from "yup";

export const Contact = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
      "Enter a valid email"
    ), // Regex validation for email
  message: yup.string().required("Enter your message"),
  mobileno: yup
  .string()
  .matches(/^[0-9]+$/, "Mobile must contain only numbers")
  .min(10, "Mobile must be 10 characters")
  .max(10, "Mobile must be 10 characters")
  .required("Mobile is required"),
});

export const Submit = yup.object({
  name: yup.string().required("Name is required"),
  designation: yup.string().required("designation is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
      "Enter a valid email"
    ), // Regex validation for email
  mobile: yup
  .string()
  .matches(/^[0-9]+$/, "Mobile must contain only numbers")
  .min(10, "Mobile must be 10 characters")
  .max(10, "Mobile must be 10 characters")
  .required("Mobile is required"),
  location: yup.string().required(),
  roles: yup.string().required(),
  exp: yup.string().required(),

});
