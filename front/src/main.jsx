import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Header from './layout/Header.jsx';
import ContactPage from './Components/Contact.jsx';
import Storypage from './Components/Quizzpage.jsx';
import RisquePage from './Components/Risques.jsx';
import { RisquesProvider } from './Components/RisKContextes.jsx';

function Routes_link() {
  return (
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/quizz" element={<Storypage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/risque" element={<RisquePage />} />
      </Routes>
  );
}

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RisquesProvider>
        <BrowserRouter>
        <Header />
        <Routes_link />
        </BrowserRouter>
    </RisquesProvider>
  </StrictMode>
);
