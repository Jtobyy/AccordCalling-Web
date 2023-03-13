
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


loadProgressBar();

export const BASE_URL_VOIPSWITCH = "https://apps.nativetalk.com.ng:449/VS.WebAPI.Admin/"
export const BASE_URL_VOIPSWITCH2 = "https://apps.nativetalk.com.ng:449/vsservices/api/json/syncreply/"

export const ENDPOINTS = { 
  'login': 'admin.client.login',
  'editProfile': 'admin.client.personal.update',
  'changePassword': 'admin.client.password.set',
  'getPassword': 'admin.client.password.get',
  'signup': 'admin.retail.create',
  'getBalance': 'admin.client.balance',
}

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

            <Route path="*" element={<NotFound />} />            
          </Routes>
        </div>
      </Router>
    )
  }  
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
