import React from "react";

function QuestionItem({ id, prompt, answers, correctIndex,deletedQuiz }) {

  const options = answers?.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
  function handleClickDelete(){
    fetch(`http://localhost:4000/questions/${id}
    `,{
    method:"DELETE"
    })
    .then((resp)=>(resp.json()))
    .then((question)=>deletedQuiz(question))
    }
    
  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleClickDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
