import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { makeStyles } from "@material-ui/core";
import {AppBar,Box, Toolbar,Stack, Container,Hidden,Typography,Menu,MenuItem, IconButton, SwipeableDrawer, Divider, List, ListItem, Avatar, ListItemButton, ListItemText, Button} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../styles/Header.css';
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
    <AppBar color="default" position="fixed" sx={{background: trigger ? "#fff6f3" : "transparent", color: '#3D2521'}}>
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
              <ListItemButton><ListItemText disableTypography className="list"><Link to="/" style={{textDecoration:"none", color: '#3D2521'}}>Home</Link></ListItemText></ListItemButton>
              <ListItemButton><ListItemText disableTypography className="list"><Link to="/AboutUsMain" style={{textDecoration:"none", color: '#3D2521'}}>About</Link></ListItemText></ListItemButton>
              <ListItemButton><ListItemText disableTypography className="list"><Link to="/gallery" style={{textDecoration:"none", color: '#3D2521'}}>Gallery</Link></ListItemText></ListItemButton>
              <ListItemButton><ListItemText disableTypography className="list"><Link to="/Event" style={{textDecoration:"none", color: '#3D2521'}}>Events & Meetings</Link></ListItemText></ListItemButton>
              <ListItemButton><ListItemText disableTypography className="list"><Link to="/" style={{textDecoration:"none", color: '#3D2521'}}>Rooms</Link></ListItemText></ListItemButton>
              <ListItemButton onClick={handleOpenUserMenu}><ListItemText disableTypography className="list">More <KeyboardArrowDownIcon sx={{fontSize:"1.2rem"}}/></ListItemText></ListItemButton>
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
           <IconButton>
             <CloseIcon onClick={() => setOpen(false)} />
           </IconButton>

           <Button variant="contained" sx={{
                fontSize: '1.4rem',
                '@media (max-width: 900px)':{
                  fontSize: '1.2rem'
                },
                '@media (max-width: 1050px)':{
                  fontSize: '1rem'
                }
                }}>Book now</Button>
         </div>
         <div style={{display:"flex",justifyContent:"center", textAlign:"center", alignItems:"center"}}>
         <List sx={{justifyContent:"center", textAlign:"center", alignSelf:"center"}} className="main-list">
              <ListItemButton><ListItemText disableTypography className="list"><Link to="/" style={{textDecoration:"none", color: '#3D2521'}}>Home</Link></ListItemText></ListItemButton>
              <ListItemButton><ListItemText disableTypography className="list"><Link to="/AboutUsMain" style={{textDecoration:"none", color: '#3D2521'}}>About</Link></ListItemText></ListItemButton>
              <ListItemButton><ListItemText disableTypography className="list"><Link to="/gallery" style={{textDecoration:"none", color: '#3D2521'}}>Gallery</Link></ListItemText></ListItemButton>
              <ListItemButton><ListItemText disableTypography className="list"><Link to="/Event" style={{textDecoration:"none", color: '#3D2521'}}>Events & Meetings</Link></ListItemText></ListItemButton>
              <ListItemButton><ListItemText disableTypography className="list"><Link to="/Homepage" style={{textDecoration:"none", color: '#3D2521'}}>Rooms</Link></ListItemText></ListItemButton>
              <ListItemButton><ListItemText disableTypography className="list"><Link to="/Experience" style={{textDecoration:"none", color: '#3D2521'}}>Experience</Link></ListItemText></ListItemButton>
              <ListItemButton><ListItemText disableTypography className="list"><Link to="/contactPage/Contact" style={{textDecoration:"none", color: '#3D2521'}}>Contact us</Link></ListItemText></ListItemButton>
              {/* <ListItemButton onClick={handleOpenUserMenu} ><ListItemText disableTypography className="list">More  <KeyboardArrowDownIcon sx={{fontSize:"1.2rem"}} /></ListItemText></ListItemButton> */}
              <ListItemButton></ListItemButton>
              
              
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