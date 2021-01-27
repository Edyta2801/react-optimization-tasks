import React from "react";
import User from "./User";

function UsersList({ users, onRefresh }) {
  return (
    <div className="users">
      <button ocClick={onRefresh}>refresh</button>
      {users.map((user) => (
        <User key={user.login.uuid} user={user} />
      ))}
    </div>
  );
}
export default UsersList;
