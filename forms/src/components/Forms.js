import React, { Component } from 'react'

class Forms extends Component {

    constructor() {
        super();
        this.state = {
            textValue: "",
            isValid: false,
            dropValue: "NewYork"
        }
    }
    handleChange = (e) => {
        this.setState({
            textValue: e.target.value
        })
    }
    handleCheckbox =(e) => {
        this.setState({
            isValid: e.target.checked
            
        })
    }
    handleDropdown = (e) => {
        this.setState({
            dropValue: e.target.value
        })
    }

    handleInput = (e) => {
        let targetType = e.target.type === "checkbox" ? e.target.checked: e.target.value;
        let name = e.target.name;
        this.setState({
            [name]: targetType
        }, ()=>{})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submited");
    }



  render() {
    return (
      <>
        <h1 className="text-center mt-5">Class Based Forms </h1>

        <div className="row mt-5">
            <div className="col-6 offset-3 formColor formFont p-3">
                
                <form onSubmit={this.handleSubmit}>
                    <input name="textValue" type="text" value={this.state.textValue} onChange={this.handleInput}/> <br />
                    

                    <input name="isValid" type="checkbox" checked={this.state.isValid} onChange={this.handleInput}/> <br />

                    <select name="dropValue" onChange={this.handleInput}>
                        <option value="NewYork" >New York</option>
                        <option value="Houston" >Houston</option>
                        <option value="Atlanta" >Atlanta</option>
                        <option value="Seattle" >Seattle</option>
                        <option value="Denver" >Denver</option>
                    </select> <br />
                    <input type="submit"/>  <br />

                </form>

            </div>

        </div>
      </>
    )
  }
}

export default Forms
