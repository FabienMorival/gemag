import { Link } from 'react-router-dom';
import './Back.scss';

export default function Back() {
  return (
    <Link to="/" className="back-home">
      <img src="/images/home.png"/>
    </Link>
  );
}