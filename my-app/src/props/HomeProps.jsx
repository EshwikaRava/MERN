// import React from "react";

export const HomeProps = (props) => {
    const { name, email, city } = props
    return (
        <div><h1>this is a prop home components</h1>
            <h1>my name is ={name}</h1>
            <h1>my email id is= {email}</h1>
            <h1>my city is= {city}</h1>
        </div>
    )
}