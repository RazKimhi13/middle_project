import React, { useContext } from "react";
import { Link } from "react-router-dom"; 
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/userContext";
import "./Register.css";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { createNewUser } = useContext(UserContext);

  return (
    <div className="register-container">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit(createNewUser)}>
        <input
          type="text"
          placeholder="Username"
          className="input-field"
          {...register("username", { required: true })}
        />
        <input
          type="password"
          placeholder="Password"
          className="input-field"
          {...register("password", { required: true })}
        />
        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <Link to="/login">Login here</Link>
      </p>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Register;
