import React from "react";

export default (props) => {
  const styleText = {
    justifyContent: props.align || "center",
    color: props.color || "#fff",
  };

  const styleContainer = { backgroundColor: props.background };

  return (
    <div style={styleContainer}>
      <div style={styleText} className="container d-flex py-3">
        {props.title}
      </div>
    </div>
  );
};
