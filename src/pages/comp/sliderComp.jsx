import React from "react";
import "./slidercomp.css";
import book1 from "/cover1.jpg";
import { AiFillStar } from "react-icons/ai";

const SliderComp = ({onClick}) => {
  return (
    <>
      <div className="outer-box" onClick={onClick}>
        <div className="book">
          <img src={book1} />
          <div className="rating">
            <AiFillStar />
            <p>4.5</p>
          </div>
        </div>
      </div>
      <div className="title">
        <p>Book Title</p>
      </div>
    </>
  );
};

export default SliderComp;
