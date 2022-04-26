import React from 'react';
import styled from 'styled-components';
import { TagTest } from './styles/Tematy.styled';
import { TematKontener } from './styles/Tematy.styled';
import { Grid } from '@mui/material';
import TematKarta from './TematKarta';

const data = [
    {
        dostArt: 5,
        komentarze: 45,
        aktUzy: 34,
        tytul: "Nagłówekj artykułu który tutaj będzie",
    }, {
        dostArt: 12,
        komentarze: 2345,
        aktUzy: 334,
        tytul: "Szwajcarzy podjęli decyzję. Putin odcięty",
    },
    {
        dostArt: 34,
        komentarze: 543,
        aktUzy: 98,
        tytul: "Nie mieli szans. Śmierć trzech 22-latków",
    },
    {
        dostArt: 12,
        komentarze: 123,
        aktUzy: 9,
        tytul: "Polacy też tu trafiają. To piekło na ziemi",
    },
    {
        dostArt: 65,
        komentarze: 6544,
        aktUzy: 89,
        tytul: "Zapaść systemu opieki w Wielkiej Brytanii",
    },
    {
        dostArt: 132,
        komentarze: 123,
        aktUzy: 9,
        tytul: "Dilerzy i prostytutki. Oto dzielnica cudów",
    },
    {
        dostArt: 5,
        komentarze: 45,
        aktUzy: 34,
        tytul: "Polski junior zawstydził gwiazdy",
    },
    {
        dostArt: 12,
        komentarze: 2345,
        aktUzy: 334,
        tytul: "Już się z tym nie kryją. Nowa broń Rosji",
    },
]
export default function Tematy() {
    return (
        <Grid container spacing={1}>
            {data.map(element => {
                return(<Grid item xs={4}>

                    <TematKontener>
                        <TagTest><TematKarta dostArt={element.dostArt} komentarze={element.komentarze} aktUzy={element.aktUzy} tytul={element.tytul} /></TagTest>
                    </TematKontener>
                </Grid>)
            })}

            
            {/* <Grid item xs={4}>

                <TematKontener>
                    <TagTest><TematKarta dostArt={5} komentarze={45} aktUzy={34} tytul={"Nagłówekj artykułu"}/></TagTest>
                </TematKontener>
            </Grid>
            <Grid item xs={4}>

                <TematKontener>
                    <TagTest><TematKarta dostArt={5} komentarze={45} aktUzy={34} tytul={"Nagłówekj artykułu"}/></TagTest>
                </TematKontener>
                
            </Grid>
            <Grid item xs={4}>

<TematKontener>
    <TagTest><TematKarta dostArt={5} komentarze={45} aktUzy={34} tytul={"Nagłówekj artykułu"}/></TagTest>
</TematKontener>
</Grid>
<Grid item xs={4}>

<TematKontener>
    <TagTest><TematKarta dostArt={5} komentarze={45} aktUzy={34} tytul={"Nagłówekj artykułu"}/></TagTest>
</TematKontener>
</Grid>
<Grid item xs={4}>

<TematKontener>
    <TagTest><TematKarta dostArt={5} komentarze={45} aktUzy={34} tytul={"Nagłówekj artykułu"} /></TagTest>
</TematKontener>

</Grid>
<Grid item xs={4}>

<TematKontener>
    <TagTest><TematKarta dostArt={5} komentarze={45} aktUzy={34} tytul={"Nagłówekj artykułu"}/></TagTest>
</TematKontener>
</Grid>
<Grid item xs={4}>

<TematKontener>
    <TagTest><TematKarta dostArt={5} komentarze={45} aktUzy={34} tytul={"Nagłówekj artykułu"}/></TagTest>
</TematKontener>
</Grid>
<Grid item xs={4}>

<TematKontener>
    <TagTest><TematKarta dostArt={5} komentarze={45} aktUzy={34} tytul={"Nagłówekj artykułu"} /></TagTest>
</TematKontener>

</Grid> */}


        </Grid>
    )
}
