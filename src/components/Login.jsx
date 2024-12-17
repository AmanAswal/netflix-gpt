import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(true);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);

  const toggleSignUpForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // validate the form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_large.jpg"
          alt="netflix_bg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 p-12 absolute bg-black bg-opacity-80 my-36 mx-auto left-0 right-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-4 my-4 w-full bg-gray-600 bg-opacity-50 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          ref={email}
          className="p-4 my-4 w-full bg-gray-600 bg-opacity-50 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="p-4 my-4 w-full bg-gray-600 bg-opacity-50 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg py-2 ">{errorMessage}</p>
        <button
          type="submit"
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignUpForm}>
          <span className="text-gray-400">
            {isSignInForm ? "New to Netflix? " : "Already registered? "}{" "}
          </span>
          <span className="font-bold cursor-pointer hover:underline">
            {isSignInForm ? "Sign Up now " : "Sign In now "}
          </span>
          .
        </p>
      </form>
    </div>
  );
};

export default Login;
