import Nav from './nav/Nav';
import Footer from './footer/Footer';
import './App.scss';

/**
 * App - Contient la globalité de l'application
 */
export default function App() {
  return (
    <div className="app">
      <Nav/>
      <Footer/>
    </div>
  );
}