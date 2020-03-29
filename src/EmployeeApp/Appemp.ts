import React, { Component } from "react";
import {setupRootStore} from "./Setup";

class AppEmp extends Component{

    constructor(props){
        super(props);
        this.state = {
            rootTree: null
        };
    }

    componentDidMount = () =>{
           /* const {rootTree} = setupRootStore();
            this.setState({rootTree});*/
    }

    render(){
      
       // if(!this.state.rootTree) return null;
        return(
           <div></div>

        );
    }
}

export default AppEmp;