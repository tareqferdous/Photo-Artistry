import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState([]);

  const handleBlur = (e) => {
    const user = { ...loginInfo };
    user[e.target.name] = e.target.value;
    setLoginInfo(user);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("clicked");
  };

  console.log(loginInfo);
  return (
    <div>
      <div
        class=" min-h-screen flex justify-center  py-12 px-4 sm:px-6 lg:px-8 bg-gray-500 bg-no-repeat bg-cover relative items-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1525302220185-c387a117886e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
        }}
      >
        <div class="absolute bg-black opacity-60 inset-0 z-0"></div>
        <div class="max-w-md w-full space-y-8 p-10 bg-white rounded-xl z-10">
          <div class="text-center">
            <h2 class="mt-6 text-3xl font-bold text-gray-900">Welcom Back!</h2>
            <p class="mt-2 text-sm text-gray-600">
              Please sign in to your account
            </p>
          </div>

          <form class="mt-8 space-y-6" onSubmit={handleLoginSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div class="relative">
              <div class="absolute right-0 mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <label class="text-sm font-bold text-gray-700 tracking-wide">
                Email
              </label>
              <input
                onBlur={handleBlur}
                name="email"
                class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type=""
                placeholder="mail@gmail.com"
              />
            </div>
            <div class="mt-8 content-center">
              <label class="text-sm font-bold text-gray-700 tracking-wide">
                Password
              </label>
              <input
                onBlur={handleBlur}
                name="password"
                class="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            {/* <div class="flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  class="h-4 w-4 bg-indigo-500 focus:ring-indigo-400 border-gray-300 rounded"
                />
                <label
                  for="remember_me"
                  class="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div class="text-sm">
                <a
                  href="#"
                  class="font-medium text-indigo-500 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div> */}
            <div>
              <button
                type="submit"
                class="w-full flex justify-center bg-indigo-500 text-gray-100 p-3  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                Sign in
              </button>
            </div>

            <div>
              <button
                type="submit"
                class="w-full flex justify-center bg-red-500 text-gray-100 p-3  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-red-600 shadow-lg cursor-pointer transition ease-in duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="mr-1"
                >
                  <path d="M20.283,10.356h-8.327v3.451h4.792c-0.446,2.193-2.313,3.453-4.792,3.453c-2.923,0-5.279-2.356-5.279-5.28	c0-2.923,2.356-5.279,5.279-5.279c1.259,0,2.397,0.447,3.29,1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233	c-4.954,0-8.934,3.979-8.934,8.934c0,4.955,3.979,8.934,8.934,8.934c4.467,0,8.529-3.249,8.529-8.934	C20.485,11.453,20.404,10.884,20.283,10.356z" />
                </svg>
                Continue with Google
              </button>
            </div>

            <p class="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
              <span>Don't have an account?</span>
              <Link
                to="/registration"
                class="text-indigo-500 hover:text-indigo-500no-underline hover:underline cursor-pointer transition ease-in duration-300"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
