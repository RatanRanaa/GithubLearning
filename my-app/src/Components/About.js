import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: '#042743',
    //     backgroundColor: 'white'
    // })
    // const [btntext, setBtnText] = useState("Enable Dark Mode")
    // const toggleStyle = () =>{
    //     if (myStyle.color === "#042743") {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "#042743",
    //             border: "1px solid white"
    //         })
    //         setBtnText("Enable Light Mode")
    //     } else {
    //         setMyStyle({
    //             color: "#042743",
    //             backgroundColor: "white"
    //         })
    //         setBtnText("Enable Dark Mode")
    //     }
    // }

    let myStyle = {
        color: props.mode === "dark" ? "white" : "#042743",
        backgroundColor: props.mode === "dark" ? "#042743" : "white"
    }

  return (
    <div className='container' style={myStyle}>
        <h1 className='my-2'>About us</h1>
            <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze Your Text &#8595;
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>Textutils gives you a way to Analyze your text quickly and efficientyl</strong>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free To Use &#8595;
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>TextUtils is a free character counter tool that provides instant character count statistics for a given text. TextUtils reports the number of words and characters. thus it is suitable for writing text with word/ character limit</strong>
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser Compatible &#8595;
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    <strong>This word counter software works in any web browsers such as chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</strong>
                </div>
                </div>
            </div>
            </div> 
            {/* <div className='container my-3'>
            <button onClick={toggleStyle} type='button' className='btn btn-primary'>{btntext}</button>
            </div> */}
    </div>
  )
}
