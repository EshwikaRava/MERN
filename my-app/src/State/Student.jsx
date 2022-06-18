import React, { Component } from "react";

export default class Student extends Component{
    state={
        name:'eshwika',
        roll: '3',
        email:'esha@gmail.com'
        // you can pass state as an this.props
        // city:this.prop.city
        // user:this.props.user
    }
    render(){
        return(
            <div>
                <h1>State component</h1>
                <p><h4>
                    my name is {this.state.name}
                    </h4></p>
            </div>
        )
    }
}