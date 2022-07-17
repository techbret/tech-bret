import './App.css';
import Navbar from './components/Navbar';
import Logo from './assets/images/logo-main.svg'
import Home from './pages/Home';
import Resume from './pages/Resume';
import {
  Routes,
  Route
} from 'react-router-dom';
import Footer from './components/Footer';



function App() {
  return (
    <div>
      <Navbar logo={Logo} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />    
    </div>
  );
}

export default App;
