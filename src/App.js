import React, { useState } from "react";
import TodoList from "./TodoList";
import PersonalDetails from "./PersonalDetails";
import PronounSelector from "./PronounSelector";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("communication");
  const [preferredPronoun, setPreferredPronoun] = useState("he");
  const [name, setName] = useState(null);

  const handleMenuChange = (event) => {
    setSelectedMenu(event.target.value);
  };
  const menuItems = [
    { label: "Communication", value: "communication" },
    { label: "Section 2", value: "section2" },
    { label: "Section 3", value: "section3" },
  ];

  const validTypes = menuItems.map((item) => item.value);

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
        {validTypes.includes(selectedMenu) && (
          <TodoList type={selectedMenu} preferredPronoun={preferredPronoun} />
        )}
      </div>
    </>
  );
}

export default App;
