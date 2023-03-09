import { Paper, Typography, Box, Stack, FormControl, Radio, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ButtonGroup } from "@mui/material";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";

import React from "react";


import { Link as RouterLink } from 'react-router-dom';
import { useLocation } from "react-router-dom";


export default function ProfileName() {
    const location = useLocation();
    const props = location.state;

    return (
        <Paper component="div"
               sx={{ display: 'flex', flexDirection: 'column',
               py: 10, px: 4, mt: 3, width: {xs: '70vw', sm: '400px'},
               borderRadius:4 }}>
            <Stack direction='row' spacing={1}>
                <Box bgcolor="#BFBFBF" width='52px' height='2px'></Box>
                <Box bgcolor="#BFBFBF" width='52px' height='2px'></Box>
                <Box bgcolor="#BFBFBF" width='52px' height='2px'></Box>
                <Box bgcolor="#BFBFBF" width='52px' height='2px'></Box>
            </Stack>

            <Typography variant="h5" fontWeight={700} mt={3.5}>Profile Name</Typography>
            <Typography variant="body2" mt={1} color="#2E368F">
                Fill in your profile name
            </Typography>

            <FormControl sx={{ pt: 3}}>
                <TextField id="outlined-basic" label="Profile Name" variant="outlined" />
            </FormControl>

            <Stack direction='column' pt={1.5}>
                <ButtonGroup orientation="vertical">
                    <RouterLink to='/Auth' state={{page: 'accountCreated' }} style={{ textDecoration: 'none', width: '10px !important' }}>
                        <Button  color='success' variant="contained"
                        sx={{  mt: 7.5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                            Save
                        </Button>
                    </RouterLink>
                    <RouterLink to='/Auth' state={{page: 'accountCreated' }} style={{ textDecoration: 'none', width: '10px !important' }}>
                        <Button  color='success' variant="outlined"
                        sx={{  mt: 2.5, py: 1.5, color: '#8DC641', borderColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                            Skip
                        </Button>
                    </RouterLink>
                </ButtonGroup>
                    
                </Stack>
        </Paper>
    )
}