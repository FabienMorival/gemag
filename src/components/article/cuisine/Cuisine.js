import './Cuisine.scss';
import Article from '../Article';
import Title from '../ArticleTitle';
import Paragraph from '../../other/text/Paragraph';
import Video from '../../other/video/Video';


/**
 * Article sur la cuisine
 */
export default function Cuisine () {
  return (
    <Article article="cuisine"> {/* Utilise l'architecture de base des articles */} 
    <Title>A la découverte des 10 restos coup de coeur</Title>
    <Paragraph><b>Bouchra</b>, passionnée de cuisine et <b>Safiatou</b>, dénicheuse de bonnes adresses, ont réuni leur passion pour vous faire découvrir leur top 10 des meilleurs restaurants de Montpellier. Ce choix se basent sur l’aspect culturel des plats proposés au sein de ces restaurants à des prix abordables ; idéal pour les étudiants. Si vous êtes à la recherche d’un repas délicieux, copieux avec des saveurs africaines, asiatique ou orientales ; vous prendrez goût à cette sélection.</Paragraph>
    <Video url='./videos/Tomahawk2.mp4' title='Vidéo'/>
    <div className='trait'/>
      {/* contenu */}
    </Article>
  );
}