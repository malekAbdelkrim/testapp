import React , { Component} from "react"
import Card from "./Card";
import Form from "./Form";
import Comments from "./Comments";

 export default function Post(){
     return (
         <div className="container-md" align="center">
             <Card/>
             <Form/>
             <Comments/>
         </div>
     )
 }