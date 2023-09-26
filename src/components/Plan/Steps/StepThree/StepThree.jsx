import React, { useContext, useState, useEffect } from "react";
import "./StepThree.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { UserContext } from "../../../../context/userContext";
import CheckMark from "../CheckMark/CheckMark";

function StepThree({ setPage, page }) {
  const [value, setValue] = useState(new Date());
  const { loggedUser, setLoggedUser, users, setUsers } =
    useContext(UserContext);
    const [isSubmitted, setIsSubmitted] = useState(false);


  return (
    <>
      <div className="form-title">
        <h1>Choose your perfect date</h1>
      </div>

      {!isSubmitted ? (
        <>
          <div className="calendar-container">
            <Calendar
              onChange={(newValue) => setValue(newValue)}
              onClickDay={(newValue) => {
                const updatedUser = { ...loggedUser };
                updatedUser.chosenDay = newValue;
                setLoggedUser(updatedUser);
                const currentUserIndex = loggedUser
                  ? users.findIndex(
                      (user) => user.username === loggedUser.username
                    )
                  : -1;
                if (currentUserIndex !== -1) {
                  const newUsers = [...users];
                  if (!newUsers[currentUserIndex].chosenDay) {
                    newUsers[currentUserIndex].chosenDay = "";
                  }
                  newUsers[currentUserIndex].chosenDay = newValue;
                  setUsers(newUsers);
                  localStorage.setItem("users", JSON.stringify(newUsers));
                }

                setIsSubmitted(true);
                // alert("Date selected");
                // setPage((currPage) => currPage + 1);
              }}
              showWeekNumbers
              value={value}
            />
          </div>
        </>
      ) : (
        <CheckMark />
      )}
    </>
  );
}

export default StepThree;
