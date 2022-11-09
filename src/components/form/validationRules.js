import * as yup from "yup";

const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;

const schema = yup.object({
    firstName: yup.string().trim().required("Firstname is required").min(3, "Must be at least 3 characters"),
    lastName: yup.string().trim().required("Lastname is required").min(3, "Must be at least 3 characters"),
    dateOfBirth: yup.date().nullable().required("Date of Birth is required"),
    email: yup.string().email("Email must be valid").required("Email is required"),
    phone: yup.string().required("Phone is required").matches(phoneRegExp, "Phone number is not valid"),
    travellerNumber: yup.number().required("Traveller Number is required").typeError("Must be numbers only")
});

export default schema;