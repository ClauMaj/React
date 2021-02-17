import React, { Component } from 'react'

class Sample1 extends Component {

    constructor(props) {
        super();
        this.history = props.history;

    }
    handleClick =() => {
        console.log("You clicked");
        this.history.push("/")
    }
  render() {
    return (
      <>
        Sample 1
        <button onClick={this.handleClick}>Click</button>
      </>
    )
  }
}

export default Sample1
