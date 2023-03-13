import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import * as React from 'react';
import Grid from '@mui/material/Grid';
import { CardMedia, Typography, Box, Button, IconButton, Fade } from '@mui/material';

import tz from '../images/TZ.png';
import ng from '../images/NG.png';
import gh from '../images/GH.png';

import { Link as RouterLink } from 'react-router-dom';


const countries = ['NIGERIA', 'GHANA', 'TANZANIA']
const flags = [ng, gh, tz]

const plansArray = [
  {
    price: '10',
    code: '0',
    descriptions: ['FOR 250MINS', 'FOR 250MINS', 'FOR 150MINS'],
    planIds: ['6', '7', '8']
  },  {
      price: '5',
      code: '0',
      descriptions: ['FOR 60MINS', 'FOR 60MINS', 'FOR 30MINS'],
      planIds: ['9', '10', '11']
  }
]


export default function Plans(props) {

  if (props.set >= plansArray.length) return
  const plans = plansArray[props.set]
  // const [checked, setChecked] = React.useState(false);

  return (
    <div>
      <Grid container spacing={5} sx={{ mt: 0.5, px: { xs: 1, sm: 5}}} >
      {countries.map((country, index) => {
        let price = plans.price;
        let description = plans.descriptions[index];
        let flagSrc = flags[index];
        let planId = plans.planIds[index];
        // let planCode = country + plans.code

        return (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              
            >
              <Card sx={{ textAlign: 'center', boxShadow: 5, pb: 2, pt: 2, borderRadius: 3 }} >
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                  <CardMedia
                    component='img'
                    alt={country}
                    src={flagSrc}
                    sx={{  width: '100px' }}
                    />
                </Box>
                <Typography variant='h5' fontWeight={700} pt={1}>{country}</Typography>
                <CardContent sx={{ pt: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      
                    }}
                  > 
                    <Box>
                        <Box>
                          <Typography component="h2" fontWeight={700} variant="h3" color="#929292">
                            ${price}
                          </Typography>
                          <Typography variant="subtitle1" fontWeight={700} color="#929292">
                            {description}
                          </Typography>
                        </Box>
                    </Box>                  
                  </Box>

                </CardContent>

                <CardActions sx={{ 'display': 'flex', justifyContent: 'center'}}>
                  <RouterLink to="/Dashboard" 
                  state={{ page: 'confirmBuyPlan', plan: planId, price: price, country: country }} 
                  style={{ textDecoration: 'none', width: '100%' }}>
                    <Button color='success' 
                            variant="contained" 
                            sx={{ mt: -1,  mx: 1.5, backgroundColor: '#8DC641', textTransform: 'none',
                                  width: '50%'  }}>
                      Buy Now
                    </Button>
                  </RouterLink>
                </CardActions>
                <Typography color='#929292'>
                  All plans valid for 30days
                </Typography>
              </Card>
            </Grid>
        )}
      )}
    </Grid>
  </div>)}
  