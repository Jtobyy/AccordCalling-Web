
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Landing from './pages/landing';
import Signin from './pages/signin';
import Auth from './pages/auth';
import Otp from './components/otp';

import reportWebVitals from './reportWebVitals';

import { Route, Routes, BrowserRouter as Router, } from 'react-router-dom';
import './fonts/Helvetica-Font/Helvetica.ttf';
import CreatePassword from './components/createPassword';
import ProfileName from './components/setProfileName';
import Dashboard from './pages/dashboard';
import NotFound from './pages/notFound';

import { loadProgressBar } from 'axios-progress-bar';
import 'axios-progress-bar/dist/nprogress.css';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import { PrivacyPolicy } from './privacyPolicy';


loadProgressBar();

// Production
export const BASE_URL_VOIPSWITCH = "https://apps.nativetalk.com.ng:449/VS.WebAPI.Admin/"
export const BASE_URL_VOIPSWITCH2 = "https://apps.nativetalk.com.ng:449/vsservices/api/json/syncreply/"
export const BACKEND = "https://apps.nativetalk.com.ng:453/"

// export const BASE_URL_VOIPSWITCH = "https://apps.nativetalk.com.ng:451/VS.WebAPI.Admin/"
// export const BASE_URL_VOIPSWITCH2 = "https://apps.nativetalk.com.ng:451/vsservices/api/json/syncreply/"
// export const BACKEND = "http://apps.nativetalk.com.ng:456/"

export const ENDPOINTS = { 
  'login': 'admin.client.login',
  'editProfile': 'admin.client.personal.update',
  'changePassword': 'admin.client.password.set',
  'getPassword': 'admin.client.password.get',
  'signup': 'admin.retail.create',
  'getBalance': 'admin.client.balance',
  'getPlansList': 'admin.plans.list',
  'getPlanData': 'admin.plan.get',
  'addPlan': 'admin.client.plan.add',
  'getStripeSecret': 'create-stripe-payment-intent',
  'addFunds': 'admin.payment.add',
  'setDid': 'admin.client.techprefix.set',
  'getNumberList': 'admin.did.local.number.list',
  'buyNumber': 'client.dids.numbers.buy',
  'getClientDid': 'client.dids.numbers.get',
}

const stripePromise = loadStripe('pk_test_639vTqpH8drhhebhuDK8WQeg')

class App extends React.Component {
  render() {
    return (
      
      <Router>
        <div>
        
          <Routes>
            <Route path='/' element={<Landing />}></Route>
            <Route path='/Signin' element={<Signin />}></Route>
            <Route path='/Otp' element={<Otp />}></Route>
            <Route path='/CreatePassword' element={<CreatePassword />}></Route>
            <Route path='/ProfileName' element={<ProfileName />}></Route>
            <Route path='/Auth' element={<Auth />}></Route>
            <Route path='/Dashboard' element={<Dashboard />}></Route>
            <Route exact path='/PrivacyPolicy' element={<PrivacyPolicy />} />

            <Route path="*" element={<NotFound />} />            
          </Routes>
        
        </div>
      </Router>
      
    )
  }  
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Elements stripe={stripePromise}>
    <App />
  </Elements>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
