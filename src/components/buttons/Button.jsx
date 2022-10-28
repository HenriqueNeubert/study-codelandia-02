import React from "react";
import './Buttons.scss'

export default (props) => {
  const styleButton = {
    color: props.color || "#fff",
    backgroundColor: props.backgroundColor || '#212529'
  };
  // alignX="center"
  return (
    <>
    <div className="d-flex justify-content-center p-1">
      <button className="btn" style={styleButton}>
        <p className="mb-0">
          {props.title}
        </p>
      </button>
    </div>
    </>
  );
};
