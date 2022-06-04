import React from 'react';
import './App.css';
import { createTheme, colors, ThemeProvider, ThemeOptions } from '@mui/material';
import Header from './components/Header';
import Artykuly from './pages/Artykuly/Artykuly';
import { Box } from '@mui/material';

const theme = createTheme({
  palette: {
    
    primary: {
      main: '#ffffff',
      light: '#ffffff',
    },
    secondary: {
      main: '#9c60ff',
    },
    background: {
      default: '#F3F4F6',
      paper: '#ffffff',
    },
    text: {
      primary: '#727272',
      secondary: 'rgba(0,0,0,0.7)',
      disabled: 'rgba(193,193,193,0.5)',
  
    },
    error: {
      main: '#ee6352',
    },
    info: {
      main: '#2956ff',
    },
  },
  typography: {
    fontFamily: '"Montserrat"',
    fontWeightLight: 200,
    fontWeightMedium: 600,
    fontWeightBold: 900,
  },
})


function App() {
  return (
  
<ThemeProvider theme={theme}>
<Box
sx={{
  height: '100vh',
  width: '100vw',
  bgcolor: 'background.default'}}
><Header/></Box>
</ThemeProvider>
    
  //   <ThemeProvider theme={theme}>

  //     <>
  //       <GlobalStyles />

  //       <Header />

  //       <ContainerStyl>
  //       <BrowserRouter>
  //   <Routes>
  //     <Route path={HeaderURL} element={<PageBody />} />
  //     <Route path="/artykuly" element={<Artykuly />} />
  //     <Route path="/banka" element={<Banka />} />
  //     <Route path="/temat" element={<Temat />} />
  //     <Route path="/panel" element={<Panel />} />
    
  //     <Route path="/profil" element={<Profil />} />

  //   </Routes>
  // </BrowserRouter>

         


  //       </ContainerStyl>
  //     </>

  //   </ThemeProvider>
    




  );
}

export default App;
