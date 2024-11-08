const express = require('express');
const router = express.Router();
const db = require('../db');
const { checkCityExists, getCityInfo } = require('../cityUtils');

// Route POST pour ajouter un utilisateur
router.post('/', async (req, res) => {
  const { userName, age, localisation } = req.body;

  // Vérifier que toutes les données sont présentes
  if (!userName || !age || !localisation) {
    return res.status(400).json({ message: 'Veuillez fournir toutes les informations nécessaires.' });
  }

  try {
    // Vérification et récupération des informations de la ville
    const cityInfo = await getCityInfo(localisation);

    if (!cityInfo.exists) {
      return res.status(400).json({
        message: "La ville spécifiée n'existe pas ou n'a pas été trouvée.",
        details: cityInfo.error
      });
    }

    // Insérer les informations de l'utilisateur avec le code INSEE
    db.run(
      `INSERT INTO users (userName, age, localisation, inseeCode, department, region)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [
        userName,
        age,
        cityInfo.name,
        cityInfo.inseeCode,
        cityInfo.department,
        cityInfo.region
      ],
      function(err) {
        if (err) {
          console.error('Erreur SQL:', err);
          return res.status(500).json({ message: "Erreur lors de l'insertion des données dans la base." });
        }
        res.status(200).json({
          message: 'Les données de l\'utilisateur ont été sauvegardées avec succès.',
          userId: this.lastID,
          cityInfo: {
            name: cityInfo.name,
            inseeCode: cityInfo.inseeCode,
            department: cityInfo.department,
            region: cityInfo.region
          }
        });
      }
    );

  } catch (error) {
    console.error('Erreur:', error);
    return res.status(500).json({ message: "Erreur lors de la vérification de la ville." });
  }
});

// Route GET pour récupérer les utilisateurs
router.get('/', (req, res) => {
  db.all(`SELECT * FROM users`, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ message: "Erreur lors de la récupération des données." });
    }
    res.status(200).json(rows);
  });
});

module.exports = router;
