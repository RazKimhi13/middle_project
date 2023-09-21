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
        <h1>lets start planning!</h1>

        <MultiStep
          activeStep={0}
          prevButton={{
            title: "Back",
            style: {
              backgroundColor: "rgb(250, 249, 255)",
              width: "6vw",
              height: "4vh",
              border: "2px solid black",
              borderRadius: "2vw",
              marginLeft: "30px"

            },
          }}
          nextButton={{
            title: "Next",
            style: {
              backgroundColor: "rgb(198, 142, 251)",
              width: "6vw",
              height: "4vh",
              border: "2px solid black",
              borderRadius: "2vw",
              marginLeft: "40px"
            },
          }}
        >
          <StepOne title="Budget" />
          <StepTwo title="Venue" />
          <StepThree title="Step 3" />
          <StepFour title="Step 4" />
        </MultiStep>

      </div>
    </>
  );
}
