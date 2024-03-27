import * as yup from "yup";
export const schemaSigning = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Enter valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(4, "password must be 4 length"),
});

export const schemaSignup = yup.object({
  username: yup
    .string()
    .required("username is required")
    .min(4, "username must be 4 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Enter valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$',
      'Minimum eight characters  at least one letter and one number'
    ),
    confirmPassword:yup.string().required('Confirm password is required').oneOf([yup.ref('password'), null], 'Passwords does not match'),
});
