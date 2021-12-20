import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import homepage from './components/pages/homepage';
import signin from './components/pages/signin';
import signup from './components/pages/signup';
import signin_enterprise from './components/pages/signin_enterprise';
import myjobs from './components/pages/myjobs';
import findtalent from './components/pages/findtalent';
import talentdiscover from './components/pages/talentdiscover';
import findwork from './components/pages/findwork';
import changeprofile from './components/pages/changeprofile'
import billing_employ from './components/pages/billing_employ';
import security_employ from './components/pages/security_employ';
import enterpriseprofile from './components/pages/enterpriseprofile';
import security_enterprise from './components/pages/security_enterprise';
import billing_enterprise from './components/pages/billing_enterprise';

function App() {
  return (
    
    <Router>
        <Switch>
          <Route path='/' exact component={homepage} />
          <Route path='/signin' exact component={signin} />
          <Route path='/signin_enterprise' exact component={signin_enterprise} />
          <Route path='/signup' exact component={signup} />
          <Route path='/myjobs' exact component={myjobs} />
          <Route path='/findwork' exact component={findwork} />
          <Route path='/findtalent' exact component={findtalent} />
          <Route path='/talentdiscover' exact component={talentdiscover} />
          <Route path='/changeprofile' exact component={changeprofile} />
          <Route path='/billing_employ' exact component={billing_employ} />
          <Route path='/billing_enterprise' exact component={billing_enterprise} />
          <Route path='/security_employ' exact component={security_employ} />
          <Route path='/security_enterprise' exact component={security_enterprise} />
          <Route path='/enterpriseprofile' exact component={enterpriseprofile} />
        </Switch>
    </Router>
      
  
  );
}

export default App;
