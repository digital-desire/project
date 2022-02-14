import * as React from 'react';
import Typography from '@mui/material/Typography';
import dividersTheme from './dividersTheme';
import { ThemeProvider } from '@emotion/react';

const Title = () => {
  return (<ThemeProvider theme={dividersTheme}>
    <Typography sx={{marginLeft:"10vw", marginTop:'5vh'}}>Bańki informacyjne</Typography>
    </ThemeProvider>
  );
}

export default Title;