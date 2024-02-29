import './Article.scss';

/**
 * Article 
 */
export default function Article({ article, children }) {
  return (
    <div className={"article article-" + article}>
      { children }
    </div>
  );
}