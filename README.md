# todoliste_websocket
Une todoliste partagée en temps réel

Ce projet a pour objectif la réalisation d'une Todolist partagée en temps réel !

Voici les fonctionnalités attendues :

Quand un client se connecte, il récupère la dernière Todolist connue du serveur
Quand un client ajoute une tâche, celle-ci est immédiatement répercutée chez les autres clients
Quand un client supprime une tâche, celle-ci est immédiatement supprimée chez les autres clients
Le serveur pourra retenir la Todolist sous le forme d'un simple array qu'il gardera en mémoire. La persistence n'est pas demandée (inutile d'utiliser MySQL ou Mongodb).
