import './Habillage.scss';
import Article from '../Article';

import Title from '../ArticleTitle';
import Paragraph from '../../other/text/Paragraph';
import Video from '../../other/video/Video';

/**
 * Article sur l'habillage
 */
export default function Habillage () {
  return (
    <Article article="habillage"> 
      <Title>Seconde main</Title>
      <div className="half-section">
        <Video src='./videos/Tomahawk2.mp4'/>
      </div>
      <div className="half-section">
        <Paragraph centered title="Titre du post">Du texte plus long et avec des trucs en plus.</Paragraph>
      </div>
      <div className="half-section">
        <Paragraph centered title="Titre du post">Du texte plus long et avec des trucs en plus.</Paragraph>
      </div>
      <div className="half-section">
        <Video src='./videos/Tomahawk2.mp4'/>
      </div>
    </Article>
  );
}