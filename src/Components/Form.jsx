import React, { Component, useContext } from "react";
import {StoreContext} from "..";
import { useObserver } from "mobx-react";

function Form(){

let comment = "";
const store = useContext(StoreContext);
function handleSubmit(e){
  e.preventDefault()
  console.log(comment.value);
  store.addComment(comment.value);
  comment.value = ""
}
 
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                      type="text"
                      id="comment"
                      className="form-control"
                      placeholder="Write the comment ..."
                     ref = {node => comment = node}
                    />
                </form>

  );
  

}

export default Form;

