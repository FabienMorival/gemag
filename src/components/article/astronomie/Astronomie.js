import './Astronomie.scss';
import Article from '../Article';

export default function Astronomie () {
  const render = () => {
    return (
      <div className="article-astronomie">
        {/* content */}
      </div>
    );
  };

  return <Article render={render} />;
};