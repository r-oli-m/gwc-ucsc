import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Welcome from './components/Welcome';
import About from './components/About';
import Contact from './components/Contact';
import UpcomingEvents from './components/UpcomingEvents';
import Resources from './components/Resources';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />  {/* landing page */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<UpcomingEvents />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

