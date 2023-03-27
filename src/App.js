import React, { useState } from "react";
import TodoList from "./TodoList";
import PersonalDetails from "./PersonalDetails";
import PronounSelector from "./PronounSelector";
import QuestionTable from "./QuestionTable";

function App() {
  const [preferredPronoun, setPreferredPronoun] = useState("he");
  const [name, setName] = useState(null);

  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Questionnaire Helper</p>
          <PersonalDetails name={name} setName={setName} />
          <PronounSelector
            preferredPronoun={preferredPronoun}
            setPreferredPronoun={setPreferredPronoun}
          />
        </div>
      </section>
      <div className="container">
        <QuestionTable preferredPronoun={preferredPronoun} />
      </div>
    </>
  );
}

export default App;

// ask for Array of each section of the questionnaire, anything answered as 1 or 2, needs to be converted to an objective.
// Anything marked as 3 simply needs to be converted to the proper pronoun.
