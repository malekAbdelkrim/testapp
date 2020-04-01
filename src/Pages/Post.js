import React, { Component } from "react";
import Card from "./Card";
import Form from "./Form";
import Comment from "./Comment";


class Post extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="container-md" align="center" style={{height: "150px", width: "500px"}}>
                <Card/>
               <Form/>
                <Comment/>
            </div>
        );
    }
}

export default Post;