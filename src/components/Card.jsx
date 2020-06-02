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
  const [currQuestion, setCurrQuestion] = useState(1);
  const [info, setInfo] = useState({
    1: {
      question: "Zip Code",
      component: {
        english: "Question01",
        spanish: "Pregunta01",
      },
      answer: 32824,
    },
    2: {
      question: "Plan",
      answer: null,
      component: {
        english: "Question02",
        spanish: "Pregunta02",
      },
    },
    3: {
      question: "House Hold Income",
      answer: null,
      component: {
        english: "Question03",
        spanish: "Pregunta03",
      },
    },
    4: {
      question: "Number of people in household",
      answer: null,
      component: {
        english: "Question04",
        spanish: "Pregunta04",
      },
    },
    5: {
      question: "People included in coverage",
      answer: null,
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

  const handleAnswer = (newAnswer) => (
    setInfo({
      ...info,
      [currQuestion]: {
        ...[info[currQuestion]],
        answer: newAnswer,
      },
    })
  );

  const questionComponent = () => {
    switch (currQuestion) {
      case 2:
        return (
          <Question02 
            updateAnswer={(newAnswer) => handleAnswer(newAnswer)}
            plan={info[2].answer} />
        );
      case 3:
        return (
          <Question03 
            updateAnswer={(newAnswer) => handleAnswer(newAnswer)}
            income={info[3].answer} />
        );
      case 4:
        return (
          <Question04 updateAnswer={(newAnswer) => handleAnswer(newAnswer)}  />
        );
      case 5:
        return (
          <Question05 updateAnswer={(newAnswer) => handleAnswer(newAnswer)}  />
        );
      case 6:
        return (
          <Question06 updateAnswer={(newAnswer) => handleAnswer(newAnswer)} />
        );
      default:
        return (
          <Question01
            updateAnswer={(newAnswer) => handleAnswer(newAnswer)}
            zipCode={info[1].answer} />
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
    const { 
      age = null,
      answer = null,
      dob = null,
      gender = null,
      name = null,
      phone = null } = info[currQuestion] || {};

    // Check if user answered the question 
    // it's != for first 5 question than for the last one
    const isAnsweredQuestion = currQuestion < 6 && answer;
    const isAnsweredLastQuestion = (
          currQuestion === 6
      &&  name
      &&  phone
      &&  age
      &&  gender
      &&  dob
    );

    if (isAnsweredQuestion || isAnsweredLastQuestion) {
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
