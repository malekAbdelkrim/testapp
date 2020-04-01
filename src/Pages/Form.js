import React, { useContext, Component } from "react";
import StoreContext from "./Main";
import { useObserver, inject, observer } from "mobx-react";
import { render } from "@testing-library/react";


@inject('store')
@observer
class Form extends Component{
   
    constructor(props){
        super(props);
        this.comment = React.createRef();
    }

     handleSubmit = (event) => {
            event.preventDefault();
            this.props.store.addComment(this.comment.current.value);
            this.comment.current.value = "";
    }

    render(){
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <input
                    type="text"
                    id="comment"
                    className="form-control"
                    placeholder="Write a comment ..."
                    ref= {this.comment}

                />
            </div>
        </form>
    );
}

}

export default Form;

