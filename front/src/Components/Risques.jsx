import { useRisques } from './RisKContextes';
import React, { useEffect, useState } from 'react';


const afficherRisques = (risques) => {
  return risques.flat().map((risque, index) => (
    <li key={index}>
      <div
            className="relative group bg-white border border-red-500 rounded-lg shadow-lg p-4 w-72 h-48 cursor-pointer hover:bg-red-50 transition-all duration-300"
          >
            {/* Title */}
            <h3 className="text-xl font-semibold text-red-600 mb-4">{risque}</h3>

            {/* Hover Pop-up */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-90 flex items-center justify-center p-4 text-gray-700 text-center rounded-lg transition-opacity duration-300">
            A sudden, large sea wave often caused by an earthquake.
            </div>
        </div>
    </li>
  ));
};

const removeDuplicates = (array) => {
  return [...new Set(array)];
};

const RisksPage = () => {
  const { risques } = useRisques();
  console.log(risques);
  const [allRisques, setAllRisques] = useState([]);

  useEffect(() => {
    const flattenedRisques = risques.flat();
    const uniqueRisques = removeDuplicates(flattenedRisques);
    for (const risque of uniqueRisques) {
      console.log(risque);
    }
    setAllRisques(uniqueRisques);

  }, [risques]);
  return (
    <div className="mt-20 fixed inset-0 flex flex-col items-center bg-gray-100">
      {/* Transparent Rectangle with Rounded Borders */}
      <div className="bg-black/20 backdrop-blur-md w-full max-w-4xl h-20 rounded-b-lg shadow-lg flex items-center justify-center mb-8 mt-8">
        <h1 className="text-4xl font-semibold text-indigo-600">Coordonnées</h1>
      </div>

      {/* Title Below the Rectangle */}
      <h2 className="text-3xl font-bold text-gray-800 mt-6 mb-8">Vos risques</h2>

      {/* Risk Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {afficherRisques(allRisques)};
          </div>
    </div>
  );
};

export default RisksPage;

