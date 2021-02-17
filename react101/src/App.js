import React, { Component } from 'react'
import {Container,Row} from 'react-bootstrap'
import Contacts from './components/Contacts'
import data from './data/contacts'
import Days from './components/Days'
import DropDown from './components/DropDown'
import Button from './components/Button'
import CardList from './components/CardList'
import  './assets/styles/global.css'
import cardData from './data/cardContacts'
import OneCard from './components/cards/OneCard'

class App extends Component {
  render() {


    let allCont = data.map((el) => {
        return <Contacts firstName={el.first_name} lastName={el.last_name} phoneNum={el.phone} email={el.email} />
    })
    let contactsArr = cardData.map((el) => {
      return <OneCard name={el.name} img={el.imgURL} tel={el.phone} email={el.email}/>
    })
    return(
    <>
      <div>
        <h1 className="heading">My Heading</h1>
      </div>
      {contactsArr}
    {/* <div className="bg-purple"> 
      Hello World
    </div>
    <div style={style.orange}> 
      Styles
    </div>
    <Button color="warning" text="Claude"/>
    <Button color="info" text="wakanda"/>
    <Button color="primary" text="forever"/>
    <Container fluid>
            <Row>
                
                <CardList />
                
            </Row>
        </Container>
    
    <hr />
    <DropDown />
    <Days /> 
    {allCont}*/}
    </>)
  }
}

const style={
  orange:{
    backgroundColor: 'orange',
    width: "60%",
    height: "400px",
  }
}

export default App
