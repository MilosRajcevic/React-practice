import react from "react";

function NewUser(props) {
  const addNewUserHandler = (newUser) => {
    console.log(newUser);
  };

  return <div onAddNewUser={addNewUserHandler}></div>;
}

export default NewUser;
