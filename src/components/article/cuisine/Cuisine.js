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
      <Paragraph>Le Maquis Restaurant : 20 rue de la Méditerranée, 34070, Montpellier</Paragraph>
      <Paragraph>Tropic Addict : 62 rue de l’Aiguillerie, 34000, Montpellier</Paragraph>
      <Paragraph>Rocco et sa mère: 8 rue Plan d'Agde, 34000, Montpellier</Paragraph>
      <Paragraph>Ô délice des saveurs : 12 rue de la Méditerranéé, 34070, Montpellier</Paragraph>
      <Paragraph>L’Original de Sarah : 16 rue Henri Réné, 34000, Montpellier</Paragraph>
      <Paragraph>L'Entrecôte : 3 rue Verdun, 34000, Montpellier</Paragraph>
      <Paragraph>Fresh Burritos: 5 rue Loge, 34000, Montpellier</Paragraph>
      <Paragraph>Thaïzone : 12 rue Boussairolles , 34000, Montpellier</Paragraph>
      <Paragraph>Bioburger : 40 rue Etuves, 34000, Montpellier</Paragraph>
      <Paragraph>IT : 2 rue de Verdun,  34000, Montpellier</Paragraph>
    </Article>
  );
}