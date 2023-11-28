import React from "react";

function External() {
  const handleClick = () => {
    window.location.replace("http://localhost:3001/profile");
  };
  const moveContact = () => {
    window.open("http://localhost:3001/contact");
  };
  return (
    <>
      <div>
        <h1>This is external app</h1>
      </div>
      <button onClick={handleClick}>Move to</button>
      <button onClick={moveContact}>Move to 3001 contact page</button>
    </>
  );
}

export default External;
