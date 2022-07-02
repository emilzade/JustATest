import React, { useState, useEffect } from "react";
import "./navbar.css";



function Navbar() {
  const [menuOff, setMenuOff] = useState(false);
  const [mainMenuOff, setMainMenuOff] = useState(true);

  const [offsetY, setOffsetY] = useState(0);
  const handeScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handeScroll);
    return () => window.removeEventListener("scroll", handeScroll);
  }, []);
  var hoveredSection = document.getElementById("hoveredSection");
  var hoveredSectionBox = document.getElementById("hoveredSectionBox");
  var hoveredBoxAnimation = document.getElementById("hoveredBoxAnimation");
  var hoveredSectionTextBox = document.getElementById("hoveredSectionTextBox");
  return (
    <div
      className={
        offsetY < 60
          ? "navbar-main-container"
          : "navbar-main-container-dark navbar-main-container"
      }
    >
      <div className="navbar-inner-container">
        {offsetY < 60 ? (
          <div className="logo">
            <p> Code Academy</p>
          </div>
        ) : (
          <div className="logo">
            <p> Code Design</p>
          </div>
        )}
        <div className="nav-menu">
          <div onClick={() => setMenuOff(!menuOff)} className="nav-menu-div">
            <img className="nav-menu-img" src={require("../img/menu.png")} />
          </div>
        </div>
        <div
          className={
            menuOff
              ? "menu-main-container menu-main-container-on"
              : "menu-main-container menu-main-container-off"
          }
        >
          <div className="menu-main-header">
            <div className="menu-main-p">
              Code <br /> Design
            </div>
            <div
              onClick={() => setMenuOff(!menuOff)}
              className="menu-main-exit"
            >
              <img
                className="menu-main-exit-img"
                src={require("../img/x.png")}
              />
            </div>
          </div>

          <div className="menu-main-body">
            <div
              onClick={() => {
                setMainMenuOff(!mainMenuOff);
              }}
              className="menu-main-a"
            >
              Ümumi Menu
            </div>
            <a className="menu-main-a">Akademiya</a>
            <a className="menu-main-a">Tədris Sahələri</a>
            <a className="menu-main-a">Korporativ</a>
            <a href="contact.html" className="menu-main-a">
              Əlaqə
            </a>
          </div>
          <div className="menu-main-social">
            <div className="menu-main-social-inner">
              <div className="menu-social-div">
                <img src={require("../img/twitter.png")} />
              </div>
              <div className="menu-social-div">
                <img src={require("../img/facebook.png")} />
              </div>
              <div className="menu-social-div">
                <img src={require("../img/instagram.png")} />
              </div>
              <div className="menu-social-div">
                <img src={require("../img/contact.png")} />
              </div>
            </div>
          </div>
          <div className="menu-main-footer">
            <p className="menu-main-footer-p">
              Nizami küçəsi 203B, AF Business House, 2-ci mərtəbə <br /> Tel
              +994 12 310 0113 <br /> Mobil/Whatsapp +994 50 444 2633
            </p>
          </div>
        </div>
        {mainMenuOff ? (
          <div className="main-menu-main-container main-menu-main-container-off">
            <div className="main-menu-inner-container">
              <div className="hover-sections-container">
                <div className="hovering-container">
                  <div
                    onMouseEnter={() => {
                      hoveredSection.style.marginLeft = "0%";
                      hoveredBoxAnimation.style.animationName =
                        "hBoxAnimationEnter";
                      hoveredSectionBox.style.border = "2px solid white";
                      // hoveredSection.style.marginTop = "-300%"
                    }}
                    className="hovering-section"
                  ></div>
                  <div
                    onMouseEnter={() => {
                      hoveredSection.style.marginLeft = "-60vw";
                      // hoveredSection.style.marginTop = "-300%"
                    }}
                    className="hovering-section"
                  ></div>
                  <div
                    onMouseEnter={() => {
                      hoveredSection.style.marginLeft = "-120vw";
                      // hoveredSection.style.marginTop = "-200%"
                    }}
                    className="hovering-section"
                  ></div>
                  <div
                    onMouseEnter={() => {
                      hoveredSection.style.marginLeft = "-180vw";
                      // hoveredSection.style.marginTop = "-100%"
                    }}
                    className="hovering-section"
                  ></div>
                  <div
                    onMouseEnter={() => {
                      hoveredSection.style.marginLeft = "-240vw";
                      // hoveredSection.style.marginTop = "0px"
                    }}
                    className="hovering-section"
                  ></div>
                  <div
                    onMouseEnter={() => {
                      hoveredSection.style.marginLeft = "-300vw";
                      // hoveredSection.style.marginTop = "100%"
                    }}
                    className="hovering-section"
                  ></div>
                  <div
                    onMouseEnter={() => {
                      hoveredSection.style.marginLeft = "-360vw";
                      // hoveredSection.style.marginTop = "200%"
                    }}
                    className="hovering-section"
                  ></div>
                  <div
                    onMouseEnter={() => {
                      hoveredSection.style.marginLeft = "-420vw";
                      // hoveredSection.style.marginTop = "300%"
                    }}
                    className="hovering-section"
                  ></div>
                  <div
                    onMouseEnter={() => {
                      hoveredSection.style.marginLeft = "-480vw";
                      // hoveredSection.style.marginTop = "400%"
                    }}
                    className="hovering-section"
                  ></div>
                  <div className="hovering-container-line"></div>
                </div>
                <div id="hoveredSection" className="hovered-section-container">
                  <div id="hoveredSectionBox" className="hovered-section-box">
                    <div className="hovered-section-box-inner">
                      <div
                        id="hoveredBoxAnimation"
                        className="hovered-box-animation"
                      ></div>
                      <img src={require("../img/hbox11.jpg")} />
                    </div>
                  </div>
                  <div className="hovered-section-box">
                    <div className="hovered-section-box-inner">
                      <img src={require("../img/hbox12.jpg")} />
                    </div>
                  </div>
                  <div className="hovered-section-box">
                    <div className="hovered-section-box-inner">
                      <img src={require("../img/hbox2.jpg")} />
                    </div>
                  </div>
                  <div className="hovered-section-box">
                    <div className="hovered-section-box-inner">
                      <img src={require("../img/hbox14.jpg")} />
                    </div>
                  </div>
                  <div className="hovered-section-box">
                    <div className="hovered-section-box-inner">
                      <img src={require("../img/hbox15.jpg")} />
                    </div>
                  </div>
                  <div className="hovered-section-box">
                    <div className="hovered-section-box-inner">
                      <img src={require("../img/hbox17.jpg")} />
                    </div>
                  </div>
                  <div className="hovered-section-box">
                    <div className="hovered-section-box-inner">
                      <img src={require("../img/hbox18.jpg")} />
                    </div>
                  </div>
                  <div className="hovered-section-box">
                    <div className="hovered-section-box-inner">
                      <img src={require("../img/hbox19.jpg")} />
                    </div>
                  </div>
                  <div className="hovered-section-box">
                    <div className="hovered-section-box-inner">
                      <img src={require("../img/hbox20.jpg")} />
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  setMainMenuOff(!mainMenuOff);
                }}
                className="close-main-menu-container"
              >
                <p>Close menu</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="main-menu-main-container main-menu-main-container-on">
            <div className="main-menu-inner-container">
              <div className="hover-sections-container">
                <div className="hovering-container">
                  <div
                    onMouseEnter={() => {
                      hoveredSection.style.marginLeft = "0%";
                      hoveredBoxAnimation.style.animationName =
                        "hBoxAnimationEnter";
                      // hoveredSection.style.marginTop = "-300%"
                    }}
                    className="hovering-section"
                  ></div>
                  <div
                    onMouseEnter={() => {
                      hoveredSection.style.marginLeft = "-60vw";
                      // hoveredSection.style.marginTop = "-300%"
                    }}
                    
                    className="hovering-section"
                  ></div>
                  <div
                    onMouseEnter={() => {
                      hoveredSection.style.marginLeft = "-120vw";
                      // hoveredSection.style.marginTop = "-200%"
                    }}
                    className="hovering-section"
                  ></div>
                  <div
                    onMouseEnter={() => {
                      hoveredSection.style.marginLeft = "-180vw";
                      // hoveredSection.style.marginTop = "-100%"
                    }}
                    className="hovering-section"
                  ></div>
                  <div
                    onMouseEnter={() => {
                      hoveredSection.style.marginLeft = "-240vw";
                      // hoveredSection.style.marginTop = "0px"
                    }}
                    className="hovering-section"
                  ></div>
                  <div
                    onMouseEnter={() => {
                      hoveredSection.style.marginLeft = "-300vw";
                      // hoveredSection.style.marginTop = "100%"
                    }}
                    className="hovering-section"
                  ></div>
                  <div
                    onMouseEnter={() => {
                      hoveredSection.style.marginLeft = "-360vw";
                      // hoveredSection.style.marginTop = "200%"
                    }}
                    className="hovering-section"
                  ></div>
                  <div
                    onMouseEnter={() => {
                      hoveredSection.style.marginLeft = "-420vw";
                      // hoveredSection.style.marginTop = "300%"
                    }}
                    className="hovering-section"
                  ></div>
                  <div
                    onMouseEnter={() => {
                      hoveredSection.style.marginLeft = "-480vw";
                      // hoveredSection.style.marginTop = "400%"
                    }}
                    className="hovering-section"
                  ></div>
                  <div className="hovering-container-line"></div>
                </div>
                <div id="hoveredSection" className="hovered-section-container">
                  <div className="hovered-section-box">
                    <div
                      id="hoveredSectionTextBox"
                      className="hovered-section-text-box"
                    >
                      Creativity
                    </div>
                    <div className="hovered-section-box-inner">
                      <div
                        id="hoveredBoxAnimation"
                        className="hovered-box-animation"
                      ></div>
                      <img src={require("../img/hbox11.jpg")} />
                    </div>
                  </div>
                  <div className="hovered-section-box">
                    <div
                      id="hoveredSectionTextBox"
                      className="hovered-section-text-box"
                    >
                      Coding
                    </div>
                    <div className="hovered-section-box-inner">
                      <img src={require("../img/hbox12.jpg")} />
                    </div>
                  </div>
                  <div className="hovered-section-box">
                    <div
                      id="hoveredSectionTextBox"
                      className="hovered-section-text-box"
                    >
                      Design
                    </div>
                    <div className="hovered-section-box-inner">
                      <img src={require("../img/hbox2.jpg")} />
                    </div>
                  </div>
                  <div className="hovered-section-box">
                    <div
                      id="hoveredSectionTextBox"
                      className="hovered-section-text-box"
                    >
                      Networking
                    </div>
                    <div className="hovered-section-box-inner">
                      <img src={require("../img/hbox14.jpg")} />
                    </div>
                  </div>
                  <div className="hovered-section-box">
                    <div
                      id="hoveredSectionTextBox"
                      className="hovered-section-text-box"
                    >
                      Marketing
                    </div>
                    <div className="hovered-section-box-inner">
                      <img src={require("../img/hbox15.jpg")} />
                    </div>
                  </div>
                  <div className="hovered-section-box">
                    <div
                      id="hoveredSectionTextBox"
                      className="hovered-section-text-box"
                    >
                      Interest
                    </div>
                    <div className="hovered-section-box-inner">
                      <img src={require("../img/hbox17.jpg")} />
                    </div>
                  </div>
                  <div className="hovered-section-box">
                    <div
                      id="hoveredSectionTextBox"
                      className="hovered-section-text-box"
                    >
                      New World
                    </div>
                    <div className="hovered-section-box-inner">
                      <img src={require("../img/hbox18.jpg")} />
                    </div>
                  </div>
                  <div className="hovered-section-box">
                    <div
                      id="hoveredSectionTextBox"
                      className="hovered-section-text-box"
                    >
                      Analog
                    </div>
                    <div className="hovered-section-box-inner">
                      <img src={require("../img/hbox19.jpg")} />
                    </div>
                  </div>
                  <div className="hovered-section-box">
                    <div
                      id="hoveredSectionTextBox"
                      className="hovered-section-text-box"
                    >
                      Electron
                    </div>
                    <div className="hovered-section-box-inner">
                      <img src={require("../img/hbox20.jpg")} />
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={() => {
                  setMainMenuOff(!mainMenuOff);
                }}
                className="close-main-menu-container"
              >
                <p>Close menu</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
