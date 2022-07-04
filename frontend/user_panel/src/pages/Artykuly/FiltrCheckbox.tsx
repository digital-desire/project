import React from 'react';
import { pink, yellow, grey, deepPurple } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from "@mui/material";


function RekordChceckbox({checkboxlabel}:{checkboxlabel:string}) {
    return (
        <FormControlLabel
            control={<Checkbox  sx={{

                Color: deepPurple[900],

                '&.Mui-checked': {
                    color: deepPurple[600],
                },
            }} />} label={<Typography fontSize="14px" >
{checkboxlabel}
            </Typography>} />
    );
}


export default function FiltrCheckbox() {
    return (
        <>
            <FormGroup  >
                <RekordChceckbox checkboxlabel={"Tematy"} />
                <RekordChceckbox checkboxlabel={"Bańki"}/>
                <RekordChceckbox checkboxlabel={"Uzytkownicy"}/>
                <RekordChceckbox checkboxlabel={"Artykuły"}/>



            </FormGroup>
        </>
    );
}

