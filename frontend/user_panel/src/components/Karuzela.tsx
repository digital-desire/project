import React from 'react';
import Grid from '@mui/material/Grid';
import { GlownyKontener, LewyKontener, PrawyKontener, MalaKarta, DuzaKarta } from './styles/Karuzela.styled';
import { Typography } from '@mui/material';
import { KartaTytul } from './styles/Karuzela.styled';
import Link from '@mui/material/Link';







function Karuzela() {
    const nazwy = ["Podatki","Zdrowie","Ekonomia","Polityka"];
    const nazwyLista = nazwy.map((nazwa) => 
    <Grid item xs={6}>
                        <MalaKarta href="/banka">
                            <KartaTytul>{nazwa}</KartaTytul>
                        </MalaKarta>
                    </Grid>);
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}><GlownyKontener>
                
                <Grid item xs={6}><LewyKontener href="/banka">
                <DuzaKarta 
                    >
                        <Typography
                            marginLeft="30px"
                            marginBottom="20px"
                            fontFamily="Montserrat, sans-serif"
                            fontStyle="normal"
                            fontWeight="600"
                            fontSize="30px"
                            color="#ffffff"
                            


                        >Nazwa jakiejś bańkii</Typography></DuzaKarta>
                </LewyKontener></Grid>
                <Grid item xs={6} ><PrawyKontener>

                    {nazwyLista}
                    {/* <Grid item xs={6}>
                        <MalaKarta href="/banka">
                            <KartaTytul>Jakś nagłówek</KartaTytul>
                        </MalaKarta>
                    </Grid>
                    <Grid item xs={6}>
                        <MalaKarta href="/banka">
                            <KartaTytul>Jakś nagłówek</KartaTytul>
                        </MalaKarta>
                    </Grid>
                    <Grid item xs={6}>
                        <MalaKarta href="/banka">
                            <KartaTytul>Jakś nagłówek</KartaTytul>
                        </MalaKarta>
                    </Grid> */}



                </PrawyKontener></Grid>
            </GlownyKontener>

            </Grid>

        </Grid>
    )
}

export default Karuzela