const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../db');
const { getCityInfo } = require('../cityUtils');

// Route pour l'inscription (signup)
router.post('/signup', async (req, res) => {
  const { userName, password, age, localisation } = req.body;

  // Vérification des données
  if (!userName || !password || !age || !localisation) {
    return res.status(400).json({
      message: 'Tous les champs sont requis (userName, password, age, localisation)'
    });
  }

  try {
    // Vérification de la ville
    const cityInfo = await getCityInfo(localisation);
    if (!cityInfo.exists) {
      return res.status(400).json({
        message: "La ville spécifiée n'existe pas.",
        details: cityInfo.error
      });
    }

    // Vérification si l'utilisateur existe déjà
    db.get('SELECT id FROM users WHERE userName = ?', [userName], async (err, user) => {
      if (err) {
        return res.status(500).json({ message: "Erreur lors de la vérification de l'utilisateur" });
      }
      if (user) {
        return res.status(400).json({ message: "Ce nom d'utilisateur est déjà pris" });
      }

      try {
        // Hashage du mot de passe
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insertion de l'utilisateur
        db.run(
          `INSERT INTO users (userName, password, age, localisation, inseeCode, department, region)
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [
            userName,
            hashedPassword,
            age,
            cityInfo.name,
            cityInfo.inseeCode,
            cityInfo.department,
            cityInfo.region
          ],
          function(err) {
            if (err) {
              console.error('Erreur SQL:', err);
              return res.status(500).json({ message: "Erreur lors de l'inscription" });
            }
            res.status(201).json({
              message: 'Inscription réussie',
              userId: this.lastID
            });
          }
        );
      } catch (error) {
        console.error('Erreur de hashage:', error);
        res.status(500).json({ message: "Erreur lors de l'inscription" });
      }
    });
  } catch (error) {
    console.error('Erreur:', error);
    res.status(500).json({ message: "Erreur lors de l'inscription" });
  }
});

// Route pour la connexion (signin)
router.post('/signin', (req, res) => {
  const { userName, password } = req.body;

  // Vérification des données
  if (!userName || !password) {
    return res.status(400).json({ message: 'Nom d\'utilisateur et mot de passe requis' });
  }

  // Recherche de l'utilisateur
  db.get('SELECT * FROM users WHERE userName = ?', [userName], async (err, user) => {
    if (err) {
      return res.status(500).json({ message: 'Erreur lors de la connexion' });
    }

    if (!user) {
      return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
    }

    try {
      // Vérification du mot de passe
      const match = await bcrypt.compare(password, user.password);

      if (match) {
        // Ne pas renvoyer le mot de passe
        const { password, ...userWithoutPassword } = user;
        res.json({
          message: 'Connexion réussie',
          user: userWithoutPassword
        });
      } else {
        res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
      }
    } catch (error) {
      console.error('Erreur de comparaison:', error);
      res.status(500).json({ message: 'Erreur lors de la connexion' });
    }
  });
});

module.exports = router;
