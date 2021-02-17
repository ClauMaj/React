import  React, { useState } from 'react'


const FormsWithHooks = () => {
    const [textValue, setTextValue] = useState(''); 
    const [isValid, setIsValid] = useState(false); 
    const [dropValue, setDropValue] = useState(""); 


    console.log(textValue);
    console.log(isValid);
    console.log(dropValue);

// USE THIS IF YOU HAVE EXTRA LOGIC TO DO
    // const handleInput = (e,value) => {
    //     if (value === "textValue") {
    //         setTextValue(e.target.value);
    //         console.log("Text value set to: " + e.target.value);
    //     }
    //     else if (value === "isValid") {
    //         setIsValid(e.target.checked);
    //         console.log("Box set to: " + e.target.checked);
    //     }
    //     else if (value === "dropValue") {
    //         setDropValue(e.target.value);
    //         console.log("Select value set to: " + e.target.value);
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submited");
    }

  return (
      <>
        <h1 className="text-center mt-5">Functional component form with hooks </h1>

        <div className="row mt-5">
            <div className="col-6 offset-3 formColor formFont p-3">
                
                <form onSubmit={handleSubmit}>
                    <input name="textValue" type="text" value={textValue} onChange={(e) => {setTextValue(e.target.value)}}/> <br />
                    
                    <input name="isValid" type="checkbox" checked={isValid} onChange={(e) => { setIsValid(e.target.checked)}}/> <br />

                    <select name="dropValue" onChange={(e) => {setDropValue(e.target.value)}}>
                        <option value="" >Pick a city</option>
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

export default FormsWithHooks
