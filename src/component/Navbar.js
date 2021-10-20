import "./Navbar.css";
import { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const close = () => {
    setClick(false);
  };
  return (
    <div className="containerNavbar">
      <div className="contentNavbar">
        <div className="logo">golden</div>
        <ul className={click ? "menu active" : "menu"}>
          <li>
            <a href="#" onClick={close}>
              HOME
            </a>
          </li>
          <li>
            <a href="#service" onClick={close}>
              SERVICE
            </a>
          </li>
          <li>
            <a href="#" onClick={close}>
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#" onClick={close}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" onClick={close}>
              CONTACT
            </a>
          </li>
        </ul>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
