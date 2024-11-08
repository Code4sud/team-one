// src/App.jsx
import { useState } from 'react';
import './App.css';
import { useNavigate, Link } from 'react-router-dom';
import  Map_Leaflet from './Components/Map_Leaflet.jsx';
import risque from './assets/risque.png';
import gestes from './assets/gestes.png';

import map from './assets/map.png';
import personnalisation from './assets/personnalisation.png';
import paysage from './assets/payasage.png';




function App() {
  // const [count, setCount] = useState(0);
  // // const navigate = useNavigate();


  return (
    <div className="mt-20 flex flex-col items-center bg-indigo-50 min-h-screen text-gray-800 w-screen">
      {/* Main Title */}
      <div className="flex w-full h-20 bg-white shadow-md justify-center items-center">
        <h1 className="text-3xl font-bold text-indigo-600">RiskyQuest</h1>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-4xl p-6">
        <h2 className="text-center text-2xl font-semibold text-black my-6">Fonctionnalités</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-indigo-50 rounded-xl overflow-hidden flex flex-col shadow-lg">
            <img src={risque} alt="Liste des risques" className="w-full h-32 object-cover rounded-t-xl" />
            <div className="bg-indigo-300 w-full text-center py-3 text-white font-semibold">
              Liste des risques
            </div>
          </div>

          <div className="bg-indigo-50 rounded-xl overflow-hidden flex flex-col shadow-lg">
            <img src={gestes} alt="Guide des gestes" className="w-full h-32 object-cover rounded-t-xl" />
            <div className="bg-indigo-300 w-full text-center py-3 text-white font-semibold">
              Gestes qui sauves
            </div>
          </div>

          <div className="bg-indigo-50 rounded-xl overflow-hidden flex flex-col shadow-lg">
            <img src={map} alt="Qui est impacté ?" className="w-full h-32 object-cover rounded-t-xl" />
            <div className="bg-indigo-300 w-full text-center py-3 text-white font-semibold">
              Carte Intéractives
            </div>
          </div>

          <div className="bg-indigo-50 rounded-xl overflow-hidden flex flex-col shadow-lg">
            <img src={personnalisation} alt="Placeholder" className="w-full h-32 object-cover rounded-t-xl" />
            <div className="bg-indigo-300 w-full text-center py-3 text-white font-semibold">
              Personnalisation des Risques
            </div>
          </div>
        </div>
      </div>

      {/* Description Text */}
      <div className="text-gray-700 text-center max-w-2xl mb-6 px-6">
        RiskyQuest est un outil interactif conçu pour vous aider à apprendre à gérer des risques sanitaires ou catastrophe environnemental face aux situations réelles de manière ludique!
      </div>

      {/* Image Placeholder */}
      <div className="bg-gray-300 w-full max-w-4xl h-40 rounded-lg flex items-center justify-center text-gray-500 mb-6">
      <img src={paysage} alt="Guide des gestes" className="w-full h-32 object-cover rounded-t-xl" />
      
      </div>

      {/* Presentation Text */}
      <div className="text-center text-sm text-indigo-600 font-semibold mb-4">
        Utilisez RiskyQuest pour éduquer dès le jeune âge vos enfants.
      </div>

      {/* Call to Action Buttons */}
      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        <Link to="/risque">
            <button className="bg-indigo-500 text-white font-bold py-3 px-4 rounded-full w-full hover:bg-indigo-600 transition mb-5">
              Tester la solution
            </button>
        </Link>


        {/* <button className="bg-indigo-500 text-white font-bold py-3 px-4 rounded-full w-full hover:bg-indigo-600 transition">
          Télécharger mes résultats
        </button> */}
      </div>
      <div className="w-2/4 h-2/4">
        <Map_Leaflet />
      </div>
        {/* <button className="bg-indigo-500 text-white font-bold py-3 px-4 rounded-full flex-1 mt-5 mb-5 hover:bg-indigo-600 transition" onClick={() => navigate('/contact')}>
          Contact
        </button> */}
    </div>
  );
}

export default App;


