import React from 'react';
import { ProfilUserStyl, WyslijWiadomosc, UzytkownikZdjęcie, UzytkownikOpis, DodajZnajomego, NazwaUzytkownikaStyl, UzytkownikDaneStyl, LiniaUserStyl, UzytkownikInfoStyl, StatystykiLiczbaStyl, StatystykiNazwaStyl, StatystykiUzytkownikaStyl, RankingAutorowStyl } from './Profil.styled';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CropSquareOutlinedIcon from '@mui/icons-material/CropSquareOutlined';
import MessageModal from './MessageModal';
import { useState } from 'react';
import { Popover } from '@mui/material';

export default function ProfilUser() {

    const [openModalMessage, setOpenModal] = useState(false);

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
    
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
  

    return (
        <div><ProfilUserStyl>
            <Grid container spacing={2}>
                <Grid item xs={12}></Grid>
                <Grid item xs={4}>
                    <UzytkownikZdjęcie></UzytkownikZdjęcie>
                </Grid>
                <Grid item xs={8}>
                    <NazwaUzytkownikaStyl >Useer123</NazwaUzytkownikaStyl>
                </Grid>
                <Grid item xs={1}>
                    <MilitaryTechOutlinedIcon style={{ fill: "purple" }} fontSize='large' />
                </Grid>
                <Grid item xs={11}>
                    <RankingAutorowStyl>Ranking autorów: #14</RankingAutorowStyl>
                </Grid>
                <Grid item xs={4}>
                    <StatystykiUzytkownikaStyl>
                        <StatystykiLiczbaStyl>546

                        </StatystykiLiczbaStyl>
                        <StatystykiNazwaStyl>Opinie</StatystykiNazwaStyl>
                    </StatystykiUzytkownikaStyl>
                </Grid>
                <Grid item xs={4}>
                    <StatystykiUzytkownikaStyl>
                        <StatystykiLiczbaStyl>12

                        </StatystykiLiczbaStyl>
                        <StatystykiNazwaStyl>Tematów</StatystykiNazwaStyl>
                    </StatystykiUzytkownikaStyl>
                </Grid>
                <Grid item xs={4}>
                    <StatystykiUzytkownikaStyl>
                        <StatystykiLiczbaStyl>39

                        </StatystykiLiczbaStyl>
                        <StatystykiNazwaStyl>Nagrody</StatystykiNazwaStyl>
                    </StatystykiUzytkownikaStyl>
                </Grid>
                <Grid item xs={6}>
                    <UzytkownikDaneStyl>Płeć</UzytkownikDaneStyl>
                </Grid>
                <Grid item xs={6}>
                    <UzytkownikInfoStyl>Kobieta</UzytkownikInfoStyl>
                </Grid>

                <LiniaUserStyl></LiniaUserStyl>

                <Grid item xs={6}>
                    <UzytkownikDaneStyl>Miasto</UzytkownikDaneStyl>
                </Grid>
                <Grid item xs={6}>
                    <UzytkownikInfoStyl>Warszawa</UzytkownikInfoStyl>
                </Grid>

                <LiniaUserStyl></LiniaUserStyl>
                <Grid item xs={6}>
                    <UzytkownikDaneStyl>Urodziny</UzytkownikDaneStyl>
                </Grid>
                <Grid item xs={6}>
                    <UzytkownikInfoStyl>12 sierpnia</UzytkownikInfoStyl>
                </Grid>

                <LiniaUserStyl></LiniaUserStyl>

                <Grid item xs={12}>
                    <UzytkownikOpis>Lorem ipsum dolor sit amet, consectetur adipiscing elit 😀 sed do eiusmod tempor incididunt  Ut enim ad minim minim minim 😈</UzytkownikOpis>
                </Grid>

                <Grid item xs={9}>

                    <DodajZnajomego onClick={handleClick}>Dodaj do znajomych</DodajZnajomego>
                    <Popover
                       
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                    >
                        <Typography sx={{ p: 2 }}>Zaproszenie zostało wysłane</Typography>
                    </Popover>
                </Grid>
                <Grid item xs={3}>

                    <WyslijWiadomosc onClick={() => { setOpenModal(true); }}>

                        <EmailOutlinedIcon fontSize='large' /></WyslijWiadomosc>
                    {openModalMessage && <MessageModal closeModal={setOpenModal} />}
                </Grid>

            </Grid></ProfilUserStyl></div>
    )
}
