import { Stack, Box } from "@mui/material";
import React from "react";
import Signup from "../components/signup";

import { Link, useLocation } from "react-router-dom";

import logo from "../images/accordLogo3.svg";
import Otp from "../components/otp";
import CreatePassword from "../components/createPassword";
import ProfileName from "../components/setProfileName";
import TellStatus from "../components/tellStatus";
import ResetPassword from "../components/resetPassword";
import ForgotPassword from "../components/forgotPassword";
import SetNewPassword from "../components/setNewPassword";
import ScrollToTopOnMount from "../components/scrolltoview";
import background from "../images/background.png";

export default function Auth() {
    const location = useLocation();
    const props = location.state;

    return(
        <Box disableGutters sx={{ backgroundImage: `url(${background})`, pt: 7, pb: 8, minHeight: '100vh'}}>
            <ScrollToTopOnMount />        
            <Stack direction='column' alignItems='center'>
                <Link to="/">
                    <Box component="img" 
                            sx={{ width: '80px'}}
                            src = {logo} /> 
                </Link> 
                
                <Box>
                    {(() => {
                        if (props.page === "signup")
                            return <Signup  />
                        else if (props.page === "otp")
                            return <Otp />
                        else if (props.page === "createPassword")
                            return <CreatePassword />
                        else if (props.page === "profileName")
                            return <ProfileName password={props.password} />
                        else if (props.page === "resetPassword")
                            return <ResetPassword  />
                        else if (props.page === "forgotPassword")
                            return <ForgotPassword  />
                        else if (props.page === "setNewPassword")
                            return <SetNewPassword  />

                        else if (props.page === "accountCreated")
                            return <TellStatus status='accountCreated' />
                        else if (props.page === "passwordChanged")
                            return <TellStatus status='passwordChanged' />                            
                    })()}
                </Box>
            </Stack>
        </Box>
    )
}