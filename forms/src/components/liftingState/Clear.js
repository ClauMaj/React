import React from 'react'

const Clear = (props) => {
  return (
    <>
      <button onClick={props.clear} className="btn btn-warning ml-5">Reset Count</button>
    </>
  )
}

export default Clear
