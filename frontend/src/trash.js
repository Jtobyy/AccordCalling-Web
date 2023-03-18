<ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>

<RouterLink to='/Dashboard' state={{page: 'myaccount' }}  style={{ textDecoration: 'none' }}>
<Button  color='success' variant="contained"
sx={{  mt: 7.5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
    Send
</Button>
</RouterLink>

console.log(sessionStorage.getItem('idClient'))
console.log(this.state.firstName)
console.log(this.state.lastName)
console.log(this.state.state)
console.log(this.state.zip)
console.log(this.state.city)
console.log(this.state.address)
console.log(this.state.email)
// sessionStorage.setItem('token', res['data']['webPassword'])    

 {/* <IconButton onClick={() => {
                                    handleChange()
                                    setChosenPlan(plan.plansCode[0])
                                    setChosenPlanPrice(plan.price[0])
                  }} disabled={!checked}>
                    <ArrowBackIosIcon sx={{color: '#929292'}} />  
                  </IconButton>   */}





                  <Paper component="div"
               sx={{ display: 'flex', flexDirection: 'column',
               pt: 3, pb: 10, mt: 3, mx: 'auto', width: {xs: '90vw', sm: '600px'},
               borderRadius:4 }}>
            
            <Box display='flex' px={3} alignItems='center'>
                <RouterLink to='/Dashboard' state={{page: 'overview' }} style={{ textDecoration: 'none', marginTop: '-24px' }}>
                    <KeyboardBackspace sx={{ position: 'absolute' }}/>
                </RouterLink>
                <Typography variant="h5" fontWeight={700} sx={{ mx: 'auto'}}>Add Funds</Typography>
            </Box>
            <Box bgcolor="#E2E2E2" width='100%' height='2px'></Box>

            <Box px={3}>
                <Stack direction='column' pt={6}>
                    
                    <FormControl sx={{ pt: 3}}>
                        <TextField id="outlined-basic" type='number' label="Enter Specific Amount" variant="outlined" />
                    </FormControl>
                    <FormControl sx={{ pt: 3}}>
                        <TextField id="outlined-basic" type='number' label="Card Number" variant="outlined" />
                    </FormControl>
                    <Stack direction='row' sx={{ pt: 3}}>
                        <FormControl >
                            <TextField id="outlined-basic" type='date' label="Expiration Date" variant="outlined" />
                        </FormControl>
                        <FormControl sx={{ pl: 3}}>
                            <TextField id="outlined-basic" type='number' label="CVV" variant="outlined" />
                        </FormControl>
                    </Stack>
                    
                    <RouterLink to='/Dashboard' state={{page: 'confirmAddFunds' }} style={{ textDecoration: 'none' }}>
                        <Button  color='success' variant="contained"
                        sx={{  mt: 7.5, py: 1.5, backgroundColor: '#8DC641', textTransform: 'none', width: '100%' }}>
                            Make Payment
                        </Button>
                    </RouterLink>
                
                    
                </Stack>
            </Box>
        </Paper>

<FormControl sx={{ pt: 3}}>
<TextField id="outlined-basic" type='number' label="Card Number" variant="outlined" />
</FormControl>
<Stack direction='row' sx={{ pt: 3}}>
<FormControl >
    <TextField id="outlined-basic" type='date' label="Expiration Date" variant="outlined" />
</FormControl>
<FormControl sx={{ pl: 3}}>
    <TextField id="outlined-basic" type='number' label="CVV" variant="outlined" />
</FormControl>
</Stack>






import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { StripeCardElementChangeEvent, StripeError } from "@stripe/stripe-js";
import Field from "../Field/Field";
// import SubmitButton from "../SubmitButton/SubmitButton";
// import ErrorMessage from "../ErrorMessage/ErrorMessage";

import { ENDPOINTS, BACKEND } from "../..";
import axios from "axios";

export const CheckoutForm = (props) => {

  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [billingDetails, setBillingDetails] = useState({
    email: "",
    phone: "",
    name: "",
  });

  const [clientSecret, setClientSecret] = useState("");
  const [disabled, setDisabled] = useState(true);

    useEffect(() => {
    axios.post(`${BACKEND}${ENDPOINTS['getStripeSecret']}`, {
        amount: props.amount,
        currency: "usd"
    })
    .then((res) => {
        console.log("Success")
        setClientSecret(res['data']['clientSecret'])
        console.log(clientSecret)
    })
    .catch((err) => {console.log(err.message)})
    }, [props.amount])ver


  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error);
  };

  const handleSubmit =
    async (ev) => {
      ev.preventDefault();

      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }

      const cardElement = elements.getElement(CardElement);

      if (cardElement) {
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
          },
        });
        if (payload.error) {
          setError(payload.error);
          setProcessing(false);
        } else {
          setError(null);
          setProcessing(false);
          setSucceeded(true);
        }
      }
    };

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <fieldset className="FormGroup">
        <Field
          label="Name"
          id="name"
          type="text"
          placeholder="Jane Doe"
          required
          autoComplete="name"
          value={billingDetails.name}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, name: e.target.value });
          }}
        />
        <Field
          label="Email"
          id="email"
          type="email"
          placeholder="janedoe@gmail.com"
          required
          autoComplete="email"
          value={billingDetails.email}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, email: e.target.value });
          }}
        />
        <Field
          label="Phone"
          id="phone"
          type="tel"
          placeholder="(941) 555-0123"
          required
          autoComplete="tel"
          value={billingDetails.phone}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, phone: e.target.value });
          }}
        />
      </fieldset>
      <fieldset className="FormGroup">
        <CardField onChange={handleChange} />
      </fieldset>
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
      <SubmitButton
        processing={processing}
        error={error}
        disabled={processing || disabled || succeeded}
      >
        Pay 25$
      </SubmitButton>
      {succeeded && (
        <p>
          Payment succeeded, see the result in your
          <a href={`https://dashboard.stripe.com/test/payments`}>
            {" "}
            Stripe dashboard.
          </a>{" "}
          Refresh the page to pay again.
        </p>
      )}
    </form>
  );
};