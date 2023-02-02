import './App2.css';
import Header from './Components2/Header/Header';
import Signup from './Components2/SignUp/Signup';
import Faq from './Components/FAQ/Faq';
import Social from './Components2/Social/Social';
import Footer from './Components/Footer/Footer';

function App2() {
  return (
    <div className="App2">
    <Header/>
    <Signup/>
    <Faq/>
    <Social/>
    <Footer/>
    </div>
  );
}

export default App2;