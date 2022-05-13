import React from "react";
import ReactDOM from "react-dom";

import Card from "../UI/Card";
import Button from "../UI/Button";
import Wrapper from "../Helpers/Wrapper";
import "./ErrorModal.css";

const Backdrop = (props) => {
  return <div onClick={props.validation} className="backdrop" />;
};

const ModalOverlay = (props) => {
  return (
    <Card className="modal">
      <div className="header">
        <h2>{props.message.header}</h2>
      </div>
      <div className="content">
        <p>{props.message.message}</p>
        <Button onClick={props.validation}>Okay</Button>
      </div>
    </Card>
  );
};

function ErrorModal(props) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop validation={props.validation} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay validation={props.validation} message={props.message} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
}

export default ErrorModal;
