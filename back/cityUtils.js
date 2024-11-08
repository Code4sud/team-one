const axios = require('axios');

const getCityInfo = async (city) => {
  try {
    // Utilise l'API du gouvernement français
    const response = await axios.get(`https://geo.api.gouv.fr/communes`, {
      params: {
        nom: city,
        boost: 'population', // Priorise les villes les plus peuplées
        limit: 5 // Récupère les 5 premiers résultats pour plus de précision
      }
    });

    if (response.data && response.data.length > 0) {
      // Récupère la première correspondance
      const cityData = response.data[0];
      return {
        exists: true,
        name: cityData.nom,
        inseeCode: cityData.code, // Code INSEE
        population: cityData.population,
        department: cityData.codeDepartement,
        region: cityData.codeRegion
      };
    }

    return {
      exists: false,
      error: 'Ville non trouvée'
    };

  } catch (error) {
    console.error('Erreur lors de la récupération des informations de la ville:', error);
    throw new Error('Erreur lors de la récupération des informations de la ville');
  }
};

const checkCityExists = async (city) => {
  try {
    const cityInfo = await getCityInfo(city);
    return cityInfo.exists;
  } catch (error) {
    console.error('Erreur lors de la vérification de la ville:', error);
    throw error;
  }
};

module.exports = {
  checkCityExists,
  getCityInfo
};
