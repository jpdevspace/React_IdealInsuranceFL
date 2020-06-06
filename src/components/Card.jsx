import React, { useState }  from "react";
import BackButton           from "./BackButton";
import NextButton           from "./NextButton";
import Progress             from "./Progress";
import Question01           from "./Questions/Question01";
import Question02           from "./Questions/Question02";
import Question03           from "./Questions/Question03";
import Question04           from "./Questions/Question04";
import Question05           from "./Questions/Question05";
import Question06           from "./Questions/Question06";

const Card = () => {
  const [currQuestion, setCurrQuestion] = useState(3);
  const [info, setInfo] = useState({
    1: {
      question: "Zip Code",
      answer: null,
      component: {
        english: "Question01",
        spanish: "Pregunta01",
      },
      isAnswered: false
    },
    2: {
      question: "Plan",
      answer: {
        health: false,
        dental: false,
        vision: false,
        medicare: false,
        lifeInsurance: false
      },
      component: {
        english: "Question02",
        spanish: "Pregunta02",
      },
      isAnswered: false
    },
    3: {
      question: "House Hold Income",
      answer: "",
      component: {
        english: "Question03",
        spanish: "Pregunta03",
      },
      isAnswered: false
    },
    4: {
      question: "Number of people in household",
      answer: null,
      component: {
        english: "Question04",
        spanish: "Pregunta04",
      },
      isAnswered: false
    },
    5: {
      question: "People included in coverage",
      answer: null,
      component: {
        english: "Question05",
        spanish: "Pregunta05",
      },
      isAnswered: false
    },
    6: {
      question: "About",
      name: "",
      phone: "",
      age: "",
      gender: "",
      dob: "",
      component: {
        english: "Question06",
        spanish: "Pregunta06",
      },
      isAnswered: false
    },
  });
  const numberOfQuestions = Object.keys(info).length;

  // Function to update the "answer" and "isAnswered" fields in state
  const handleQuestionUpdate = (newAnswer, newIsAnswered) => (
    setInfo({
      ...info,
      [currQuestion]: {
        ...[info[currQuestion]],
        answer: newAnswer,
        isAnswered: newIsAnswered
      },
    })
  );

  const questionComponent = () => {
    switch (currQuestion) {
      case 2:
        return (
          <Question02 
            updateAnswer={(newAnswer, isAnswered) => handleQuestionUpdate(newAnswer, isAnswered)}
            currAnswer={info[2].answer} />
        );
      case 3:
        return (
          <Question03 
            updateAnswer={(newAnswer, isAnswered) => handleQuestionUpdate(newAnswer, isAnswered)}
            currAnswer={info[3].answer} />
        );
      case 4:
        return (
          <Question04 updateAnswer={(newAnswer) => handleQuestionUpdate(newAnswer)}  />
        );
      case 5:
        return (
          <Question05 updateAnswer={(newAnswer) => handleQuestionUpdate(newAnswer)}  />
        );
      case 6:
        return (
          <Question06 updateAnswer={(newAnswer) => handleQuestionUpdate(newAnswer)} />
        );
      default:
        return (
          <Question01
            updateAnswer={(newAnswer, isAnswered) => handleQuestionUpdate(newAnswer, isAnswered)} 
            currAnswer={info[1].answer} />
        );
    };
  };

  const goToPrevQuestion = () => {
    // Make sure it doesn't go < 0
    let prevQuestion = currQuestion - 1;
    
    if (prevQuestion < 1) {
      prevQuestion = 1;
    }

    setCurrQuestion(prevQuestion);
  };

  const goToNextQuestion = () => {
    if (info[currQuestion].isAnswered) {
      // Make sure it doesn't go > the number of questions
      let nextQuestion = currQuestion + 1;
  
      if (nextQuestion > numberOfQuestions) {
        nextQuestion = numberOfQuestions;
      }
  
      return setCurrQuestion(nextQuestion);
    }

    // Show message that questions hasn't been answered
  };

  // TODO JP: create a function to format the answers before sending email

  return (
    <div id="card">
      <div id="card-topRow">
        <BackButton goToPrevQuestion={goToPrevQuestion} />
        <Progress
          currQuestion={currQuestion}
          totalQuestions={numberOfQuestions}
        />
      </div>

      <div id="question">{questionComponent()}</div>

      <div id="card-bottomRow">
        <NextButton goToNextQuestion={goToNextQuestion} />
      </div>
    </div>
  );
};

export default Card;
