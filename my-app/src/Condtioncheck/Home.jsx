 import React from "react";
//  import Login from "./Login";
//  import Logout from "./Logout";
import 'bootstrap/dist/css/bootstrap.css'

import Login from "./Login"

import Logout from "./Logout"


export const Home=()=>{
    const data=false;
    const result=()=>{
    if (data){
        return <Login/>
          
        
    }else{
    return <Logout/>
    
    }
}

return(
    <div>
        <div className="container">
            <h2 className="bg bg-info">this is bootstrap</h2>
        </div>
        <div className="fluid">
            <h1 className="bg bg-success">,this is webpage cla</h1>
        </div>
        <h1>logn pls</h1>
        {result()}
    </div>
)
}
export default Home