import React from "react";
import { ProgressStatus } from "./Styled/Card";

const Progress = ({ currQuestion, totalQuestions }) => {
  return (
    <ProgressStatus isLast={currQuestion === totalQuestions} id="progress">
      { currQuestion } / { totalQuestions }
    </ProgressStatus>
  );
};

export default Progress;