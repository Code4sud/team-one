import React, { useState } from 'react';
import { gsap } from 'gsap';

const Storypage = ({ userInfo }) => {
  const [storyStep, setStoryStep] = useState(0);

  const handleChoice = (choice) => {
    // Transition to the next story step
    gsap.to(`.story-step-${storyStep}`, { opacity: 0, duration: 0.5, onComplete: () => {
      setStoryStep(storyStep + 1);
      gsap.fromTo(`.story-step-${storyStep + 1}`, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    }});
  };

  return (
    <div className="min-h-screen bg-white p-8 text-gray-800 flex flex-col items-center w-screen h-screen">
      {storyStep === 0 && (
        <div className="story-step-0">
          {/* <h2 className="text-2xl">Imaginez qu'il y a un {userInfo.riskType} dans votre région, {userInfo.location}.</h2> */}
          <p className="mt-4">Que faites-vous en premier?</p>
          <button className="btn mt-2" onClick={() => handleChoice('solution1')}>Option 1</button>
          <button className="btn mt-2 ml-2" onClick={() => handleChoice('solution2')}>Option 2</button>
        </div>
      )}
      {/* More story steps can follow here */}
    </div>
  );
};

export default Storypage;
