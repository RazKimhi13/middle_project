// Plan.js
import React, { useState } from "react";
import "./Plan.css";
import MultiStep from "react-multistep";
import StepOne from "./Steps/stepOne/StepOne";
import StepTwo from "./Steps/stepTwo/StepTwo";
import StepThree from "./Steps/StepThree/StepThree";
import StepFive from "./Steps/StepFive/StepFive";
import StepFour from "./Steps/stepFour/StepFour";
import CheckMark from "./Steps/CheckMark/CheckMark";

export default function Plan() {
  const [page, setPage] = useState(0);

  const PageDisplay = () => {
    if (page === 0) {
      return <StepOne page={page} setPage={setPage} />;
    } else if (page === 1) {
      return <StepTwo page={page} setPage={setPage} />;
    } else if (page === 2) {
      return <StepThree page={page} setPage={setPage}/>;
    } else if (page === 3) {
      return <StepFour page={page} setPage={setPage}/>;
    } else {
      return <StepFive />;
    }
  };

  return (
    <>
      <div className="form">
        <div className="progressbar">
          <div
            style={{
              width: `${(page / 4) * 100}%`, 
            }}
          ></div>
        </div>
        <div className="form-container">
          <div className="body">{PageDisplay()}</div>
          {page !== 4 && (
            <div className="nav-buttons">
              <button
                className="nav-button"
                disabled={page === 0}
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
              >
                Back
              </button>
              <button
                className={`nav-button${page === 3 ? " nav-submit-button" : ""}`}
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
              >
                {page === 3 ? "Finish" : "Skip"}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
