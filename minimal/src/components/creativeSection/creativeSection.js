import React, { useState, useEffect } from "react";
import "./creativeSection.css";
import AOS from "aos";
import "aos/dist/aos.css";
function CreativeSection() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [buttons, setButtons] = useState([
    { label: "Buraxılış layihəsi", value: false },
    { label: "Praktiki tədris metodu", value: false },
    { label: "Akademik Transkript", value: false },
  ]);

  const handleButtonsChange =
    ({ buttons, setButtons, handleButtonsChange }) =>
    (label) => {
      const newButtonsState = buttons.map((button) => {
        if (button.label === label) {
          return (button = { label: button.label, value: true });
        }
        return {
          label: button.label,
          value: false,
        };
      });
      setButtons(newButtonsState);
    };

  const [hideCSectionBG, setHideCSectionBG] = useState(0);

  const Specialbuton = ({ buttons, setButtons, handleButtonsChange }) => {
    return (
      <>
        {buttons.map((button, index) => (
          <button
            key={`${button.label}-${index}`}
            onClick={() => {
              handleButtonsChange({ buttons, setButtons })(button.label);
              setHideCSectionBG(hideCSectionBG + 1);
            }}
            className="c-section-left-side-button"
          >
            {button.label.toUpperCase()}
          </button>
        ))}
      </>
    );
  };
  return (
    <div className="c-section-main-container">
       <p className="c-section-header">ÜSTÜNLÜKLƏRİMİZ</p>
      <div className="c-section-inner-container">
        <div className="c-section-left-side">
          <div className="c-section-left-side-buttons">
            <Specialbuton {...{ buttons, setButtons, handleButtonsChange }} />
          </div>
        </div>
        <div className="c-section-right-side">
          {hideCSectionBG == 0 ? (
            <div className={"c-section-right-side-img-active"}>
              <img src={require("../img/csection5.jpg")} />
            </div>
          ) : null}
          {buttons[0].value && (
            <div data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500" className={"c-section-right-side-img"}>
              <img src={require("../img/csection1.jpg")} />
            </div>
          )}
          {buttons[1].value && (
            <div data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500" className={"c-section-right-side-img"}>
              <img src={require("../img/csection2.jpg")} />
            </div>
          )}
          {buttons[2].value && (
            <div data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500" className={"c-section-right-side-img"}>
              <img src={require("../img/csection3.jpg")} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreativeSection;
