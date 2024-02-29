import './Article.scss';

/**
 * Article 
 */
export default function Article({ render }) {
  return (
    <div className="article">
      { render() }
    </div>
  );
}