import './App.css';
import PreNavbar from './components/PreNavbar';
import NavbarF from "./components/Navbar.js"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.json"
import Footer from "./components/Footer.js"
import PFooter from './components/PFooter';
import Body from './components/body/Body';


function App() {

  return (
    <>
      <PreNavbar />
      <NavbarF />
      <br />
      <Slider start={data.banner.start} />
      <Body/>
      <Body/>
      <Body/>
      <Body/>
      <Footer />
      {/* <PFooter /> */}
    </>
  );
}

export default App;
