import './App.css';
import Header from './components/Header';
import Navbar from "./components/Navbar.js"
import Banner from "./components/Banner.js"
import data from "./data/data.json"
import Footer from "./components/Footer.js"
import Slide from './components/Slides';
import MidSlide from './components/MidSlide';
import MidSection from './components/Midsections';


function App() {

  return (
    <>
      <Header />
      <Navbar />
      <Banner />
      <MidSlide electronics={data.products.electronics} />
      <MidSection />
      <Slide
        electronics={data.products.electronics}
        title='Discounts for You'
        timer={false}
        multi={true}
      />
      <Slide
        electronics={data.products.electronics}
        title='Suggested Items'
        timer={false}
        multi={true}
      />
      <Slide
        electronics={data.products.electronics}
        title='Top Selection'
        timer={false}
        multi={true}
      />
      <Slide
        electronics={data.products.electronics}
        title='Recommended Items'
        timer={false}
        multi={true}
      /><br/><br/>
      <Footer/>
    </>
  );
}

export default App;
