import React, { useState } from "react";
import "./StepThree.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function StepThree() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Calendar onChange={onChange} showWeekNumbers value={value} />
      </div>
    </>
  );
}

export default StepThree;
