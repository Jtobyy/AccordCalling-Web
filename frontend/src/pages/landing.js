import logo from '../images/accordLogo2.svg';
import landingImage1 from '../images/landingImage1.png';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Button from '@mui/material/Button';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import { Link as RouterLink } from 'react-router-dom';
import { ButtonGroup } from '@mui/material';

import Plans from '../components/plans';
import Footer from '../components/footer';
import ScrollToTopOnMount from "../components/scrolltoview";


export default function Landing() {
  return (
    <div>
        <ScrollToTopOnMount />
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
        <AppBar position="fixed" elevation={0}
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`, backgroundColor: "white" }}
        >
          <Toolbar sx={{ flexWrap: 'wrap' }}>
            <img src={logo} alt='' />
            <nav>
              <Link
                color="text.primary"
                href="#"
                underline='none'
                sx={{ my: 1, mx: 1.5 }}
              >
                Plans
              </Link>
              <Link
                color="text.primary"
                href="#"
                underline='none'
                sx={{ my: 1, mx: 1.5 }}
              >
                Download App
              </Link>
            </nav>

            <ButtonGroup sx={{ marginLeft: 'auto' }}>
              <Button  color='success' href="#plans" variant="contained" sx={{  my: 1, mx: 1.5, backgroundColor: '#8DC641' }}>
                Buy Now
              </Button>

              <RouterLink to="/Signin" style={{ textDecoration: 'none'}}>
                <Button color='success' href="" variant="outlined" sx={{ my: 1, mx: 1.5, borderColor: '#8DC641', color: '#8DC641' }}>
                  Sign in
                </Button>  
              </RouterLink>
              
            </ButtonGroup>     
            
            
          </Toolbar>
        </AppBar>


      <Container disableGutters sx={{ backgroundColor: "#8DC641"}}>
        <Grid container spacing={2} sx={{ pt: {xs: 15, sm: 10}, backgroundColor: "#8DC641"}}>
          <Grid item xs={12} 
                sm={6} 
                sx={{ display: 'flex', flexDirection: 'column', color: 'white', order: {xs: 2, sm: 1},}}
                alignItems='center'
                justifyContent='end'>
            <Typography variant='h2' 
                        align='center' 
                        lineHeight={1.1} 
                        fontWeight={700}
                        sx={{ fontSize: {xs: '2.5rem' }}}
                        >
              Your Calls Just Got Exciting
            </Typography>
            <Typography variant='body1' align='center' marginTop={1}>
              Welcome to Accordcalling, where you can stay connected with your loved ones anytime and anywhere in the world.
            </Typography>
            <Button href="#plans" variant='contained' color='success'
              sx={{ backgroundColor: '#B5EE68', width: 'calc(100% - 20px)', marginTop: '20px',
                    marginLeft: '10px', marginBottom: '80px' }}>
              Buy Now
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} order={1}>
            <Box component="img" sx={{ width: {xs: 'calc(50vh - 100px)', sm: 300, md: 400},  ml: {xs: 5, sm: -1} }} src = {landingImage1} />
          </Grid>
        </Grid>
      </Container>

      <Container sx={{ pt: 10}} id="plans">
        <Typography variant='h4' fontWeight="700" textAlign='center' py={5}>
          Call Plans
        </Typography>
        <Plans />
      </Container>
        

        <Container
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 8,
            pt: 3,
            pb: 7,
            bgcolor: '#F5F5F5',
          }}
        >
          <Footer />
          
        </Container>
        </div>
  );
}


