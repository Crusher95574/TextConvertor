import React,{useState} from 'react'

export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
  }
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
  }
 
  const handleClearClick=()=>{
    let newText=" ";
    setText(newText);
  }
  const handleCapitalClick=()=>{
    let newText=text.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');;
    setText(newText);
  }
  const handleOnChange=(event)=>{
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
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>  
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>  
<button className="btn btn-primary mx-2" onClick={handleCapitalClick}>Capitalize</button>  
 </div>

    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
     <p>{0.008*text.split(" ").length } Minutes read</p>
     <h>Preview</h>
     <p>{text}</p>
    </div>

</>
  ) 
}