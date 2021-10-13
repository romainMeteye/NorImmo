NorImmo est le leader de la construction et de la rénovation de maisons individuelles en 
Normandie. Pourquoi notre entreprise est-elle la première sur son marché ? Car elle propose aussi 
bien des prestations de rénovation que de construction. En intervenant autant sur le neuf que sur 
l’ancien NorImmo a ainsi acquis une expertise globale qui lui a valu la confiance de ses clients. 
Avec un taux de satisfaction de 90 % nos clients sont les plus satisfaits de Normandie. C’est 
pourquoi nous avons remporté le grand prix BestBuilder 2015, 2016 et 2019 qui récompense les 
meilleurs entrepreneurs.
Dans le cadre de cette démarche qualité constante, notre entreprise souhaite moderniser son site 
vitrine. L’objectif étant de le rendre plus dynamique et de permettre une meilleure interaction avec 
l’utilisateur.
Spécifications fonctionnelles :
- Sur la page d’accueil un carousel fait défiler des projets. Pour chaque projet l’utilisateur voit une 
photo et une description. Il peut s’il le souhaite faire défiler les projets lui-même à l’aide de 
boutons. Sous le carousel il trouve un texte présentant l’entreprise.
- Une page permet d’accéder aux questions fréquemment posées. Les questions sont d’abord 
visibles de l’utilisateur mais pas les réponses. Quand l’utilisateur clique sur une question alors la 
réponse s’affiche en dessous. S’il clique à nouveau sur la question alors la réponse disparaît.
- Une page permet de contacter l’entreprise via un formulaire de contact. Ce formulaire contient les 
éléments suivants :
 Nom : entre 2 et 50 caractères, pas de chiffres
 Prénom : entre 2 et 50 caractères, pas de chiffres
 Téléphone : un numéro valide au format français vérifié par regex
 Motif du contact (devis, information ou réclamation)
 Message : 400 caractères maximum, le nombre de caractères restant est affiché en temps 
réel sous la zone de saisie. Il est également vérifié que le message ne contient pas les 
termes suivant : sexe, sex, con, connard
 Si la saisie utilisateur est valide, alors l’input passe au vert. Si ce n’est pas le cas il passe 
au rouge et un message lui indique son erreur (géré en JS et non CSS).
- Une page permet aux clients de réaliser une estimation approximative du coup de leur projet 
immobilier. Sur cette page, via un formulaire, le client peut rentrer :
 la surface en m²
 le nombre de chambres
 le matériau de construction (parpaing, bois ou brique).
Le coût est calculé de la manière suivante : le coût de base est de 1000€/m², chaque chambre rajoute 
10 000€ au coût total, le matériau choisi rajoute un surcoût au coût total (parpaing : 20 %, brique : 
30 %, bois : 15%). Ainsi une maison de 50m2 avec deux chambres en brique est normalement 
estimée à : 91€
Spécifications techniques :
- HTML5
- CSS3
- Framework Boostrap4
- Base Boilerplate
- JavaScript avec respect des normes ES6
Attention : la dynamisation doit être réalisée en JavaScript par vos soins, certaines des 
fonctionnalités demandées sont gérées par Bootstrap. Vous devez dans ce cas les développer vousmême en JavaScript.
- Vous avez produit des maquettes de type wireframe simples pour au moins une des pages
- Vous avez produit une arborescence fonctionnelle de l’application reprenant les cas d’utilisation
possible de la page
- Vos wireframes sont accessibles dans un dossier DOC
- Votre interface est responsive sur tous les supports
- Vous respectez le principe DRY
- Votre code est commenté
- Votre code est hébergé sur GitHub
- Vous avez fait usage d’un logiciel de versionning
- Votre site est hébergé via une GH-page
- Le repository contient un readme, une description et des tags
- Vous utilisez un outil de gestion de projet de type KANBAN. Idéalement pour chaque tâche vous
estimez le temps et la priorité et vous vous mettez dans la peau de l’utilisateur.
Le rendu se fera via github. Vous devrez déposer sur TEAMS avant dimanche soir minuit un 
fichier txt à votre nom avec le lien vers votre repository GitHub.
