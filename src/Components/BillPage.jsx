import { useState } from "react";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

const BillPage = () => {
  const [bill,setBill] = useState(0);
  const [tip,setTip] = useState(15);
  const [people,setPeople] = useState(0);

  const handleBill = (val) =>{
    setBill(val)
  }
  const handleTip = (val) =>{
    setTip(val)
  }
  const handlePeople = (val) =>{
    setPeople(val)
  }
  const total = bill + (tip*bill)/100
  const leftProp = {
    handleTip,
    tip,
    handleBill,
    bill,
    people,
    handlePeople
  }
  const rightProp = {
    tip,
    total,
    people,
    handleBill,
    handleTip,
    handlePeople,
  }


  return (
    <div className="billbox">
      <LeftBox left={leftProp}/>
      <RightBox right={rightProp} />
    </div>
  );
};

export default BillPage;
