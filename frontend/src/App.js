import React from 'react';
import './App.css';
import { ContainerStyl } from './components/styles/ContainerStyl.styled';
import Header from './components/Header';
import GlobalStyles from './components/styles/Global';
import Lokalne from './components/Lokalne';
import PageBody from './components/PageBody';
import styled from 'styled-components';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from 'react-router-dom';



import Panel from './pages/Panel/Panel';
import { Wyrownanie } from './components/styles/Body.styled';
import { NaglowekStyled } from './components/styles/Body.styled';
import Artykuly from './pages/Artykuly/Artykuly';
import Banka from './pages/BankaInformacyjna/Banka';
import Temat from './pages/Temat/Temat';
import Klikanie from './pages/Klikanie/Klikanie';
import Profil from './pages/Profil/Profil';
import Kurs from './pages/Kurs/Kurs';

const theme = createTheme ({
  colors: {
    header: '#ffffff',
   
    footer: '#003333'
  },
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
  mobile: '768px',
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
      <Route path="/klikanie" element={<Klikanie />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/kurs" element={<Kurs />} />
    </Routes>
  </BrowserRouter>

         


        </ContainerStyl>
      </>

    </ThemeProvider>
    




  );
}

export default App;
