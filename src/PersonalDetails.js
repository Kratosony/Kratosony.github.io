import React, { useState } from "react";
import TodoList from "./TodoList";
import retrieveQuestions from "./helpers/questions";

function App() {
  const [details, setDetails] = useState({ name: "", pronouns: "" });
  const [inputValue, setInputValue] = useState("");
  const [selectedMenu, setSelectedMenu] = useState("communication");

  const handleMenuChange = (event) => {
    setSelectedMenu(event.target.value);
  };

  const handlePronounSelection = (event) => {
    setDetails({ pronouns: event.target.value });
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setDetails({ name: event.target.value });
  };

  const menuItems = [
    { label: "Communication", value: "communication" },
    { label: "Section 2", value: "section2" },
    { label: "Section 3", value: "section3" },
  ];
  const pronouns = [
    { label: "He/Him", value: "m" },
    { label: "She/Her", value: "f" },
    { label: "They/Them", value: "alt" },
  ];

  const validTypes = menuItems.map((item) => item.value);

  const showDetails = () => {
    console.log(details);
    return (
      <p className="subtitle">
        {details.name} Pronouns: {details.pronouns}
      </p>
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
          <div className="field">
            <label className="label">Select a menu item:</label>
            <div className="control">
              <div className="select">
                <select
                  value={details.pronouns}
                  onChange={handlePronounSelection}
                >
                  {pronouns.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="control">
            <button className="button is-primary">Add</button>
          </div>
        </div>
      </form>
    );
  };

  const renderSubtitle = () => {
    if (details.name === "" && details.pronouns === "") {
      return inputDetails();
    }
    return showDetails();
  };

  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Questionnaire Helper</p>
          {renderSubtitle()}
        </div>
      </section>
      <div className="container">
        <div className="field">
          <label className="label">Select a menu item:</label>
          <div className="control">
            <div className="select">
              <select value={selectedMenu} onChange={handleMenuChange}>
                {menuItems.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {validTypes.includes(selectedMenu) && <TodoList type={selectedMenu} />}
      </div>
    </>
  );
}

export default App;
