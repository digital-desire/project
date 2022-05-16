import React from 'react';
import { Margines, TytulStyled } from '../Artykuly/Artykuly.styled';
import { Divider } from '../Artykuly/Artykuly.styled';
import TematNaglowki from './TematNaglowki';
import { Grid } from '@mui/material';
import TematArtykul from './TematArtykul';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({

  typography: {
   
    fontSize: 12,
  },
});
const tresc = [
  {
    tytul: "200-kilowy dzik wpadł do szamba",
    zrodlo: "xxtentacion",
    data: "29.07.2020",
    zgodnosc: "lewica",
  },
  {
    tytul: "Coraz mniej Stoczni Gdańskiej",
    zrodlo: "FilipSpringer",
    data: "2.03.2022",
    zgodnosc: "lewica",
  },
  {
    tytul: "Pustynia nikogo nie oszczędza",
    zrodlo: "AriGrani",
    data: "14.04.2022",
    zgodnosc: "prawica",
  },
  {
    tytul: "200-kilowy dzik wpadł do szamba",
    zrodlo: "xxtentacion",
    data: "29.07.2020",
    zgodnosc: "lewica",
  },
  {
    tytul: "Coraz mniej Stoczni Gdańskiej",
    zrodlo: "FilipSpringer",
    data: "2.03.2022",
    zgodnosc: "lewica",
  },
  {
    tytul: "Pustynia nikogo nie oszczędza",
    zrodlo: "AriGrani",
    data: "14.04.2022",
    zgodnosc: "prawica",
  },
]

function Temat() {
  return (
    <>
    <TytulStyled
            >Temat/wydarzenie/kategoria</TytulStyled>
            <Divider />
            <Margines />
            <ThemeProvider theme={theme}>
            <TematNaglowki/>
            </ThemeProvider>
            <Margines />
            {tresc.map(element => {
              return (
                <TematArtykul tytul={element.tytul} zrodlo={element.zrodlo} data={element.data} zgodnosc={element.zgodnosc}></TematArtykul>
              )
            })}
               
                
               

    
    </>
  );
}

export default Temat