import './Cuisine.scss';
import Article from '../Article';
import Title from '../ArticleTitle';
import Video from '../../other/video/Video';


/**
 * Article sur la cuisine
 */
export default function Cuisine () {
  return (
    <Article article="cuisine"> {/* Utilise l'architecture de base des articles */} 
    <Title>Restauration</Title>
    <Video url='./videos/Tomahawk2.mp4' title='Vidéo'/>
    <div className='trait'/>
      {/* contenu */}
    </Article>
  );
}