import React  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import './App.css';
import homepage from './components/pages/homepage';
import signin from './components/pages/signin';
import signup from './components/pages/signup';
import signin_enterprise from './components/pages/signin_enterprise';
import myjobs from './components/pages/myjobs';
import findtalent from './components/pages/findtalent';
import talentdiscover from './components/pages/talentdiscover';
import findjob from './components/pages/findjob.js';
import changeprofile from './components/pages/changeprofile'
import billing_employ from './components/pages/billing_employ';
import security_employ from './components/pages/security_employ';
import enterpriseprofile from './components/pages/enterpriseprofile';
import admin_employee from './components/pages/admin_employee';
import admin_enterprise from './components/pages/admin_enterprise';
import admin_report from './components/pages/admin_report';
import axios from 'axios';
import SignIn from './components/pages/signin';
import Billing_enterprise from './components/Billing_enterprise/Billing_enterprise';
import Security_employ from './components/Security_employ/Security_Employ';
import Register from './components/pages/signup';
import FindJob from './components/pages/findjob.js';
import FindTalent from './components/pages/findtalent';
import HomePage from './components/pages/homepage';
import SecurityEnterprise from './components/Security_enterprise/Security_enterprise';
import security_enterprise from './components/pages/security_enterprise';
import billing_enterprise from './components/pages/billing_enterprise';
import invitedjobs from './components/pages/invitedjobs';
import upgrade_account_enterprise from './components/pages/upgrade_account_enterprise'
import FindJobRecent from './components/pages/findjobrecent';
import FindJobMatch from './components/pages/findjobmatch';
import upgradeaccount_employee from './components/pages/upgrade_account_employee';
axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
function App() {
  return (
    
    <Router>
        <Switch>
          <Route path='/' exact component={homepage}>
            {/* {localStorage.getItem("auth_token") && <HomePage/>} */}
            {/* {localStorage.getItem('role') === "employee" ? <Redirect to = '/findjob'/>: <Redirect to = '/findtalent'/> } */}
          </Route>
          <Route path='/signin' exact component={signin} >
           
          </Route>
          <Route path='/signup' >
            {localStorage.getItem('auth_token') ? <Redirect to = '/findjob'/> : <Register/>}
          </Route>
          <Route path='/myjobs' exact component={myjobs} />
          <Route path='/invitedjobs' exact component={invitedjobs} />
          <Route path='/findjob'>
            {localStorage.getItem('auth_token') ? <FindJob/> : <Redirect to = '/signin'/>}
          </Route>
          <Route path='/findjob_recent'>
            {localStorage.getItem('auth_token') ? <FindJobRecent/> : <Redirect to = '/signin'/>}
          </Route>
          <Route path='/findjob_match'>
            {localStorage.getItem('auth_token') ? <FindJobMatch/> : <Redirect to = '/signin'/>}
          </Route>
          
          <Route path='/findtalent' exact component={findtalent} >
            {localStorage.getItem('auth_token') ? <FindTalent/> : <Redirect to = '/signin'/>}
          </Route>
          <Route path='/talentdiscover' exact component={talentdiscover} />
          <Route path='/changeprofile' exact component={changeprofile} />
          <Route path='/billing_employ' exact component={billing_employ} />
          <Route path='/billing_enterprise' exact component={billing_enterprise} />
          <Route path='/security_employ' exact component={security_employ} />
          <Route path='/security_enterprise' exact component={security_enterprise} />
          <Route path='/enterpriseprofile' exact component={enterpriseprofile} />
          <Route path='/upgradeaccount_enterprise' exact component={upgrade_account_enterprise} />
          <Route path='/upgradeaccount_employee' exact component={upgradeaccount_employee} />

          <Route path='/admin_employee' exact component={admin_employee}>
          </Route>
          <Route path='/admin_enterprise' exact component={admin_enterprise} />
          <Route path='/admin_report' exact component={admin_report} />

        </Switch>
    </Router>
      
  
  );
}

export default App;