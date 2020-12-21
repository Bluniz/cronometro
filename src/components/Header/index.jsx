import "./style.css";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTime } from "../../utils/index";

const Header = () => {
  const location = useLocation();
  const [data, setData] = useState("");

  useEffect(() => {
    let interval = setInterval(() => {
      setData(getTime());
    }, 0);

    return function cleanUp() {
      clearInterval(interval);
    };
  }, [data]);

  return (
    <header className="header">
      <div className="menu">
        <div
          className={
            location.pathname === "/" ? "menu-item selected" : "menu-item"
          }
        >
          <Link to="/">Cronometro</Link>
        </div>
        <div
          className={
            location.pathname === "/timer" ? "menu-item selected" : "menu-item"
          }
        >
          <Link to="/timer">Timer</Link>
        </div>
      </div>
      <div className="clock">
        <span>{data}</span>
      </div>
    </header>
  );
};

export default Header;
