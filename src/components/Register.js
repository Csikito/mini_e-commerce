import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");

  return (
    <div className="h-[75vh]">
      <div class="max-w-lg mx-auto my-14 bg-white p-8 rounded-xl shadow shadow-slate-300">
        <h1 class="text-4xl font-medium">Register</h1>
        <p class="text-slate-500">Hi, {username ? username : "User"} 👋</p>

        <form action="" class="my-10">
          <div class="flex flex-col space-y-5">
            <label for="username">
              <p class="font-medium text-slate-700 pb-2">Username</p>
              <input
                id="username"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter username "
              />
            </label>
            <label for="email">
              <p class="font-medium text-slate-700 pb-2">Email address</p>
              <input
                id="email"
                name="email"
                type="email"
                class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter email address"
              />
            </label>
            <label for="password">
              <p class="font-medium text-slate-700 pb-2">Password</p>
              <input
                id="password"
                name="password"
                type="password"
                class="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                placeholder="Enter your password"
              />
            </label>

            <button class="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span>Register</span>
            </button>
            <p class="text-center">
              Already have an account?{" "}
              <Link
                to="/mini_e-commerce/login"
                class="text-indigo-600 font-medium inline-flex space-x-1 items-center"
              >
                <span> Login </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
