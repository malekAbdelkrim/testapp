import React, { Component, useContext } from "react";
import StoreContext from "./Main";
import { useObserver, inject, observer } from "mobx-react";
import { observe } from "mobx";

@inject('store')
@observer
class Comment extends Component{
   
    constructor(props){
        super(props);
    }
    render(){   
    return (
            <table className="table">
                <tbody>
                    {
                        this.props.store.comments.map((comment,index) => (
                            <tr key={index}>
                                <td>{comment}</td>
                            </tr>
                        ))
                    }
                </tbody>
            
            </table>
    );
}
}
export default Comment;