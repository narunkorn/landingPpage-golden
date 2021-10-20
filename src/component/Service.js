import "./Service.css";
import { BsFillBasket3Fill } from "react-icons/bs";
import {
  MdOutlineSecurity,
  MdOutlineDesktopAccessDisabled,
} from "react-icons/md";

const Service = () => {
  return (
    <div className="containerService" id="service">
      <div className="contentService">
        <div className="titleService">
          <h1>Service</h1>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>
        <br />
        <div className="discriptionsService">
          <div>
            <BsFillBasket3Fill
              style={{ width: "50px", height: "50px", color: "#fccb00" }}
            />
            <h3>E-commerce</h3>
            <p>
              lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
              amet, consectetur adip{" "}
            </p>
          </div>
          <div>
            <MdOutlineDesktopAccessDisabled
              style={{ width: "50px", height: "50px", color: "#fccb00" }}
            />
            <h3>Responsive Web</h3>
            <p>
              lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
              amet, consectetur adip{" "}
            </p>
          </div>
          <div>
            <MdOutlineSecurity
              style={{ width: "50px", height: "50px", color: "#fccb00" }}
            />
            <h3>Web-Security</h3>
            <p>
              lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
              amet, consectetur adip{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
