import React from "react";
import { Box, Divider, Stack, Typography, Card, Button, useMediaQuery } from "@mui/material";
import '../styles/Homepage.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Aboutus(){
    return(
        <Box display="flex" flexDirection="column" justifyContent="center" textAlign="center" sx={{padding:"5vw 10vw", backgroundColor:"primary.main"}}>
        <Typography variant="h2">About Us</Typography>
        <Divider orientation="vertical" variant="middle" sx={{height:"1.55rem",width: "1px", backgroundColor:"#3D2521", alignSelf:"center", m:'1.1rem'}}/>
        <Box display='flex' sx={{flexDirection:{xs: "column", md:"row-reverse"}, width: "100%",justifyContent:"space-between"}}>
            <Box sx={{width:{xs:"100%",md:"50%"},justifyContent:"center", alignItems:"center",pt:{xs:'0vh', sm: '5vh',lg:'0vh'}}}>
                <img src="../images/abt-us.png" style={{width:"100%"}}/>
            </Box>
            <Box display="flex" flexDirection="column" sx={{width:{xs:"100%",md:"50%"},mt:"-5vw", backgroundImage:'url(../images/logo-transparent.png)',backgroundRepeat:'no-repeat',backgroundSize:"contain", backgroundPositionX:"center"}}>
                {/* <img src="../images/logo-transparent.png" style={{width:"100%",height:"100%"}}/> */}
                <Box sx={{
                    textAlign:'left',
                    m:"5vw 0vw"
                }}>
                <Typography variant="body1" sx={{m:"5vw 0vw"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets.</Typography>    
                <Button variant="contained">Read more <ArrowForwardIcon sx={{width:"1rem", ml:'0.5vw'}} /></Button>
                </Box>
            </Box>
        </Box>
    </Box>
    );
}