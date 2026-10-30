# Portfolio de Charmant BALOGOUN

Portfolio d'un élève ingénieur en modélisation mathématique et simulation numérique (ENSGMM). Site statique d'une seule page, en HTML, CSS et JavaScript, sans framework ni étape de compilation, publié avec GitHub Pages : <https://charmantkoc.github.io/>

## Sections

| Section | Contenu |
|---|---|
| À propos | Nom, titre, établissement, courte biographie, domaines d'intérêt, boutons CV, e-mail, LinkedIn et GitHub |
| Compétences | Compétences regroupées par domaine |
| Projets | Projets avec résumé, méthodes, outils, rapport (lien sur le titre) et dépôt GitHub (icône) |
| Expériences professionnelles | Stages, avec rapport et attestation |
| Écoles, certifications, conférences | Formations et attestations |
| Distinctions et compétitions | Prix, classements et participations à des concours |

## Modifier le contenu

Tout le contenu se trouve dans [`assets/js/data.js`](assets/js/data.js). Il n'est pas nécessaire de toucher à `index.html` ni aux feuilles de style.

**Liens et documents.** Les chemins des fichiers et des dépôts sont regroupés dans l'objet `LINKS`, en haut du fichier. Un lien peut être un chemin local (`assets/files/...`), une URL (dépôt GitHub) ou un lien Google Drive. Une valeur vide (`""`) n'affiche aucun lien.

**Ajouter un projet** (tableau `projects`) :

```js
{
  id:           "mon-projet",                  // identifiant unique
  title:        "Titre du projet",
  date:         "2026",
  abstract:     "Résumé en une ou deux phrases.",
  methods:      ["Méthode 1", "Méthode 2"],    // facultatif
  tools:        ["Python", "NumPy"],           // facultatif
  document_url: drive(LINKS.monRapport),       // facultatif : lien porté par le titre
  github_url:   LINKS.githubMonProjet || null, // facultatif : icône du dépôt
  media: [                                     // facultatif : images et vidéos
    { src: "assets/images/projets/figure.png", caption: "Légende de l'image" },
    { src: "assets/videos/simulation.mp4",     caption: "Légende de la vidéo" },
    { src: "https://www.youtube.com/watch?v=XXXXXXXXXXX", caption: "Vidéo YouTube" },
  ],
}
```

**Images et vidéos d'un projet.** Chaque élément de `media` est reconnu automatiquement : une image (`.png`, `.jpg`, `.svg`...), une vidéo locale (`.mp4`, `.webm`) ou un lien YouTube ou Vimeo. Ils s'affichent en grille sous le projet, avec leur légende. Un clic sur une image l'affiche en grand. Pour garder une page légère, privilégier des images de moins de 500 Ko et des vidéos mp4 courtes (quelques secondes, sans son) ; au-delà, passer par YouTube.

**Ajouter une expérience** (tableau `experiences`) : `period`, `title`, `organization`, `location`, `description`, `skills`, `document_url` (rapport) et `attestation_url`.

**Ajouter une certification** (tableau `certifications`) : `title`, `organization`, `date`, `verify_url` (lien vers l'attestation) et `description`.

**Ajouter une distinction** (tableau `distinctions`) : `title`, `organization`, `date`, `team`, `description` et `url` (lien vers l'attestation).

Dans les trois dernières listes, chaque information est affichée sur sa propre ligne, sous le titre, et seuls `title` et `date` sont obligatoires. Les entrées vont du plus récent au plus ancien.

**Photo et CV.** La photo est `assets/images/photo.png` et le CV `assets/files/cv.pdf` ; pour les changer, remplacer le fichier ou modifier `photo` et `cv` dans `profile`.

## Tester en local

Les modules JavaScript ne fonctionnent pas avec le protocole `file://`. Il faut un petit serveur local :

```bash
python3 -m http.server 8080
```

puis ouvrir <http://localhost:8080>.

## Publier

```bash
git add .
git commit -m "Mise à jour du portfolio"
git push origin main
```

## Structure

```
.
├── index.html            Structure de la page et métadonnées
├── README.md
└── assets/
    ├── css/
    │   ├── main.css          Variables, base, barre latérale, mise en page, responsive
    │   └── components.css    Style des sections
    ├── js/
    │   ├── data.js           Tout le contenu du site
    │   ├── main.js           Rendu des sections, navigation, menu mobile
    │   ├── projects.js       Rendu de la section Projets
    │   └── utils.js          Échappement HTML et icônes SVG
    ├── icons/favicon.svg
    ├── images/
    │   ├── photo.png
    │   └── projets/          Figures des projets
    ├── videos/               Courtes vidéos de simulation (mp4)
    └── files/
        ├── cv.pdf
        ├── attestations/     Attestations, certificats et justificatifs
        ├── exposes/          Exposés et projets de cours (PDF)
        └── rapports/         Rapports de stage
```
