import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import img from '../image/c.jpg'

export const Formm=()=>{
    const mystyle={
        border:'3px solid black',
        marginLeft:'100px',
        marginRight:'250px',
        
    }
 return(
<div>
<h1>image import</h1>
  <img src={img} alt="image" style={{width:'50px'}} />
</div>
  
//  <div style={mystyle} >
  
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//     <a class="navbar-brand" href="#">welcome</a>
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//       <div class="navbar-nav">
//         <a class="nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
//         <a class="nav-link" href="#">Features</a>
//         <a class="nav-link" href="#">Pricing</a>
//         <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
//       </div>
//     </div>
//   </nav>
//   <form>
//     <h1>  REGISTRATION FORM</h1>
//   <div class="form-row">
//     <div class="form-group col-md-6">
//       <label for="inputEmail4">Email</label>
//       <input type="email" class="form-control" id="inputEmail4"></input>
//     </div>
//     <div class="form-group col-md-6">
//       <label for="inputPassword4">Password</label>
//       <input type="password" class="form-control" id="inputPassword4"></input>
//     </div>
//   </div>
//   <div class="form-row">
//     <div class="form-group col-md-6">
//       <label for="inputCity">City</label>
//       <input type="text" class="form-control" id="inputCity"></input>
//     </div>
//     <div class="form-group col-md-4">
//       <label for="inputState">State</label>
//       <select id="inputState" class="form-control">
//         <option selected>Choose...</option>
//         <option>...</option>
//       </select>
//     </div>
//     <div class="form-group col-md-2">
//       <label for="inputZip">Zip</label>
//       <input type="text" class="form-control" id="inputZip"></input>
//     </div>
//   </div>
//   <div class="form-group">
//     <div class="form-check">
//       <input class="form-check-input" type="checkbox" id="gridCheck"></input>
//       <label class="form-check-label" for="gridCheck">
//         Check me out
//       </label>
//     </div>
//   </div>
//   <button type="submit" class="btn btn-primary">Sign in</button>
// </form>
//  </div>
 )
}
export default Formm