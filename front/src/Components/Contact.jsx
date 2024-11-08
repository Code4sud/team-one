import React from 'react';


const ContactPage = () => {
  //
  return (
    <div className="min-h-screen bg-white flex items-center justify-center text-gray-800">
      <form className="w-full max-w-lg bg-gray-100 p-6 rounded shadow-lg">
        <h2 className="text-2xl mb-4">Contactez-nous</h2>
        <label className="block mb-2">Email</label>
        <input type="email" className="input mb-4" placeholder="Votre email" required />
        
        <label className="block mb-2">Téléphone</label>
        <input type="tel" className="input mb-4" placeholder="Votre numéro de téléphone" />
        
        <label className="block mb-2 flex items-center">
          <input type="checkbox" className="mr-2" /> Désabonnement
        </label>

        <label className="block mb-2">Mot de passe</label>
        <input type="password" className="input mb-4" placeholder="Mot de passe" required />
        
        <button type="submit" className="btn">Envoyer</button>
      </form>
    </div>
  );
};

export default ContactPage;
