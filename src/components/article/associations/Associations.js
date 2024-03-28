import './Associations.scss';
import Article from '../Article';
import Title from '../ArticleTitle';
import Content from '../../home/Associations';
import Video from '../../other/video/Video';

/**
 * Article sur les associations
 */
export default function Associations () {
  return (
    <Article article="associations"> 
      <Title>Nos engagements associatifs</Title>
      <Content/>
      <Video url='./videos/Tomahawk2.mp4' title='Vidéo'/>
    </Article>
  );
}