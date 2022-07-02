import React, { useState } from "react";
import "./partnersAndSchedule.css";

import HorizontalScroll from "react-scroll-horizontal";

function PartnersAndSchedule() {
  const [scrollOpen, setScrollOpen] = useState(true);
  const child = { width: `300em`, height: `100%` };
  return (
    <div className="p-a-s-main-container">
      <div
        className={
          scrollOpen
            ? "p-a-s-scroll-x-div p-a-s-scroll-x-div-on"
            : "p-a-s-scroll-x-div p-a-s-scroll-x-div-off"
        }
      ></div>

      {/* <div className="p-a-s-inner-container">
        <p className="p-a-s-off-text">
          Partnyor şirkətlərimiz və Təcrübə proqramları ilə bağlı məlumat əldə
          etmək istəyirsiniz ?
        </p>
        <div
          onClick={() => setScrollOpen(!scrollOpen)}
          className="p-a-s-off-button"
        >
          Buraya klikləyin
        </div>
      </div> */}
    </div>
  );
}

export default PartnersAndSchedule;
