import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../ErrorModal/ErrorModal";

import "./AddUser.css";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setErrorMessage] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setErrorMessage({
        header: "Wrong",
        message: "Plesase enter a valid name and age(non-empty values).",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setErrorMessage({
        header: "Invalid input",
        message: "Pelase enter a valid age( > 0)",
      });
      return;
    }

    const formData = {
      name: enteredName,
      age: +enteredUserAge,
      id: Math.trunc(Math.random() * 10000000000000 + 1).toString(),
    };

    props.onAddNewUser(formData);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const closeErrorModalHandler = () => {
    setErrorMessage(null);
  };

  return (
    <Card className="input">
      {error && (
        <ErrorModal validation={closeErrorModalHandler} message={error} />
      )}
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" ref={nameInputRef}></input>
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" ref={ageInputRef}></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
