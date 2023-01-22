import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";
import QuestionForm from "./QuestionForm";

function QuestionList({handleClickDelete}) {
  const[questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((res) => res.json())
    .then((questions) => setQuestions(questions))
  },[])

  function handleAddQuestion(formData) {
  setQuestions([...questions, formData])
   }

   function handleClickDelete(question){
    const deletedQuestion=question.filter((question)=>question.id!== deletedQuestion.id)
    setQuestions(deletedQuestion)
   }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) =>
       <QuestionItem
       key={question.id}
       id={question.id}
       prompt={question.prompt}
       answers={question.answers}
       correctIndex={question.correctIndex}
       deletedQuiz={handleClickDelete}
       />
       )}
       </ul>
       <QuestionForm onAddQuiz={handleAddQuestion}/>
    </section>
  );
}

export default QuestionList;
