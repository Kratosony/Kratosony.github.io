import React from "react";
import convertPronouns from "./helpers/pronounHelper";

const QuestionsMarkedAs3 = ({ preferredPronoun, questionsMarkedAs3 }) => {
  return (
    <div className="columns is-multiline">
      <div className="column">
        <h2 className="title is-4">Questions Marked as 3:</h2>
        <ul>
          {questionsMarkedAs3.map((question, index) => (
            <li key={index}>{convertPronouns(question, preferredPronoun)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionsMarkedAs3;
