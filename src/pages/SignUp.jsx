import React, { useState } from "react";
import axios from "axios";

import { useDispatch } from "react-redux";
import { loginStart, loginSuccess, loginFailed } from "../redux/userSlicer";

import { useNavigate} from "react-router-dom";



const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const res = await axios.post(`http://localhost:8000/api/auth/signup`, {
        username,
        email,
        password,
      });
      dispatch(loginSuccess(res.data));
      navigate("/signin");
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
      <h2 className="text-3xl font-bold text-center">Sign Up</h2>

      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="username"
        className="text-xl py-2 rounded-full px-4"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="email"
        required
        className="text-xl py-2 rounded-full px-4"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="password"
        className="text-xl py-2 rounded-full px-4"
      />

      <button
        onClick={handleSignup}
        className="text-xl py-2 rounded-full px-4 bg-pink-500 text-white"
        type="submit"
      >
        Sign up
      </button>
    </form>
  );
};

export default Signup;
