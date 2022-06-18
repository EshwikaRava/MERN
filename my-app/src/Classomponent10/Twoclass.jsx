 import React,{Component} from "react";
 
 export default class Twoclass extends Component{
    
    render(){
        const mystyle={
            textAlign: 'center',
            backgroundcolor:'blue',
        }
        return(
            <div style={mystyle}>
               <h1><u>WELCOME TO WEBSKITTERS</u></h1>
                <p>“Webskitters Technology Solutions Private Limited (CMMI Level 3)” is one of the reputed software development organisation also providing a training vertical named Webskitters Academy. Webskitters been awarded by the Indian government with “Pride of India” , “Fastest 500 Asia Pacific Award 2014 (by Thailand Govt.)” as well as “Best IT Place To Work”. For eminent work in Web development and design along with Mobile Apps development, Webskitters holds good ranking in international business. We claim 94% client retention with more than 1000+ satisfied clients around the globe.</p>
            </div>
        )  }
 }