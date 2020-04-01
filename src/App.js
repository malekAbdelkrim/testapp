import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from "mobx-react"
import { Component } from 'react';
import Login from "./Component/Login";
import loginFormInstance from "./Stores/Login.store";
import Routes from "./Component/Routes";
import {BrowserRouter as Router, Route, Redirect,Switch } from "react-router-dom";
import Main from "./Pages/Main";
import User from "./ComponentParam/User";
import MainLog from './Component/MainLog';

class App extends Component{
  constructor(props){
    console.log(loginFormInstance.form.meta.isValid)
    super(props);
    this.state = {
      isValid: loginFormInstance.form.meta.isValid
    }
  }

  render(){
    const {isValid} = this.state;
    console.log(isValid);
    return(
      <div>
          <div className="app-routes">
            <Router>
          <Switch>
            <Route exact strict path="/" component={Routes} />
            <Route exact path="/login" component={MainLog} />
          
          </Switch>
          </Router>
          <MainLog/>
  </div>
       </div>   
         
     
      
    )
  }
}

export default App;
