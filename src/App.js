import './App.css';
import Navbar from './components/Navbar';
import Logo from './assets/images/logo-main.svg'
import Home from './pages/Home';
import Resume from './pages/Resume';
import Pricing from './pages/Pricing';
import ScrollToTop from './components/ScrollToTop'
import {
  Routes,
  Route
} from 'react-router-dom';
import Footer from './components/Footer';
import { Dashboard } from './userPages/Dasboard';
import Contact from './pages/Contact';
import Thanks from './pages/Thanks';
import WebPackage from './pages/WebPackage';
import StandardPackage from './pages/StandardPackage';



function App() {
  return (
    <div>
      <Navbar logo={Logo} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<Thanks />} />
        <Route path="/monthly-special" element={<WebPackage />} />
        <Route path="/standard-deal" element={<StandardPackage />} />
      </Routes>
      <Footer />    
    </div>
  );
}

export default App;
