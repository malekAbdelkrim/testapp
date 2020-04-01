import React, { Component } from "react";
import storeInstance from "../Stores/Store";
import Post from "./Post";
import {Provider} from "mobx-react";

export const StoreContext = React.createContext();
class Main extends Component{

render(){
    return(
        <Provider store={storeInstance}>
            <Post/>
        </Provider>
    );
}
    
}

export default Main;
