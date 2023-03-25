import React from "react";

function PronounSelector({ preferredPronoun, setPreferredPronoun }) {
  const handlePronounChange = (event) => {
    setPreferredPronoun(event.target.value);
  };

  return (
    <div className="field">
      <label className="label">Preferred Pronoun:</label>
      <div className="control">
        <label className="radio">
          <input
            type="radio"
            name="pronoun"
            value="he"
            checked={preferredPronoun === "he"}
            onChange={handlePronounChange}
          />
          <span>He/Him</span>
        </label>
        <label className="radio">
          <input
            type="radio"
            name="pronoun"
            value="she"
            checked={preferredPronoun === "she"}
            onChange={handlePronounChange}
          />
          <span>She/Her</span>
        </label>
        <label className="radio">
          <input
            type="radio"
            name="pronoun"
            value="they"
            checked={preferredPronoun === "they"}
            onChange={handlePronounChange}
          />
          <span>They/Them</span>
        </label>
      </div>
    </div>
  );
}

export default PronounSelector;
