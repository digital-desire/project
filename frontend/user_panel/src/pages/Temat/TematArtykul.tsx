import React from 'react'
import { Grid } from '@mui/material'
import {ArtykulTagi, ArtykulCaly, ArtykulGrafika, ArtykulTytul, ArtykulZrodlo, ArtykulTag } from './Temat.styled'




function TematArtykul({tytul, zrodlo, data, zgodnosc}) {
  return (
    <>
    
    <ArtykulCaly>
    <Grid container spacing={2}>
        <Grid item xs={1}>
        <ArtykulGrafika/>
        </Grid>
        <Grid item xs={3}>
        <ArtykulTytul>{tytul}</ArtykulTytul>
        </Grid>
        <Grid item xs={2}>
        <ArtykulZrodlo>{zrodlo}</ArtykulZrodlo>
        </Grid>
        <Grid item xs={2}>
        <ArtykulZrodlo>{data}</ArtykulZrodlo>
        </Grid>
        <Grid item xs={2}>
            <ArtykulTagi>
        <ArtykulTag>Polska</ArtykulTag><ArtykulTag>Euro</ArtykulTag>
        </ArtykulTagi>
        </Grid>
        <Grid item xs={2}>
        <ArtykulZrodlo>{zgodnosc}</ArtykulZrodlo>
        </Grid>
        </Grid>

    </ArtykulCaly>
    
    
    </>
  )
}

export default TematArtykul