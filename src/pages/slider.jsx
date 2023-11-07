import React from "react";
import SliderComp from "./comp/sliderComp";
import { useState } from "react";
import MyAlbum from "./books";
import {AiFillCloseCircle} from "react-icons/ai"
import "./slider.css";

const Slider = () => {
  const [isPopup, setisPopup] = useState(false);
  const togglePopup = () => {
    setisPopup(!isPopup);
  };
  return (
    <>
      <SliderComp onClick={togglePopup} />
      {isPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <button className="close-button" onClick={togglePopup}>
             <AiFillCloseCircle/>
            </button>
            <MyAlbum />
          </div>
        </div>
      )}
    </>
  );
};

export default Slider;
