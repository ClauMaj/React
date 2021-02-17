import React, { Component } from 'react'
import data from '../data/cardData'
import CardDetail from './CardDetail'

class CardList extends Component {
  render() {

    let cardsArr = data.map((el) => {
        return <CardDetail title={el.title} text={el.text} buttonText={el.buttonText}/>
    })
    return (
      <>
        {cardsArr}
      </>
    )
  }
}

export default CardList
