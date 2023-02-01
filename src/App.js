import './App.css';
import About from './Components/About/About';
import Brand from './Components/Brand/Brand';
import Discover from './Components/Discover/Discover';
import Faq from './Components/FAQ/Faq';
import Footer from './Components/Footer/Footer';
import Invest from './Components/Invest/Invest';
import Learn from './Components/Learn/Learn';
import Navbar from './Components/Navbar/Navbar';
import Product from './Components/Product/Product';
import Testimonial from './Components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Brand/>
      <Discover/>
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
