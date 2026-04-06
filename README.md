# Le Grimoire Magique 🌙✨

Application interactive pour enfants de 6 à 10 ans qui aide à reconnaître, comprendre et apaiser les émotions à travers un univers de grimoire enchanté.

---

## 🚀 Installation et lancement

### Prérequis
- Node.js 18+ installé
- npm ou pnpm

### Installation
```bash
cd grimoire-magique
npm install
```

### Lancer en développement
```bash
npm run dev
```

Ouvre ensuite [http://localhost:5173](http://localhost:5173) dans ton navigateur.

### Build de production
```bash
npm run build
npm run preview
```

---

## 📁 Structure du projet

```
grimoire-magique/
├── public/
│   └── favicon.svg              # Icône de l'app
├── src/
│   ├── assets/
│   │   └── svg/                 # Personnages SVG
│   │       ├── milo.svg         # Guide principal
│   │       ├── brumo.svg        # Entité Peur
│   │       ├── ignis.svg        # Entité Colère
│   │       ├── pluma.svg        # Entité Tristesse
│   │       ├── nox.svg          # Entité Cauchemars
│   │       ├── soli.svg         # Entité Solitude
│   │       └── book.svg         # Livre d'ouverture
│   ├── components/              # Composants React réutilisables
│   │   ├── AnimatedBook         # Livre animé (écran d'ouverture)
│   │   ├── FloatingParticles    # Particules lumineuses de fond
│   │   ├── GuideCard            # Milo le guide
│   │   ├── EntityCard           # Carte d'entité émotionnelle
│   │   ├── ChatBubble           # Bulle de dialogue
│   │   ├── ChoiceButton         # Bouton de réponse
│   │   ├── ProgressDots         # Indicateur de progression
│   │   ├── FormulaCard          # Formule magique finale
│   │   ├── MoralCard            # Morale de fin
│   │   ├── MiniGameBreathCloud  # Jeu de respiration
│   │   ├── MiniGameMonsterShrink # Jeu de réduction de peur
│   │   ├── MiniGameFireCalm     # Jeu de calme de la colère
│   │   ├── MiniGameRainRelease  # Jeu de libération des larmes
│   │   └── MiniGameLightLinks   # Jeu de connexion (lucioles/étoiles)
│   ├── data/                    # Contenu JSON
│   │   ├── characters.json      # Milo le guide
│   │   ├── entities.json        # Les 5 entités émotionnelles
│   │   ├── formulas.json        # Formules magiques finales
│   │   ├── morals.json          # Morales de fin
│   │   └── flows/               # Parcours conversationnels
│   │       ├── brumo.json       # Flow Peur
│   │       ├── ignis.json       # Flow Colère
│   │       ├── pluma.json       # Flow Tristesse
│   │       ├── nox.json         # Flow Cauchemars
│   │       └── soli.json        # Flow Solitude
│   ├── hooks/
│   │   └── useFlow.js           # Hook de gestion du flow conversationnel
│   ├── pages/                   # Écrans principaux
│   │   ├── OpeningBookScreen    # Livre animé d'ouverture
│   │   ├── HomeScreen           # Accueil avec Milo
│   │   ├── EntitySelectionScreen # Choix de l'émotion
│   │   └── ConversationScreen   # Conversation + mini-jeux
│   ├── styles/
│   │   ├── globals.css          # Variables CSS, reset, animations
│   │   └── transitions.css      # Transitions entre écrans
│   ├── App.jsx                  # Routeur principal
│   └── main.jsx                 # Point d'entrée React
├── package.json
├── vite.config.js
└── README.md
```

---

## 🎭 Les Entités

| Entité | Émotion | Couleur | Mini-jeu |
|--------|---------|---------|----------|
| **Brumo** | Peur / Angoisse | Lavande | Respiration nuage / Réduction de monstre |
| **Ignis** | Colère / Frustration | Corail | Calmer les braises |
| **Pluma** | Tristesse / Chagrin | Turquoise | Essuyer la pluie |
| **Nox** | Cauchemars / Nuit | Violet nuit | Relier les étoiles |
| **Soli** | Solitude / Rejet | Jaune lumière | Relier les lucioles |

---

## ✏️ Modifier le contenu

### Modifier les textes de la conversation
Édite les fichiers dans `src/data/flows/` (ex: `brumo.json`).

Chaque **node** a :
- `type` : `message`, `question`, `message+question`, `reframe`, `minigame`, `formula`, `moral`, `end`
- `text` / `question` : le texte affiché
- `options` : les choix proposés (pour les questions)
- `next` : l'ID du node suivant

### Modifier les formules magiques
Édite `src/data/formulas.json`. Chaque entité a un tableau de formules.

### Modifier les morales
Édite `src/data/morals.json`. Une morale aléatoire est choisie à chaque fin de session.

### Modifier les personnages
Les SVG sont dans `src/assets/svg/`. Tu peux les remplacer par de vraies illustrations en conservant le même nom de fichier.

---

## 🤖 Brancher une vraie IA (plus tard)

Pour rendre les conversations véritablement adaptatives avec une IA :

1. **Remplace le `useFlow` hook** par des appels à une API (ex: Anthropic Claude, OpenAI).
2. **Envoie l'historique de l'enfant** dans le contexte système de l'API.
3. **Utilise les flows JSON** comme base du prompt système pour cadrer le ton.
4. **Retourne des nodes structurés** en JSON depuis l'API.

Exemple de prompt système à envoyer à l'API :
```
Tu es ${entity.name}, une entité bienveillante qui aide les enfants à gérer leurs émotions.
Ton ton est : ${entity.tone}.
Tu dois toujours : valider l'émotion, reformuler simplement, proposer une action concrète.
Réponds uniquement en JSON avec les champs : { type, text, options? }
```

---

## 🧠 Philosophie UX

- **Sessions courtes** : chaque parcours dure 3 à 6 minutes maximum.
- **Incitation au réel** : chaque fin de session encourage l'enfant à revenir dans la vraie vie.
- **Pas de gamification addictive** : pas de streaks, pas de points, pas de scroll infini.
- **Ton psychologique** : validant, concret, dédramatisant, jamais moralisateur.

---

## 📄 Licence

Projet éducatif. Tous droits réservés.
