import { useState } from "react";
import { setUser } from "../features/userSlice";
import { clearUserInput } from "../features/userInputSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const [signupError, setSignupError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signup = async (username, email, password, repeatPassword) => {
    try {
      setSignupError(null);

      const usernameRes = await fetch(
        `http://localhost:3000/user?username=${username}`
      );
      const usernameData = await usernameRes.json();

      const emailRes = await fetch(`http://localhost:3000/user?email=${email}`);
      const emailData = await emailRes.json();

      if (usernameData.length > 0) {
        throw Error("Username already exist!");
      }

      if (emailData.length > 0) {
        throw Error("Email already exist!");
      }

      if (password !== repeatPassword) {
        throw Error("Password not same");
      }

      const postRes = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          basicBall: 0,
          greatBall: 0,
          masterBall: 0,
          wallet: 500,
          pokemonCatched: 0,
          catchAttempts: 0,
        }),
      });

      const postData = await postRes.json();

      dispatch(setUser(postData.email));
      dispatch(clearUserInput());
      localStorage.setItem("user", postData.email);
      navigate("/home");
    } catch (error) {
      setSignupError(error.message);
    }
  };

  return { signupError, signup };
};

export default useSignup;
