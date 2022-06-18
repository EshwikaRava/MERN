import React from "react";

export  default function Eventhandling(){
    const data="eshwika";
      function hi(){
    alert(data)
}
return(
    <div>

  <h1>
    <button onClick={hi}>click me</button>
    </h1>
    </div>
  )
}
