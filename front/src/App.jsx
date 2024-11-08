// src/App.jsx
import { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import  Map_Leaflet from './Components/Map_Leaflet.jsx';

// import RisksResponses from './Components/RisksResponses.jsx';



function App() {
  // const [count, setCount] = useState(0);
  // // const navigate = useNavigate();


  return (
    <div className="flex flex-col items-center bg-indigo-50 min-h-screen text-gray-800 w-screen">
      {/* Main Title */}
      <div className="flex w-full h-20 bg-white shadow-md justify-center items-center">
        <h1 className="text-3xl font-bold text-indigo-600">RiskyQuest</h1>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-4xl p-6">
        <h2 className="text-center text-2xl font-semibold text-black my-6">Fonctionnalités</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-indigo-50 rounded-xl overflow-hidden flex flex-col shadow-lg">
            <img src="path/to/image1.png" alt="Liste des risques" className="w-full h-32 object-cover rounded-t-xl" />
            <div className="bg-indigo-300 w-full text-center py-3 text-white font-semibold">
              Liste des risques
            </div>
          </div>

          <div className="bg-indigo-50 rounded-xl overflow-hidden flex flex-col shadow-lg">
            <img src="path/to/image2.png" alt="Guide des gestes" className="w-full h-32 object-cover rounded-t-xl" />
            <div className="bg-indigo-300 w-full text-center py-3 text-white font-semibold">
              Guide des gestes
            </div>
          </div>

          <div className="bg-indigo-50 rounded-xl overflow-hidden flex flex-col shadow-lg">
            <img src="path/to/image3.png" alt="Qui est impacté ?" className="w-full h-32 object-cover rounded-t-xl" />
            <div className="bg-indigo-300 w-full text-center py-3 text-white font-semibold">
              Qui est impacté ?
            </div>
          </div>

          <div className="bg-indigo-50 rounded-xl overflow-hidden flex flex-col shadow-lg">
            <img src="path/to/image4.png" alt="Placeholder" className="w-full h-32 object-cover rounded-t-xl" />
            <div className="bg-indigo-300 w-full text-center py-3 text-white font-semibold">
              Placeholder
            </div>
          </div>
        </div>
      </div>

      {/* Description Text */}
      <div className="text-gray-700 text-center max-w-2xl mb-6 px-6">
        RiskyQuest est un outil interactif conçu pour vous aider à apprendre à gérer des risques face aux situations réelles de manière ludique!
      </div>

      {/* Image Placeholder */}
      <div className="bg-gray-300 w-full max-w-4xl h-40 rounded-lg flex items-center justify-center text-gray-500 mb-6">
        Image Placeholder
      </div>

      {/* Presentation Text */}
      <div className="text-center text-sm text-indigo-600 font-semibold mb-4">
        Utilisez RiskyQuest pour éduquer dès le jeune âge vos enfants.
      </div>

      {/* Call to Action Buttons */}
      <div className="flex flex-col items-center gap-4 w-full max-w-md">
        <button className="bg-indigo-500 text-white font-bold py-3 px-4 rounded-full w-full hover:bg-indigo-600 transition">
          Tester la solution
        </button>

        <div className="w-screen h-60">
          <ul class="flex items-center justify-center gap-2  w-full h-full place-content-evenly">
            <li>
                  <button className="bg-indigo-500 text-white font-bold py-3 px-4 rounded-full flex-1 hover:bg-indigo-600 transition">
                    Se connecter
                  </button>
            </li>
            <li>
                  <button className="bg-gray-400 text-white font-bold py-3 px-4 rounded-full flex-1 hover:bg-gray-500 transition">
                    S'inscrire
                  </button>
            </li>
          </ul>
          <span className="text-black font-medium">OU</span>
          {/* <button className="bg-gray-400 text-white font-bold py-3 px-4 rounded-full hover:bg-gray-500 transition">
            Sans connection
          </button> */}
        </div>

        {/* <button className="bg-indigo-500 text-white font-bold py-3 px-4 rounded-full w-full hover:bg-indigo-600 transition">
          Télécharger mes résultats
        </button> */}
      </div>
      <div className="w-2/4 h-2/4">
        <Map_Leaflet />
      </div>
      {/* <div className="w-2/4 h-2/4">
        <RisksResponses />
      </div> */}
    </div>
  );
}

export default App;
