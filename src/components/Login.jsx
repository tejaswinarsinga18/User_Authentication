import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import "../styles/SignUp.css";
import UserPool from "./UserPool";

function Login(props) {
  const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [showMsg, setShowMsg] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = new CognitoUser({
      Username: username,
      Pool: UserPool,
    });

    setShowMsg(true);
    // console.log(username);
    // console.log(password);

    const authDetails = new AuthenticationDetails({
      Username: username,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSuccess: ", data);
        toast.success("Successfully Logged in");
        // props.setIsLoggedIn(true);
        console.log(typeof data);

        const accessToken = data.getAccessToken().getJwtToken();
        const idToken = data.getIdToken().getJwtToken();
        const refreshToken = data.getRefreshToken().getToken();
        const email = data.getIdToken().decodePayload()?.email;

        const authData = { accessToken, idToken, refreshToken, email };
        localStorage.setItem("authData", JSON.stringify(authData));
        // setNotification("logged in")
        navigate("/home");

        console.log(email, "new email");
      },
      onFailure: (err) => {
        console.error("onFailure : ", err);
        toast.error(err.message);
      },
      newPasswordRequired: (data) => {
        console.log("newPasswordRequired: ", data);
      },
    });
  };

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit}>
          <h2>Login to your account</h2>
          <label htmlFor="">
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label htmlFor="">
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit" className="signUpBtn">
            Login
          </button>
        </form>
      </div>
      {/* } */}
    </>
  );
}

export default Login;
