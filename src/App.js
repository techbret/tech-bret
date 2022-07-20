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
import Projects from './pages/Projects';
import Ecommerce from './pages/Ecommerce';
import Scale from './pages/Scale';
import Hobby from './pages/Hobby';
import Growth from './pages/Growth';
import Basic from './pages/Basic';
import Pro from './pages/Pro';
import SEOPackage from './pages/SEOPackage';



function App() {
  return (
    <div>
      <Navbar logo={Logo} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<Thanks />} />
        <Route path="/monthly-special" element={<WebPackage />} />
        <Route path="/standard-deal" element={<StandardPackage />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
        <Route path="/scale" element={<Scale />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/growth" element={<Growth />} />
        <Route path="/basic" element={<Basic />} />
        <Route path="/pro" element={<Pro />} />
        <Route path="/seo-package" element={<SEOPackage />} />
      </Routes>
      <Footer />    
    </div>
  );
}

export default App;
