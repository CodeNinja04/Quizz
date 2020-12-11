import React from 'react';
import Quiz from "react-quiz-component";
import { Redirect, useHistory } from "react-router-dom";

const Room1 = () => {

    let history = useHistory();

     const quiz = {
      quizTitle: "React Quiz Component Demo",
      quizSynopsis:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim",
      questions: [
        {
          question:
            "How can you access the state of a component from inside of a member function?",
          questionType: "text",
          questionPic: "https://dummyimage.com/600x400/000/fff&text=X", // if you need to display Picture in Question
          answerSelectionType: "single",
          answers: [
            "this.getState()",
            "this.prototype.stateValue",
            "this.state",
            "this.values",
          ],
          correctAnswer: "3",
          messageForCorrectAnswer: "Correct answer. Good job.",
          messageForIncorrectAnswer: "Incorrect answer. Please try again.",
          explanation:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          point: "20",
        },
        {
          question: "ReactJS is developed by _____?",
          questionType: "text",
          answerSelectionType: "single",
          answers: ["Google Engineers", "Facebook Engineers"],
          correctAnswer: "2",
          messageForCorrectAnswer: "Correct answer. Good job.",
          messageForIncorrectAnswer: "Incorrect answer. Please try again.",
          explanation:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          point: "20",
        },
        
        
      ],
    };
    

     const onCompleteAction = (obj) => {
         
       console.log(obj);
       alert("quiz is finished");
      history.push("/student");
       
     };
        
    return (
      <>
        <div>ROOM-1</div>
        <div style={{ marginLeft: "30%" }}>
          <Quiz
            quiz={quiz}
            onComplete={onCompleteAction}
            showDefaultResult={false}
          />
        </div>
      </>
    );
    
}
 
export default Room1;