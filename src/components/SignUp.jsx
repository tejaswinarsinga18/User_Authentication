import React, { useState } from "react";
import "../styles/SignUp.css";
import toast from "react-hot-toast";
import validator from "validator";
import PasswordChecklist from "react-password-checklist";

import UserPool from "./UserPool";

function SignUp(props) {
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [showMsg, setShowMsg] = useState(true)
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [check, setCheck] = useState(false);

  const handleChangeEmail = (e) => {
    let new_email = e.target.value;
    setEmail(new_email);
    if (!validator.isEmail(new_email)) {
      setMessage("Please, Enter a valid email! ");
    } else {
      setMessage("");
    }
    setError("");
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    let password = e.target.value;
    setPassword(password);
    setCheck(true);
    console.log(check);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCheck(false);
    if (email === "") {
      const message = "Email is empty";
      setError(message);
    } else if (password === "") {
      const message = "Password is empty";
      setError(message);
    } else {
      UserPool.signUp(email, password, [], null, (err, data) => {
        if (err) {
          console.log(err.message);
          setError(err.message);
          return;
        }
        toast(
          "Sign Up request has sent to the admin user Please wait for the admin signup approval You will be notified through mail"
        );

        console.log(data);
      });
    }
  };

  return (
    <>
      <div className="container">
        <form action="" onSubmit={handleSubmit}>
          <h2>Sign Up to your account</h2>

          <div>
            <label
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
              htmlFor=""
            >
              Email{" "}
              <span>
                <p style={{ fontSize: 14, marginLeft: 10 }}>
                  (This will be your username)
                </p>
              </span>
            </label>
          </div>
          <input type="email" value={email} onChange={handleChangeEmail} />
          <div>
            <div style={{ color: "red" }}> {message} </div>
          </div>
          <label htmlFor="">Password</label>
          <input
            type="password"
            value={password}
            onChange={handleChangePassword}
          />

          {check ? (
            <PasswordChecklist
              rules={[
                "capital",
                "specialChar",
                "minLength",
                "lowercase",
                "number",
              ]}
              minLength={8}
              value={password}
              messages={{
                minLength: "The minimum length of the password should be 8.",
                specialChar:
                  "The password should contain at least one special character.",
                number:
                  "The password should contain at least one numeric letter.",
                capital:
                  "The password should contain at least one uppercase letter.",
                lowercase:
                  "The password should contain at least one lowercase letter.",
              }}
            />
          ) : (
            ""
          )}
          {error && <p>{error}</p>}

          <button type="submit" className="signUpBtn">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
