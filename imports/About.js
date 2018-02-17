import React from 'react'

export default class App extends React.Component {

        render(){
              let { name } = this.props
              let { age  } = this.props
              return <h3> {name} {age} </h3>
        }
}
