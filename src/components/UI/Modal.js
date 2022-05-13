import React from "react";

import "./Modal.css";

function Modal(props) {
  const classes = "wrapper ";
  return <div className={classes}>{props.children}</div>;
}

export default Modal;
