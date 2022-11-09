import * as React from "react";
import Typography from "@mui/material/Typography";


const Header = () => {
    return (
        <>
            <Typography variant="h3" sx={{mb: "16px", mt: 2}}>Passenger information</Typography>
            <Typography variant="subtitle1">Enter the required information for each traveler and be sure that it
                exactly matches the government-issued ID presented at the airport.</Typography>
        </>
    );
};

export default Header;