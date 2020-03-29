import React, { useContext } from "react";
import { StoreContext } from "..";
import { useObserver } from "mobx-react";

export default function Count(){
    const store = useContext(StoreContext);
    return useObserver(()=>(
        <div className="row reactions-count">
            <div className="col-sm" align="left">
                <i className="fa fa-thumbs-up" />{store.likeCount}
            </div>
            <div className="col-sm" align="right">
                {store.getCountComment} comments
            </div>
        </div>
    ));
}