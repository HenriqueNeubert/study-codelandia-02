import BannerImage from "../../../images/banner.svg";
import React from "react";
import "./Banner.scss";

export default (props) => {
  const styleAlignX = { 
    justifyContent: props.alignX || "center", 
    textAlign: props.alignX || "center" 
  };
  const styleAlignY = { alignSelf: props.alignY || "center" };
  const color = { color: props.color };
  return (
    <>
      <section className="w-100 d-flex position-relative main-banner">
        <img
          className="w-100 h-100 position-absolute start-0 end-0 top-0 bottom-0 zIndex-1"
          src={BannerImage}
          alt=""
        />
        <div className="container zIndex-2" style={styleAlignY}>
          <div className="d-flex" style={styleAlignX}>
            <div className="d-flex flex-column col-lg-6 col-9">
              <h2 style={color}>{props.title}</h2>
              <p style={color}>{props.description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
