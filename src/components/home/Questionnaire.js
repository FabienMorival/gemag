import React, { useState } from 'react';

export default function Questionnaire() {
    const [q1, setQ1] = useState(''); 
    const [q2, setQ2] = useState('');
    const [q3, setQ3] = useState('');
    const [score, setScore] = useState(0);
    const [recompense, laRecompense] = useState(false);

    const scoreCalculer = () => {
        let score = 0;

        if (q1.trim().toLowerCase() === 'foot') {
            score += 10;
        }

        if (parseInt(q2) === 4) {
            score += 10;
        }

        if (q3.toLowerCase() === 'bleu') {
            score += 10;
        }

        setScore(score);
        if (score > 20) {
            laRecompense(true);
        }
    };
    
    return (
        <div>
            <h1>Petit Quizz</h1>
            <label htmlFor="q1">Question 1: Le meilleur sport ? (foot)</label><br />
            <input type="text" id="q1" value={q1} onChange={(e) => setQ1(e.target.value)} /><br />

            <label htmlFor="q2">Question 2:  Il y a combien d'article ? </label><br />
            <input type="number" id="q2" value={q2} onChange={(e) => setQ2(e.target.value)} min="1" /><br />

            <label htmlFor="q3">Question 3: Quelle est la couleur du ciel?</label><br />
            <select id="q3" value={q3} onChange={(e) => setQ3(e.target.value)}>
                <option value="Couleur">Couleur ?</option>
                <option value="bleu">Bleu</option>
                <option value="rouge">Rouge</option>
                <option value="vert">Vert</option>
                <option value="jaune">Jaune</option>
            </select><br />

            <button type="button" onClick={scoreCalculer}>Soumettre</button>

            <div>
                Votre score est : {score}
                {recompense && <div>Félicitations, vous avez gagné une récompense : https://youtube..... !</div>}
            </div>
        </div>
    );
}
