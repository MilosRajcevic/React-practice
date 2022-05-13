import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import Modal from "./components/UI/Modal";
import UsersList from "./components/Users/UsersList";

function App() {
  const EMPTY_ARR = [];

  const [users, setNewUser] = useState(EMPTY_ARR);

  const addNewUserHandler = (newUser) => {
    setNewUser(() => [...users, newUser]);
  };

  return (
    <Modal>
      <AddUser onAddNewUser={addNewUserHandler} />
      <UsersList users={users} />
    </Modal>
  );
}

export default App;
