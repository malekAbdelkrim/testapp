import React, { Component } from "react";
import imageStoreInstance from "../Stores/ImageStore";
import { useObserver } from "mobx-react";
import Buttons from "./Buton";
import Count from "./Count";

export default function Card() {
    return (
        useObserver(() => (
            <div className="card">
                <img src={imageStoreInstance.imageUrl} className="card-img-top" alt="..." />
                <button className="btn btn-light" onClick={() => { imageStoreInstance.fetchImage() }}>
                    <i className="fa fa-chevron-right" />
                </button>
                <Count />
                <div className="card-body" >
                    <Buttons />
                </div>
            </div>
        ))
    );
}
