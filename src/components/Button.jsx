import React from "react";

function Button(props) {
  const Width = props.width;
  return (
    <button className="button" style={{ width: Width }} onClick={props.click}>
      {props.data}
    </button>
  );
}

export default Button;