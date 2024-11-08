import React, { createContext, useContext, useState, useEffect } from 'react';

// Créer le contexte
const RisquesContext = createContext();

// Créer un provider pour le contexte
export const RisquesProvider = ({ children }) => {
    const [risques, setRisques] = useState([]);

    // Charger les risques depuis le localStorage lors du chargement du composant
    useEffect(() => {
        const savedRisques = localStorage.getItem('risques');
        if (savedRisques) {
            setRisques(JSON.parse(savedRisques));
        }
    }, []);

    // Sauvegarder les risques dans le localStorage chaque fois qu'ils changent
    useEffect(() => {
        if (risques.length > 0) {
            localStorage.setItem('risques', JSON.stringify(risques));
        }
    }, [risques]);

    return (
        <RisquesContext.Provider value={{ risques, setRisques }}>
            {children}
        </RisquesContext.Provider>
    );
};

// Custom hook pour accéder facilement aux risques
export const useRisques = () => useContext(RisquesContext);

