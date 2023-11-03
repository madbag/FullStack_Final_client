import React, { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailed } from "../redux/userSlicer";

import { useNavigate, Link } from "react-router-dom";

const URL = process.env.REACT_APP_API_URL;

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("anything");

    dispatch(loginStart());
    try {
      const res = await axios.post(`${URL}/api/auth/signin`, {
        username,
        password,
      });
      console.log(res.data);
      localStorage.setItem("authToken", res.data.token);
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (err) {
      dispatch(loginFailed());
    }
  };

  // const handleSignup = async (e) => {
  //   e.preventDefault();
  //   dispatch(loginStart());

  //   try {
  //     const res = await axios.post("/auth/signup", {
  //       username,
  //       email,
  //       password,
  //     });
  //     dispatch(loginSuccess(res.data));
  //     navigate("/");
  //   } catch (err) {
  //     dispatch(loginFailed());
  //   }
  // };

  return (
    <form className="bg-red-100 flex flex-col py-12 px-8 rounded-lg w-8/12 md:w-6/12 mx-auto gap-10">
      <h2 className="text-3xl font-bold text-center">Sign in to Vent Out</h2>

      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
        className="text-xl py-2 rounded-full px-4"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
        className="text-xl py-2 rounded-full px-4"
      />

      <button
        className="text-xl py-2 rounded-full px-4 bg-pink-500 text-white"
        onClick={handleLogin}
      >
        Sign in
      </button>

      <p className="text-center text-xl">
        Don't have an account?{" "}
        <Link to="/signup">
          <b>Sign up</b>
        </Link>
      </p>
    </form>
  );
};

export default Signin;
