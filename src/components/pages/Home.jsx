import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import InfoSection from "../InfoSection/InfoSection";
import { homeObjOne, homeObjTwo, homeObjThree } from "../InfoSection/Data";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";

function Home() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Services />
      <Footer />
    </>
  );
}

export default Home;
