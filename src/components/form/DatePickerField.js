import PropTypes from "prop-types";
import {Controller} from "react-hook-form";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

const DatePickerField = ({control, name, label}) => {
    return (<Controller
        defaultValue={null}
        control={control}
        name={name}
        render={({field: {...field}, fieldState}) => (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    {...field}
                    label={label}
                    renderInput={(inputProps) => (
                        <TextField
                            {...inputProps}
                            error={!!fieldState.error}
                            helperText={fieldState.error?.message || "MM/DD/YY"}
                        />)}
                />
            </LocalizationProvider>)}
    />);
};

DatePickerField.propTypes = {
    control: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

export default DatePickerField;