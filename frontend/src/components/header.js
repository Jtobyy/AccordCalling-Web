import { AppBar } from "@mui/material/AppBar";
import { Link } from "@mui/material/Link";

import { Toolbar } from "@mui/material/Toolbar";

import logo from "../images/accordLogo3.svg";
import back from "../images/backIcon.svg";

import { Link as RouterLink } from "react-router-dom";

export default function Header() {
    <AppBar position="fixed" elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, backgroundColor: "white" }}
        >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
        <img src={logo} alt='' />

        <nav style={{marginLeft: 'auto'}}>
            <Link
            color="text.primary"
            href="#"
            underline='none'
            sx={{ my: 1, mx: 1.5 }}
            >
                Contact Support
            </Link>
            <img src={back} alt='' />
        </nav>
        
        </Toolbar>
    </AppBar>
}