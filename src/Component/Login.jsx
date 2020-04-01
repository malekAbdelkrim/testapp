import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import InputForm from "./InputForm";
import { Redirect } from "react-router";
import {Route} from "react-router-dom";


@inject('form','onChange','meta', 'onSubmit')
@observer
class Login extends Component{

    constructor(props){
        super(props);
        console.log(this.props)
    }

    
    handleSumbit = (event)=>{
        event.preventDefault();
        this.props.onSubmit();
        return   <Route exact path="/" render={() => <Redirect to="/" />} />

    }

    render(){
        return(
            <div className="container">

           
=                        <h3>Email : </h3>
                        <InputForm
                            name = "email"
                            onChange={this.props.onChange}
                            type = "email"
                            error={this.props.form.email.error}
                        />
                    
                        <br/>
                        <h3>Password</h3>
                        <InputForm
                            name = "password"
                            onChange={this.props.onChange}
                            type = "text"
                            error={this.props.form.password.error}
                        />
                        <br/>
                     
                        <button type="submit" disabled={!this.props.meta.isValid} onClick={(event) => this.handleSumbit}>Login</button>
                       
                </div>

        )
    }
}

export default Login;