import React from "react";

const Greeting2 = ({ timeOfDay }) => {
  return (
    <div>
      {timeOfDay === "morning"
        ? "Good mornig"
        : timeOfDay === "afternoon"
        ? "Good afternoon"
        : "Not valid"}
    </div>
  );
};

export default Greeting2;
