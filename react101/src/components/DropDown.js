import React, { Component } from 'react'

class DropDown extends Component {
  render() {
    let days=["Monday", "Tuesday", "Wednesday", "Thutsday", "Friday", "Saturday", "Sunday"];
    let options = days.map((day) => {
        return <option>{day}</option>
    })
    return (
      <>
        <select>
            {options}
        </select>
        <hr />
      </>
    )
  }
}

export default DropDown
