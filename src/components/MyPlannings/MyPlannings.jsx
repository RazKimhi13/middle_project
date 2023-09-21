// MyPlannings.js
import React, { useContext, useState, useEffect } from "react";
import "./MyPlannings.css";
import { UserContext } from "../../context/userContext";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function MyPlannings() {
  const { loggedUser } = useContext(UserContext);
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    if (loggedUser.chosenDay) {
      setValue(loggedUser.chosenDay);
    }
  }, [loggedUser.chosenDay]);

  return (
    <div className="my-plannings-container">
      <h1 className="my-plannings-title">My Current Plan</h1>
      <div className="my-plannings-info">
        <div className="budget">
          <h2 className="info-title">Budget</h2>
          <p className="info-value">
            {loggedUser.budget
              ? `$${loggedUser.budget}`
              : "Budget not entered yet"}
          </p>
        </div>
        {loggedUser.venue ? (
          <div className="venue">
            <h2 className="info-title">Selected Venue</h2>
            <img className="venue-image" src={loggedUser.venue} alt="Venue" />
          </div>
        ) : (
          <div className="venue-not-entered">
            <p className="info-title">Venue not entered yet</p>
          </div>
        )}
      </div>
      <main className="Sample__container__content">
        <Calendar  showWeekNumbers value={value} />
      </main>
    </div>
  );
}
