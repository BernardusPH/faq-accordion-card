import Records from "../../../questions.json";
import { useState } from "react";
import Question from "./Question.jsx";
import "./Questions.css";

function Questions() {
  const [activeQuestion, setActiveQuestion] = useState(-1);

  function handleQuestionClick(index) {
    setActiveQuestion(index === activeQuestion ? -1 : index);
  }

  let questionsAns = Records.map((item, index) => {
    return (
      <Question
        index={index}
        isActive={index === activeQuestion}
        handleQuestionClick={handleQuestionClick}
        key={item.id}
        id={item.id}
        question={item.question}
        answer={item.answer}
      />
    );
  });

  return (
    <div className="questions">
      <h1>FAQ</h1>
      {questionsAns}
    </div>
  );
}

export default Questions;
