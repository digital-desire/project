import React from 'react';
import { Statystyka } from './Klikanie.styled';
import Grid from '@mui/material/Grid';
import {  StatystykaIkona, StatystykaLiczba, StatystykaNapis, StatystykaNazwa } from '../Panel/Panel.styled';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';



export default function KlikanieStat() {
  return (
    <div>
        <Statystyka><Grid container spacing={2}><Grid item xs={5}><StatystykaIkona><VisibilityOutlinedIcon fontSize="large"/></StatystykaIkona></Grid>
   <Grid item xs={7}>
       <StatystykaNapis>
       <StatystykaLiczba>1234</StatystykaLiczba>
       <StatystykaNazwa>Wyświetlenia</StatystykaNazwa>
       </StatystykaNapis></Grid></Grid></Statystyka>
    </div>
  )
}
