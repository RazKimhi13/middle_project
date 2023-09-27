import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../../context/userContext";
import "./StepOne.css";
import CheckMark from "../CheckMark/CheckMark";

function StepOne({ setPage, page }) {
  const { loggedUser, setLoggedUser, users, setUsers } =
    useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const [budgetValue, setBudgetValue] = useState(0);
  const handleBudgetChange = (event) => {
    setBudgetValue(event.target.value);
  };
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <div className="form-title">
        <h1>Let's start planning!</h1>
      </div>
      {!isSubmitted ? (
        <>
          <form
            className="my-form"
            onSubmit={handleSubmit(({ budget }) => {
              const updatedUser = { ...loggedUser };
              updatedUser.budget = budget;
              setLoggedUser(updatedUser);
              const currentUserIndex = loggedUser
                ? users.findIndex(
                    (user) => user.username === loggedUser.username
                  )
                : -1;
              if (currentUserIndex !== -1) {
                const newUsers = [...users];
                if (!newUsers[currentUserIndex].budget) {
                  newUsers[currentUserIndex].budget = 0;
                }
                newUsers[currentUserIndex].budget = budget;
                setUsers(newUsers);
                localStorage.setItem("users", JSON.stringify(newUsers));
              }

              // alert("Budget updated!");
              setIsSubmitted(true);
              // setPage((currPage) => currPage + 1);
            })}
          >
            <p className="form-label">Please enter your budget</p>
            <div className="form-input">
              <input
                type="range"
                min="0"
                max="100000"
                placeholder="enter your budget"
                {...register("budget", { required: true })}
                onChange={handleBudgetChange}
              />
            </div>
            <p className="budget-value">{budgetValue + "$"}</p>
            <input type="submit" className="submit-button" />
          </form>
        </>
      ) : (
        <CheckMark />
      )}
    </>
  );
}

export default StepOne;
