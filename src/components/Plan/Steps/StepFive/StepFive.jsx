import React from "react";
import { Link } from "react-router-dom";
import "./StepFive.css";

function StepFive() {
  return (
    <div>
      <div className="form-title">
        <h1>Great, now we are all set!</h1>
      </div>
      <div className="custom-success-animation">
        <svg
          className="custom-checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 52 52"
        >
          <circle
            className="custom-checkmark__circle"
            cx="26"
            cy="26"
            r="25"
            fill="none"
          />
          <path
            className="custom-checkmark__check"
            fill="none"
            d="M14.1 27.2l7.1 7.2 16.7-16.8"
          />
        </svg>
      </div>

      <div className="form-ending">
        <p>
          If you would like to review your current plan, navgite to{" "}
          <Link to="/myPlannings">My plannings.</Link>{" "}
        </p>
      </div>
    </div>
  );
}

export default StepFive;
