import './Dessalement+.scss';
import Article from '../Article';
import Title from '../ArticleTitle';
import Paragraph from '../../other/text/Paragraph';
import { Link } from 'react-router-dom';


export default function Dessalementplus () {
    return (
    <Article article="dessalement"> {/* Utilise l'architecture de base des articles */} 
    <Title>Informations supplémentaires sur le Dessalement d'eau de mer</Title>
<Paragraph title="MSF"> 
Le procédé de distillation à détentes étagées (Multi-Stage Flash distillation MSF).
<br/><br/>Le procédé MSF (Multi-Stage Flash) est une distillation à détentes étagées. L'eau est maintenue sous pression et chauffée jusqu'à 120 °C, puis introduite dans une enceinte à pression réduite, où elle subit une détente rapide appelée Flash qui la vaporise instantanément. Une partie de l'eau s'évapore (schéma 2 , voir figure 3) et se condense sur les tubes condenseurs puis est recueillie en tant qu'eau liquide. 

<br/><br/>Ce processus se répète par détentes successives dans plusieurs étages à pressions de plus en plus faibles. L'ébullition s'arrête quand l'eau de mer a atteint la température d'ébullition correspondant à la pression régnant dans l'étage considéré.

Jusqu'à 40 étages peuvent être utilisés dans une unité MSF industrielle. L'eau de mer est chauffée en utilisant la chaleur de condensation de la vapeur d'eau et peut être portée à 120 °C à l'aide de vapeur provenant d'une chaudière ou d'une centrale électrique. Le procédé MSF présente l'avantage de limiter les risques d'entartrage des tubes de chauffe, mais il n'est pas flexible et convient principalement aux grandes capacités de production d'eau dessalée (milliers de m3 / jour).
</Paragraph>
<Paragraph title="MED">Le procédé de distillation à multiples effets (Multi-Effect distillation MED).

<br/><br/>Le procédé MED est une technique de distillation à multiples effets qui utilise l'évaporation de l'eau de mer préchauffée à une température de 70 à 80 °C sous pression réduite. L'évaporation de l'eau a lieu sur une surface d'échange, contrairement au cas du procédé précédent.
<br/><br/>La vapeur ainsi produite dans le 1er effet est condensée pour produire de l'eau douce dans le 2ème effet où règne une pression inférieure, ainsi la chaleur de condensation qu'elle cède permet d'évaporer une partie de l'eau de mer contenue dans le 2ème effet et ainsi de suite (schéma 3, voir figure 4).
<br/><br/>La chaleur nécessaire est fournie par une chaudière ou une eau chaude récupérée. Ainsi seule l'énergie nécessaire à l'évaporation dans le premier effet est d'origine externe. La vapeur produite dans chaque effet condense dans l'effet suivant, évaporant ainsi une partie de l'eau de mer à une pression plus basse. 
<br/><br/>L'énergie principale requise est l'énergie thermique pour la chaudière, mais des chaleurs résiduaires peuvent être utilisées. La compression mécanique de vapeur peut également être employée pour réduire la consommation d'énergie. 
<br/><br/>Toutefois, des précautions doivent être prises pour éviter l'entartrage, notamment par un traitement à l'acide et en limitant la température de tête.
<br/><br/>(À titre d'information, pour comprendre la nécessité de réduire la pression dans les systèmes multiples-effets ou à détentes étagées, (schéma 4) donne l'évolution de la température d'ébullition de l'eau en fonction de la pression)
</Paragraph>
<Paragraph title="Osmose">
La pression osmotique est une force déterminée par une différence de concentration entre deux solutions situées de part et d'autre d'une membrane semi-perméable. 
Une membrane semi-perméable est une membrane qui laisse passer le solvant mais pas le soluté.
L'osmose et les forces osmotiques favorisent la diffusion des substances à travers la membrane, en milieu interne, le solvant passant de la solution la moins concentrée vers la plus concentrée.

<br/><br/>Pour calculer une pression osmotique, la formule de calcul est basée sur : 
P osmotique = nRT/V, où P osmotique = kPa = atmosphères. 
La pression osmotique d'une solution diluée obéit à une relation de même forme que la loi des gaz parfaits. (PV=NRT) 
</Paragraph>
<Paragraph title="Osmose Inverse">L'osmose inverse est un procédé de séparation de l'eau et des sels dissous au moyen de membranes semi-perméables sous l'action de la pression (54 à 80 bars pour le traitement de l'eau de mer). Ce procédé fonctionne à température ambiante et n'implique pas de changement de phase. Les membranes polymères utilisées laissent passer les molécules d'eau et ne laissent pas passer les particules, les sels dissous, les molécules organiques de 10-7 mm de taille.
L'énergie requise par l'osmose inverse est uniquement celle électrique consommée principalement par les pompes haute pression (pression hydrostatique).
La teneur en sels de l'eau osmosée est de l'ordre de 0,5 g.L-1.
Une augmentation de la pression au-delà de la pression osmotique va se traduire par un flux d'eau dirigé en sens inverse du flux osmotique (voir figure), c'est-à-dire de la solution concentrée vers la solution diluée : c'est le phénomène d'osmose inverse.
<br/><br/>Pour les solutions suffisamment diluées, la pression osmotique notée π peut être calculée d'après la loi de Van't Hoff :

        <br/>π = i x C x R x T

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Où π=ρ gh

<br/>I est le nombre d'ions dissociés dans le cas d'un électrolyte,
C est la concentration en sels en mol.m-3
R est la constante des gaz parfaits R = 8,314 J.mol-1.K-1
T est la température absolue de la solution en Kelvin.               

Application : La pression osmotique d'une eau à 20°C contenant 35 g de chlorure de sodium par litre vaut : 

π = 2 x (35*103/58,5) x 8,314 x 293 = 29,14 x 105 Pa = 29,14 bar.
</Paragraph>
</Article>

    )


}