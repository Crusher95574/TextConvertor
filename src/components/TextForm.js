import React,{useState} from 'react'

export default function TextForm(props) { 
  const handleUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
     props.showAlert("Converted to uppercase","success");
  }
  const handleLowClick=()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }
 
  const handleClearClick=()=>{
    let newText=" ";
    setText(newText);
    props.showAlert("Text has been cleared","success");
  }
  const handleCapitalClick=()=>{
    let newText=text.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');;
    setText(newText);
    props.showAlert("Converted to Capital","success");
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

    const [text,setText]= useState('Enter the text');


  return (
    <>
    <div className="container" style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white'}}>
<h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#13466e',color: props.mode==='light'?'black':'white'}} id="myBox" rows="8 "></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>  
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>  
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCapitalClick}>Capitalize</button>  
 </div>

    <div className="container my-3" style={{backgroundColor: props.mode==='light'?'white':'#042743',color: props.mode==='light'?'black':'white'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
     <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes read</p>
     <h>Preview</h>
     <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>

</>
  ) 
}