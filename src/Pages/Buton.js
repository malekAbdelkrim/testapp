import React, { useContext, Component } from "react";
import { inject, observer } from "mobx-react";


@inject('store')
@observer
class Buttons extends Component{
  

    constructor(props){
        super(props)
    }

    render(){
        const {store} = this.props;
        return(
            <div className="row">
                <div className="col-sm">
                    <button type="button" className="btn btn-right align-top" onClick={() => store.updateCount()}><i className="fa fa-thumbs-o-up" />Like</button>
                </div>
    
                <div className="col-sm">
                    <button type="button" className="btn btn-right align-top" onClick={() => document.getElementById('comment').focus()}><i className="fa fa-comment-o" />Comment</button>
               </div>
                
            </div>
        )
    }
}

export default Buttons;

