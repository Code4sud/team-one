import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import question1 from '../assets/question1.png';
import question2 from '../assets/question2.png';
import question3 from '../assets/question3.png';
import question4 from '../assets/question4.png';
import question5 from '../assets/question5.png';


const Storypage = ({ userInfo }) => {
  const [storyStep, setStoryStep] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const navigate = useNavigate();

  const correctAnswers = {
    0: 'solution1', // The correct answer for question 1
    1: 'solution2', // The correct answer for question 2
    2: 'solution3', // The correct answer for question 3
    3: 'solution1', // The correct answer for question 4
    4: 'solution2', // The correct answer for question 5
    5: 'solution3', // The correct answer for question 6
  };

  const questionImages = [
    './assets/question1.png', // Image for question 1
    './assets/question2.png', // Image for question 2
    './assets/question3.png', // Image for question 3
    './assets/question4.png', // Image for question 4
    './assets/question5.png', // Image for question 5
    './assets/question6.png', // Image for question 6
  ];

  const handleChoice = (choice) => {
    if (choice === correctAnswers[storyStep]) {

      if (storyStep === 5) {
        navigate('/risque');
      } else {

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

      setPopupMessage(`Incorrect answer for question ${storyStep + 1}. Please try again.`);
      setShowPopup(true);
    }
  };



  const closePopup = () => {
    setShowPopup(false);
    setPopupMessage('');
  };

  return (
    <div className="mt-20  inset-0 text-gray-800">
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg--white bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <p>{popupMessage}</p>
            <button onClick={closePopup} className="btn mt-4 bg-red-500 text-white p-2 rounded">
              Close
            </button>
          </div>
        </div>
      )}

      {storyStep === 0 && (
        <div className="story-step-0 flex flex-col items-center w-screen">
            <div class="w-screen flex h-full  justify-center mb-24">
              <img src={question1} alt="Image for question 1" className="mb-24 w-96 h-96  object-cover rounded justify-self-center" />
            </div>
            <h2 className="text-2xl text-black">Qu'est-ce qu'un glissement de terrain ?</h2>
            <ul>
              <li><button className="btn mt-3 text-white" onClick={() => handleChoice('solution1')}>Le mouvement rapide de roches et de terre qui descendent une pente.</button></li>
              <li><button className="btn mt-3 text-white" onClick={() => handleChoice('solution2')}>Une activité agricole sur un terrain en pente.</button></li>
              <li><button className="btn mt-3 text-white" onClick={() => handleChoice('solution3')}>Le déplacement d'eau sur une colline.</button></li>
            </ul>
        </div>
      )}
      {storyStep === 1 && (
        <div className="story-step-1 flex flex-col items-center w-screen">
          <div class="w-screen flex h-full  justify-center mb-24">
            <img src={question2} alt="Image for question 2" className="mb-24 w-80 h-60 object-cover rounded" />
          </div>
          <h2 className="text-2xl">Quel est l'un des principaux facteurs qui cause les mouvements de terrain ?</h2>
          <ul>
            <li><button className="btn mt-3 text-white" onClick={() => handleChoice('solution1')}>Les tempêtes de neige.</button></li>
            <li><button className="btn mt-3 text-white" onClick={() => handleChoice('solution2')}>L'accumulation d'eau de pluie.</button></li>
            <li><button className="btn mt-3 text-white" onClick={() => handleChoice('solution3')}>La culture du blé.</button></li>
          </ul>
        </div>
      )}

      {storyStep === 2 && (
        <div className="story-step-2 flex flex-col items-center w-screen">
          <img src={question3} alt="Image for question 3" className="mb-24 w-80 h-60 object-cover rounded" />
          <h2 className="text-2xl">Comment les mouvements de terrain peuvent-ils affecter les infrastructures ?</h2>
          <ul>
            <li><button className="btn mt-3 text-white" onClick={() => handleChoice('solution1')}>Ils favorisent la croissance des plantes.</button></li>
            <li><button className="btn mt-3 text-white" onClick={() => handleChoice('solution2')}>Ils renforcent les fondations des bâtiments.</button></li>
            <li><button className="btn mt-3 text-white" onClick={() => handleChoice('solution3')}>Ils peuvent endommager les routes, les maisons, et les ponts.</button></li>
          </ul>
        </div>
      )}

      {storyStep === 3 && (
        <div className="story-step-3 flex flex-col items-center w-screen">
          <img src={question4} alt="Image for question 4" className="mb-24 w-80 h-60 object-cover rounded" />
          <h2 className="text-2xl">Quel signe peut montrer qu'un mouvement de terrain va se produire bientôt ?</h2>
          <ul>
            <li><button className="btn mt-3 text-white" onClick={() => handleChoice('solution1')}>L'apparition de fissures dans le sol ou dans les fondations.</button></li>
            <li><button className="btn mt-3 text-white" onClick={() => handleChoice('solution2')}>La présence de beaucoup d'oiseaux.</button></li>
            <li><button className="btn mt-3 text-white" onClick={() => handleChoice('solution3')}>Des vents plus forts.</button></li>
          </ul>
        </div>
      )}

      {storyStep === 4 && (
        <div className="story-step-4 flex flex-col items-center w-screen">
          <img src={question5} alt="Image for question 5" className="mb-24 w-80 h-60 object-cover rounded" />
          <h2 className="text-2xl">Quelle mesure peut aider à prévenir les glissements de terrain ?</h2>
          <ul>
            <li><button className="btn mt-3 text-white" onClick={() => handleChoice('solution1')}>Augmenter le trafic dans la zone.</button></li>
            <li><button className="btn mt-3 text-white" onClick={() => handleChoice('solution2')}>Construire des murs de soutènement.</button></li>
            <li><button className="btn mt-3 text-white" onClick={() => handleChoice('solution3')}>Réduire la végétation naturelle.</button></li>
          </ul>
        </div>
      )}

      {storyStep === 5 && (
        <div className="story-step-5 flex flex-col items-center w-screen">
          <img src={question6} alt="Image for question 6" className="mb-24 w-80 h-60 object-cover rounded" />
          <h2 className="text-2xl">Quelles régions sont les plus vulnérables aux mouvements de terrain ?</h2>
          <ul>
            <li><button className="btn mt-3 text-white" onClick={() => handleChoice('solution1')}>Les zones complètement plates sans relief.</button></li>
            <li><button className="btn mt-3 text-white" onClick={() => handleChoice('solution2')}>Les déserts arides sans pluie.</button></li>
            <li><button className="btn mt-3 text-white" onClick={() => handleChoice('solution3')}>Les régions avec des pentes raides et des sols saturés d'eau.</button></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Storypage;