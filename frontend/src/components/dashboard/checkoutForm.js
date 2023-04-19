import { CardCvcElement, CardExpiryElement, CardNumberElement } from "@stripe/react-stripe-js";
import { Box, Button, Stack, FormControl, TextField, Typography, CircularProgress } from '@mui/material';
import cardNumberIcon from '../../images/cardNumberIcon.svg';
import stripePaymentIcon from '../../images/stripe-payment-icon.png';

import { useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND, ENDPOINTS, BASE_URL_VOIPSWITCH } from "../..";

import { Navigate } from "react-router-dom";


export function CheckoutForm(props) {
  const placeholder = "Amount: $" + props.amount
  const [clientSecret, setClientSecret] = useState('')
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [paymentFailed, setPaymentFailed] = useState(false)

  const [disableSubmit, setDisableSubmit] = useState(false)

  useEffect(() => {
    axios.post(`${BACKEND}${ENDPOINTS['getStripeSecret']}`, {
        amount: Number(props.amount) * 10,
        currency: "usd"
    })
    .then((res) => {
      console.log("Success")

      setClientSecret(res['data']['clientSecret'])
    })
    .catch((err) => {
      console.log(err)
    })
    }, [props.amount])

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.

    event.preventDefault();
    setDisableSubmit(true)
    document.getElementById("circularProgress").style.visibility = "visible"

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    console.log('client secret is' + clientSecret)
    
    // CardCvcElement, CardExpiryElement, CardNumberElement
    const result1 = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardNumberElement),
      // billing_details: {
      //   email: "jtobi8161@gmail.com",
      //   name: "joseph"
      // }
      // CardNumberElement
    })
    if (result1.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log(result1.error);
      
      document.getElementById("circularProgress").style.visibility = "hidden"
      setDisableSubmit(false)
      setPaymentFailed(true)
    } else {
      console.log('payment method is ', result1.paymentMethod)

      const result2 = await stripe.confirmCardPayment(clientSecret, {
          payment_method: result1.paymentMethod.id,
          // receipt_email: "jtobi8161@gmail.com"
        })  

      if (result2.error) {
      // Show error to your customer (for example, payment details incomplete)
      console.log('in result2 ', result2.error);

      document.getElementById("circularProgress").style.visibility = "hidden"
      setDisableSubmit(false)
      setPaymentFailed(true)
      } else {
        console.log('result2 returned successfully ', result2.paymentIntent)
        document.getElementById("circularProgress").style.visibility = "hidden"
        setDisableSubmit(false)
        
        axios.post(`${BASE_URL_VOIPSWITCH}${ENDPOINTS['addFunds']}`, {
          "money":props.amount,
          "paymentType":"PrePaid", 
          "idClient":sessionStorage.getItem('idClient'),
          "clientType":32,
          "addToInvoice":false,
          "description":"Web top up"
        })
        .then((res) => {
          setPaymentSuccess(true)
        })
        .catch((err) => {
          console.log(err)
          document.getElementById("circularProgress").style.visibility = "hidden"
        })
      } 
    }
    
  };

  if (paymentSuccess)
    return <Navigate to="/Dashboard" state={{ page: "addFundsSuccessful"}} />
  if (paymentFailed)
    return <Navigate to="/Dashboard" state={{ page: "addFundsFailed"}} />
  else
  return (
    <div>
      <Box mx='auto' sx={{px: {xs: 2, md: 5}, width: {xs: '90vw', md: '50vw', lg: '500px'}}} position="relative">
        <CircularProgress id="circularProgress" sx={{ visibility:"hidden", position: "absolute", left: "45%", top: "45%" }} color="success" />
        <Stack component='form' onSubmit={(e) => handleSubmit(e)} direction='column' pt={3}> 
                <FormControl sx={{ pt: 3 }} >
                  <TextField disabled placeholder={placeholder}/>
                </FormControl>
                
                <Typography variant="p" mt={5} mb={2}>Card Number</Typography>
                <Box position='relative' border={1} borderRadius={1} borderColor='#CBCBCB' px={3} py={2}>
                  <CardNumberElement />
                  <Box component='img'
                       position='absolute'
                       right="15px"
                       top="15px"
                       src={cardNumberIcon} />
                  
                </Box>
                <Stack display='flex' direction='row' mt={4} spacing={3}>
                  <Box flexGrow={1}>
                    <Typography variant='p'>Expiration Date</Typography>                    
                  
                    <Box border={1} mt={2} borderRadius={1} borderColor='#CBCBCB' px={3} py={2}>
                      <CardExpiryElement />
                    </Box>
                  </Box>  
                  <Box flexGrow={1}>
                    <Typography  variant='p'>CVV</Typography>
                    <Box border={1} mt={2} borderRadius={1} borderColor='#CBCBCB' px={3} py={2}>
                      <CardCvcElement />
                    </Box>
                  </Box>
                </Stack>
                  <Button disabled={disableSubmit} type='submit' color='success' variant="contained"
                    sx={{  mt: 7.5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                        Make Payment
                    </Button>                  
            <Box component='img' 
                  mt={10}
                  sx={{width: {xs: '50vw', md: '40vw', lg: '400px'}}} 
                  src={stripePaymentIcon} 
                  mx='auto'
                 />
        </Stack>
      </Box>
    </div>
  )
}