import React from 'react'

const DisplayInfo = ({count}) => { // inline destructuring
  return (
    <>
      <h3 className="text-center">{count}</h3>
    </>
  )
}

export default DisplayInfo
