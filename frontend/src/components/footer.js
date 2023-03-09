import { Grid, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Stack } from '@mui/system';

import logo from '../images/accordLogo2.svg';

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="start" {...props}>
        {' © '}
        {new Date().getFullYear()} Accordcalling
        {'.'} All rights reserved
      </Typography>
    );
  }

export default function Footer() {
  return (
    <Box >
        <Grid container>
          <Grid item flexGrow={1}>
            <Box component='img' src={logo}/>
            <List disablePadding component={Stack} direction='row' >
              <ListItem disablePadding sx={{ width: 'fit-content', mr: 3}}>
                <ListItemButton disableGutters>
                  <ListItemText primary="About" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding sx={{ width: 'fit-content', mr: 3}}>
                <ListItemButton disableGutters>
                  <ListItemText primary="Contact" />
                </ListItemButton>
              </ListItem>
            </List>
            <Copyright />
          </Grid>
          <Grid item >
            <Typography variant='subtitle1' sx={{ mt: {'xs': 3, 'sm': 1}}} py={1.5}>
              Get the App  
            </Typography>
            <Box component='div' 
                  bgcolor='black' 
                  color='white' 
                  p={1} mb={1}
                  borderRadius={1}>
              for Android
            </Box>
            <Box component='div' 
                 bgcolor='black' 
                 color='white' 
                 p={1}
                 borderRadius={1}>
              for Iphone
            </Box>
          </Grid>
        </Grid>
    </Box>
  )
}