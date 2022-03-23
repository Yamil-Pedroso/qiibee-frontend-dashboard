import React from 'react'
import  { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import BrandPage from './screens/BrandPage'
import CustomerFollowBrand from './screens/CustomerFollowBrand'
import CustomerPage from './screens/CustomerPage'
import LogIn from './screens/LogIn'
import SignUp from './screens/SignUp'

function App() {
  return (
    <Router>
      <Route path='/brand-page' component={BrandPage} />
      <Route path='/customer-follow-brand' component={CustomerFollowBrand} />
      <Route path='/customer-page' component={CustomerPage} />
      <Route path='/login' component={LogIn} />
      <Route path='signup' component={SignUp} />
    </Router>
  );
}

export default App;
