import './Dessalement.scss';
import Article from '../Article';
import Title from '../ArticleTitle';
import Paragraph from '../../other/text/Paragraph';
import Video from '../../other/video/Video';
import Image from '../../other/image/Image';


/**
 * Article sur le déssalement
 */
export default function Dessalement () {
  return (
    <Article article="dessalement"> {/* Utilise l'architecture de base des articles */} 
    <Title>De la Mer au Verre</Title>
    <Paragraph title="Introduction">L’eau est un bien indispensable à la vie qui, malgré son abondance sur la terre, n’est pas accessible pour tous. En effet,  2,2 Milliards de personnes dans le monde n’ont pas accès à l’eau salubre. (Source: Unicef, 2024) Chercheurs, entrepreneurs et citoyens tentent de trouver des solutions pour dessaler l’eau de mer  de manière durable. Sur Terre, aujourd'hui 1% de l’eau potable consommée provient du dessalement de l’eau de mer ou d’eaux saumâtres  avec des procédés utilisant des énergies carbonées. 
<br/><br/>A l’heure actuelle, les 2 principaux procédés sont : 
<br/>Les procédés thermiques comme la distillation.
<br/>Les procédés utilisant des membranes comme l'osmose inverse.
</Paragraph>
    <div className='half-section'>
    <Paragraph title="Distillation Thermique">Dans les procédés de distillation, il s'agit de chauffer l'eau de mer pour la vaporiser. La vapeur ainsi produite ne contient pas de sels, il suffit alors de condenser cette vapeur pour obtenir de l'eau douce liquide. Il s'agit en fait d'accélérer le cycle naturel de l'eau. (En effet l'eau s'évapore naturellement des océans, la vapeur s'accumule dans les nuages puis l'eau douce retombe sur terre par les précipitations.) 
<br/>Ce principe de dessalement très simple a été utilisé dès l'Antiquité pour produire de très faibles quantités d'eau douce sur les bateaux.
<br/>Cependant, la distillation présente une consommation énergétique élevée en raison de la chaleur nécessaire pour vaporiser l'eau. La transformation d'un kg d'eau liquide en vapeur à 100 °C requiert environ 2250 kilojoules. Pour minimiser cette consommation, des procédés à multiples effets ont été développés, permettant de réutiliser l'énergie libérée lors de la condensation des vapeurs.
<br/><br/>Deux procédés se partagent le marché du dessalement thermique : le procédé de distillation à détentes étagées (Multi-Stage Flash distillation MSF) et le procédé de distillation à multiples effets (Multi-Effect distillation MED).
</Paragraph>
    </div>
    <div className='quarter-section'>  
    <Image src="/images/dessalement.jpg"></Image>
    </div>
    <div className='third-section image-2'>
      <Image src="/images/dessalement.jpg"/>
    </div>
    <div className='two-third-section'>
    <Paragraph title="Osmose & Osmose inverse">
<b>Osmose :</b> 
<br/>La pression osmotique est une force déterminée par une différence de concentration entre deux solutions situées de part et d'autre d'une membrane semi-perméable. 
<br/>Une membrane semi-perméable est une membrane qui laisse passer le solvant ( l’eau) mais pas le soluté (sel). 
<br/><br/><b>Osmose inversé :</b>  
<br/>Dans ce procédé, on applique une pression supérieure à la pression osmotique pour empêcher l’osmose, ce qui  traduit par un flux d'eau dirigé en sens inverse (voir figure schéma 5), c'est-à-dire de la solution concentrée vers la solution diluée : c'est le phénomène d'osmose inverse. 
</Paragraph>
</div>
    </Article>
  );
}

