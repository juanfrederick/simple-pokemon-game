import { useState } from "react";
import { setUser } from "../features/userSlice";
import { clearUserInput } from "../features/userInputSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [loginError, setLoginError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      setLoginError(null);

      const response = await fetch(
        `http://localhost:3000/user?username=${username}`
      );
      const data = await response.json();

      if (data.length === 0) {
        throw Error("Username not found!");
      }

      if (data[0].password !== password) {
        throw Error("Wrong Password!");
      }
      dispatch(setUser(data[0].email));
      dispatch(clearUserInput());
      localStorage.setItem("user", data[0].email);
      navigate("/home");
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return { login, loginError };
};

export default useLogin;
