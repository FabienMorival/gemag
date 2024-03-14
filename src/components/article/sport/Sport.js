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
      <Paragraph title="Lorem Ipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
      <Video src='./videos/Tomahawk2.mp4' title="bidule"/>
    </Article>
    
  );
}