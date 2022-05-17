import React from 'react';
import Grid from '@mui/material/Grid';
import { Statystyka } from './Panel.styled';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import { StatystykaButton,Legenda, CalaLegenda, LegendaNazwa, WykresKolowy, Wykres, StatystykaIkona, StatystykaLiczba, StatystykaNapis, StatystykaNazwa } from './Panel.styled';
import { Margines } from '../Artykuly/Artykuly.styled';
import { Modal } from '@mui/material';
import Box from '@mui/material/Box';
import Portal from '@mui/material/Portal';
import { useState } from 'react';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
export default function PanelStatystyki() {


  
 

  return (
    <>
    <Grid container spacing={2}>
  <Grid item xs={3}>
   <Statystyka><Grid item xs={5}><StatystykaIkona><VisibilityOutlinedIcon fontSize="large"/></StatystykaIkona></Grid>
   <Grid item xs={7}>
       <StatystykaNapis>
       <StatystykaLiczba>1234</StatystykaLiczba>
       <StatystykaNazwa>Wyświetlenia</StatystykaNazwa>
       </StatystykaNapis></Grid>
   </Statystyka>
  </Grid>
  <Grid item xs={3}>
  <Statystyka><Grid item xs={5}><StatystykaIkona><PermIdentityOutlinedIcon fontSize="large"/></StatystykaIkona></Grid>
   <Grid item xs={7}>
       <StatystykaNapis>
       <StatystykaLiczba>567</StatystykaLiczba>
       <StatystykaNazwa>uytkowników</StatystykaNazwa>
       </StatystykaNapis></Grid>
   </Statystyka>
  </Grid>
  <Grid item xs={3}>
  <Statystyka><Grid item xs={5}><StatystykaIkona><ChatOutlinedIcon fontSize="large"/></StatystykaIkona></Grid>
   <Grid item xs={7}>
       <StatystykaNapis>
       <StatystykaLiczba>21</StatystykaLiczba>
       <StatystykaNazwa>Komentarzy</StatystykaNazwa>
       </StatystykaNapis></Grid></Statystyka>
  </Grid>
  <Grid item xs={3}>
  <Statystyka><Grid item xs={5}><StatystykaIkona><ArticleOutlinedIcon fontSize="large"/></StatystykaIkona></Grid>
   <Grid item xs={7}>
       <StatystykaNapis>
       <StatystykaLiczba>6789</StatystykaLiczba>
       <StatystykaNazwa>Artykuły</StatystykaNazwa>
       </StatystykaNapis></Grid></Statystyka>
  </Grid>
</Grid>

<Margines/>

<Grid container spacing={2}>

<Grid item xs={5}><Wykres>
  <Grid container spacing={1}>
    <Grid item xs={1}></Grid>
    <Grid item xs={11}><StatystykaLiczba>Wykres</StatystykaLiczba></Grid>
    <Grid item xs={1}></Grid>
    <Grid item xs={5}><WykresKolowy /></Grid>
    <Grid item xs={6}><CalaLegenda>
      <Grid container spacing={2}>
      
      <Grid item xs={6}><Legenda><FiberManualRecordIcon fontSize="small"/><LegendaNazwa>Stat</LegendaNazwa></Legenda></Grid>
      <Grid item xs={6}><Legenda><FiberManualRecordIcon fontSize="small"/><LegendaNazwa>Stat</LegendaNazwa></Legenda></Grid>
      <Grid item xs={6}><Legenda><FiberManualRecordIcon fontSize="small"/><LegendaNazwa>Stat</LegendaNazwa></Legenda></Grid>
      <Grid item xs={6}><Legenda><FiberManualRecordIcon fontSize="small"/><LegendaNazwa>Stat</LegendaNazwa></Legenda></Grid>
      <Grid item xs={6}><Legenda><FiberManualRecordIcon fontSize="small"/><LegendaNazwa>Stat</LegendaNazwa></Legenda></Grid>
      <Grid item xs={6}><Legenda><FiberManualRecordIcon fontSize="small"/><LegendaNazwa>Stat</LegendaNazwa></Legenda></Grid>
      </Grid>
      </CalaLegenda>
    </Grid>
  </Grid>
  </Wykres></Grid>
  
  <Grid item xs={7}><Wykres> <Grid container spacing={1}>
    <Grid item xs={1}></Grid>
    <Grid item xs={11}><StatystykaLiczba>Wykres</StatystykaLiczba></Grid>
    <Grid item xs={1}></Grid></Grid></Wykres></Grid>
</Grid>
    </>
  );
}
