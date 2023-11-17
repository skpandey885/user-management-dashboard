import React from "react";
import "../styles/home.css";
import Base from "../components/Base";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Base>
      <div className="homePage flex items-center justify-center h-screen flex-col m-[-100px]">
        <div
          id="fadeInText"
          className="gap-2 text-5xl text-blue-500 font-logo w-fit"
        >
          user management dashboard
        </div>
        <div className="flex items-center m-5 buttons-section">
          <Link
            to="users/login"
            type="button"
            class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            account creation
          </Link>

          <Link
            to={"/users/details"}
            type="button"
            class="text-white bg-blue-500 hover:bg-blue-500/95 focus:ring-4 focus:outline-none focus:ring-blue-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-blue-500/80 dark:focus:ring-blue-500/40 me-2 mb-2"
          >
            <svg
              class="w-4 h-4 me-2 -ms-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <circle
                  cx="12"
                  cy="6"
                  r="4"
                  stroke="#ffffff"
                  stroke-width="1.5"
                ></circle>{" "}
                <path
                  d="M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634"
                  stroke="#ffffff"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>{" "}
              </g>
            </svg>
            user details
          </Link>
        </div>
      </div>
    </Base>
  );
};

export default Home;
