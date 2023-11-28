import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [message, setMessage] = useState("You need to login first");
  //   const [response, setResponse] = useState("");

  const handleClick = () => {
    const accessToken = JSON.parse(
      localStorage.getItem("authData")
    )?.accessToken;
    if (!accessToken) {
      setMessage("You need to login first");
      toast(message);
    }
  };

  const navigate = useNavigate();
  const logout = () => {
    if (localStorage.length > 0) {
      localStorage.clear();
      console.log("logout");
      navigate("/login");
      toast("you are logged out");
    } else {
      toast("you are not logged in yet");
    }
  };

  return (
    <>
      <div>
        <nav>
          <Link to="/home" style={{ padding: 20 }} onClick={handleClick}>
            Home
          </Link>
          <Link to="/profile" style={{ padding: 20 }}>
            Profile
          </Link>
          {/* <Link to="/localhost:3001/profile" style={{padding:20}} onClick={handleClick}>Profile</Link> */}
          <Link to="/" style={{ padding: 20 }}>
            About
          </Link>
          <Link to="/contact" style={{ padding: 20 }}>
            Contact
          </Link>
          <Link to="/signup" style={{ padding: 20 }}>
            Sign Up
          </Link>
          <Link to="/login" style={{ padding: 20 }}>
            Login
          </Link>
          <Link to="/external" style={{ padding: 20 }}>
            External
          </Link>

          <button onClick={logout}>Logout</button>
          {/* <p>{response}</p> */}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
