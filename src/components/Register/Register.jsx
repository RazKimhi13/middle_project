import "./Register.css"
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/userContext";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { createNewUser } = useContext(UserContext);

  return (
    <div className="register-container">
    <form onSubmit={handleSubmit(createNewUser)}>
      <input
        type="text"
        placeholder="Username"
        className="input-field"
        {...register("username", { required: true })}
      />
      <input
        type="text"
        placeholder="Password"
        className="input-field"
        {...register("password", { required: true })}
      />
      <button type="submit" className="submit-button"
      >Submit</button>
    </form></div>
  );
};

export default Register;
