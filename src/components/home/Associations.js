import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Associations.scss';

import Title from '../other/MiniTitle';
import Paragraph from '../other/text/Paragraph';
import Image from '../other/image/Image';

const assos = [
  { name: "Bureau des élèves", short: "BDE", img: "cuisine.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { name: "Bureau des sports", short: "BDS", img: "cuisine.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
  { name: "Bureau des arts", short: "BDA", img: "cuisine.jpg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
]

export default function Associations(props) {

  var [selected, select] = useState(assos[0])

  return (
    
    <div className="associations">

      <div className="asso-select">
        { assos.map(asso =>
          <div onClick={() => select(asso)} className={"asso-option" + (asso === selected ? " selected" : "")} key={asso.name}>
            <img className="asso-option-background" src={"/images/" + asso.img} alt={asso.name}/>
            <div className="asso-option-title">{asso.short}</div>
          </div>
        )}
      </div>

      <div className="two-third-section">
        <Paragraph title={selected.name}>{selected.text}</Paragraph>
      </div>
      <div className="third-section">
        <div className="half-section">
          <Image src="/images/cuisine.jpg" alt=""/>
        </div>
        <div className="half-section">
          <Image src="/images/cuisine.jpg" alt=""/>
        </div>
        <div className="half-section">
          <Image src="/images/cuisine.jpg" alt=""/>
        </div>
        <div className="half-section">
          <Image src="/images/cuisine.jpg" alt=""/>
        </div>
      </div>
    </div>
  );
}