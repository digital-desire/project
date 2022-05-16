import React, { MouseEventHandler } from 'react';
import { StyledHeader, Nav, Logo, Image, NavButton, Account, Szukajka } from './styles/Header.styled';
import { ContainerStyl } from './styles/ContainerStyl.styled';
import { Button } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';






export default function Header() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event:any) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      }; 





    return (
        <StyledHeader >
            <ContainerStyl>
                <Nav>
                    <a href="/"><Logo src='./images/logo.png' /></a>
                    <NavButton href="/artykuly">Szukanie</NavButton>
                    <NavButton href="/banka">Bańki</NavButton>
                    <NavButton href="/temat">Tematy</NavButton>
                    
                    
                    <Szukajka placeholder="Szukaj"/>

                    <Account onClick={handleMenu}
                    ></Account>
                    <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profil</MenuItem>
                <MenuItem onClick={handleClose}>Panel</MenuItem>
                <MenuItem onClick={handleClose}>Ustawienia</MenuItem>
                <MenuItem onClick={handleClose}>Wyloguj</MenuItem>
              </Menu>
                    

                </Nav>
               
            </ContainerStyl>
        </StyledHeader>
    )
}
