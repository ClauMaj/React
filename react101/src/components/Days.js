import React, { Component } from 'react'

class Days extends Component {
  render() {
      let days=["Monday", "Tuesday", "Wednesday", "Thutsday", "Friday", "Saturday", "Sunday"];
      let aList = days.map((day) => {
          return <li>{day}</li>
      })
    return (
      <>
      <h2>Days of the Week!</h2>
      <ul>
        {aList}
        </ul>
        <hr />
      </>
    )
  }
}

export default Days

