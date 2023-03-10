import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";

import logo from "../images/accordLogo3.svg";
import back from "../images/backIcon.svg";
import android from "../images/android.svg";

import { Link as RouterLink } from "react-router-dom";

export default function Header() {
    return (    
        <AppBar position="fixed" elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, 
            backgroundColor: "#8DC641", py: 1, px: { xs: 5, sm:  7 } }}
            >
            <Toolbar sx={{ flexWrap: 'wrap' }} >
                <RouterLink style={{textDecoration: 'none'}} to="/" >
                    <Box component="img"
                        src={logo}
                        alt='' 
                        sx={{ width: {xs: '70px', sm: '80px'}}}/>
                </RouterLink>
                
                <nav style={{marginLeft: 'auto', display: 'flex', alignItems: 'center'}} >
                    <RouterLink style={{textDecoration: 'none'}} to="/Dashboard" state={{ page:"contactsupport"}}>
                        <Link
                        color="white"
                        href="#"
                        underline='none'
                        sx={{  mx: 1.5 }}
                        >
                            Contact Support
                        </Link>
                    </RouterLink>
                    <Box component='img' 
                        sx={{mx: {sm: 5}}}
                        src={android}>
                    </Box>
                    <img src={back} alt='' />
                </nav>
                
            </Toolbar>
        </AppBar>
    )
}