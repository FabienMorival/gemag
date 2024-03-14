import './Habillage.scss';
import Article from '../Article';

/**
 * Article sur l'habillage
 */
export default function Habillage () {
  return (
    <Article article="habillage"> {/* Utilise l'architecture de base des articles */} 
      <div>
        <h1 className="titreRubrique">Titre de la Rubrique</h1>
      </div>
<br></br><br></br><br></br><br></br>
      <div id='flex-container'>
        <div class='flex-items'>
          <video class='videoMilieu' controls>
            <source src="./videos/Tomahawk2.mp4"></source>
          </video>
        </div>
        <div class='flex-items'>
          <h1 className="titrePoste" >Titre du Poste</h1>
          <div class='content'>
            <p>Du texte plus long et avec des trucs en plus.</p>
          </div>
        </div>
      </div>
<br></br><br></br><br></br><br></br>
      <div id='flex-container'>
      <div class='flex-items'>
          <h1 className="titrePoste" >Titre du Poste</h1>
          <div class='content'>
            <p>Du texte plus long et avec des trucs en plus.</p>
          </div>
        </div>
        <div class='flex-items'>
          <video class='videoMilieu' controls>
            <source src="./videos/Tomahawk2.mp4"></source>
          </video>
        </div>
      </div>
<br></br><br></br><br></br><br></br>
      <div id='flex-container'>
        <div class='flex-items'>
          <video class='videoMilieu' controls >
            <source src="./videos/Tomahawk2.mp4"></source>
          </video>
        </div>
        <div class='flex-items'>
          <h1 className="titrePoste" >Titre du Poste</h1>
          <div class='content'>
            <p>Du texte plus long et avec des trucs en plus.</p>
          </div>
        </div>
      </div>
    </Article>
  );
}