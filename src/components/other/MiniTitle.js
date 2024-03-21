import { Link } from 'react-router-dom';
import './MiniTitle.scss';

export default function MiniTitle(props) {
  return (
      
    <h2 className="mini-title">
      { props.children }
    </h2>
  );
}