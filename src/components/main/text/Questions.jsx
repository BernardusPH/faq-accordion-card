import Records from "../../../questions.json"
import Question from "./question";
import "./Questions.css"
function Questions() {
    let questionsAns=Records.map(item=>{
        return (
            <Question 
            key={item.id}
            id={item.id}
            question={item.question}
            answer={item.answer}
            />
        )
    })
    return (
        <div className="questions">
        <h1>FAQ</h1>
        {questionsAns}
        </div>
      );
}

export default Questions;