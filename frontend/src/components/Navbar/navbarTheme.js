import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const navbarTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat', 
  },
  palette: {
    primary: {
      main: grey[50],
    },
    secondary: {
      main: grey[900],
    },
  
  },
});

export default navbarTheme