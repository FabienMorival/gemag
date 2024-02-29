import Nav from './nav/Nav';
import './App.scss';

/**
 * App - Contient la globalité d'application
 */
export default function App() {
  return (
    <div className="app">
      <div>
      <img src="/image/Logo_Gema.png" alt="Logo Gema" className="logoGema" />
      </div>
      <Nav/>
      
    </div>
    
  );
}