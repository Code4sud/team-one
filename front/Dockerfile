# Étape de build
FROM node:22-alpine AS builder

WORKDIR /app

# Copier les fichiers de dépendances pour installer les modules
COPY package.json package-lock.json ./

RUN npm install

# Copier le reste des fichiers front pour le build
COPY . .

# Construire l'application frontend
RUN npm run build

# Étape finale - servir le front avec Nginx
FROM nginx:1.27-alpine

WORKDIR /usr/share/nginx/html

# Copier la configuration nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copier les fichiers de build front
COPY --from=builder /app/dist .

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
