import React, { useContext, Component } from "react";
import StoreContext from "./Main";
import { useObserver, inject, observer } from "mobx-react";

@inject('store')
@observer
class Count extends Component{

  constructor(props){
    super(props);
    console.log(this.props)
  }

   render(){
    const {store} = this.props;
    
    return (
        <div className="row reactions-count" >
          <div className="col-sm" align="left">
          <i className="fa fa-thumbs-up" />{store.like}
          </div>
          <div className="col-sm" align="right">
          {store.commentCount} comments
          </div>
        </div>


    )
  }

    
}

export default Count;