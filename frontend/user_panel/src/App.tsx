import React from 'react';
import './App.css';
import { ContainerStyl } from './components/styles/ContainerStyl.styled';
import Header from './components/Header';
import GlobalStyles from './components/styles/Global';

import PageBody from './components/PageBody';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';



import Panel from './pages/Panel/Panel';
import Artykuly from './pages/Artykuly/Artykuly';
import Banka from './pages/BankaInformacyjna/Banka';
import Temat from './pages/Temat/Temat';

import Profil from './pages/Profil/Profil';


const theme = createTheme ({
  
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  
});

const HeaderURL = "/"

function App() {
  return (
    
    <ThemeProvider theme={theme}>

      <>
        <GlobalStyles />

        <Header />

        <ContainerStyl>
        <BrowserRouter>
    <Routes>
      <Route path={HeaderURL} element={<PageBody />} />
      <Route path="/artykuly" element={<Artykuly />} />
      <Route path="/banka" element={<Banka />} />
      <Route path="/temat" element={<Temat />} />
      <Route path="/panel" element={<Panel />} />
    
      <Route path="/profil" element={<Profil />} />

    </Routes>
  </BrowserRouter>

         


        </ContainerStyl>
      </>

    </ThemeProvider>
    




  );
}

export default App;
