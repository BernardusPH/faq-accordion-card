import "./Question.css";

function Question(props) {
  return (
    <div className="question-container">
      <div className="question-answer-container">
        <button
          id={props.id}
          aria-label={props.id}
          className="question-text"
          onClick={() => props.handleQuestionClick(props.index)}
        >
          {props.question}
        </button>
        <button
          aria-label={props.id + "arrow"}
          className="arrow"
          onClick={() => props.handleQuestionClick(props.index)}
          style={props.isActive ? { transform: "rotate(180deg)" } : {}}
        >
          <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 .799l4 4 4-4"
              stroke="#F47B56"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <p
        className="answer"
        style={props.isActive ? { display: "block" } : { display: "none" }}
      >
        {props.answer}
      </p>
    </div>
  );
}

export default Question;
