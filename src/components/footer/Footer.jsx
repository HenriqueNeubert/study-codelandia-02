import React from "react";
// import "./Header.scss"

export default (props) => {
  const styleText = {
    justifyContent: props.align || "center",
    color: props.color || "#fff",
  };

  const styleContainer = { backgroundColor: props.background };

  return (
    <div style={styleContainer}>
      <div style={styleText} className="container d-flex py-3">
        <p class="mb-0">
          {props.title}
        </p>
      </div>
    </div>
  );
};
