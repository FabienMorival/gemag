import './Article.scss';

/**
 * Affichage commun des articles
 * Ne modifier que ce qui est commun à tous les articles
 */
export default function Article({ article, children }) {
  return (
    <div className={"article article-" + article}>
      {
        /* Appelle le corps principal de chaque article */
        children
      }
    </div>
  );
}