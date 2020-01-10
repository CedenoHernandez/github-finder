import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Users from './components/Users';
import User from './components/User';
import Search from './components/Search';
import Alert from './components/Alert';
import About from './components/About';
import GithubState from './context/github/GithubState';
import './App.css';

const App = () => {
  const [alert, setAlert] = useState(null);


  //Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

    return (
      <GithubState>
      <Router>
      <div className='App'>
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <Search 
                  setAlert={showAlert}
                  />
                <Users />
              </Fragment>
            )} 
            />
            <Route exact path='/about' component={About} />
            <Route exact path='/user/:login' 
              component={User} />
          </Switch>
        </div>
      </div>
      </Router>
      </GithubState>
    );
}

export default App;
