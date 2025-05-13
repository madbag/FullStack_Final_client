import { useState } from "react"; // Import useState
import { useDispatch, useSelector } from "react-redux";
import { logout, changeUsername } from "../redux/userSlicer"; // Import changeUsername action
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditProfile = ({ setOpen }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [newUsername, setNewUsername] = useState(""); // State for the new username
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = async () => {
    await axios.delete(
      `https://ventout.onrender.com/api/users/${currentUser._id}`
    );
    dispatch(logout());
    navigate("/signup");
  };

  const handleChangeUsername = async () => {
    console.log(localStorage.getItem("authToken"));
    try {
      // Make an API request to update the username
      const response = await axios.put(
        `https://ventout.onrender.com/api/users/${currentUser._id}`,
        {
          username: newUsername,
        }
      );
      dispatch(changeUsername(newUsername));
      setNewUsername("");

      console.log("Username updated successfully:", response.data);
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error("Error updating username:", error);
    }
  };

  return (
    <div className="absolute w-full h-full top-0 left-0 bg-transparent flex items-center justify-center">
      <div className="w-[600px] h-[600px] bg-slate-200 rounded-lg p-8 flex flex-col gap-4 relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 cursor-pointer"
        >
          X
        </button>
        <h2 className="font-bold text-xl">Edit Profile</h2>
        <div>
          <input
            type="text"
            placeholder="New Username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <button onClick={handleChangeUsername}>Change Username</button>
        </div>

        {/* <p>Delete Account</p> */}
        <button
          className="bg-red-500 text-white py-2 rounded-full"
          onClick={handleDelete}
        >
          Delete Account
        </button>

        {/* Add input field and button for changing the username */}
      </div>
    </div>
  );
};

export default EditProfile;
