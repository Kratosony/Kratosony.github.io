import React from "react";
import convertPronouns from "./helpers/pronounHelper";

const ActionPoints = ({ preferredPronoun, selectedQuestions }) => {
  return (
    <div className="columns is-multiline">
      <div className="column is-half">
        <h2 className="title is-4">Questions Marked as 1 or 2:</h2>
        <ul>
          {selectedQuestions.questionsMarkedAs1Or2.map((question, index) => (
            <li key={index}>{convertPronouns(question, preferredPronoun)}</li>
          ))}
        </ul>
      </div>
      <div className="column is-half">
        <h2 className="title is-4">Action Points</h2>
        <ul>
          {selectedQuestions.actionPoints.map((actionPoint, index) => (
            <li key={index}>
              {convertPronouns(actionPoint, preferredPronoun)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ActionPoints;
