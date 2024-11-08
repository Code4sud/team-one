import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';


const Homepage = ({ onNext }) => {


  const [step, setStep] = useState(0);
  const fadeRef = useRef(null);

  const handleNextStep = () => {
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.5, onComplete: () => {
      setStep(step + 1);
      gsap.fromTo(fadeRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    }});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-800" ref={fadeRef}>
      {step === 0 && (
        <div>
          <h1 className="text-2xl mb-4">Je suis...</h1>
          <button className="btn" onClick={handleNextStep}>Choix 1</button>
          <button className="btn ml-2" onClick={handleNextStep}>Choix 2</button>
        </div>
      )}
      {step === 1 && (
        <div>
          <h1 className="text-2xl mb-4">J'habite à...</h1>
          <input type="text" className="input" placeholder="Votre lieu" />
          <button className="btn mt-4" onClick={handleNextStep}>Suivant</button>
          <button onClick={() => navigate('/quizpage')}>Aller à About</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h1 className="text-2xl mb-4">Je m'appelle...</h1>
          <input type="text" className="input" placeholder="Votre nom" />
          <button className="btn mt-4" onClick={() => onNext({ stepCompleted: true })}>Page suivante</button>
        </div>
      )}
    </div>
  );
};

export default Homepage;
