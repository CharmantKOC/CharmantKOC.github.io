/**
 * data.js : contenu du portfolio.
 * Pour mettre à jour le site, il suffit de modifier ce fichier.
 */

/**
 * Un lien peut être un chemin local (assets/files/...) ou un lien Google Drive,
 * converti automatiquement en lien de prévisualisation.
 * Une valeur vide ("") n'affiche aucun lien.
 */
function drive(v) {
  if (!v) return null;
  const m = String(v).match(/drive\.google\.com\/.*?\/d\/([\w-]+)/) || String(v).match(/drive\.google\.com\/.*?[?&]id=([\w-]+)/);
  return m ? `https://drive.google.com/file/d/${m[1]}/preview` : String(v);
}

const ATT = "assets/files/attestations/";
const LINKS = {
  // Écoles, certifications, conférences
  cimpa: ATT + "BALOGOUN_CIMPA.pdf",
  mlSummerSchool: ATT + "ml-summer-school-2026.pdf",
  iocma: ATT + "iocma-2026.pdf",
  labef: ATT + "labef-sem-2025.pdf",
  forceN: ATT + "force-n-ia-2025.pdf",
  cita: ATT + "cita-2024.jpg",
  eeia: ATT + "eeia-2022.pdf",

  // Distinctions
  datatour: ATT + "datatour-cansd-2025.jpg",
  nasa: ATT + "nasa-space-apps-2025.jpg",
  friare: ATT + "friare-hackathon-2025.jpg",
  kyfax: ATT + "kyfax-ai-contest-2024.jpg",
  mify: ATT + "mify-maic-2022.jpg",
  vigieCoop: "",

  // Stages
  slabRapport: "https://drive.google.com/file/d/1_ELQTKoKy-eciZEjD1EQv7nKonXfXU5Y/view?usp=sharing",
  slabAttestation: ATT + "stage-s-lab-2026.jpg",
  ddsRapport: "assets/files/rapports/rapport-stage-dds-zou-2025.pdf",
  ddsAttestation: "",

  // Exposés et projets de cours
  controleOptimal: "assets/files/exposes/controle-optimal-chaleur.pdf",
  regression: "assets/files/exposes/regression-cout-assurance.pdf",
  valeursPropres: "assets/files/exposes/valeurs-propres.pdf",
  pannesCascade: "assets/files/exposes/pannes-cascade.pdf",
  convolution: "assets/files/exposes/algebre-convolution.pdf",
  fourier: "assets/files/exposes/transformation-fourier.pdf",
  cahnhilliard: "assets/files/projets/cahn_hilliard_modeling.pdf",
  pinns: "assets/files/projets/PINNs_projectile_ressortmasse_SIR.pdf",
  stenose: "assets/files/projets/presentation_stenose.pdf",

  // Dépôts GitHub (un par projet)
  githubCahnHilliard: "https://github.com/CharmantKOC/Modelisation-et-simulation-numerique-de-la-decomposition-spinodale-par-equation-de-Cahn-Hilliard",  githubPinns: "https://github.com/CharmantKOC/Physics-Informed-Neural-Networks-PINNs-resolution-d-equations-differentielles",           githubControleOptimal: "",
  githubRegression: "",    githubValeursPropres: "",  githubGrayScott: "",
  githubMarkovFon: "https://github.com/CharmantKOC/Markov_Fon",     githubPannesCascade: "",   githubConvolution: "",
  githubFourier: "",       githubAnalyseCommentaires: "", githubDetectionFissures: "https://github.com/CharmantKOC/Detection-de-fissures-sur-les-infrastructures-de-travaux-publics",
  githubARCme: "https://github.com/CharmantKOC/ARCme",
};

// Profil
export const profile = {
  firstName:   "Charmant",
  lastName:    "BALOGOUN",
  title:       "Élève ingénieur en Modélisation et Simulation Numérique",
  institution: "École Nationale Supérieure de Génie Mathématique et Modélisation (ENSGMM)",
  email:       "charmantbalogoun@gmail.com",
  photo:       "assets/images/photo.png",
  photo_alt:   "Portrait de Charmant Balogoun",
  cv:          "CV/charmant_fcv.pdf",
  github:      "https://github.com/CharmantKOC",
  linkedin:    "https://www.linkedin.com/in/charmantblg",
};

// À propos
export const about = {
  bio: [
    "Élève ingénieur à l'ENSGMM, je recherche un stage de fin d'études (PFE), un master ou une opportunité de doctorat en modélisation mathématique, simulation numérique et intelligence artificielle. Je souhaite travailler à l'interface entre les modèles physiques (équations différentielles et EDP) et l'apprentissage automatique : simuler des phénomènes complexes, les calibrer sur des données réelles et accélérer leur résolution avec des réseaux de neurones. Je peux contribuer à construire, implémenter et valider des modèles numériques, en santé, environnement ou systèmes complexes, au sein d'une équipe de recherche ou d'un laboratoire.",
  ],
  interests: [
    "Mathématiques appliquées",
    "Modélisation mathématique",
    "Analyse et simulation numériques",
    "Intelligence artificielle",
  ],
};


// Compétences
export const skills = {
  categories: [
    {
      name:  "Modélisation mathématique",
      items: ["Équations différentielles", "Systèmes dynamiques", "Contrôle optimal", "Chaînes de Markov", "Simulation stochastique", "Modélisation statistique"],
    },
    {
      name:  "Analyse et simulation numérique",
      items: ["Différences finies", "Volumes finis", "Méthodes spectrales", "Euler, Runge-Kutta", "Valeurs propres et algèbre linéaire numérique", "Optimisation", "Analyse de convergence"],
    },
    {
      name:  "Intelligence artificielle",
      items: ["Physics Informed Neural Networks", "Réseaux de neurones", "Apprentissage automatique", "Détection d'objets", "Prévision par machine learning", "Agents IA pour jeux"],
    },
    {
      name:  "Données, statistiques et SIG",
      items: ["Analyse exploratoire", "Modèles statistiques", "Série temporelle"],
    },
    {
      name:  "Langages de programmation",
      items: ["Python", "C", "MATLAB", "Fortran", "R"],
    },
    {
      name:  "Bibliothèques et développement",
      items: ["NumPy", "SciPy", "Pandas", "Matplotlib", "NetworkX", "OpenCV", "Streamlit", "FastAPI"],
    },
    {
      name:  "Environnement de travail",
      items: ["Linux", "Git & GitHub", "LaTeX"],
    },
  ],
};


// Projets (du plus récent au plus ancien)
export const projects = [

   {
    id:           "detection_fissures",
    title:        "Détection automatique de fissures dans les routes et les murs par vision par ordinateur",
    date:         "2026",
    abstract:     "Classification d'images de béton/chaussée en Positive (fissure) ou Negative (pas de fissure), via transfer learning sur MobileNetV2.",
    methods:      ["Convolutional Neural Networks", "Transfer Learning"],
    tools:        ["Python"],
    document_url:  null,
    github_url:   LINKS.githubDetectionFissures || null,
  },

  {
    id:           "cahn-hilliard",
    title:        "Modélisation de la décomposition spinodale par l'équation de Cahn-Hilliard",
    date:         "2026",
    abstract:     "Modélisation et simulation numérique d'une EDP non linéaire d'ordre quatre décrivant la décomposition spinodale.",
    methods:      ["Discrétisation spectrale (transformée en cosinus discrète)"],
    tools:        ["Python"],
    document_url: LINKS.cahnhilliard || null,
    github_url:   LINKS.githubCahnHilliard || null,
  },

  {
    id:           "pinns",
    title:        "Application des Physics Informed Neural Networks",
    date:         "2026",
    abstract:     "Résolution par réseaux de neurones de trois équations différentielles : projectile, oscillateur amorti et modèle SIR.",
    methods:      ["Physics Informed Neural Networks"],
    tools:        ["Python"],
    document_url: LINKS.pinns || null,
    github_url:   LINKS.githubPinns || null,
  },

  {
    id:           "controle-optimal-chaleur",
    title:        "Contrôle optimal instationnaire de l'équation de la chaleur",
    date:         "2026",
    date:         "2026",
    abstract:     "Existence et unicité du contrôle optimal, caractérisation par l'état adjoint et comparaison numérique de trois schémas temporels (ordre 2 en espace validé).",
    methods:      ["État adjoint", "Volumes finis", "Euler implicite et explicite", "Adams-Bashforth d'ordre 2", "Descente de gradient"],
    document_url: drive(LINKS.controleOptimal),
    github_url:   LINKS.githubControleOptimal || null,
  },

  {
    id:           "cout-assurance-regression",
    title:        "Prédiction des coûts de l'assurance maladie par régression linéaire multiple",
    date:         "2026",
    abstract:     "Modèle de frais médicaux sur 1 338 assurés : R² ajusté de 0,864 grâce à une interaction obésité × tabagisme.",
    methods:      ["Moindres carrés ordinaires", "Tests de Gauss-Markov", "Box-Cox, WLS, erreurs robustes", "Sélection AIC/BIC"],
    tools:        ["R", "tidyverse", "ggplot2"],
    document_url: drive(LINKS.regression),
    github_url:   LINKS.githubRegression || null,
  },

  {
    id:           "valeurs-propres",
    title:        "Méthodes de calcul de valeurs propres",
    date:         "2026",
    abstract:     "Méthode de la puissance, réduction de Hessenberg et rotations de Givens ; la réduction ramène le coût de chaque itération QR à O(n²).",
    methods:      ["Méthode de la puissance", "Réduction de Hessenberg (Householder)", "Rotations de Givens"],
    document_url: drive(LINKS.valeursPropres),
    github_url:   LINKS.githubValeursPropres || null,
  },

  {
    id:           "ARCme",
    title:        "ARC Mémoire",
    date:         "2025",
    abstract:     "Application web moderne permettant aux étudiants et alumni de partager, consulter et rechercher des mémoires de fin d'études de manière intelligente grâce à l'intelligence artificielle.",
    document_url: null,
    github_url:   LINKS.githubARCme || null,
  },

  {
    id:           "gray-scott",
    title:        "Motifs de Turing : modèle de réaction-diffusion de Gray-Scott",
    date:         "2025",
    abstract:     "Simulation du système de Gray-Scott et analyse numérique de la formation de motifs.",
    methods:      ["Différences finies"],
    tools:        ["Python"],
    document_url: null,
    github_url:   LINKS.githubGrayScott || null,
  },

  {
    id:           "stenose",
    title:        "Modélisation et simulation numérique de la circulation sanguine dans une artère carotide sténosée",
    date:         "2025",
    abstract:     "Revue de litterature sur la sténose carotidienne et sa modélisation par l'équation de Navier-Stokes.",
    document_url: LINKS.stenose || null,
    github_url:    null,
  },
  

  {
    id:           "fon-markov",
    title:        "Reconnaissance vocale de la langue Fon par chaînes de Markov",
    date:         "2025",
    abstract:     "Modélisation de la langue Fon par chaînes de Markov, visualisation des modèles et interface interactive.",
    methods:      ["Chaînes de Markov"],
    tools:        ["Python", "Matplotlib", "NetworkX", "Streamlit"],
    document_url: null,
    github_url:   LINKS.githubMarkovFon || null,
  },

  {
    id:           "pannes-cascade",
    title:        "Modélisation des pannes en cascade dans un réseau électrique",
    date:         "2025",
    abstract:     "Propagation de défaillances dans un réseau de Kuramoto : une stratégie de protection combinée porte le temps critique de 45 s à 89 s.",
    methods:      ["Modèle de Kuramoto", "Euler, Runge-Kutta d'ordre 4", "Contrôle adaptatif du couplage"],
    tools:        ["Python"],
    document_url: drive(LINKS.pannesCascade),
    github_url:   LINKS.githubPannesCascade || null,
  },

  {
    id:           "algebre-convolution",
    title:        "Algèbre de convolution et résolution des équations différentielles non linéaires",
    date:         "2025",
    abstract:     "Résolution exacte de certaines classes d'EDO non linéaires par transformation dans l'algèbre de convolution.",
    methods:      ["Distributions", "Produit de convolution", "Fonctions elliptiques de Jacobi"],
    document_url: drive(LINKS.convolution),
    github_url:   LINKS.githubConvolution || null,
  },

  {
    id:           "transformation-fourier",
    title:        "Transformation de Fourier et applications",
    date:         "2025",
    abstract:     "Transformation de Fourier et son extension aux distributions, appliquées aux EDO, aux EDP et au traitement du signal.",
    methods:      ["Transformée de Fourier des distributions", "Séries de Fourier", "Transformée de Fourier discrète"],
    document_url: drive(LINKS.fourier),
    github_url:   LINKS.githubFourier || null,
  },

  {
    id:           "analyse-commentaires",
    title:        "Analyse de commentaires clients",
    date:         "2024",
    abstract:     "Traitement de commentaires clients et tableau de bord interactif.",
    tools:        ["Python", "Pandas", "WordCloud", "Streamlit"],
    document_url: null,
    github_url:   LINKS.githubAnalyseCommentaires || null,
  },

];


// Expériences professionnelles
export const experiences = [

  {
    period:       "2026",
    title:        "Stage académique, Systèmes de données et cartographie numérique",
    organization: "Cabinet S Lab",
    location:     "Abomey-Calavi, Bénin",
    description:  "Initiation aux SIG et à la photogrammétrie par drone avec formalisation mathématique, classification non supervisée de l'occupation du sol par k-means, puis développement en équipe d'une plateforme numérique de gestion du cabinet (rôle d'ingénieur DevOps).",
    skills:       ["Python", "Django", "Leaflet.js", "QGIS"],
    document_url: drive(LINKS.slabRapport),
    attestation_url: drive(LINKS.slabAttestation),
  },

  {
    period:       "2025",
    title:        "Stage académique, Statistiques et analyse de données",
    organization: "Direction Départementale de la Santé du Zou",
    location:     "Abomey, Bénin",
    description:  "Analyse et modélisation des tendances épidémiologiques du paludisme dans le Zou (données DHIS2, 2020-2024) avec maquette d'un tableau de bord d'aide à la décision ; participation à l'Annuaire des Statistiques Sanitaires 2024 et à la revue UNICEF.",
    skills:       ["Python", "Pandas", "Matplotlib", "Streamlit", "DHIS2"],
    document_url: drive(LINKS.ddsRapport),
    attestation_url: drive(LINKS.ddsAttestation),
  },

];


// Écoles, certifications, conférences (du plus récent au plus ancien)
export const certifications = [

  {
    title:        "École de recherche CIMPA, mathématiques appliquées et intelligence artificielle",
    organization: "IMSP, Université d'Abomey-Calavi, Porto-Novo, Bénin",
    date:         "2026",
    verify_url:   drive(LINKS.cimpa),
    description:  "Apprentissage automatique et théorie du contrôle, mathématiques numériques et apprentissage des EDP, optimisation sur les graphes, apprentissage par renforcement, modélisation statistique, programmation par contraintes, réseaux de neurones et Transformers, calcul parallèle et HPC.",
  },

  {
    title:        "ML Summer School 2026",
    organization: "Cohere Labs Open Science Community",
    date:         "2026",
    verify_url:   drive(LINKS.mlSummerSchool),
  },

  {
    title:        "Conférence en ligne IOCMA 2026",
    organization: "MDPI, revue Mathematics",
    date:         "2026",
    verify_url:   drive(LINKS.iocma),
    description:  "2nd International Online Conference on Mathematics and Applications.",
  },

  {
    title:        "Formation en modélisation par équations structurelles avec R",
    organization: "Projet SSACAB II, LABEF / FSA, Université d'Abomey-Calavi",
    date:         "2025",
    verify_url:   drive(LINKS.labef),
    description:  "Principes et applications en santé, environnement et agronomie.",
  },

  {
    title:        "Certificat en intelligence artificielle",
    organization: "Programme FORCE-N, Université Numérique Cheikh Hamidou Kane, Mastercard Foundation",
    date:         "2025",
    verify_url:   drive(LINKS.forceN),
  },

  {
    title:        "Formation sur les réseaux de neurones génératifs profonds",
    organization: "ANSALB, Conférence Internationale des Technologies de l'Information et de la Communication (CITA 2024)",
    date:         "2024",
    verify_url:   drive(LINKS.cita),
    description:  "Cas de l'usurpation d'identité numérique basée sur l'IA.",
  },

  {
    title:        "École d'été sur l'intelligence artificielle (EEIA 2022)",
    organization: "Fondation Vallet, Bénin Excellence, PNUD, Godomey,Bénin",
    date:         "2022",
    verify_url:   drive(LINKS.eeia),
    description:  "",
  },

];


// Distinctions et compétitions (du plus récent au plus ancien)
export const distinctions = [

  {
    title:        "1er prix, Hackathon DigiCoop-WA+",
    team:         "",
    organization: "Confédération des Institutions Financières d'Afrique de l'Ouest, Équipe Vigie-Coop",
    date:         "2026",
    description:  "Conception d'un système de filtrage des clients et de détection d'opérations frauduleuses dans les coopératives financières.",
    url:          drive(LINKS.vigieCoop),
  },

  {
    title:        "Participation à la phase nationale de la CANSD",
    team:         "",
    description:  "Coupe d'Afrique des Nations en Science des Données.",
    organization: "Data Afrique Hub, DataTour 2025, Équipe ChAy, Bénin",
    date:         "2025",
    url:          drive(LINKS.datatour),
  },

  {
    title:        "3e prix national, NASA International Space Apps Challenge 2025",
    team:         "",
    organization: "NASA, Équipe CMAK",
    date:         "2025",
    url:          drive(LINKS.nasa),
    description:  "Prévision de la qualité de l'air à partir de données d'observation de la Terre (machine learning, API FastAPI).",
  },

  {
    title:        "3e prix, FRIARE Hackathon « Smart Cities »",
    team:         "",
    organization: "FRIARE, pour une intelligence artificielle responsable et efficiente en Afrique, Équipe CCP",
    date:         "2025",
    url:          drive(LINKS.friare),
    description:  "Détection automatique de plaques d'immatriculation via caméras routières, vérification en base de données et alertes de non-conformité (Python, OpenCV, YOLOv8, Pandas).",
  },

  {
    title:        "Finaliste, KYFAX AI Contest",
    team:         "",
    organization: "BSFE ENSGMM, Équipe JoLyCH",
    date:         "2024",
    url:          drive(LINKS.kyfax),
    description:  "Agent d'intelligence artificielle jouant au jeu traditionnel Sholo Guti (16 soldats), avec optimisation des décisions (Python).",
  },

  {
    title:        "3e place sur 57 équipes, MIFY Artificial Intelligence Contest (MAIC)",
    team:         "",
    organization: "MIFY Sarl, Équipe Yesunana",
    date:         "2022",
    url:          drive(LINKS.mify),
    description:  "Agent d'intelligence artificielle jouant au Morabaraba contre les IA des autres équipes.",
  },

];
