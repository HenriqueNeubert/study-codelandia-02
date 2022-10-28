import React from "react";

export default (props) => {
  const styleText = {
    textAlign: props.alignX || "center",
    color: props.color || "#fff",
  };

  const styleContainer = { backgroundColor: props.background };

  return (
    <section style={styleContainer} class="pt-5 pb-4">
      <div style={styleText} className="container d-flex flex-column py-3">
        <h2>
          { props.title }
        </h2>
        <p>
          { props.description }
        </p>
      </div>
    </section>
  );
};
