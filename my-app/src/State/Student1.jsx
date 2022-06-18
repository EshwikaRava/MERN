import { Component } from "react";
// import React {Component} from "react";

export default class Student1 extends Component{
    constructor(props){
    super(props)
  this.s={
     name:'esha',
     phone:"987545",
     city: this.props.city
  }
 }
 render(){
    return(
        <div>
            <p>my name is {this.s.name}</p>
            <p>my city is {this.props.city}</p>

        </div>
    )
 }
}