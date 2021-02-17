import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }
  handelChange =(e) => {
    this.setState({ 
      count: this.state.count+1,
    })
  }
  handelDecrese =(e) => {
    this.setState({ 
      count: this.state.count-1,
    })
  }

  render() {

    return (
      <>
        <button onClick={this.handelChange}>+</button>
        <h1>{this.state.count}</h1>
        <button onClick={this.handelDecrese}>-</button>
      </>
    )
  }
}

export default App
