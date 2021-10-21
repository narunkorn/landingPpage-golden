import "./OurPortfolio.css";
const OurPortfolio = () => {
  return (
    <div className="containerOur">
      <div className="contentOur">
        <div className="texttOur">
          <h1>OUR PORTFOLIO</h1>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>

        <div className="imageGroup">
          <div className="image">
            <img src="myimg/Image-1.png" alt="img1" />
            <h4>Ebony & Ivory</h4>
            <p>Branding</p>
          </div>
          <div className="image">
            <img src="myimg/Image-2.png" alt="img2" />
            <h4>Smart Stationary</h4>
            <p>Print Design</p>
          </div>
          <div className="image">
            <img src="myimg/Image-3.png" alt="img3" />
            <h4>Smart Stationary</h4>
            <p>Print Design</p>
          </div>
          <div className="image">
            <img src="myimg/Image-4.png" alt="img4" />
            <h4>Vinyl Recordy</h4>
            <p>Product Mock-Up</p>
          </div>
          <div className="image">
            <img src="myimg/Image-5.png" alt="img5" />
            <h4>Treehouse Template</h4>
            <p>Web Design</p>
          </div>
          <div className="image">
            <img src="myimg/Image-6.png" alt="img6" />
            <h4>Treehouse Template</h4>
            <p>Web Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurPortfolio;
