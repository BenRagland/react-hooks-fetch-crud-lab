import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  // State is a list of Objects
  const [questionList,setQuestionList] = useState([])

  function handleQuestionList(newList){
    setQuestionList(newList)
  }

  function handleStateDel(delObj){
    const newList = questionList.filter((obj,i)=>{
        return delObj !== obj
    })
    setQuestionList(newList)
  } 
  
console.log("Parent state questionList", questionList)

return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : 
      <QuestionList 
      handleStateDel={handleStateDel}
      questionList={questionList}
      handleQuestionList={handleQuestionList} />}
    </main>
  );
}

export default App;
