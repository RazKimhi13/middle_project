import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";
import "./Admin.css"


function Admin() {
  const { users } = useContext(UserContext);

  return (
    <>
      <h1>Admin</h1>
      <div class="grid-container-admin">
        {users.map((user) => (
          <div class="grid-item-admin">
            <p key={user.username}>Username: {user.username}</p>
            <p key={user.password}>Password: {user.password}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Admin;
