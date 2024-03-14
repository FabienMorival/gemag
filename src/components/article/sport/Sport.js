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
      <Paragraph></Paragraph>
      <Video src='./videos/Tomahawk2.mp4' title="bidule"/>
    </Article>
    
  );
}