import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "mobx-react";
import BrideStore from "./stores/BrideStore";
import newInstance from "./newStore/Store";
import Post from "./Components/Post";
//import AppEmp from './EmployeeApp/Appemp';
export const StoreContext = React.createContext();

/*export const Root = (
    <Provider BrideStore = {BrideStore}>
        <App/>
    </Provider>
);*/

ReactDOM.render(
<StoreContext.Provider value={newInstance}>
    <Post/>
    <h1>Hello</h1>
</StoreContext.Provider>,
 document.getElementById('root'));

 /*ReactDOM.render(
<AppEmp/>,
 document.getElementById('root'));*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
