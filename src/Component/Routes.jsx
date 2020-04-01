import React from "react";
import { Component } from "react";
import {Link, BrowserRouter as Router, Route, Switch,Redirect} from "react-router-dom";
import Main from "../Pages/Main";
import User from "../ComponentParam/User";
import MainLog from "../Component/MainLog";
class Routes extends Component{

    constructor(props){
        super(props);
    }

    handleLogOut =(event) =>{
      console.log("hhhhhhhhhhhhhhhhhhhhhhh")
    
        return  <Redirect to={{ pathname: '/user' }} />


        
    }

    render(){
        return(
            <div>
                <div>
                    <button onClick={this.handleLogOut}>LogOut</button>
                </div>
            <div className="container">
                  <Router>
                  <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    
                          <Link to="/instagramme">Intsagramme</Link>
                          <Link to="/user">User</Link>
                  </nav>
                          <Switch>
                              <Route exact path ="/instagramme" component={Main}></Route>
                              <Route exact path="/user" component={User}></Route>
                              <Route path="/login" component={MainLog}></Route>
                          </Switch>
                      
                  </Router>
            </div>
            </div>

        );
    }
}
export default Routes ;