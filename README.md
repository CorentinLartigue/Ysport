# Ysport
Site dynamique avec un front en React + Vite avec la librairie Leaflet et un back en Java avec SpringBoot. Le site a pour but de rendre plus accessible la liste des complexes sportif en  Nouvelle Aquitaine à l'aide d'une carte interactive et de filtres.

# Prérequis (pour windows):

Installation de Node (Node.js et npm) :

https://nodejs.org/fr

Vérifier que vous avez node.js et npm:

node -v 
npm -v
 
Installation de Git si jamais:

https://git-scm.com/

Vérifier que vous avez git:

git --version

Clone le projet avec l'adresse Https sur github dans un dossier en local:

git clone https://github.com/CorentinLartigue/Ysport.git

Se déplacer dans votre dossier:

cd Ysport

Lancer le projet:

A- Côté Front:

   1-   npm install
   
   2-   npm run dev
   
   3-   Ouvrir le projet dans le navigateur à l'adresse du localhost

B- Côté Back:

   1- Créer une bdd avec un SGBD sans la remplir

   2- Lancer Intellij community (pour l'installer prenez bien la version community en dessous: https://www.jetbrains.com/idea/download/?section=windows) 

   3- Ouvrer votre projet à la racine du dossier contenant le back Ysport/Back/YSport

   4- Ensuite changer le sdk dans project structure ![image](https://github.com/user-attachments/assets/0efc534b-fb57-4f9a-ab4a-52f56949554e)

   5- Mettez dans le fichier WebConfig.java au niveau du allowedOrigins l'adresse du localhost

   6- Mettez la bonne configuration de votre bdd dans le fichier application.properties

   7- Lancer le projet ensuite ...
