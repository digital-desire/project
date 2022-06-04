import React, { MouseEventHandler } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AlbumIcon from '@mui/icons-material/Album';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { Box } from '@mui/material';
const pages = ['Kategorie', 'Bańki', 'Szukaj'];

export const Search = styled('div')(({ theme }) => ({

  backgroundColor: '#ececec',
  border: '2px',
  width: '250px',
  height: '30px',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  marginTop: '15px',
  borderColor: '#4c4c4c',
  fontFamily: 'Montserrat',
  fontSize: '14px',

}));

export const Nawigacja = styled('button')(({ theme }) => ({

  my: 2,
  color: 'text.primary',
  textTransform: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  height: '60px',
  paddingRight: '20px',
  paddingLeft: '20px',
  fontWeight: '500',
  fontSize: '15px',
  fontFamily: 'montserrat',
  backgroundColor: 'transparent',
  border: 'none',
  '&:hover': {
    fontWeight: '700',
    backgroundColor: '#9c60ff',
    height: '100%',
    borderRadius: '5px',
    color: '#ffffff',
  },
}));

const theme = createTheme({
  palette: {

    primary: {
      main: '#ffffff',
      light: '#ffffff',
    },
    secondary: {
      main: '#9c60ff',
    },
    background: {
      default: '#F3F4F6',
      paper: '#ffffff',
    },
    text: {
      primary: '#727272',
      secondary: 'rgba(0,0,0,0.7)',
      disabled: 'rgba(193,193,193,0.5)',

    },
    error: {
      main: '#ee6352',
    },
    info: {
      main: '#2956ff',
    },
  },
  typography: {
    fontFamily: '"Montserrat"',
    fontWeightLight: 200,
    fontWeightMedium: 600,
    fontWeightBold: 900,
  },
})

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (

    <ThemeProvider theme={theme}>
      <Box sx={{
        flexGrow: 1,
        height: '60px',
        width: '100vw',
      }}>

        <AppBar position="static"
          sx={{ flexGrow: 1, height: '60px', width: '100vw', bgcolor: 'background.paper' }}>
          <Toolbar>
            <Grid container spacing={1} sx={{ flexGrow: 1 }}>

              <Grid item xs={1}>
                <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  sx={{ mr: 2, color: 'text.primary', display: 'flex', alignContent: 'center', height: '60px' }}
                >
                  <AlbumIcon sx={{ color: 'text.primary' }} />
                </IconButton>
              </Grid>
              <Grid item xs={1}>
                <Box

                  component="div"
                  sx={{
                    flexGrow: 1,
                    height: '60px',
                    width: '30px',
                    color: 'text.primary',
                    fontFamily: 'montserrat',
                    fontSize: '22px',
                    fontWeight: '700',
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    alignContent: 'center',
                    '&:hover': {
                      color: 'secondary.main'
                    }
                  }}>
                  PozaBanka
                </Box>
              </Grid><Grid item xs={4} >
                <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'spacebetween', 
                  flexDirection: 'row', 
                  alignContent: 'center' }}>

                  <Grid item xs={3}>
                    <Nawigacja
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      Kategorie
                    </Nawigacja>
                    <Menu
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={handleClose}>Ekologia</MenuItem>
                      <MenuItem onClick={handleClose}>Polityka</MenuItem>
                      <MenuItem onClick={handleClose}>Rolnictwo</MenuItem>
                      <MenuItem onClick={handleClose}>Sport</MenuItem>
                      <MenuItem onClick={handleClose}>Kultura</MenuItem>
                      <MenuItem onClick={handleClose}>Ekonomia</MenuItem>
                    </Menu>
                  </Grid>
                  <Grid item xs={3}>
                    <Nawigacja
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      Artykuły
                    </Nawigacja>
                  </Grid>
                  <Grid item xs={3}>
                    <Nawigacja
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      Bańki
                    </Nawigacja>
                  </Grid>
                </Box>
              </Grid>
              <Grid item xs={1} ></Grid>
              <Grid item xs={4} >
                <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'row', 
                  alignContent: 'center', 
                  justifyContent: 'flex-end' }}>
                  <Search sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingLeft: '5px',
                    maxWidth: '300px'
                  }}>szukaj</Search><Button sx={{
                    fontWeight: '700',
                    bgcolor: 'secondary.main',
                    height: '30px',
                    paddingLeft: '2px',
                    paddingRight: '2px',
                    marginTop: '15px',
                    color: 'primary.main',
                    '&:hover': {
                      fontWeight: '700',
                      bgcolor: 'secondary.dark',
                      color: 'primary.main',
                    },
                  }}>k</Button></Box></Grid>

              <Grid item xs={1}>
                <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: 'row', 
                  alignContent: 'center', 
                  alignItems: 'center', 
                  justifyContent: 'flex-end', 
                  height: '60px' }}>
                    <Avatar></Avatar>
                    </Box>
                    </Grid>

            </Grid>
          </Toolbar>
        </AppBar>

      </Box>
    </ThemeProvider >

  );
}
