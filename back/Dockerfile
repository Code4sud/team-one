FROM node:20-bullseye

WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Variables d'environnement
ENV PORT=8000
ENV ADDRESS=0.0.0.0

# Exposer le port
EXPOSE 8000

# Démarrer l'application
CMD ["npm", "start"]
