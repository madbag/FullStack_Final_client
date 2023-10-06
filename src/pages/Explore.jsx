import React from "react";
import ExploreTweets from "../components/ExploreTweets";
import LeftSidebar from "../components/LeftSidebar";
import RightSidebar from "../components/RightSideBar";

import { useSelector } from "react-redux";
import Signin from "./SignIn";

const Explore = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <>
      {!currentUser ? (
        <Signin/>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="px-6">
            <LeftSidebar />
          </div>
          <div className="col-span-2 border-x-2 border-t-slate-800 px-6">
            <ExploreTweets />
          </div>
          <div className="px-6">
            <RightSidebar />
          </div>
        </div>
      )}
    </>
  );
};

export default Explore;