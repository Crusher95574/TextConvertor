import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
  //  console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
  //  console.log("On change");
    setText(event.target.value);
  }
    const [text,setText]= useState('Enter the text');


  return (
    <>
    <div className="container">
<h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>

    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>23334 words abd 456776 characters</p>
    </div>

</>
  )
}