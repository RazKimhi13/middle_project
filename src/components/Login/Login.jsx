import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/userContext";
import "./Login.css"; 

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { login } = useContext(UserContext);

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit(login)}>
        <input
          type="text"
          placeholder="Username"
          {...register("username", { required: true })}
          className="input-field"
        />
        <input
          type="password"
          placeholder="Password"
          {...register("password", { required: true })}
          className="input-field"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
