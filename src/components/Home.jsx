import React from "react";
// import App1 from "../Apps/App1";
// import App2 from "../Apps/App2";

function Home() {
  // const handleApp1 = ()=>{
  //   // window.open("http://localhost:3001/app1")

  //   window.open("http://localhost:3005")
  // }
  // const handleApp2 = ()=>{
  //   window.open("http://localhost:3002/app2")
  //   // return <App2/>
  // }
  // const handleApp3 = ()=>{
  //   window.open("http://localhost:3003/app3")
  // }
  // const handleApp4 = ()=>{
  //   window.open("http://localhost:3004/app4")
  // }

  // const token = JSON.parse(localStorage.getItem("authData"))?.accessToken;
  // console.log(token);

  return (
    <>
      <div className="container" style={{ padding: "20px" }}>
        <h1>This is Home Page </h1>
        <p>You are logged In that's why u can see it </p>
        {/* <div>
          <a
            href={`#`}
            target="_blank"
            referrerPolicy="no-referrer"
            style={{ padding: "15px", margin: "10px" }}
          >
            App 1
          </a>
          <a
            href={`#`}
            target="_blank"
            referrerPolicy="no-referrer"
            style={{ padding: "15px", margin: "10px" }}
          >
            App 2
          </a>
          <a style={{ padding: "15px", margin: "10px" }}>App 3</a>
          <a style={{ padding: "15px", margin: "10px" }}>App 4</a>
        </div> */}
      </div>
    </>
  );
}

export default Home;
