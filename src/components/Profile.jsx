import React, { useState } from "react";

const Profile = () => {
  const [user, setUser] = useState({
    name: "Fauki",
    age: 28,
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <p>Name : {user.name}</p>
      <p>Age : {user.age}</p>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
      />
    </div>
  );
};

export default Profile;
