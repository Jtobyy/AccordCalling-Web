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
import TellStatus from './components/tellStatus';

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
