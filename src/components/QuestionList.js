import React,{useEffect,useState} from "react";

function QuestionList({handleQuestionList, questionList,handleStateDel}) {
  
  
  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then(res => res.json())
    .then(data => {
      handleQuestionList(data)
    })
  },[])

  function handleDelete(el,i){
    console.log(el.id)
    fetch(`http://localhost:4000/questions/${el.id}`,{
      method:"DELETE",
      headers:{
        "Content-type":"application/json"
      },
    })
    .then(res => {
      return(
        res.json()
      )
    })
    .then(() => {
      console.log(el)
      handleStateDel(el)
      
    })
  }
  return (
    <section>
      <h1>Quiz Questions</h1>

      <ul>{ questionList && questionList.map((el,i)=>{
        return (
          <div key={el.id}>
            <li>
              <p>{el.prompt}</p>
              <button onClick={()=>{return handleDelete(el,i)}} >Delete</button>
            </li>
          </div>
        )
        
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
