import React from "react";
 export default function Fetchapi(){
    const creatapi=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=>Response.json())
        .then(json=>console.log(json))
    }

const apidata=creatapi()
// console.log(apidata);
return(
    <div><h1>
        
        </h1></div>
)
 }