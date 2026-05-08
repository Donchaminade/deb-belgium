# Plan de Gestion Administrative (Admin Dashboard)

Ce document détaille les fonctionnalités nécessaires pour la gestion complète de la plateforme "Le Dîner en Blanc - Belgique" par l'administrateur.

## 👥 1. Gestion des Inscriptions (Fan List)
C'est le cœur du système actuel.
- **Liste des inscrits** : Tableau récapitulant nom, email, date d'inscription et ville choisie.
- **Filtres avancés** : Filtrer par ville (Bruxelles, Liège, etc.), par date ou par statut.
- **Export CSV/Excel** : Possibilité de télécharger la liste pour la gestion logistique externe.
- **Validation** : Système de confirmation/invitation par email une fois la liste clôturée.

## 📝 2. Gestion du Contenu (CMS - Content Management System)
Permettre de modifier le site sans toucher au code.
- **Editeur de texte** : Modifier les descriptions (About, Spirit, Philosophy) dans les 3 langues.
- **Médiathèque** : Uploader de nouvelles photos pour la gallerie ou changer la vidéo de fond de la page "About".
- **Traduction** : Interface pour ajouter de nouvelles clés de traduction si de nouvelles sections sont créées.

## ⚙️ 3. Paramètres de l'Événement
- **Statut de l'inscription** : Activer ou désactiver le bouton "Join the Fan List" (Ouvert/Fermé).
- **Dates clés** : Afficher les dates de l'événement et les phases (Phase 1, 2, 3) dynamiquement.
- **Lieux** : Gérer la liste des villes/pays disponibles dans le sélecteur de l'en-tête.

## 📧 4. Communication & Marketing
- **Emailing groupé** : Envoyer des notifications à toute la Fan List ou à un segment spécifique.
- **Statistiques** : Graphiques simples montrant l'évolution du nombre d'inscriptions par jour.

## 🔐 5. Sécurité & Authentification
- **Espace Administrateur** : URL sécurisée (ex: `/admin-portal`) protégée par identifiant et mot de passe.
- **Multi-Administrateurs** : Possibilité de créer plusieurs comptes "Staff" avec des permissions restreintes (ex: uniquement consulter la liste, sans pouvoir modifier le contenu).

## 🛠️ Recommandation Technique pour l'implémentation
1. **Backend** : Utilisation de **Firebase** (Firestore pour les données, Auth pour la connexion, Storage pour les images).
2. **Dashboard** : Utilisation d'une bibliothèque de composants admin comme **shadcn/ui** pour un rendu professionnel et rapide.
3. **Architecture** : Séparation stricte entre les routes publiques (Frontend) et privées (Dashboard).
