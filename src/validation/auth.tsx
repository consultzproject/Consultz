import * as yup from "yup";

export const Contact = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  message: yup.string().required("Enter your message"),
  mobileno: yup
    .number()
    .min(5)
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required("A phone number is required"),
});

export const Submit = yup.object({
  name: yup.string().required("Name is required"),
  designation: yup.string().required("designation is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  mobile: yup
    .number()
    .min(5)
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required("A phone number is required"),
  location: yup.string().required(),
  roles: yup.string().required(),

});
