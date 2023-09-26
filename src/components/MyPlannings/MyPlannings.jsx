// MyPlannings.js
import React, { useContext, useState, useEffect } from "react";
import "./MyPlannings.css";
import { UserContext } from "../../context/userContext";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyPlannings.css";


export default function MyPlannings() {
  const { loggedUser } = useContext(UserContext);
  const [value, setValue] = useState(new Date());


  console.log(loggedUser);


  useEffect(() => {
    if (loggedUser.chosenDay) {
      setValue(loggedUser.chosenDay);
    }
  }, [loggedUser.chosenDay]);

  return (
    <>
      <div className="plan-title">
        <h1>My Current Plan</h1>
      </div>
      <div className="my-plannings-container">
        <div className="left-side-container">
          {/* Budget */}
          <div className="budget">
            <h2 className="info-title">Budget</h2>
            <h1 className="info-value">
              {loggedUser.budget
                ? `${loggedUser.budget}$`
                : "Budget not entered yet"}
            </h1>
          </div>

          {/* Calendar */}
          <div className="calendar-container">
            <h2 className="info-title">Date</h2>
            <div className="calendar">
              <Calendar showWeekNumbers value={value} />
            </div>
          </div>
        </div>
        <div>
          {/* Venue */}
          {loggedUser.venue ? (
            <div className="venue">
              <h2 className="info-title">Venue</h2>
              <img className="venue-image" src={loggedUser.venue} alt="Venue" />
            </div>
          ) : (
            <div className="venue-not-entered">
              <p className="info-title">Venue not entered yet</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
