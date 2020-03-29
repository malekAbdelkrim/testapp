import React ,{ Component } from "react";
import { useContext } from "react";
import { StoreContext } from "..";
import { useObserver } from "mobx-react";


export default function Comments(){
    const store = useContext(StoreContext);
    //const {BrideStore} = this.props;

    

    return useObserver(()=>(
        <table>
            <tbody>
       {
           store.comment.map((cmt, index) =>{
               return (
                   <tr key={index}>
                       <td>
                           {cmt}
                       </td>
                   </tr>
               )
           })
       }
         </tbody>
       </table>
    )); 
}


