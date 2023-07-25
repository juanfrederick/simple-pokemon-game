import React from "react";
import Input from "../Element/Input";
import Button from "../Element/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  usernameChange,
  emailChange,
  passwordChange,
  repeatPasswordChange,
  clearUserInput,
} from "../../features/userInputSlice";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
import useSignup from "../../hooks/useSignup";

function Form({ signUp }) {
  const dispatch = useDispatch();
  const { login, loginError } = useLogin();
  const { signupError, signup } = useSignup();
  const { username, email, password, repeatPassword } = useSelector(
    (store) => store.userInput
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    !signUp
      ? login(username, password)
      : signup(username, email, password, repeatPassword);
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <p className="text-red-400 font-bold">
        {!signUp ? loginError : signupError}
      </p>
      <Input
        id="username"
        text="Username"
        type="text"
        onchange={(e) => {
          dispatch(usernameChange(e.target.value));
        }}
      />
      {signUp && (
        <Input
          id="email"
          text="Email Address"
          type="email"
          onchange={(e) => {
            dispatch(emailChange(e.target.value));
          }}
        />
      )}
      <Input
        id="password"
        text="Password"
        type="password"
        onchange={(e) => {
          dispatch(passwordChange(e.target.value));
        }}
      />
      {signUp && (
        <Input
          id="repeatPassword"
          text="Repeat Password"
          type="password"
          onchange={(e) => {
            dispatch(repeatPasswordChange(e.target.value));
          }}
        />
      )}
      <Button text={!signUp ? "Sign in" : "Sign up"} />
      <div className="flex gap-1">
        <p className="text-sm">
          {!signUp ? "Don't have an account? " : "Have an account? "}
        </p>
        <Link
          to={!signUp ? "/signup" : "/login"}
          onClick={() => {
            dispatch(clearUserInput());
          }}
        >
          <p className="font-bold">{!signUp ? "Sign Up" : "Login"}</p>
        </Link>
      </div>
    </form>
  );
}

export default Form;
