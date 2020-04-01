import React from "react";
import { Component , useContext } from "react";
import { Provider} from "mobx-react"
import loginFormInstance from "../Stores/Login.store";
import Login from "../Component/Login";

class MainLog extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
           <Provider form={loginFormInstance.form.fields} onChange={loginFormInstance.fieldChange} onSubmit={loginFormInstance.onSubmit} meta={loginFormInstance.form.meta}>
               <Login/>
           </Provider>
        )
    }
}

export default MainLog;