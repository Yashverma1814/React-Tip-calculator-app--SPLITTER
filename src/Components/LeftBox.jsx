import React, { useState } from "react";
const LeftBox = ({left}) => {
    const setBillAmt = (amt) => {
      left.handleBill(amt)
    }
    function setTipAmt(val){
      left.handleTip(val);
      console.log(val)
    }
  return (
    <div>
      <h2>Left Box</h2>
      {/* Add input for bill */}
      <label htmlFor="bill amt">Bill Amount : </label>
      <input type="number" value={left.bill} onChange={(e)=>{setBillAmt(e.target.value)}}/>
      {/* Add buttons for % of tip */}
      <div className="tipSection">
        <label htmlFor="tip amt">Tip Amount : </label>
        <select name="tip" id="tip" onChange={(e)=>setTipAmt(e.target.value)}>
          <option value="15">15%</option>
          <option value="10">10%</option>
          <option value="5">5%</option>
        </select>
      </div>
      {/* Add input for no.of peoples */}

      <div>
        <label htmlFor="peoples">Number of Peoples : </label>
        <input type="number" value={left.people} onChange={(e)=>{left.handlePeople(e.target.value)}}/>
      </div>
    </div>
  );
};

export default LeftBox;
