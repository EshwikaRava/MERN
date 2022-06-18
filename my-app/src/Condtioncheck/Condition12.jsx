 import React from "react";


 export const Condition12=()=>{
    const data=true;
    const result=()=>{
        if(result){
            return (
                <button >login</button>
            ) }else{
                return(
                    <button>logout</button>
                ) }
    }
    return(
       <div><h1>your givern data will tell u to log in if u are true otherwise logout</h1>
        {result()}
       </div>
    )
 }