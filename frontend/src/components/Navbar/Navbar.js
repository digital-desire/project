import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Logo from './images/Logo.png'; 
import navbarTheme from './navbarTheme';
import { ThemeProvider } from '@emotion/react';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { Tab } from '@mui/material';
import { Tabs } from '@mui/material';
import { useState } from 'react';


const Navbar = () => {
  const [value, setValue] = useState();
  return (<ThemeProvider theme={navbarTheme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" >
        <Toolbar sx={{marginRight:"7vw", marginLeft:'7vw'}}>
          
        <img src={Logo} />
          
        <Tabs textColor='secondary' value={value} onChange={(e,value)=> setValue(value)} indicatorColor='secondary' sx={{marginRight:"auto"}}>
            <Tab label='Kategorie'/>
            <Tab label='Tematy'/>
            <Tab label='Bańki'/>
        </Tabs>

        {/* <List style={{ display: 'flex', flexDirection: 'row', padding: 0, marginRight: 'auto' }}>
            <ListItem button>Kategorie</ListItem>
            <ListItem button>Tematy</ListItem>
            <ListItem button>Bańki</ListItem>
        </List> */}
          
          <Button color="secondary">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}
export default Navbar;








// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import logo from './images/logo.png';
// import Paper from '@mui/material/Paper';
// import { styled, alpha } from '@mui/material/styles';





// import InputBase from '@mui/material/InputBase';

// import SearchIcon from '@mui/icons-material/Search';
// import { ThemeProvider } from '@mui/material/styles';
// import navbarTheme from './navbarTheme';

// const pages = ['Kategorie', 'Bańki', 'Tematy'];
// const settings = ['Profil', 'Panel', 'Ustawienia', 'Wyloguj'];

// const Navbar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   // hookery stanu, wszystkie domyslnie na null

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   //przy wywolaniu funkcji handleopenNavMenu zmien parametr funkcji setAnchor elnav na zarejestrowany przez event.currentTarget
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//  //logika przycisków
  
  

//   return (
//     <ThemeProvider theme={navbarTheme}>
//     <AppBar position="static"
//     color="primary"
//     >
//       <Container 
//       maxWidth="xl">
//         <Toolbar disableGutters>
//           <Typography
            
//             noWrap
//             component="div"
//             sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            
//           >
//             <Paper elevation={0}>
//               <img src={logo} />
//             </Paper>
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
            
//               size="large"
//               // aria-label="account of current user"
//               // aria-controls="menu-appbar"
//               // aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
            
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center"  >{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
          
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'black', display: 'block' }}
                
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
    

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//     </ThemeProvider>);
// };
// export default Navbar;




// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';

// export default function Navbar(){
//   return (
//     <Box sx={{flexGrow: 1}}>
//       <AppBar position="static">
//       <Toolbar><IconButton
//       size="large"
//       edge="start"
//       color="inherit"
//       aria-label="menu"
//       sx={{ mr: 2}}>
//             <MenuIcon/>
//           </IconButton>
//           <Typography
//           variant="h6"
//           component="div"
//           sx={{flexGrow:1}}>
//             <IconButton >Kategoria</IconButton>
//             <IconButton >Kategoria</IconButton>
//             <IconButton >Kategoria</IconButton>
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }