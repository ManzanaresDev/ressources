# 🌗 Projet React – Thème Clair / Sombre

Ce projet est une démonstration simple d'un système de **bascule entre thème clair et thème sombre** à l'aide de **React** et de l’outil de build **Vite**.

---

## 🧰 Technologies utilisées

- [React](https://reactjs.org/) — pour créer l'interface utilisateur
- [Vite](https://vitejs.dev/) — pour le bundling et le serveur de développement rapide
- CSS classique — pour styliser les thèmes clair et sombre

---

## ⚙️ Fonctionnalités

- Bascule entre le **mode clair** et le **mode sombre** via un bouton.
- Ajout dynamique de la classe CSS `dark` sur le `<body>` avec React.
- Interface responsive, simple et accessible.
- Code optimisé avec `useState` et `useEffect`.

---

## 📁 Structure du projet

```bash
theme_clair_sombre/
├── public/               # fichiers statiques
├── src/
│   ├── App.jsx           # composant principal avec le bouton de thème
│   ├── index.css         # styles globaux, incluant les styles pour le thème sombre
│   └── main.jsx          # point d'entrée React
├── package.json          # configuration npm
└── vite.config.js        # configuration Vite
```
