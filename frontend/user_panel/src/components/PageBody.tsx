import styled from "styled-components";
import { NaglowekStyled } from "./styles/Body.styled";
import Lokalne from "./Lokalne";
import Grid from '@mui/material/Grid';

import Card from "./Card";
import Tematy from "./Tematy";
import { Wyrownanie } from "./styles/Body.styled";
import Karuzela from "./Karuzela";


export default function PageBody() {
    return (

        <>
        <NaglowekStyled>Banki Informacyjne</NaglowekStyled>
          

          <Wyrownanie><Karuzela/></Wyrownanie>
        <Grid container spacing={1}>
            <Grid item xs={4}>
                <NaglowekStyled>Lokalne - Wrocław</NaglowekStyled>
                <Lokalne />
                <NaglowekStyled>Lokalne - Dolnośląskie</NaglowekStyled>
                <Lokalne />
                <NaglowekStyled>Lokalne - Polska</NaglowekStyled>
                <Lokalne />
            </Grid>
            <Grid item xs={8}>
            <NaglowekStyled>Popularne Artykuły</NaglowekStyled>
            <Tematy />

            </Grid>
        </Grid>
        </>
    );
}
