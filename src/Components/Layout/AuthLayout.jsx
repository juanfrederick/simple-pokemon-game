import React from "react";
import Form from "../Fragments/Form";

function AuthLayout({ signUp }) {
  return (
    <div className="flex flex-col gap-5 w-80 p-5">
      <div className="py-3 border-b-2 flex flex-col gap-4">
        <img src="/image/Logo.png" alt="logo" className="w-9" />
        <h1 className="text-3xl font-semibold">
          {!signUp ? "Login" : "Sign Up"}
        </h1>
        {signUp && (
          <p className="text-sm font-semibold">
            Start your journey today to become the best Pokemon Trainer ever
            lived
          </p>
        )}
      </div>
      <Form signUp={signUp} />
    </div>
  );
}

export default AuthLayout;
