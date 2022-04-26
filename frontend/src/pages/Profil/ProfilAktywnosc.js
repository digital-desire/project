import React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import KeyboardDoubleArrowDownOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowDownOutlined';
import KeyboardDoubleArrowUpOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowUpOutlined';
import { ProfilAktywnoscKontener,LewyButton, KomentarzUzytkownika, NickUzytkownika, Miniprofilowe, LiniaDluga, LeadArtykulu, TytulArtykulu, ZdjecieArtykulu, PunktyAktywnosc, PrawyButton, AktywnoscUsera } from './Profil.styled';


export default function ProfilAktywnosc() {
const [count, setCount] = useState(192)
const [count2, setCount2] = useState(21)
  return (
    <div>
      
          <ProfilAktywnoscKontener>
          <Grid container spacing={1}>
        <Grid item xs={10}>
            <AktywnoscUsera>Useer123 skomentowała artykuł</AktywnoscUsera>
         </Grid>
        <Grid item xs={2}><PunktyAktywnosc>
          <LewyButton onClick={() => setCount(count - 1)}><KeyboardDoubleArrowDownOutlinedIcon fontSize="large" style={{fill: "grey"}}/></LewyButton>
          {count}
          <PrawyButton onClick={() => setCount(count + 1)}><KeyboardDoubleArrowUpOutlinedIcon fontSize="large" style={{fill: "purple"}}/></PrawyButton>
          </PunktyAktywnosc></Grid>
          <Grid item xs={2}>
            <ZdjecieArtykulu/>
         </Grid>
         <Grid item xs={10}>
         <TytulArtykulu>Tytuł skomentowanego artykułu</TytulArtykulu>
         <LeadArtykulu>"ci velit, ius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, </LeadArtykulu>
         </Grid>
         
         <Grid item xs={12}><LiniaDluga></LiniaDluga></Grid>
         <Grid item xs={1}><Miniprofilowe></Miniprofilowe></Grid>
         <Grid item xs={11}><NickUzytkownika>Useer123</NickUzytkownika></Grid>
         <Grid item xs={12}><KomentarzUzytkownika>ci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illu   </KomentarzUzytkownika></Grid>

         
        
      </Grid> </ProfilAktywnoscKontener>
      <ProfilAktywnoscKontener>
          <Grid container spacing={1}>
        <Grid item xs={10}>
            <AktywnoscUsera>Useer123 dodała artykuł do Bańki</AktywnoscUsera>
         </Grid>
        <Grid item xs={2}><PunktyAktywnosc>
          <LewyButton onClick={() => setCount2(count2 - 1)}><KeyboardDoubleArrowDownOutlinedIcon fontSize="large" style={{fill: "grey"}}/></LewyButton>
          {count2}
          <PrawyButton onClick={() => setCount2(count2 + 1)}><KeyboardDoubleArrowUpOutlinedIcon fontSize="large" style={{fill: "purple"}}/></PrawyButton>
          </PunktyAktywnosc></Grid>
          <Grid item xs={2}>
            <ZdjecieArtykulu/>
         </Grid>
         <Grid item xs={10}>
         <TytulArtykulu>Tytuł artykułu dodanego przez usera</TytulArtykulu>
         <LeadArtykulu>"ci velit, ius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, </LeadArtykulu>
         </Grid>
         
         
         
        
      </Grid> </ProfilAktywnoscKontener>
      </div>
  )
}
