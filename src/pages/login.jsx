import React from "react";
import Base from "../components/Base";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as LoginSVG } from "../assets/undraw_secure_login_pdn4.svg";
import { useState } from "react";

const LogIn = () => {
  const navigate = useNavigate();
  const errorMessages = ["Enter a valid email!", "Password cannot be empty!"];

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const [isValid, setIsValid] = useState({
    username: true,
    password: true,
  });

  const handleChange = (e, field) => {
    setIsValid({ ...isValid, [field]: e.target.validity.valid });
    setLoginDetail({ ...loginDetail, [field]: e.target.value });
  };

  const handleReset = () => {
    setLoginDetail({
      username: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    // Validation
    for (const key in loginDetail) {
      let value = loginDetail[key].trim();
      if (value === "") {
        alert("Please fill in all the required information.");
        return;
      }
    }

    if (!isValid.username) {
      return;
    }
  };

  return (
    <Base>
      <div className="flex">
        <div className=" bg-blue-0 pt-[100px] hidden lg:block">
          <LoginSVG height={400} className="mt-[70px]" />
        </div>

        <div className="container mx-auto mt-[100px] border-blue-500">
          <div className="max-w-md mx-auto">
            <div className="text-center">
              <h1 className="my-3 text-3xl font-semibold text-gray-600 ">
                Sign in
              </h1>
              <p className="text-gray-600">Sign in to access your account</p>
            </div>
            <div className="m-7">
              <form action="">
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-600"
                  >
                    User Name
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    value={loginDetail.username}
                    onChange={(e) => handleChange(e, "username")}
                  />

                  {!isValid.username && (
                    <span className="flex items-center mt-1 ml-1 text-xs font-medium tracking-wide text-red-500">
                      {errorMessages[0]}
                    </span>
                  )}
                </div>
                <div className="mb-6">
                  <div className="flex justify-between mb-2">
                    <label htmlFor="password" className="text-sm text-gray-600">
                      Password
                    </label>
                    <Link
                      to="#"
                      className="text-sm text-gray-400 focus:outline-none focus:text-blue-500 hover:text-blue-500 "
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    className="w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
                    value={loginDetail.password}
                    onChange={(e) => handleChange(e, "password")}
                  />
                </div>
                <div className="mb-6">
                  <Link onClick={(e) => handleSubmit(e)}>
                    <button
                      type="submit"
                      className="w-full px-3 py-4 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none hover:bg-blue-600"
                    >
                      Sign in
                    </button>
                  </Link>
                  <button
                    type="reset"
                    onClick={handleReset}
                    className="w-full px-1 py-2 my-2 text-white bg-gray-900 rounded-md focus:bg-gray-800 focus:outline-none hover:bg-gray-800"
                  >
                    Reset
                  </button>
                </div>
                <p className="text-sm text-center text-gray-400">
                  Don't have an account yet?{" "}
                  <Link
                    to="/users/signup"
                    className="text-blue-400 focus:outline-none focus:underline focus:text-blue-500 dark:focus:border-blue-800"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default LogIn;
