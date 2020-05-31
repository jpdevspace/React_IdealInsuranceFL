import React, { useState } from "react";
import BackButton from "./BackButton";
import NextButton from "./NextButton";
import Progress from "./Progress";
import Question01 from "./English/Question01";
import Question02 from "./English/Question02";
import Question03 from "./English/Question03";
import Question04 from "./English/Question04";
import Question05 from "./English/Question05";
import Question06 from "./English/Question06";

const Card = () => {
  const [currQuestion, setCurrQuestion] = useState(1);
  const [info, setInfo] = useState({
    1: {
      question: "Zip Code",
      component: {
        english: "Question01",
        spanish: "Pregunta01",
      },
      answer: "",
    },
    2: {
      question: "Plan",
      answer: "",
      component: {
        english: "Question02",
        spanish: "Pregunta02",
      },
    },
    3: {
      question: "House Hold Income",
      answer: "",
      component: {
        english: "Question03",
        spanish: "Pregunta03",
      },
    },
    4: {
      question: "Number of people in household",
      answer: "",
      component: {
        english: "Question04",
        spanish: "Pregunta04",
      },
    },
    5: {
      question: "People included in coverage",
      answer: "",
      component: {
        english: "Question05",
        spanish: "Pregunta05",
      },
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
    },
  });
  const numberOfQuestions = Object.keys(info).length;

  const handleAnswer = (newAnswer) =>
    setInfo({
      ...info,
      [currQuestion]: {
        ...[info[currQuestion]],
        answer: newAnswer,
      },
    });

  const questionComponent = () => {
    switch (currQuestion) {
      case 2:
        return <Question02 />;
      case 3:
        return <Question03 />;
      case 4:
        return <Question04 />;
      case 5:
        return <Question05 />;
      case 6:
        return <Question06 />;
      default:
        return <Question01 />;
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
    // Make sure it doesn't go > the number of questions
    let nextQuestion = currQuestion + 1;

    if (nextQuestion > numberOfQuestions) {
      nextQuestion = numberOfQuestions;
    }

    setCurrQuestion(nextQuestion);
  };



  return (
    <div id="card">
      <div id="card-topRow">
        <BackButton goToPrevQuestion={goToPrevQuestion} />
        <Progress
          currQuestion={currQuestion}
          totalQuestions={numberOfQuestions}
        />
      </div>
      <div id="card-question">{questionComponent()}</div>

      <div id="card-bottomRow">
        <NextButton goToNextQuestion={goToNextQuestion} />
      </div>
    </div>
  );
};

export default Card;
