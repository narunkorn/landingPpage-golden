import "./OurPortfolio.css";
const OurPortfolio = () => {
  return (
    <div className="containerOur" id="Portfolio">
      <div className="contentOur">
        <div className="texttOur">
          <h1>OUR PORTFOLIO</h1>
          <p>lorem ipsum dolor sit amet, consectetur adip</p>
        </div>

        <div className="imageGroup">
          <div className="image">
            <img src="pic/image-1.png" />
            <h4>Ebony & Ivory</h4>
            <p>Branding</p>
          </div>
          <div className="image">
            <img src="pic/image-2.png" />
            <h4>Smart Stationary</h4>
            <p>Print Design</p>
          </div>
          <div className="image">
            <img src="pic/image-3.png" />
            <h4>Smart Stationary</h4>
            <p>Print Design</p>
          </div>
          <div className="image">
            <img src="pic/image-4.png" />
            <h4>Vinyl Recordy</h4>
            <p>Product Mock-Up</p>
          </div>
          <div className="image">
            <img src="pic/image-5.png" />
            <h4>Treehouse Template</h4>
            <p>Web Design</p>
          </div>
          <div className="image">
            <img src="pic/image-6.png" />
            <h4>Treehouse Template</h4>
            <p>Web Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurPortfolio;
