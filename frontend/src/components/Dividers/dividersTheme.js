import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const dividersTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat', 
    fontSize: '16px',
    fontWeight: '600',
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

export default dividersTheme;