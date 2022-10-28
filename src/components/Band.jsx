import React from "react";

export default (props) => {
  const styleText = {
    justifyContent: props.align || "center",
    color: props.color || "#fff",
  };

  function title()
  {
    if (props.tag === 'p'){
      return <p class="mb-0">{props.title}</p>
    }else {
      return <h1 class={props.class}>{props.title}</h1>
    }  
  }

  const styleContainer = { backgroundColor: props.background };

  return (
    <div style={styleContainer}>
      <div style={styleText} className="container d-flex py-3">
        { title() }
      </div>
    </div>
  );
};
