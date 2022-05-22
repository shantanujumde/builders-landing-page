import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import LandingPage from './components/LandingPage';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar/>
      <LandingPage/>
      <Footer/>
    </>
  )
}
export default App;
