import React from "react";
const Uiprinting =()=>{
    const creatapi=()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=>  Response.json())
        .then(data =>{ 
            console.log(data);
            for (let index = 0; index < data.length; index++) {
             
                 document.write(data[index].name + "<br>");
                 document.write



  document.write(data[index].username);
            }
           })
      
    }
    
    creatapi();
 

    // const apidata=creatapi()
    // console.log(apidata);
    return (
        <div>
        <h1>
        hello
        </h1>
        </div>
    )
}

export default Uiprinting