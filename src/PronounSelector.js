import React, { useState } from "react";

function PersonalDetails({ name, setName }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(inputValue);
  };

  const showDetails = () => {
    return <p className="subtitle">{name}</p>;
  };

  const inputDetails = () => {
    return (
      <form onSubmit={handleSubmit}>
        <div className="field is-grouped">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Name & Surname"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="control">
            <button className="button is-primary">Set Name</button>
          </div>
        </div>
      </form>
    );
  };

  const renderSubtitle = () => {
    if (name === null) {
      return inputDetails();
    }
    return showDetails();
  };

  return renderSubtitle();
}

export default PersonalDetails;
