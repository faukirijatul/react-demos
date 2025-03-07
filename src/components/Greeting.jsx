import React from "react";

const Greeting = () => {
  const greet = "Hello Fauki";
  return (
    <div>
      <h1>{greet}</h1>
      <p>Date: {new Date().getDate()}</p>
    </div>
  );
};

export default Greeting;
