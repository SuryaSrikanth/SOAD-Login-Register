import React from 'react';
import './App.css';
import Loginform from './Components/Loginform';
import Registerform from './Components/Registerform';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="login-form-container">
      <Router>
        <div className="forgotrecover">
          <Link to="/create-account">Create Account</Link>
          <Link to="/login-account">Login</Link>
        </div>
      <Switch>
        <Route path='/login-account'>
          <Loginform />
        </Route>
        <Route path = '/create-account'>
          <Registerform />
        </Route>
      </Switch>
    </Router>
      </div>
    

    </div>
  );
}

export default App;
