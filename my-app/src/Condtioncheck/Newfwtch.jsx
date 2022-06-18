 import React from "react";

 export  const Newfwtch=()=>{
     const data=()=>{
        fetch('https://jsonplaceholder.typicode.com/')
        .then(Response=>Response.json)
        .then(json=>json)
     }
  const apid=data;
  console.log(apid);
 return(
    <div><h1></h1></div>
 )
 }