import React, { useState }  from "react";
import { Card, CardTopRow } from "./Card";
import BackButton from "./BackButton";
import Progress from "./Progress";
import Question01 from "./Questions/Question01";
import Question02 from "./Questions/Question02";
import Question03 from "./Questions/Question03";
import Question04 from "./Questions/Question04";
import Question05 from "./Questions/Question05";
import Question06 from "./Questions/Question06";

const QuestionContainer = () => {
  const [currQuestion, setCurrQuestion] = useState(6);
  const [info, setInfo] = useState({
    1: {
      question: "Zip Code",
      answer: "",
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
      isAnswered: false
    },
    3: {
      question: "House Hold Income",
      answer: 0,
      isAnswered: false
    },
    4: {
      question: "Number of people in household",
      answer: 0,
      isAnswered: false
    },
    5: {
      question: "People included in coverage",
      answer: 0,
      isAnswered: false
    },
    6: {
      question: "Contact Info",
      answer: {
        name: "",
        phone: "",
        gender: "",
        dob: ""
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
        ...info[currQuestion],
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
            currAnswer={info[2].answer}
            goToNextQuestion={goToNextQuestion}
          />
        );
      case 3:
        return (
          <Question03 
            updateAnswer={(newAnswer, isAnswered) => handleQuestionUpdate(newAnswer, isAnswered)}
            currAnswer={info[3].answer}
            goToNextQuestion={goToNextQuestion}
          />
        );
      case 4:
        return (
          <Question04
            updateAnswer={(newAnswer, isAnswered) => handleQuestionUpdate(newAnswer, isAnswered)}
            currAnswer={info[4].answer}
            goToNextQuestion={goToNextQuestion}
          />
        );
      case 5:
        return (
          <Question05
            updateAnswer={(newAnswer, isAnswered) => handleQuestionUpdate(newAnswer, isAnswered)}
            currAnswer={info[5].answer}
            goToNextQuestion={goToNextQuestion}
          />
        );
      case 6:
        return (
          <Question06
            updateAnswer={(newAnswer, isAnswered) => handleQuestionUpdate(newAnswer, isAnswered)}
            currAnswer={info[6].answer}
            submitForm={handleSubmitForm}
          />
        );
      default:
        return (
          <Question01
            updateAnswer={(newAnswer, isAnswered) => handleQuestionUpdate(newAnswer, isAnswered)} 
            currAnswer={info[1].answer}
            goToNextQuestion={goToNextQuestion}
          />
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
  };

  const calcAge = (dateStr) => {
    const today = new Date();
    const dob = new Date(dateStr);
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth(); // To calculate if they already celebrated their bday this year

    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age;
  }

  const handleSubmitForm = () => {
    // make sure all questions have valid answers
    let allQuestionsAnswered = true;

    for (let i = 1; i <= numberOfQuestions; i++) {
      if (!info[i].isAnswered) {
        allQuestionsAnswered = false;
      }
    }

    if (allQuestionsAnswered) {
      info[6].answer.age = calcAge(info[6].answer.dob); // Adding an age field

      // TODO JP: send form
    }
  }

  return (
    <Card>
      <CardTopRow className="card-topRow">
        <BackButton goToPrevQuestion={goToPrevQuestion} />
        {
          false
          ? null
          : <Progress
              currQuestion={currQuestion}
              totalQuestions={numberOfQuestions}
            />
        }
      </CardTopRow>
      {questionComponent()}
    </Card>
  );
};

export default QuestionContainer;
