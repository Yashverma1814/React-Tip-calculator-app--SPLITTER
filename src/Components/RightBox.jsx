import React from "react";
const RightBox = ({right}) => {

  const resetAll = () => {
    right.handleBill(0)
    right.handlePeople(0)
    right.handleTip(15)

  }

  return <div>
    <h2>Right Box</h2>
    <h3>Tip : {right.tip}%</h3>
    <h4>Total : {right.total}</h4>
    <button onClick={resetAll}>Reset</button>
  </div>;
};

export default RightBox;
