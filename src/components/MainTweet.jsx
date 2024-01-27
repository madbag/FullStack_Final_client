import React, { useState } from "react";
import TimelineTweet from "../components/TimelineTweet";

import { useSelector } from "react-redux";
import axios from "axios";

// const URL = process.env.http://localhost:8000;

const MainTweet = () => {
  const [tweetText, setTweetText] = useState("");

  const { currentUser } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const submitTweet = await axios.post("https://ventout1.onrender.com/api/tweets", {
        userId: currentUser._id,
        description: tweetText,
      });

      console.log("Tweet submitted successfully:", submitTweet);

      window.location.reload(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {currentUser && (
        <p className="font-bold pl-2 my-2">{currentUser.username}</p>
      )}

      <form className="border-b-2 pb-6">
        <textarea
          onChange={(e) => setTweetText(e.target.value)}
          type="text"
          placeholder="Say it to the World!!"
          className="bg-red-100 rounded-lg w-full p-2"
        ></textarea>

        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white py-2 px-4 rounded-full ml-auto"
        >
          Vent It
        </button>
      </form>
      <TimelineTweet />
    </div>
  );
};

export default MainTweet;
