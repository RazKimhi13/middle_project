import React from "react";
import "./Plan.css";
import MultiStep from "react-multistep";
import StepOne from "./Steps/stepOne/StepOne";
import StepTwo from "./Steps/StepTwo/StepTwo";
import StepFour from "./Steps/StepFour/StepFour";
import StepThree from "./Steps/StepThree/StepThree";

export default function Plan() {
  return (
    <>
      <div className="flex-container">
        <h1>lets start plannig!</h1>

        <MultiStep
          className="multistep-container"
          activeStep={0}
          prevButton={{
            title: "Back",
            style: {
              backgroundColor: "white",
              width: "6vw",
              height: "4vh",
              border: "1px solid white",
              borderRadius: "2vw",
            },
          }}
          nextButton={{
            title: "next",
            style: {
              backgroundColor: "rgb(198, 142, 251)",
              width: "6vw",
              height: "4vh",
              border: "2px solid white",
              borderRadius: "2vw",
            },
          }}
        >
          <StepOne title="wedding hall" />
          <StepTwo title="Step 2" />
          <StepThree title="Step 3" />
          <StepFour title="Step 4" />
        </MultiStep>
      </div>
    </>
  );
}
