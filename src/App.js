import './App.css';
import {
  BrowserRouter as Router,
  Route, Routes
} from "react-router-dom";
import Home from './pages/home';
import PrivacyPolicy from './pages/privacyPolicy';
import Header from './components/Header';
import Footer from './components/Footer';
import TermsOfUse from './pages/termsOfUse';
require('dotenv').config()


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
