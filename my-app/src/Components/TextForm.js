import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    const handleUpClick = () =>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success")
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }

    const handleClearClick = () =>{
        let newText = "";
        setText(newText)
        props.showAlert("Clear Text!", "success")
    }

    const handleCopyClick = () =>{
        // console.log("I am copy")
        var text = document.getElementById("myBox")
        text.select()
        // text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy To Clipboard", "success")
    }
    
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Remove Extra Space!", "success")
    }

    const handleOnChange = (e) =>{
        // console.log("On Change");
        setText(e.target.value)
    }
  return (
    <>
    <div className='container mt-2' style={{color: props.mode === "dark" ? "white" : "#042743"}}>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
            <textarea value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === "dark" ? "#13466e" : "white", color: props.mode === "dark" ? "white" : "#042743"}} className='form-control' id='myBox' rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Convert to LowerCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopyClick}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div> 
    <div style={{color: props.mode === "dark" ? "white" : "#042743"}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words And {text.length} Characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Nothing to Preview!"}</p>
    </div>
    </>
  )
}
