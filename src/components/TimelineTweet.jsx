//page to fetch tweets from all the people user is following

import React, { useEffect, useState } from "react";
import axios from "axios"; //for fetching the data

import { useSelector } from "react-redux"; //store to see who is logged in
import Tweet from "../components/Tweet";

const TimelineTweet = () => {
  const [timeLine, setTimeLine] = useState(null);

  const { currentUser } = useSelector((state) => state.user); //destructured

  // const URL = process.env.http://localhost:8000;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timelineTweets = await axios.get(
          `http://localhost:8000/api/tweets/timeline/${currentUser._id}` //userID in the underscore ID
        );

        setTimeLine(timelineTweets.data);
      } catch (err) {
        console.log("error", err);
      }
    };

    fetchData();
  }, [currentUser._id]);
  // console.log("Hello World");
  console.log("Timeline", timeLine);
  return (
    <div className="mt-6">
      {timeLine &&
        timeLine.map((tweet) => {
          return (
            <div key={tweet._id} className="p-2">
              <Tweet tweet={tweet} setData={setTimeLine} />
            </div>
          );
        })}
    </div>
  );
};

export default TimelineTweet;
