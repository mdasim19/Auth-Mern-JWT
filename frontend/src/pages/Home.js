import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setLoggedInUser(localStorage.getItem("loggedinuser"));
  }, []);

  const handlelogout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedinuser");
    handleSuccess("User logged out");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };
  return (
    <div>
      <h1>Welcome {loggedInUser}</h1>
      <button onClick={handlelogout}>logout</button>
      <ToastContainer />
    </div>
  );
}

export default Home;
