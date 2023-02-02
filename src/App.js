import './App.css';
import About from './Components/About/About';
import Brand from './Components/Brand/Brand';
import Faq from './Components/FAQ/Faq';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Invest from './Components/Invest/Invest';
import Learn from './Components/Learn/Learn';
import Navbar from './Components/Navbar/Navbar';
import Product from './Components/Product/Product';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Brand/>
      <About/>
      <Learn/>
      <Product/>
      <Testimonial/>
      <Faq/>
      <Invest/>
      <Footer/>
    </div>
  );
}

export default App;
