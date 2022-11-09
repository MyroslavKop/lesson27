import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#605DEC"
        },
    },
    typography: {
        fontFamily: "'Nunito Sans', sans-serif",
        h3: {
            fontSize: 24,
            fontWeight: 700,
            lineHeight: "33px",
            color: "#605DEC",
        },
        h4: {
            fontSize: 18,
            lineHeight: "25px",
            color: "#6E7491"
        },
        subtitle1: {
            fontSize: 18,
            lineHeight: "25px",
            color: "#7C8DB0",
        }
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    fontSize: "18px",
                    minWidth: "200px",
                    height: "48px",
                },
            }
        },
    }
});

export default theme;