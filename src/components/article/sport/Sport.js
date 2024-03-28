import './Sport.scss';
import Article from '../Article';

import Title from '../ArticleTitle';
import Paragraph from '../../other/text/Paragraph';
import Video from '../../other/video/Video';

/**
 * Article sur le sport
 */
export default function Sport () {
  return (
    <Article article="sport"> 
      <Title>Le Sport</Title>
      <div className='half-section'>
      <Paragraph centered title="Mon Histoire">Je suis Gouly Kéone, né en 2000 à Bordeaux et passionné de foot.
Après pas mal de déménagement, je suis arrivé avec ma famille en région parisienne.
Jouant au foot partout ou je passais, des amateurs de football de mon quartier me remarquent et décident de m'inscrire dans le club de ma ville.
Surclassé dans toutes les catégories de jeunes et performant, j'ai suscité l'intérêt de pas mal centre de pré-formation. 
Suite à une longue période de réflexion de mes parents. On décide de rejoindre Montpellier.
Lorsqu'on est enfant/ado et doué dans un sport, on ne se sent important uniquement au moment ou nous exerçons et n'avons pas la maturité de penser qu'il y d'autres choses plus importantes que notre sport. Et la plupart des gens autour de nous ne pensent qu'à leur intérêt avant tout.
Seul ton niveau sera le critère dans leur prises de décision.
Après pas mal de hauts et énormément de bas, j'ai quitté le club et décidé de rejoindre l'Angleterre après l'obtention de mon bac à l'âge de 18ans. J'ai évolué dans pas mal de club, j'ai essayé de commencer un cursus universitaire mais je n'ai malheureusement pas pu aller plus loin car mon engagement envers mon équipe et les moyens mis à disposition par l'école pour mon apprentissage ne me permettait pas d'étudier efficacement car le foot était ma priorité .
Aujourd'hui, après un passage en Angleterre, Chypre, Grèce et l'Italie je me retrouve en incapacité d'exercer pour un certain moment.
Toujours à la poursuite d'un avenir brillant et ne voulant pas rester à ne rien faire, j'ai décidé de commencer mon cursus universitaire en Bachelor 1.</Paragraph>
</div>
<div className='half-section'>
<Video src='./videos/Tomahawk2.mp4' title="Video"/>
</div>
    </Article>
    
  );
}