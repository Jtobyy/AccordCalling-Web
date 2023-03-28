import logo from '../images/accordLogo2.svg';
import landingImage2 from '../images/landingImage2.png';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Button from '@mui/material/Button';

import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';

import Box from '@mui/material/Box';

import { Link as RouterLink } from 'react-router-dom';
import { ButtonGroup, Card, CardMedia } from '@mui/material';
import { HashLink } from "react-router-hash-link";

// import useMediaQuery from '@mui/material/useMediaQuery';

import Plans from '../components/plans';
import Footer from '../components/footer';
import ScrollToTopOnMount from "../components/scrolltoview";
import background from "../images/background.png";


// export function SimpleMediaQuery() {
//   const matches = useMediaQuery('(max-height:650px)');

//   return <span>{`(min-width:600px) matches: ${matches}`}</span>;
// }

export default function Landing() {
  const [noPlanSet, setNoPlanSet] = React.useState(0)

  const reveal = () => {
    let reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 100;

      if (elementTop < windowHeight - elementVisible)
        reveals[i].classList.add('active');
      else
      reveals[i].classList.remove('active');
    }
  }
  React.useEffect(() => { 
    window.addEventListener('scroll', reveal);
  })
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
                <HashLink smooth 
                style={{ textDecoration: 'none', 
                          color: 'black',
                          marginRight: '30px',
                          marginLeft: '60px',
                        }} to="/#plansBox"
                >
                  Plans
                </HashLink>
                
                <HashLink smooth style={{ textDecoration: 'none', color: 'black'}} to="/#footer">
                  Download App
                </HashLink>
              </nav>

            <ButtonGroup sx={{ marginLeft: 'auto' }}>
              <RouterLink to="/Auth" state={{ page: 'signup' }} style={{ textDecoration: 'none' }}>
                <Button  color='success' variant="contained" sx={{ textTransform: 'none',  my: 1, mx: 1.5, px: {md: 5}, backgroundColor: '#8DC641' }}>
                  Sign up
                </Button>
              </RouterLink>
              

              <RouterLink to="/Signin" style={{ textDecoration: 'none'}}>
                <Button color='success' href="" variant="outlined" sx={{ textTransform: 'none', my: 1, mx: 1.5, borderColor: '#8DC641', color: '#8DC641' }}>
                  Sign in
                </Button>  
              </RouterLink>
              
            </ButtonGroup>     
            
            
          </Toolbar>
        </AppBar>


      <Box disableGutters >
        <Grid container spacing={2} 
                      sx={{ pt: {xs: 20, sm: 18, height: '100vh'},
                      px: { sm: 10},
                      backgroundImage: `url(${background})`,
                      }}>
          <Grid item xs={12} 
                sm={6} 
                sx={{ display: 'flex', flexDirection: 'column', 
                      color: 'white', 
                      order: { xs: 0 },
                      alignItems: {xs: 'center', sm: 'start'}
                       }}
                
                justifyContent='center'>
            <Typography variant='h2' 
                        lineHeight={1} 
                        fontWeight={700}
                        sx={{ fontSize: {xs: '2.5rem', sm: '3rem', md: '6rem' }, 
                              textAlign: { xs: 'center', md: 'left'},
                              mt: {xs: '20px'}
                              }}
                        >
              Stay connected from any part of the world
            </Typography>
            <Typography variant='body1' pl={1} sx={{ textAlign: {xs: 'center', md: 'left',}}} marginTop={2}>
              Welcome to Accordcalling, save your coins with our affordable offers.
            </Typography>
            <RouterLink to="/Auth" state={{ page: 'signup' }} style={{ textDecoration: 'none', width: '100%' }}>
              <Button  variant='contained' color='success'
                sx={{ textTransform: 'none', backgroundColor: '#B5EE68', width: "calc(100% - 20px)", marginTop: 3,
                      marginLeft: {xs: '10px'}, py: {md: 2}, marginBottom: '80px', color: 'black' }}>
                Sign Up
              </Button>
            </RouterLink>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box loading='lazy' component="img" sx={{ height: {xs: '100%', md: 'calc(90% + 15px)', lg: 'calc(100% + 5px)'}, width: {xs: 'calc(50vh - 135px)', sm: 400, md: 'calc(90% - 85px)'},  
                                  ml: {xs: 5, sm: -1}, mt: {xs: -1.5, sm: -1 } }} src = {landingImage2} />
          </Grid>
        </Grid>
      </Box>

      <Box component='div' className='reveal' textAlign='center' sx={{ pt: 10, px: { md: 10 }}} id="plansBox">
        <Typography variant='h4' fontWeight="700" textAlign='center' py={1}>
          Call Plans
        </Typography>
        <Typography varinat='body1'>
        Our call plans operate on a subscription based model where users pay a recurring fee to  maintain an uninterrupted access to our call services"
        </Typography>
        {(() => {
          let plansList = [];
          for (let i = 0; i <= noPlanSet; i++) {
            plansList.push(<Plans key={i} set={i} />)
          }
          return <Box>{plansList}</Box>
        })()}

        <Button  variant='contained' color='success'
            onClick={() => setNoPlanSet(noPlanSet + 1)}
            sx={{ textTransform: 'none', backgroundColor: '#8DC641', marginTop: 8,
                  marginLeft: {xs: '10px'}, width: '180px' }}>
            See more
        </Button>
      </Box>
        
      <Box component='div' className='reveal' disableGutters >
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
            
            <Link color="#8DC641" variant='body1' pl={1}  marginTop={4}>
              Watch video
            </Link>
          </Grid>

          <Grid item xs={12} sm={6} order={1}>
            <Card>
              <CardMedia component='iframe'
                          height="450"
                          src='https://youtube.com/embed/Um7xfsF82T0' />
            </Card>
            
            
          </Grid>
        </Grid>
      </Box>
      
      <Box className='reveal'
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


