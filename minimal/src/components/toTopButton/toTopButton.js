import React, { useEffect, useState } from "react";
import "./toTopButton.css";

function ToTopButton() {
  const [offsetY, setOffsetY] = useState(0);
  const handeScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handeScroll);
    return () => window.removeEventListener("scroll", handeScroll);
  }, []);
  return (
    <div className="toTopButton-outer">
      {offsetY > 30 ? (
        <div onClick={()=>{document.documentElement.scrollTop = 0}} className="toTopButton-inner toTopButton-inner-on">
            <img src={require("../img/arrowUp.png")}/>
        </div>
      ) : (
        <div className="toTopButton-inner toTopButton-inner-off"></div>
      )}
    </div>
  );
}
export default ToTopButton;
