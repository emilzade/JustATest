import React from "react";
import "./teachingareas.css";

function Teachingareas() {
  return (
    <div className="page2-main-container">
      <div className="page2-header">Tədris Sahələri</div>
      <div className="page2-text">
        İnformasiya Texnologiyaları sahəsində bugünün və gələcəyin ən tələb
        edilən istiqamətləri
      </div>
      <div className="page2-box-container">
        <div className="page2-box">
          <p className="page2-box-text">Coding</p>
          <div className="page2-box-hover">
            <div className="page2-box-hover-right">oding</div>
            <a href="#" className="page2-box-hover-button">
              Coding kursuna yazılmaq üçün kliklə
            </a>
          </div>
          <img src={require("../img/coding.png")} />
        </div>
        <div className="page2-box">
          <p className="page2-box-text">Design</p>
          <div className="page2-box-hover">
            <div className="page2-box-hover-right">esign</div>
            <a href="#" className="page2-box-hover-button">
              Design kursuna yazılmaq üçün kliklə
            </a>
          </div>
          <img src={require("../img/design.jpg")} />
        </div>
        <div className="page2-box">
          <p className="page2-box-text">Marketing</p>
          <div className="page2-box-hover">
            <div className="page2-box-hover-right"> arketing</div>
            <a href="#" className="page2-box-hover-button">
              Marketing kursuna yazılmaq üçün kliklə
            </a>
          </div>
          <img src={require("../img/dmarketing.png")} />
        </div>
        <div className="page2-box">
          <p className="page2-box-text">Network</p>
          <div className="page2-box-hover">
            <div className="page2-box-hover-right">etwork</div>
            <a href="#" className="page2-box-hover-button">
              Network kursuna yazılmaq üçün kliklə
            </a>
          </div>
          <img src={require("../img/network.jpg")} />
        </div>
      </div>
    </div>
  );
}
export default Teachingareas;
