import { useForm } from "react-hook-form";
import { useCreditCardValidator, images } from "react-creditcard-validator";
import "./StepFour.css";
import { UserContext } from "../../../../context/userContext";
import { useContext } from "react";

const StepFour = ({setPage, page}) => {
  const { loggedUser, setLoggedUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    defaultValues: {
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    },
    criteriaMode: "all",
    shouldFocusError: true,
  });

  const {
    getCardNumberProps,
    getCardImageProps,
    getCVCProps,
    getExpiryDateProps,
    meta: { erroredInputs },
  } = useCreditCardValidator();

  const onSubmit = (data) => {
    console.log(data);
    const updatedUser = { ...loggedUser };
        updatedUser.cardNumber = data.cardNumber;
        updatedUser.cvc = data.cvc;
        updatedUser.expiryDate = data.expiryDate;
        setLoggedUser(updatedUser);
        console.log(loggedUser);
    alert("Payment saved successfully!");
    setPage((currPage) => currPage + 1);

  };

  return (
    <>
      <div className="form-title">
        <h1>Payment information</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="custom-payment-form">
        <main>
          <div className="custom-input-group">
            <svg
              {...getCardImageProps({ images })}
              className="custom-card-image"
            />
            <label htmlFor="cardNumber" className="custom-label">
              Card Number
            </label>
            <input
              {...register("cardNumber", {
                required: "Card Number is required",
                pattern: {
                  value: /^[0-9]{16}$/,
                  message: "Invalid Card Number",
                },
              })}
              className="custom-input"
              id="cardNumber"
            />
            <small className="custom-error-message">
              {errors.cardNumber && errors.cardNumber.message}
            </small>
            <small className="custom-error-message">
              {erroredInputs.cardNumber && erroredInputs.cardNumber}
            </small>
          </div>

          <div className="custom-multi-input">
            <div className="custom-input-group">
              <label htmlFor="expiryDate" className="custom-label">
                Valid Till
              </label>
              <input
                {...register("expiryDate", {
                  required: "Expiry Date is required",
                })}
                className="custom-input"
                id="expiryDate"
              />
              <small className="custom-error-message">
                {errors.expiryDate && errors.expiryDate.message}
              </small>
              <small className="custom-error-message">
                {erroredInputs.expiryDate && erroredInputs.expiryDate}
              </small>
            </div>
          </div>
          <div className="custom-input-group">
            <label htmlFor="cvc" className="custom-label">
              CVC
            </label>
            <input
              {...register("cvc", { required: "CVC is required" })}
              className="custom-input"
              id="cvc"
            />
            <small className="custom-error-message">
              {errors.cvc && errors.cvc.message}
            </small>
            <small className="custom-error-message">
              {erroredInputs.cvc && erroredInputs.cvc}
            </small>
          </div>

          <button type="submit" className="custom-submit-button">
            Submit
          </button>
        </main>
      </form>
    </>
  );
};

export default StepFour;
