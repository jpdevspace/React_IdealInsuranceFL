import React from "react";

const Progress = ({ currQuestion, totalQuestions }) => {
  return (
    <div id="progress">
      { currQuestion } / { totalQuestions }
    </div>
  );
};

export default Progress;