import "./Header.css";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="bgHeader">
      <Navbar />

      <div className="containerHeader">
        <div className="contentHeader">
          <div className="textFirst">Welcome To Our Studio!</div>
          <div className="textSecond">IT'S NICE TO MEET YOU</div>
        </div>

        <div className="btn-yello">
          <button>TELL ME MORE</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
