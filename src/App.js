import React  from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import homepage from './components/pages/homepage';
import signin from './components/pages/signin';
import signup from './components/pages/signup';
import signin_enterprise from './components/pages/signin_enterprise';
import myjobs from './components/pages/myjobs';
import findtalent from './components/pages/findtalent';

function App() {
  return (
    
    <Router>
        <Switch>
          <Route path='/' exact component={homepage} />
          <Route path='/signin' exact component={signin} />
          <Route path='/signin_enterprise' exact component={signin_enterprise} />
          <Route path='/signup' exact component={signup} />
          <Route path='/myjobs' exact component={myjobs} />
          <Route path='/findtalent' exact component={findtalent} />
        </Switch>
    </Router>
      
  
  );
}

export default App;
