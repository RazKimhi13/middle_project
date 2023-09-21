// StepOne.js
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../../context/userContext";
import "./StepOne.css";

function StepOne() {
  const { loggedUser, setLoggedUser } = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const [budgetValue, setBudgetValue] = useState(0);
  const handleBudgetChange = (event) => {
    setBudgetValue(event.target.value);
  };

  return (
    <form
      className="my-form"
      onSubmit={handleSubmit(({ budget }) => {
        const updatedUser = { ...loggedUser };
        updatedUser.budget = budget;
        setLoggedUser(updatedUser);
        alert("Budget updated!");
      })}
    >
      <p className="form-label">Please enter your budget</p>
      <div className="form-input">
        <input
          type="range"
          min="0"
          max="10000"
          placeholder="enter your budget"
          {...register("budget", { required: true })}
          onChange={handleBudgetChange}
        />
      </div>
      <p className="budget-value">{budgetValue + "$"}</p>
      <input type="submit" className="submit-button" />
    </form>
  );
}

export default StepOne;
