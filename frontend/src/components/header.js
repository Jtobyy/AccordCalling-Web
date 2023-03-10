import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";

import logo from "../images/accordLogo3.svg";
import back from "../images/backIcon.svg";

import { Link as RouterLink } from "react-router-dom";

export default function Header() {
    return (    
        <AppBar position="fixed" elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, 
            backgroundColor: "#8DC641", py: 1 }}
            >
            <Toolbar sx={{ flexWrap: 'wrap' }} >
            <Box component="img"
                src={logo}
                alt='' 
                sx={{ width: {xs: '70px', sm: '120px'}}}/>
            
            <nav style={{marginLeft: 'auto', display: 'flex', alignItems: 'center'}} >
                <Link
                color="white"
                href="#"
                underline='none'
                sx={{  mx: 1.5 }}
                >
                    Contact Support
                </Link>
                <img src={back} alt='' />
            </nav>
            
            </Toolbar>
        </AppBar>
    )
}