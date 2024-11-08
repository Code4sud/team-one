var express = require('express');
var router = express.Router();
const axios = require('axios');



router.get('/', async function(req, res, next) {
  axios.get('https://georisques.gouv.fr/api/v1/ppr/famille_risques', {
    headers: {
      'accept': 'application/json',
      'User-Agent': 'Axios/1.0',  // Ajoutez des en-têtes similaires à ceux de Postman
      'Cache-Control': 'no-cache'
    }
  })
  .then((response) => {
    response.data.data.forEach((risque) => {
      console.log(risque.libelle_risque);
    });
    res.render('table', {
      title: 'Table',
      data: response.data
    });
  })
  .catch((error) => {
    if (error.response) {

      console.error('Erreur dans la réponse:', error.response.data);

    } else if (error.request) {

      console.error('Aucune réponse reçue:', error.request);

    } else {

      console.error('Erreur lors de la requête:', error.message);
    }

    res.render('error', { message: 'Erreur lors de la récupération des données.', title: 'Erreur', error: error });
  });
});

module.exports = router;