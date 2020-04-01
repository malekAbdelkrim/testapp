import React from "react";

let InputForm = (props) => {
    let {type, error, onChange,name} = props;
    type = type || "text";
   return (
       <div>
       <input
        type= {type}
        onChange = {(event) => onChange(event.target.name,event.target.value)}
        name={name}
       />
       {error ? <div>{error}</div> : null}
       </div>

   )
}

export default InputForm;