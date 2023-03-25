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
    return (
      <div className="media">
        <div className="media-left">
          <figure className="image is-48x48">
            <img
              className="is-rounded"
              src="https://ih1.redbubble.net/image.3106241675.1932/st,small,845x845-pad,1000x1000,f8f8f8.jpg"
              alt="Placeholder image"
            />
          </figure>
        </div>
        <div className="media-content">
          <p className="subtitle">{name}</p>
        </div>
      </div>
    );
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
