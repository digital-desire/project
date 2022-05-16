import React from 'react';
import Grid from '@mui/material/Grid';
import ProfilUser from './ProfilUser';
import ProfilAktywnosc from './ProfilAktywnosc';
import UlubioneTematy from './UlubioneTematy';
import { Margines } from '../Artykuly/Artykuly.styled';
import { NaglowekStyled } from '../../components/styles/Body.styled';



export default function Profil() {
    return (
        <div>
            <Margines />
            <Margines />
            <Margines />
            <Margines />
            <Grid container spacing={1}>
                <Grid item xs={4}><ProfilUser></ProfilUser>
                    <NaglowekStyled>Ulubione tematy</NaglowekStyled>
                    <UlubioneTematy /></Grid>
            
            <Grid item xs={8}>
                <ProfilAktywnosc/>

                
            </Grid></Grid>

   
    </div >
  )
}
