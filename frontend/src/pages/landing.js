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
import { ButtonGroup, Card, CardMedia } from '@mui/material';

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
          sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
           backgroundColor: "white",
          py: 3, px: {sm: 5, md: 10} }}
        >
          <Toolbar sx={{ flexWrap: 'wrap' }}>
            <img src={logo} alt='' />
              <nav>
                <Link
                  color="text.primary"
                  href="#plans"
                  underline='none'
                  sx={{ mr: 3, ml: 6 }}
                >
                  Plans
                </Link>
                <Link
                  color="text.primary"
                  href="#footer"
                  underline='none'
                  sx={{  mx: 1.5 }}
                >
                  Download App
                </Link>
              </nav>

            <ButtonGroup sx={{ marginLeft: 'auto' }}>
              <Button  color='success' href="#plans" variant="contained" sx={{ textTransform: 'none',  my: 1, mx: 1.5, px: {md: 5}, backgroundColor: '#8DC641' }}>
                Buy Now
              </Button>

              <RouterLink to="/Signin" style={{ textDecoration: 'none'}}>
                <Button color='success' href="" variant="outlined" sx={{ textTransform: 'none', my: 1, mx: 1.5, borderColor: '#8DC641', color: '#8DC641' }}>
                  Sign in
                </Button>  
              </RouterLink>
              
            </ButtonGroup>     
            
            
          </Toolbar>
        </AppBar>


      <Box disableGutters sx={{ backgroundColor: "#8DC641"}}>
        <Grid container spacing={2} 
                      sx={{ pt: {xs: 20, sm: 18, height: '100vh'},
                      px: { sm: 10},
                      backgroundColor: "#6B9E27"}}>
          <Grid item xs={12} 
                sm={6} 
                sx={{ display: 'flex', flexDirection: 'column', 
                      color: 'white', 
                      order: {xs: 2, sm: 1},
                       }}
                alignItems='center'
                justifyContent='center'>
            <Typography variant='h2' 
                        lineHeight={1.1} 
                        fontWeight={700}
                        sx={{ fontSize: {xs: '2.5rem', sm: '3rem', md: '6rem' }, 
                              textAlign: { xs: 'center', md: 'left'},
                              }}
                        >
              Your Calls Just Got Exciting
            </Typography>
            <Typography variant='body1' sx={{ textAlign: {xs: 'center', md: 'left',}}} marginTop={2}>
              Welcome to Accordcalling, where you can stay connected with your loved ones anytime and anywhere in the world.
            </Typography>
            <Button href="#plans" variant='contained' color='success'
              sx={{ textTransform: 'none', backgroundColor: '#B5EE68', width: 'calc(100% - 20px)', marginTop: 3,
                    marginLeft: {xs: '10px', md: '-20px'}, py: {md: 2}, marginBottom: '80px', color: 'black' }}>
              Buy Now
            </Button>
          </Grid>

          <Grid item xs={12} sm={6} order={1}>
            <Box component="img" sx={{ height: '100%', width: {xs: 'calc(50vh - 100px)', sm: 300, md: 'calc(90% - 50px)'},  ml: {xs: 3,sm: -1} }} src = {landingImage1} />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ pt: 10, px: { md: 10 }}} id="plans">
        <Typography variant='h4' fontWeight="700" textAlign='center' py={5}>
          Call Plans
        </Typography>
        <Plans />
      </Box>
        
      <Box disableGutters >
        <Grid container spacing={2} 
                      sx={{ pt: {xs: 20, sm: 18, height: '100vh'},
                      px: { sm: 10} }}>
          <Grid item xs={12} 
                sm={6} 
                sx={{ display: 'flex', flexDirection: 'column',  
                      order: {xs: 2, sm: 1},
                      alignItems: {xs: 'center', md: 'start'}
                       }}
                justifyContent='center'>
            <Typography variant='h2' 
                        lineHeight={1.1} 
                        fontWeight={700}
                        sx={{ fontSize: {xs: '1.5rem', sm: '3rem', md: '4rem' }, 
                              textAlign: { xs: 'center', md: 'left'},
                              }}
                        >
              How to download Accordcalling on IOS devices
            </Typography>
            
            <Link color="#8DC641" variant='body1'  marginTop={4}>
              Watch video
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} order={1}>
            {/* <iframe src='https://www.youtube.com/shorts/mHTc7FV6jsI'/> */}
            <Card>
              <CardMedia component='iframe'
                          height="450"
                          src='https://youtube.com/embed/mHTc7FV6jsI?feature=share' />
            </Card>
            
            
          </Grid>
        </Grid>
      </Box>
      
      <Box 
          component="footer"
          sx={{
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
            mt: 8,
            pt: 3,
            pb: 7,
            px: { md: 10 },
            bgcolor: '#F5F5F5',
          }}
        >
          <Footer />
          
      </Box>
    </div>
  );
}


