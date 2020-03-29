import React from "react";
import { useObserver } from "mobx-react";
import imageStore from "../newStore/Image";
import Button from "./Button";
import Count from "./Count";


export default function Card(){
    return useObserver(() =>(
        <div className="card">
            <img src={imageStore.imageURL}  className="card-img-top" alt="..." style={{height: '300px', width: '400px'}}/>
            <button className="btn btn-light" onClick={() => { imageStore.fetchImage() }}>
                    <i className="fa fa-chevron-right" />
            </button>
            <Count/>
            <div className="card-body">
                <Button/>

            </div>
        </div>
    ));
}