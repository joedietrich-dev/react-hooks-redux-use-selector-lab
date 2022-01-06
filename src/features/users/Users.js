import React from "react";
import { useSelector } from "react-redux";

const selectUsers = (state) => state.users;

function Users() {
  const users = useSelector(selectUsers);
  return (
    <div>
      <ul>
        Users!
        {users.map((user) => (
          <li>{user.username}</li>
        ))}
        Total Users: {users.length}
      </ul>
    </div>
  );
}

export default Users;
