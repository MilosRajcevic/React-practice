import React from "react";

import Card from "../UI/Card";

import "./UsersList.css";

function UsersList(props) {
  if (props.users.length === 0) return;
  console.log(props.users);
  return (
    <Card className="users">
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
