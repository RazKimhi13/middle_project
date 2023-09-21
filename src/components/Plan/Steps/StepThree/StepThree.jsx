import React, { useContext, useState, useEffect } from "react";
import "./StepThree.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UserContext } from "../../../../context/userContext";

function StepThree() {
  const [value, onChange] = useState(new Date());
  const { loggedUser, setLoggedUser } = useContext(UserContext);

  useEffect(() => {
    const updatedUser = { ...loggedUser };
    updatedUser.chosenDay = value;
    setLoggedUser(updatedUser);
  }, [value, loggedUser, setLoggedUser]);

  return (
    <>
    <p>choose date</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Calendar
          onChange={onChange}
          onClickDay={() => {
            console.log(value);
            alert("Date selected");
          }}
          showWeekNumbers
          value={value}
        />
      </div>
    </>
  );
}

export default StepThree;
