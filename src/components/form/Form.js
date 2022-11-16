import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import EmailIcon from "@mui/icons-material/Email";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import schema from "./validationRules";
import FormField from "./FormField";
import DatePickerField from "./DatePickerField";

const defaultValues = {
    firstName: "",
    middle: "",
    lastName: "",
    suffix: "",
    dateOfBirth: null,
    email: "",
    phone: "",
    redressNumber: "",
    travellerNumber: "",
};

const Form = () => {
    const {handleSubmit, control, reset} = useForm({resolver: yupResolver(schema)});

    const onSubmit = (data) => console.log(data);

    const handleReset = () => reset(defaultValues);

    return (<form name="Passenger information" noValidate onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h4" sx={{mt: 4.5, mb: 3}}>Passenger 1 (Adult)</Typography>
            <Grid container spacing={3} sx={{maxWidth: 648, mb: 6}}>
                <Grid item lg={4}>
                    <FormField
                        name="firstName"
                        type="text"
                        control={control}
                        label="First name*"/>
                </Grid>
                <Grid item lg={4}>
                    <FormField
                        name="middle"
                        type="text"
                        control={control}
                        label="Middle"/>
                </Grid>
                <Grid item lg={4}>
                    <FormField
                        name="lastName"
                        type="text"
                        control={control}
                        label="Last name*"/>
                </Grid>
                <Grid item lg={4}>
                    <FormField
                        name="suffix"
                        type="text"
                        control={control}
                        label="Suffix"/>
                </Grid>
                <Grid item>
                    <DatePickerField
                        name="dateOfBirth"
                        control={control}
                        label="Date of birth*"/>
                </Grid>
            </Grid>
            <Grid container spacing={3} sx={{maxWidth: 624,}}>
                <Grid item xs={6}>
                    <FormField
                        name="email"
                        type="email"
                        control={control}
                        label="Email address*"/>
                </Grid>
                <Grid item xs={6}>
                    <FormField
                        name="phone"
                        type="tel"
                        control={control}
                        label="Phone number*"/>
                </Grid>
                <Grid item xs={6}>
                    <FormField
                        name="redressNumber"
                        type="text"
                        control={control}
                        label="Redress number"/>
                </Grid>
                <Grid item xs={6}>
                    <FormField
                        name="travellerNumber"
                        type="text"
                        control={control}
                        label="Known traveller number*"/>
                </Grid>
            </Grid>
            <Box mt={4}>
                <Button sx={{mr: 2}} type="submit" variant="contained" size="large"
                        startIcon={<EmailIcon/>}>Submit</Button>
                <Button type="button" onClick={handleReset} variant="outlined" size="large"
                        startIcon={<RestartAltIcon/>}>Reset</Button>
            </Box>
        </form>);
};

export default Form;