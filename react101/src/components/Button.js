import React from 'react'
import {Button} from 'react-bootstrap'

const Buttoncomp = (props) => {
  return (
    <>
      <Button variant={props.color}>{props.text}</Button> <br />
      <hr />
    </>
  )
}

export default Buttoncomp
