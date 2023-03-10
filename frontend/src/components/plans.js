import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import * as React from 'react';
import Grid from '@mui/material/Grid';
import { CardMedia, Typography, Box, Button, IconButton, Fade } from '@mui/material';

import tz from '../images/TZ.png';
import ng from '../images/NG.png';
import gh from '../images/GH.png';

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const plans = [
    {
      country: 'NIGERIA',
      price: ['5', '10'],
      src: ng,
      description: [
        'FOR 30MINS', 
        'FOR 60MINS',
      ],
      plansCode: [
        'nigeria0',
        'nigeria1'
      ]
    },
    {
      country: 'GHANA',
      price: ['5', '10'],
      src: gh,
      description: [
        'FOR 30MINS', 
        'FOR 60MINS',
      ],
      plansCode: [
        'ghana0',
        'ghana1'
      ]
    },
    {
      country: 'TANZANIA',
      price: ['5', '10'],
      src: tz,
      description: [
        'FOR 30MINS', 
        'FOR 60MINS',
      ],
      plansCode: [
        'tanzania0',
        'tanzania1'
      ]
    },
  ];

export default function Plans() {
  const [checked, setChecked] = React.useState(false);
  const [chosenPlan, setChosenPlan] = React.useState('');

  const containerRef = React.useRef(null);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  

return (
  <div>
    <Grid container spacing={5} sx={{ px: { xs: 1, sm: 5}}} >
    {plans.map((plan) => (
          <Grid
            item
            key={plan.country}
            xs={12}
            sm={6}
            md={4}
            
          >
            <Card sx={{ textAlign: 'center', boxShadow: 5, pb: 5, pt: 8, borderRadius: 3 }} >
              <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <CardMedia
                  component='img'
                  alt='nigeria'
                  src={plan.src}
                  sx={{  width: '200px' }}
                  />
              </Box>
              <Typography variant='h5' fontWeight={700} pt={2}>{plan.country}</Typography>
              <CardContent sx={{ pt: 4 }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    
                  }}
                >
                  <IconButton onClick={() => {
                                    handleChange()
                                    setChosenPlan(plan.plansCode[0])
                  }} disabled={!checked}>
                    <ArrowBackIosIcon sx={{color: '#929292'}} />  
                  </IconButton>  
                  

                  <Box>
                      <Fade sx={{ position: 'absolute'}} in={!checked} container={containerRef.current}>
                        <Box>
                          <Typography component="h2" fontWeight={700} variant="h3" color="#929292">
                            ${plan.price[0]}
                          </Typography>
                          <Typography variant="subtitle1" fontWeight={700} color="#929292">
                            {plan.description[0]}
                          </Typography>
                        </Box>
                      </Fade>

                      <Fade in={checked} container={containerRef.current}>
                        <Box>
                          <Typography component="h2" fontWeight={700} variant="h3" color="#929292">
                            ${plan.price[1]}
                          </Typography>
                          <Typography variant="subtitle1" fontWeight={700} color="#929292">
                            {plan.description[1]}
                          </Typography>
                        </Box>
                      </Fade>                      
                  
                      
                  </Box>                  

                  <IconButton onClick={() => {
                                      handleChange();
                                      setChosenPlan(plan.plansCode[1]);
                                      }} disabled={checked}>
                    <ArrowForwardIosIcon sx={{color: '#929292'}} />
                  </IconButton>
                </Box>    
              </CardContent>

              <CardActions sx={{ 'display': 'flex', justifyContent: 'center'}}>
                <Button color='success' 
                        variant="contained" 
                        sx={{  mx: 1.5, backgroundColor: '#8DC641', textTransform: 'none',
                                width: '50%' }}>
                  Buy Now
                </Button>
              </CardActions>
              <Typography color='#929292'>
                All plans valid for 30days
              </Typography>
            </Card>
          </Grid>
    ))}
  </Grid>
  </div>
)
                }
  