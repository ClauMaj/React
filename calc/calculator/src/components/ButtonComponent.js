
import React from 'react'

const ButtonComp = (props) => {
  return (
    <>
      <div style={{top:`${props.top}`,left:`${props.left}`}} className={props.class}>
        {props.text}
      </div>
    </>
  )
}

export default ButtonComp
