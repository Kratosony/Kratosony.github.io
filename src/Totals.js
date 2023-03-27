import React from "react";

const Totals = ({ sectionTotals }) => {
  let overallTotal = 0;
  Object.values(sectionTotals).forEach((value) => {
    overallTotal += value;
  });

  return (
    <div className="columns">
      <div className="column">
        <h3 className="title is-3">Section Totals</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(sectionTotals).map((category) => (
              <tr key={category}>
                <td>{category}</td>
                <td>{sectionTotals[category]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="column">
        <h3 className="title is-3">Overall Total</h3>
        <div className="box">
          <p className="subtitle">{overallTotal}</p>
        </div>
      </div>
    </div>
  );
};

export default Totals;
