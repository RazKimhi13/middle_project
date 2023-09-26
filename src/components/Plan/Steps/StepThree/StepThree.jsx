import React, { useContext, useState, useEffect } from "react";
import "./StepThree.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UserContext } from "../../../../context/userContext";

function StepThree({ setPage, page }) {
  const [value, setValue] = useState(new Date());
  const { loggedUser, setLoggedUser } = useContext(UserContext);

  // useEffect(() => {
  //   const updatedUser = { ...loggedUser };
  //   updatedUser.chosenDay = value;
  //   setLoggedUser(updatedUser);
  // }, [value, loggedUser, setLoggedUser]);

  return (
    <>
      <div className="form-title">
        <h1>Choose your perfect date</h1>
      </div>
      <div className="calendar-container">
        <Calendar
          onChange={(newValue) => setValue(newValue)}
          onClickDay={(newValue) => {
            const updatedUser = { ...loggedUser };
            updatedUser.chosenDay = newValue;
            setLoggedUser(updatedUser);
            localStorage.setItem("loggedUser", JSON.stringify(updatedUser));
            alert("Date selected");
            setPage((currPage) => currPage + 1);
          }}
          showWeekNumbers
          value={value}
        />
      </div>
    </>
  );
}

export default StepThree;
