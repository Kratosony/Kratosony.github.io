import React, { useState } from "react";
import "bulma/css/bulma.min.css";
import retrieveQuestions from "./helpers/questions";
import getAnswer from "./helpers/answers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import convertPronouns from "./helpers/pronounHelper";

function TodoList({ type, preferredPronoun }) {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState({ [type]: [] });

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = parseInt(inputValue, 10);
    if (newItem >= 0 && newItem <= 3) {
      const newItems = {
        ...items,
        [type]: items[type] ? [...items[type], newItem] : [newItem],
      };
      setItems(newItems);
      setInputValue("");
    }
  };

  const handleDeleteItem = (index) => {
    setItems({
      ...items,
      [type]: items[type].filter((_, i) => i !== index),
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="field is-grouped">
          <span>{retrieveQuestions(type, items[type]?.length)}</span>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Between 0 and 3"
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div className="control">
            <button className="button is-primary">Add</button>
          </div>
        </div>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th>
              <abbr title="Number">Num</abbr>
            </th>
            <th>Question</th>
            <th>Answer</th>
            <th>Solution</th>
          </tr>
        </thead>
        <tbody>
          {items[type]?.map((item, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{retrieveQuestions(type, index)}</td>
              <td>{item}</td>
              <td>
                {convertPronouns(
                  getAnswer(type, index, item),
                  preferredPronoun
                )}
              </td>
              <td>
                {" "}
                <button
                  className="button is-small ml-3"
                  onClick={() => handleDeleteItem(index)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
