import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import Blog from './components/blog/blog';
import About from './components/about/about';
import Home from './components/home/home';
import ConstructionLoan from './components/ConstructionLoan/ConstructionLoan';
import NriLoan from './components/NriLoan/NriLoan';
import SalariedLoan from './components/SalariedLoan/SalariedLoan';
import SelfLoan from './components/SelfLoan/SelfLoan';
import PropertyLoan from './components/PropertyLoan/PropertyLoan';
import RenovationLoan from './components/RenovationLoan/RenovationLoan';
import House from './components/landing/landing';
import DialogBox from './components/DialogBox/DialogBox';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<House/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/dialog" element={<DialogBox/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/home-construction-loan" element={<ConstructionLoan/>} />
        <Route path="/home-loan-nri" element={<NriLoan/>} />
        <Route path="/home-loan-salaried-employee" element={<SalariedLoan/>} />
        <Route path="/home-loan-self-employed" element={<SelfLoan/>} />
        <Route path="/property-loan" element={<PropertyLoan/>} />
        <Route path="/renovation-loan" element={<RenovationLoan/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={<Blog/>} />
        </Routes>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;
