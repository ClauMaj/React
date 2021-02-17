


import React, { Component } from 'react'

class NamesList extends Component {
  render() {

    let filterData = this.props.data.filter((nameObj) => {
        
        return nameObj.name.toLowerCase().includes(this.props.searchVal)
    })
    filterData = this.props.searchVal === "" ? [] :filterData;
    return (
        <>
        <ul>
        {filterData.map(name=>(
              <li className={name.sex}>{name.name}</li>
          ))}

        </ul>
        <ul>
        {this.props.data.map(names=>(
              <li className={names.sex}>{names.name}</li>
          ))}
          </ul>
      </>
    )
  }
}

export default NamesList
