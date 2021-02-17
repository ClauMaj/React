
import React from 'react';
 
const Contacts = (props) => {
  return (
    <>
    <h1>
       First Name: {props.firstName} <br />
       Last Name: {props.lastName}<br />
       </h1>  
       Phone: {props.phoneNum}<br />
       Email: {props.email}
      <hr />
    </>
  )
}

export default Contacts

