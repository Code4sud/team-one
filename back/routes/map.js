var express = require('express');
var router = express.Router();
const axios = require('axios');


router.post('/', async function(req, res) {
    data_map = req.body;
    console.log('Data:', data_map);
    let lat = data_map.lat;
    let long = data_map.lng;
    let latlon =  long + ',' + lat;
    let rayon = 1000;
    console.log(latlon);
    if (latlon.length > 10) {
        const risks = await fetchRisks(latlon, rayon, res);
        res.json({ risques: risks });
    }
    console.log('Latitude:', lat);

})


async function fetchRisks(latlon, rayon) {
    let get_risks = [];
    try {
        const response = await axios.get(`https://georisques.gouv.fr/api/v1/gaspar/risques?rayon=${rayon}&latlon=${latlon}&page=1&page_size=10`, {
            headers: {
                'accept': 'application/json',
                'User-Agent': 'Axios/1.0',
                'Cache-Control': 'no-cache'
            }
        });
        response.data.data.forEach((risque, index) => {
            console.log(`Risque #${index + 1}:`);
            console.log('Commune:', risque.libelle_commune);
            console.log('Code INSEE:', risque.code_insee);
            console.log('Détails du risque:', risque.risques_detail);
            const libelles = risque.risques_detail.map(risque => risque.libelle_risque_long);
            console.log('Risques:', libelles);
            get_risks.push(libelles);
        });
        return get_risks;
    } catch (error) {
        console.error('Erreur lors de la requête:', error);
        throw new Error('Erreur lors de la requête');
    }
}

module.exports = router;

// `https://georisques.gouv.fr/api/v1/gaspar/risques?rayon=${rayon}&latlon=${latlon}&page=1&page_size=10`
