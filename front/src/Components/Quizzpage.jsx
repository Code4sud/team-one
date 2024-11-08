import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';

const Storypage = ({ userInfo }) => {
  const [storyStep, setStoryStep] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const navigate = useNavigate();

  // Define correct answers for each question step
  const correctAnswers = {
    0: 'solution1', // The correct answer for question 1
    1: 'solution2', // The correct answer for question 2
    2: 'solution3', // The correct answer for question 3
    3: 'solution1', // The correct answer for question 4
    4: 'solution2', // The correct answer for question 5
    5: 'solution3', // The correct answer for question 6
  };

   // Define image URLs or paths for each question
   const questionImages = [
    '/glissement_terrain/15_18/Q1.webp', // Image for question 1
    '/glissement_terrain/15_18/Q2.webp', // Image for question 2
    '/glissement_terrain/15_18/Q3.webp', // Image for question 3
    '/glissement_terrain/15_18/Q4.webp', // Image for question 4
    '/glissement_terrain/15_18/Q5.webp', // Image for question 5
    '/glissement_terrain/15_18/Q6.webp', // Image for question 6
  ];

  const handleChoice = (choice) => {
    if (choice === correctAnswers[storyStep]) {
      // If it's the last step and the answer is correct, navigate to /Risques
      if (storyStep === 5) {
        navigate('/risque');
      } else {
        // Correct answer: proceed to the next step with animation
        gsap.to(`.story-step-${storyStep}`, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            setStoryStep(storyStep + 1);
            gsap.fromTo(`.story-step-${storyStep + 1}`, { opacity: 0 }, { opacity: 1, duration: 0.5 });
          }
        });
      }
    } else {
      // Incorrect answer: display a pop-up with information
      setPopupMessage(`Incorrect answer for question ${storyStep + 1}. Please try again.`);
      setShowPopup(true);
    }
  };



  const closePopup = () => {
    setShowPopup(false);
    setPopupMessage('');
  };

  return (
    <div className="mt-20 fixed inset-0 text-gray-800 flex flex-col items-center">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <p>{popupMessage}</p>
            <button onClick={closePopup} className="btn mt-4 bg-red-500 text-white p-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}

      {storyStep === 0 && (
        <div className="story-step-0">
           <img src={questionImages[0]} alt="Image for question 1" className="mb-4 w-80 h-60 object-cover rounded" />
          <h2 className="text-2xl">Qu'est-ce qu'un glissement de terrain ?</h2>
          <ul>
            <li><button className="btn mt-3 text-black" onClick={() => handleChoice('solution1')}>Le mouvement rapide de roches et de terre qui descendent une pente.</button></li>
            <li><button className="btn mt-3 text-black" onClick={() => handleChoice('solution2')}>Une activité agricole sur un terrain en pente.</button></li>
            <li><button className="btn mt-3 text-black" onClick={() => handleChoice('solution3')}>Le déplacement d'eau sur une colline.</button></li>
          </ul>
        </div>
      )}
      
      {storyStep === 1 && (
        <div className="story-step-1">
          <img src={questionImages[1]} alt="Image for question 2" className="mb-4 w-80 h-60 object-cover rounded" />
          <h2 className="text-2xl">Quel est l'un des principaux facteurs qui cause les mouvements de terrain ?</h2>
          <ul>
            <li><button className="btn mt-3 text-black" onClick={() => handleChoice('solution1')}>Les tempêtes de neige.</button></li>
            <li><button className="btn mt-3 text-black" onClick={() => handleChoice('solution2')}>L'accumulation d'eau de pluie.</button></li>
            <li><button className="btn mt-3 text-black" onClick={() => handleChoice('solution3')}>La culture du blé.</button></li>
          </ul>
        </div>
      )}
      
      {storyStep === 2 && (
        <div className="story-step-2">
          <img src={questionImages[2]} alt="Image for question 3" className="mb-4 w-80 h-60 object-cover rounded" />
          <h2 className="text-2xl">Comment les mouvements de terrain peuvent-ils affecter les infrastructures ?</h2>
          <ul>
            <li><button className="btn mt-3 text-black" onClick={() => handleChoice('solution1')}>Ils favorisent la croissance des plantes.</button></li>
            <li><button className="btn mt-3 text-black" onClick={() => handleChoice('solution2')}>Ils renforcent les fondations des bâtiments.</button></li>
            <li><button className="btn mt-3 text-black" onClick={() => handleChoice('solution3')}>Ils peuvent endommager les routes, les maisons, et les ponts.</button></li>
          </ul>
        </div>
      )}

      {storyStep === 3 && (
        <div className="story-step-3">
          <img src={questionImages[3]} alt="Image for question 4" className="mb-4 w-80 h-60 object-cover rounded" />
          <h2 className="text-2xl">Quel signe peut montrer qu'un mouvement de terrain va se produire bientôt ?</h2>
          <ul>
            <li><button className="btn mt-3 text-black" onClick={() => handleChoice('solution1')}>L'apparition de fissures dans le sol ou dans les fondations.</button></li>
            <li><button className="btn mt-3 text-black" onClick={() => handleChoice('solution2')}>La présence de beaucoup d'oiseaux.</button></li>
            <li><button className="btn mt-3 text-black" onClick={() => handleChoice('solution3')}>Des vents plus forts.</button></li>
          </ul>
        </div>
      )}
      
      {storyStep === 4 && (
        <div className="story-step-4">
          <img src={questionImages[4]} alt="Image for question 5" className="mb-4 w-80 h-60 object-cover rounded" />
          <h2 className="text-2xl">Quelle mesure peut aider à prévenir les glissements de terrain ?</h2>
          <ul>
            <li><button className="btn mt-3 text-black" onClick={() => handleChoice('solution1')}>Augmenter le trafic dans la zone.</button></li>
            <li><button className="btn mt-3 text-black" onClick={() => handleChoice('solution2')}>Construire des murs de soutènement.</button></li>
            <li><button className="btn mt-3 text-black" onClick={() => handleChoice('solution3')}>Réduire la végétation naturelle.</button></li>
          </ul>
        </div>
      )}
      
      {storyStep === 5 && (
        <div className="story-step-5">
          <img src={questionImages[5]} alt="Image for question 6" className="mb-4 w-80 h-60 object-cover rounded" />
          <h2 className="text-2xl">Quelles régions sont les plus vulnérables aux mouvements de terrain ?</h2>
          <ul>
            <li><button className="btn mt-3 text-black" onClick={() => handleChoice('solution1')}>Les zones complètement plates sans relief.</button></li>
            <li><button className="btn mt-3 text-black" onClick={() => handleChoice('solution2')}>Les déserts arides sans pluie.</button></li>
            <li><button className="btn mt-3 text-black" onClick={() => handleChoice('solution3')}>Les régions avec des pentes raides et des sols saturés d'eau.</button></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Storypage;