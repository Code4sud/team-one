# Projet Code4Sud - TeamOne

Bienvenue sur Nom du Projet ! Ce projet est composé d'un frontend et d'un backend, tous deux containerisés à l'aide de Docker et orchestrés avec Docker Compose. Le frontend est une application React servie par Nginx, tandis que le backend est un serveur Node.js utilisant SQLite3 pour le stockage des données.

# Structure du Projet
```
project-root/
│
├── docker-compose.yml        # Orchestration des services Docker
├── front/                    # Code source du frontend (React)
│   ├── Dockerfile            # Dockerfile pour construire le frontend
│	├── nginx.conf            # Configuration Nginx pour le frontend
│   ├── package.json          # Dépendances du frontend
│   ├── ... autres fichiers
│
└── back/                     # Code source du backend (Node.js)
	├── Dockerfile            # Dockerfile pour construire le backend
	├── package.json          # Dépendances du backend
	├── ... autres fichiers
```
# Technologies Utilisées
- Frontend : React, servi avec Nginx
- Backend : Node.js (Express), SQLite3 pour la persistance des données
- Docker : Containerisation du frontend et du backend
- Docker Compose : Pour gérer les applications multi-conteneurs

# Commencer

Prérequis
Docker installé. Télécharger Docker ici.
Docker Compose installé. Docker Desktop inclut déjà Docker Compose.
Node.js et npm pour le développement et les tests locaux.

Installation

1 - Cloner le Répertoire
```bash
	git clone https://github.com/wnaiji/teamOne.git
	cd teamOne
```
Exécution du Projet
Le projet est containerisé avec Docker, vous pouvez donc facilement exécuter à la fois le frontend et le backend en utilisant Docker Compose.

1 - Construire et Démarrer les Conteneurs
```bash
	docker compose up --build
```
	Cette commande va :
	Construire les images Docker pour le frontend et le backend.
	Démarrer les deux conteneurs en mode détaché.

2 - Accéder aux Services

- Frontend : http//localhost:80
- Backend : http//localhost:8000

3 - Arrêter les Conteneurs
	Pour arrêter les services, exécutez :

	docker compose down
