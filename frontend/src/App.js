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
import PeopleList from './components/PeopleList';
import "./global.css";

const App = () => {

  return (
    <div className="page-container">
      <Router basename="/gwc-ucsc">
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />  {/* landing page */}
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<UpcomingEvents />} /> 
          <Route path="/people" element={<PeopleList />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

