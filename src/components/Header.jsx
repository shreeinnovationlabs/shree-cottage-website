import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { makeStyles } from "@material-ui/core";
import {AppBar,Box, Grid, Toolbar,Stack, Container,Hidden,Typography,Menu,MenuItem, IconButton, SwipeableDrawer, Divider, List, ListItem, Avatar, ListItemButton, ListItemText, Button} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../styles/Header.css';
const fbContact = require("../assets/fb-Contact.png");
const ytContact = require("../assets/yt-Contact.png");
const instaContact = require("../assets/insta-Contact.png");
const logo  = require('../images/logo.png');

export default function Header(props) {
  const [open, setOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined
  });

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar color="default" position="sticky" sx={{top:"0",background: trigger ? "#fff6f3" : "transparent", color: '#3D2521'}}>
      <Stack direction={'row'} sx={{
                textAlign:'center',
                justifyContent: 'flex-end',
                pr: '10vw',
                backgroundColor: 'secondary.main',
                
            }}>
            <Stack direction={'row'} sx={{alignItems:'center'}}>
                <CallIcon sx={{display:'inline', color:"common.white",width:'2vw' ,padding: '0.1vw 0.1vw 0px', marginRight: '5px'}}/>
                <Typography variant='subtitle1' color="common.white">+91 9427424157</Typography>
            </Stack>
            <Stack direction={'row'} sx={{marginLeft: '25px', alignItems:'center' }}>
                <MailIcon sx={{color:"common.white",width:'2vw', padding: '0.1vw 0.1vw 0px', marginRight: '5px', justifyContent:'center'}}/>
                <Typography variant='subtitle1'>shreecottages57@gmail.com</Typography>
            </Stack>
        </Stack>

      <Container maxWidth="100vw" sx={{p:{md:"0vw 1vw",lg:"0vw 10vw"}, m:"0", width:"100vw"}}>
        <Toolbar disableGutters>
          <Box className="logo"><img src={logo} alt="" /></Box>
          <Box sx={{display:"flex", flexDirection:"row"}}>
          <Hidden mdDown>
            {/* {navigationLinks.map((item) => (
              <Link
                className="list"
                color="textPrimary"
                 variant="button"
                 underline="none"
                 href={item.href}
                 key={item.name}
               >
                 {item.name}
               </Link>
             ))} */}
              <NavLink to="/" className={({ isActive }) => (isActive ? "link-active" : "link")} style={{padding:"0",justifyContent:"center",textDecoration:"none", color: '#3D2521'}}><ListItemButton><ListItemText disableTypography className="list">Home</ListItemText></ListItemButton></NavLink>
              <NavLink to="/AboutUsMain" className={({ isActive }) => (isActive ? "link-active" : "link")} style={{textDecoration:"none", color: '#3D2521'}}><ListItemButton><ListItemText disableTypography className="list">About</ListItemText></ListItemButton></NavLink>
              <NavLink to="/gallery" className={({ isActive }) => (isActive ? "link-active" : "link")} style={{textDecoration:"none", color: '#3D2521'}}><ListItemButton><ListItemText disableTypography className="list">Gallery</ListItemText></ListItemButton></NavLink>
              <NavLink to="/Event" className={({ isActive }) => (isActive ? "link-active" : "link")} style={{textDecoration:"none", color: '#3D2521'}}><ListItemButton><ListItemText disableTypography className="list">Events & Meetings</ListItemText></ListItemButton></NavLink>
              <NavLink to="" className={({ isActive }) => (isActive ? "link-active" : "link")} style={{textDecoration:"none", color: '#3D2521'}}><ListItemButton><ListItemText disableTypography className="list">Rooms</ListItemText></ListItemButton></NavLink>
              <Link style={{textDecoration:"none", color: '#3D2521',justifyContent:"center"}}><ListItemButton onClick={handleOpenUserMenu}><ListItemText disableTypography className="more">More <KeyboardArrowDownIcon sx={{fontSize:{md:"1rem",lg:"1.2rem"}}}/></ListItemText></ListItemButton></Link>
              <ListItemButton><Button variant="contained" sx={{
                fontSize: '1.4rem',
                '@media (max-width: 900px)':{
                  fontSize: '1.2rem'
                },
                '@media (max-width: 1100px)':{
                  fontSize: '1rem'
                },
              }}>Book now</Button></ListItemButton>
           </Hidden>
           <Hidden mdUp>
             <IconButton onClick={() => setOpen(true)}>
               <MenuIcon />
             </IconButton>
           </Hidden>
           </Box>
         </Toolbar>
      </Container>
      <SwipeableDrawer
          anchor="right"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
         >
         <div
           onClick={() => setOpen(false)}
          //  onKeyPress={() => setOpen(false)}
           role="button"
           tabIndex={0}
           style={{backgroundColor:"primary.main",display:"flex",justifyContent:"space-between",padding:"10px"}}
         >
         <Box className="logo"><img src={logo} alt=""/></Box>
         <Box sx={{alignSelf:"center"}}>
          <Button variant="contained" sx={{
                fontSize: '1.4rem',
                '@media (max-width: 900px)':{
                  fontSize: '1.2rem'
                },
                '@media (max-width: 1050px)':{
                  fontSize: '1rem'
                }
                }}>Book now</Button>
           <IconButton>
             <CloseIcon onClick={() => setOpen(false)} />
           </IconButton>
           </Box>
         </div>
         <div style={{display:"flex",flexDirection:"column",justifyContent:"center", textAlign:"center", alignItems:"center"}}>
         <List sx={{justifyContent:"center", textAlign:"center", alignSelf:"center"}} className="main-list">
              <ListItemButton><ListItemText disableTypography className="ham-list"><Link to="/" style={{textDecoration:"none", color: '#3D2521'}}>Home</Link></ListItemText></ListItemButton>
              <ListItemButton><ListItemText disableTypography className="ham-list"><Link to="/AboutUsMain" style={{textDecoration:"none", color: '#3D2521'}}>About</Link></ListItemText></ListItemButton>
              <ListItemButton><ListItemText disableTypography className="ham-list"><Link to="/gallery" style={{textDecoration:"none", color: '#3D2521'}}>Gallery</Link></ListItemText></ListItemButton>
              <ListItemButton><ListItemText disableTypography className="ham-list"><Link to="/Event" style={{textDecoration:"none", color: '#3D2521'}}>Events & Meetings</Link></ListItemText></ListItemButton>
              <ListItemButton><ListItemText disableTypography className="ham-list"><Link to="" style={{textDecoration:"none", color: '#3D2521'}}>Rooms</Link></ListItemText></ListItemButton>
              <ListItemButton><ListItemText disableTypography className="ham-list"><Link to="/Experience" style={{textDecoration:"none", color: '#3D2521'}}>Experience</Link></ListItemText></ListItemButton>
              <ListItemButton><ListItemText disableTypography className="ham-list"><Link to="/contactPage/Contact" style={{textDecoration:"none", color: '#3D2521'}}>Contact us</Link></ListItemText></ListItemButton>
              {/* <ListItemButton onClick={handleOpenUserMenu} ><ListItemText disableTypography className="list">More  <KeyboardArrowDownIcon sx={{fontSize:"1.2rem"}} /></ListItemText></ListItemButton> */}
              
              
           {/* {navigationLinks.map((item) => (
             <ListItem>
             <ListItem key={item.name}>
               <Link
                  className={styles.link}
                  color="textPrimary"
                  variant="button"
                  underline="none"
                  href={item.href}
              >
                {item.name}
              </Link>
            </ListItem>
          ))} */}
          <Grid direction='row' sx={{m:'0.5vw 0vw'}}>
                    <img src={fbContact} href="/" alt="Facebook" className="sns-h"/>
                    <img src={instaContact} href="/" alt="Instagram" className="sns-h"/>
                    <img src={ytContact} href="/" alt="Youtube" className="sns-h"/>
        </Grid>
        </List>
        </div>
      </SwipeableDrawer>
      <Menu
                sx={{ mt: '72px' , background: 'none'}}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'buttom',
                    horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                >
                    <MenuItem sx={{fontFamily:"Bona Nova", fontSize:"1.4rem", '@media (max-width: 1100px)':{fontSize:"1rem"}}}><Link to="/Experience" style={{textDecoration:"none", color: '#3D2521'}}>Experience</Link></MenuItem>
                    <MenuItem sx={{fontFamily:"Bona Nova", fontSize:"1.4rem", '@media (max-width: 1100px)':{fontSize:"1rem"}}}><Link to="/contactPage/Contact" style={{textDecoration:"none", color: '#3D2521'}}>Contact us</Link></MenuItem>
            </Menu>
    </AppBar>

  );
}