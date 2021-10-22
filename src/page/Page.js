import Header from "../component/Header";
import Service from "../component/Service";
import OurPortfolio from "../component/OurPortfolio";
import About from "../component/About";
import Contact from "../component/Contact";
import PopUp from "../component/PopUp";
const Page = () => {
  return (
    <div>
      <Header />
      <Service />
      <OurPortfolio />
      <About />
      <Contact />
      {/* <PopUp /> */}
    </div>
  );
};
export default Page;
