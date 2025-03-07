import React from "react";

const userList = [
  { id: 1, name: "Fauki", age: 28 },
  { id: 2, name: "Rijatul", age: 25 },
  { id: 3, name: "Hidayah", age: 23 },
];

const UserList = () => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {userList.map(({ id, name, age }) => (
          <li key={id}>
            Name : {name}, Age : {age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
