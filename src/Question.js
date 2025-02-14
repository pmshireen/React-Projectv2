import React from "react";
import { useState } from "react";

function Question() {
    const [showFinalResult , setFinalResult] = useState(false);
    const [score , setScore] = useState(0);
    const [currentQuestion , setCurrentQuestion] = useState(0);

    const questions = [
        {
          text: "What is the capital of America?",
          options: [
            { id: 0, text: "New York City", isCorrect: false },
            { id: 1, text: "Boston", isCorrect: false },
            { id: 2, text: "Santa Fe", isCorrect: false },
            { id: 3, text: "Washington DC", isCorrect: true },
          ],
        },
        {
          text: "What year was the Constitution of America written?",
          options: [
            { id: 0, text: "1787", isCorrect: true },
            { id: 1, text: "1776", isCorrect: false },
            { id: 2, text: "1774", isCorrect: false },
            { id: 3, text: "1826", isCorrect: false },
          ],
        },
        {
          text: "Who was the second president of the US?",
          options: [
            { id: 0, text: "John Adams", isCorrect: true },
            { id: 1, text: "Paul Revere", isCorrect: false },
            { id: 2, text: "Thomas Jefferson", isCorrect: false },
            { id: 3, text: "Benjamin Franklin", isCorrect: false },
          ],
        },
        {
          text: "What is the largest state in the US?",
          options: [
            { id: 0, text: "California", isCorrect: false },
            { id: 1, text: "Alaska", isCorrect: true },
            { id: 2, text: "Texas", isCorrect: false },
            { id: 3, text: "Montana", isCorrect: false },
          ],
        },
        {
          text: "Which of the following countries DO NOT border the US?",
          options: [
            { id: 0, text: "Canada", isCorrect: false },
            { id: 1, text: "Russia", isCorrect: true },
            { id: 2, text: "Cuba", isCorrect: true },
            { id: 3, text: "Mexico", isCorrect: false },
          ],
        },
      ];

      const optionClicked =(isCorrect) =>{
        // console.log(isCorrect);

        if (isCorrect) {
            setScore(score + 1);
        }
        if(currentQuestion+1 < questions.length){
            setCurrentQuestion(currentQuestion+1);
        }
        else{
            setFinalResult(true);
        }

        setCurrentQuestion(currentQuestion+1);


      }
      const restartButton =()=>{
        setScore(0);
        setCurrentQuestion(0);
        setFinalResult(false);
      }
      const backButton =()=>{
        if(currentQuestion == 0){
          setCurrentQuestion(4);
        }else{
        setCurrentQuestion(currentQuestion-1);
        }
      }

      const nextButton = ()=>{
        if(currentQuestion == 4){
          setCurrentQuestion(0);
        }else{
        setCurrentQuestion(currentQuestion+1);
        }
      }


    return(
        <div className = "App">

            <h1>Quiz</h1>
            <h2>Current score : {score}</h2>
            
            {showFinalResult ? 
                (

                    <div className = "final-results">
                        <h1>Final Results</h1>
                        <h2 className="">
                            {score} out of {questions.length} correct - ({(score/questions.length) *100} %)
                            
                        </h2>
                        <button onClick={restartButton}>Restart</button>
                    </div>

                ):(
                    <div className = "question-card">
                    <h2>Question {currentQuestion} out of {questions.length}</h2>

                    <h3 className = "text">{questions[currentQuestion].text}</h3>

                        <ul>
                            {questions[currentQuestion].options.map((option) =>{
                                return(
                                    <li onClick={ ()=> optionClicked(option.isCorrect)} key ={option.id}>{option.text}</li>
                                );
                            })}
                        </ul>
                        <button type = "button" onClick={backButton}>Back</button>
                        <button type ="button" onClick={nextButton}>Next</button>
                    </div>
                
                )
            };
        </div>

    );
}
export default Question;
    