import * as React from "react";
import PropTypes from "prop-types";
import {Controller} from "react-hook-form";
import TextField from "@mui/material/TextField";

const FormField = ({control, name, label, type}) => {
    return (
        <Controller control={control} name={name} render={({field, fieldState: {error}}) => (<TextField
        {...field}
        id="outlined-basic"
        label={label}
        type={type}
        variant="outlined"
        error={!!error}
        helperText={error?.message}
        fullWidth/>)}
    />);
};

FormField.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
};

export default FormField;