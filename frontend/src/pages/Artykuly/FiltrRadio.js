import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

function RekordRadio({radiolabel}) {
    return (
        <FormControlLabel 
            control={<Radio  sx={{

                Color: deepPurple[900],

                '&.Mui-checked': {
                    color: deepPurple[600],
                },
            }} />} label={<Typography fontSize="14px" fontFamily="Montserrat, sans-serif">
{radiolabel}
            </Typography>} />
    );
}


export default function FiltrRadio() {
    return (
        <>
            <RadioGroup  >
                <RekordRadio  radiolabel={"Tematy"} />
                <RekordRadio radiolabel={"Bańki"}/>
                <RekordRadio radiolabel={"Uzytkownicy"}/>
                <RekordRadio radiolabel={"Artykuły"}/>



            </RadioGroup>
        </>
    );
}