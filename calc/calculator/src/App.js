import React, { Component } from 'react'
import  './assets/styles/global.css'
import ButtonComp from './components/ButtonComponent'
import data from './data/buttons'

class App extends Component {
  render() {
    let allButtons = data.map((el) => {
      return <ButtonComp class={el.class} text={el.text} top={el.top} left={el.left}/>
    })
    
    return(
    <>
      <div className="calcDiv">
        {allButtons}
        {/* <ButtonComp class="btn0" text="0" top="2%" left="2%"/>

        <ButtonComp class="btnOrange" text="AC" top="18.6%" left="2%"/>
        <ButtonComp class="btnOrange" text="=/-" top="18.6%" left="26.5%"/>
        <ButtonComp class="btnOrange" text="%" top="18.6%" left="51%"/>
        <ButtonComp class="btnOrange" text="/" top="18.6%" left="75.5%"/>

        <ButtonComp class="btnGray" text="7" top="35.2%" left="2%"/>
        <ButtonComp class="btnGray" text="8" top="35.2%" left="26.5%"/>
        <ButtonComp class="btnGray" text="9" top="35.2%" left="51%"/>
        <ButtonComp class="btnOrange" text="/" top="35.2%" left="75.5%"/>

        <ButtonComp class="btnGray" text="4" top="51.8%" left="2%"/>
        <ButtonComp class="btnGray" text="5" top="51.8%" left="26.5%"/>
        <ButtonComp class="btnGray" text="6" top="51.8%" left="51%"/>
        <ButtonComp class="btnOrange" text="-" top="51.8%" left="75.5%"/>

        <ButtonComp class="btnGray" text="1" top="68.4%" left="2%"/>
        <ButtonComp class="btnGray" text="2" top="68.4%" left="26.5%"/>
        <ButtonComp class="btnGray" text="3" top="68.4%" left="51%"/>
        <ButtonComp class="btnOrange" text="+" top="68.4%" left="75.5%"/>

        <ButtonComp class="btnGray0" text="0" top="85%" left="2%"/>
        <ButtonComp class="btnGray" text="." top="85%" left="51%"/>
        <ButtonComp class="btnOrange" text="=" top="85%" left="75.5%"/> */}
      </div>
    </>)
  }
}

export default App;
