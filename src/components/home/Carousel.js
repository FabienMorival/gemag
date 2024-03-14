import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Carousel.scss';

const CAROUSEL_SIZE = 3;

export default function Carousel(props) {

  var [index, setIndex] = useState(0)

  /*useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(1-index)
    }, 1000)

    return () => clearInterval(intervalId);
   
  })*/

  return (
    <div className="article-carousel">
      <div className="carousel-outer">
      <div className="carousel-inner">
      {
        props.articles.map((article, i) => <Slide key={i} visible={i == index || i == (index+1)%props.articles.length || i == (index+2)%props.articles.length} article={article}/>)
      }
      </div>
      <div onClick={() => setIndex(index-1)} className={"carousel-arrow" + (index <= 0 ? " invisible" : "")}>&lt;</div>
      <div onClick={() => setIndex(index+1)} className={"carousel-arrow" + (index >= props.articles.length-CAROUSEL_SIZE ? " invisible" : "")}>&gt;</div>
    </div>
    </div>
  );
}

function Slide(props) {

  return (
    <div className={"article-slide-wrapper" + (props.visible ? "" : " short")}>
      <Link to={props.article.link}>
        <div className="article-slide">
          <img src={"/images/" + props.article.img} alt={props.article.name}/>
        </div>
      </Link>
    </div>
  );
}