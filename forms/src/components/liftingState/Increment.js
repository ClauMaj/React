import React from 'react'

const Increment = (props) => {
  return (
    <>
      <button onClick={props.increment} className="btn btn-info">Increment</button>
    </>
  )
}

export default Increment
