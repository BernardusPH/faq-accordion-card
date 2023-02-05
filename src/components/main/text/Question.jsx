import "./Question.css"
import { useState } from "react";
function Question(props) {
let [showAns,setShowAns]=useState(false)


function questionClickHandle(){

    setShowAns(val => {
       

        return val = !val;
     });
}
    return (
        <div className="question-container" >
            <div className="question-answer-container">
                <button id={props.id} aria-label={props.id} className="question-text" onClick={questionClickHandle}>{props.question}</button>
                <button aria-label={props.id + "arrow"} className="arrow" onClick={questionClickHandle} style={showAns?{transform: "rotate(180deg)"}:{}}> <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg"><path d="M1 .799l4 4 4-4" stroke="#F47B56" strokeWidth="2" fill="none" fillRule="evenodd" /></svg> </button>
            </div>

            <p className= "answer" style={showAns?{display:"block"}:{display:"none"}} >{props.answer}</p>
        </div>

    );
}

export default Question;