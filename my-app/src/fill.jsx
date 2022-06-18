import React from "react";

export const Fill=()=>{
  const mystyle={
    border:'3px solid black'
  }
    return (
 <form style={mystyle}>
 <label>Name: </label>
   <input type='text' placeholder='enter your name here'/><br></br>
       <label>Email: </label>
   <input type='email' placeholder='enter your mail id here'/><br></br>
   <label>Password: </label>
   <input type='password' placeholder='enter your password here'/><br></br>
   <label>Phone no: </label>
   <input type='number' placeholder='enter your number here'/><br></br>
   <input type='submit' value='submit'></input>

 </form>
    )
}