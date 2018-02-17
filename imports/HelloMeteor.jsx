
import React from 'react'
//this imports the React library

export default class HelloMeteor extends React.Component{
//this declares the class HelloMeteor and at the same time it exports it
        render(){
        //this is the render function inside of which
        //we have what that needs to be displayed from this component
                return(
                <div>
                        <h1>Hello from your first meteor app! </h1>
                </div>
                )
        }
}
