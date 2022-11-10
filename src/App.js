import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
require('dotenv').config()

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
}

export default App;
