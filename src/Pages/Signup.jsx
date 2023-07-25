import React from "react";
import AuthLayout from "../Components/Layout/AuthLayout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Signup() {
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user]);

  return (
    <div className="font-inter h-screen flex items-center justify-center">
      <AuthLayout signUp={true} />
    </div>
  );
}

export default Signup;
