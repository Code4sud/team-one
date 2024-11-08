import React from 'react';
import { useLocation } from 'react-router-dom';
import { useRisques } from './RisKContextes';

const dataCards = [
  { id: 1, title: "Server Status", content: "All servers running smoothly." },
  { id: 2, title: "User Sign-ups", content: "150 new sign-ups this week." },
  { id: 3, title: "Incident Reports", content: "No incidents reported." },
];

const RisquePage = () => {
  const { risques } = useRisques();
  console.log(risques);
  return (
    <main className="p-6 bg-lightPurple flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataCards.map((card) => (
          <div key={card.id} className="bg-softCyan text-darkPurple p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default RisquePage;