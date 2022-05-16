import React from 'react';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { KartaTekst } from './styles/Tematy.styled';
import { KartaIlosc } from './styles/Tematy.styled';
import { KartaNaglowek } from './styles/Tematy.styled';
import { KartaDol } from './styles/Tematy.styled';

export default function TematKarta({ dostArt, komentarze, aktUzy, tytul }: { dostArt: number, komentarze: number, aktUzy: number, tytul: string }) {
    return (
        <Card >
            <CardActionArea href="/temat">
                <CardMedia
                    component="img"
                    height="100vh"
                    image="./images/temat.jpeg"

                >

                    <Typography
                        paddingTop="45px"
                         paddingBottom="15px"
                         paddingLeft="5px"
                       paddingRight="5px"
                         marginLeft="10px"
                         color="#ffffff"
                         
                         fontFamily= "Montserrat, sans-serif"
                     fontStyle= "normal"
                     fontWeight= "500"
                     fontSize= "16px"
                    
                >{tytul}</Typography>

                </CardMedia>
                <KartaDol>

                    <KartaTekst
                    >
                        <KartaNaglowek>
                            Dostępne artykuły:
                        </KartaNaglowek>
                        <KartaIlosc>{dostArt}</KartaIlosc>

                    </KartaTekst>
                    <KartaTekst>
                        <KartaNaglowek>
                            Komentarze:
                        </KartaNaglowek>
                        <KartaIlosc>{komentarze}</KartaIlosc>

                    </KartaTekst>
                    <KartaTekst>
                        <KartaNaglowek>
                            Aktywni uytkownicy:
                        </KartaNaglowek>
                        <KartaIlosc>{aktUzy}</KartaIlosc>

                    </KartaTekst>


                </KartaDol>
            </CardActionArea>
        </Card >
    )
}
