// ============================================
// DONNÉES PERSONNELLES
// ============================================
export const personalInfo = {
  name: "RAHARIVONJY Belco Caffasson",
  shortName: "Belco.Caffasson",
  title: "étudiant en informatique · développeur web",
  email: "bcaffasson@gmail.com",
  phone: "+261 38 405 14 37",
  phoneFormatted: "+261384051437",
  location: "Fianarantsoa, Madagascar",
  cvLink: `${import.meta.env.BASE_URL}assets/CV_pro.pdf`,
  photo: `${import.meta.env.BASE_URL}assets/belco.jpeg`,
  description: "Étudiant en deuxième année de licence à l'École Nationale d'Informatique (ENI), passionné par le développement web et la création d'applications modernes. Curieux, motivé et rigoureux — je construis avec React, Vue.js, PHP et Python, et j'aime comprendre comment les systèmes s'articulent, du code jusqu'au réseau.",
  social: {
    github: "https://github.com/bcaffasson-stack",
    linkedin: "https://linkedin.com/in/belco-caffasson",
    twitter: "https://twitter.com/bcaffasson",
  },
  stats: [
    { value: "2026", label: "Licence en cours — ENI" },
    { value: "03", label: "Langues parlées" },
    { value: "Multiples", label: "Projets réalisés" },
  ],
};

// ============================================
// NAVIGATION
// ============================================
export const navLinks = [
  { href: "#home", label: "Accueil", icon: "fa-home" },
  { href: "#about", label: "Profil", icon: "fa-user" },
  { href: "#skills", label: "Compétences", icon: "fa-cogs" },
  { href: "#projects", label: "Projets", icon: "fa-folder-open" },
  { href: "#formations", label: "Formations", icon: "fa-graduation-cap" },
  { href: "#contact", label: "Contact", icon: "fa-envelope" },
];

// ============================================
// SECTION À PROPOS
// ============================================
export const aboutText = {
  lead: "Je conçois des applications web modernes, du front-end réactif jusqu'à l'architecture des données côté serveur.",
  p1: "Étudiant en deuxième année de licence Informatique Générale à l'École Nationale d'Informatique (ENI) de Fianarantsoa, je développe mes compétences en construisant de vraies applications : interfaces en React et Vue.js, logique métier en C# avec une architecture MVC, et gestion de bases de données en PHP (PDO) et MySQL.",
  p2: "Au-delà du développement, je m'intéresse aussi aux réseaux — j'ai conçu et configuré des topologies complexes sous GNS3 avec le protocole de routage dynamique OSPF, un projet qui inspire d'ailleurs le fil conducteur de ce portfolio.",
};

export const aboutMeta = [
  { icon: "fa-map-marker-alt", label: "Localisation", value: "Fianarantsoa, Madagascar" },
  { icon: "fa-graduation-cap", label: "Formation", value: "Licence Info — ENI (2025 → auj.)" },
  { icon: "fa-laptop-code", label: "Domaine", value: "Développement Web & Réseaux" },
  { icon: "fa-language", label: "Langues", value: "Malagasy · Français · Anglais" },
];

// ============================================
// COMPÉTENCES
// ============================================
export const skills = [
  {
    id: 1,
    name: "Développement",
    icon: "fa-solid fa-code",
    level: 90,
    color: "#3B82F6",
    description: "Applications web modernes, du composant d'interface à l'architecture applicative.",
    tags: ["React", "Vue.js", "PHP", "JavaScript", "C# · MVC", "Python"],
  },
  {
    id: 2,
    name: "Bases de données",
    icon: "fa-solid fa-database",
    level: 80,
    color: "#10B981",
    description: "Conception, requêtage et gestion de données relationnelles.",
    tags: ["SQL", "MySQL", "PDO", "Modélisation"],
  },
  {
    id: 3,
    name: "Analyse & Méthodologie",
    icon: "fa-solid fa-diagram-project",
    level: 75,
    color: "#F59E0B",
    description: "Analyse et résolution de problèmes techniques avec rigueur.",
    tags: ["Analyse", "Debug", "Gestion des risques"],
  },
  {
    id: 4,
    name: "Bureautique",
    icon: "fa-regular fa-file-lines",
    level: 70,
    color: "#8B5CF6",
    description: "Notions de base pour la production de documents et le suivi de données.",
    tags: ["Word", "Excel"],
  },
  {
    id: 5,
    name: "Savoir-être",
    icon: "fa-solid fa-people-group",
    level: 95,
    color: "#EC4899",
    description: "Travail en équipe, curiosité et motivation au cœur de chaque projet.",
    tags: ["Travail d'équipe", "Rigueur", "Curiosité", "Motivation"],
  },
  {
    id: 6,
    name: "Réseaux",
    icon: "fa-solid fa-network-wired",
    level: 70,
    color: "#06B6D4",
    description: "Conception de topologies et routage dynamique en environnement simulé.",
    tags: ["GNS3", "OSPF", "Routage IP", "RIP"],
  },
];

// ============================================
// PROJETS
// ============================================
export const projects = [
  {
    id: 2,
    title: "Projet PHP — Gestion de Restaurant",
    description: "Application web complète de gestion pour un restaurant",
    date: "2026",
    image: `${import.meta.env.BASE_URL}assets/projects/php-restaurant-login.png`,
    technologies: ["PHP", "MySQL", "Bootstrap", "Sessions & Sécurité"],
    details: [
      "Développement d'une application web complète de gestion pour un restaurant (administration, menus, commandes, réservations).",
      "Mise en œuvre d'une architecture PHP robuste avec gestion des sessions, authentification sécurisée et base de données MySQL dynamique.",
      "Interface moderne et réactive avec un mode sombre/clair persistant et un design épuré sous Bootstrap.",
    ],
    github: null,
    live: "https://restaurant-belco.infinityfreeapp.com",
    featured: true,
  },
  {
    id: 3,
    title: "Projet de Routage IP",
    description: "Configuration de topologies réseau avec GNS3 et OSPF",
    date: "2026",
    image: `${import.meta.env.BASE_URL}assets/projects/routage-ip-topologie.png`,
    technologies: ["GNS3", "OSPF", "RIP", "Réseaux"],
    details: [
      "Conception et configuration de topologies réseau complexes sous GNS3.",
      "Mise en pratique du routage IP dynamique avec redistribution mutuelle RIP/OSPF via un routeur frontière.",
    ],
    github: "https://github.com/bcaffasson-stack/projet-routage-ip-rip-ospf",
    live: null,
    featured: true,
    gallery: [
      {
        url: "https://raw.githubusercontent.com/bcaffasson-stack/projet-routage-ip-rip-ospf/main/01-topologie.png",
        alt: "Topologie réseau RIP/OSPF",
      },
      {
        url: "https://raw.githubusercontent.com/bcaffasson-stack/projet-routage-ip-rip-ospf/main/05-ping-r1-r9.png",
        alt: "Test de connectivité ping",
      },
      {
        url: "https://raw.githubusercontent.com/bcaffasson-stack/projet-routage-ip-rip-ospf/main/06-traceroute-r1-r9.png",
        alt: "Traceroute bout-à-bout",
      },
    ],
  },
  {
    id: 4,
    title: "Projet DHTML — Boîte à Outils Web",
    description: "Site interactif regroupant plusieurs outils web (Cramer, images, panneau, tableau de données)",
    date: "2026",
    image: `${import.meta.env.BASE_URL}assets/projects/projet-dhtml.png`,
    technologies: ["HTML", "CSS", "JavaScript"],
    details: [
      "Développement d'un site multi-pages en JavaScript pur (DOM, fetch, manipulation dynamique du contenu).",
      "Résolution de systèmes d'équations linéaires par la méthode de Cramer, avec affichage détaillé des matrices et déterminants.",
      "Modules additionnels : redimensionnement/transformation d'images, panneau publicitaire rotatif, tableau de données avec statistiques.",
    ],
    github: "https://github.com/bcaffasson-stack/Projet-Js",
    live: "https://projet-js-nu.vercel.app",
    featured: true,
  },
  {
    id: 5,
    title: "Infrastructure Réseau — L2ENI",
    description: "Mini-datacenter sur VM Debian 13 : site web LDAP, serveur mail, DNS et monitoring avec alertes",
    date: "2026",
    image: "https://raw.githubusercontent.com/bcaffasson-stack/l2eni-mg-infra/master/01-appli-login.png",
    technologies: ["Debian", "Apache", "OpenLDAP", "Postfix", "Dovecot", "Roundcube", "BIND9", "Prometheus", "Grafana"],
    details: [
      "Déploiement d'une infrastructure d'entreprise complète sur une seule machine virtuelle Debian 13.",
      "Site web avec authentification centralisée via OpenLDAP (appli.l2eni.mg), serveur de messagerie Postfix + Dovecot + Roundcube (webmail.l2eni.mg), et DNS BIND9 pour le domaine l2eni.mg.",
      "Supervision en temps réel avec Prometheus, Grafana et Alertmanager : alertes par e-mail si un service tombe (CPU > 80%, RAM > 95%, disque > 90%).",
      "Sécurisation SSL/TLS (mkcert), fail2ban (6 jails), et machine virtuelle exposée via VirtualBox.",
    ],
    github: "https://github.com/bcaffasson-stack/l2eni-mg-infra",
    live: null,
    featured: true,
    gallery: [
      {
        url: "https://raw.githubusercontent.com/bcaffasson-stack/l2eni-mg-infra/master/01-appli-login.png",
        alt: "Page de connexion du site web avec authentification LDAP",
      },
      {
        url: "https://raw.githubusercontent.com/bcaffasson-stack/l2eni-mg-infra/master/02-webmail-login.png",
        alt: "Interface de connexion Roundcube (webmail)",
      },
      {
        url: "https://raw.githubusercontent.com/bcaffasson-stack/l2eni-mg-infra/master/03-monitoring-login.png",
        alt: "Page de connexion Grafana (supervision)",
      },
    ],
  },
  {
    id: 6,
    title: "Réseau Sécurisé — OPNsense & Suricata",
    description: "Architecture réseau sécurisée : pare-feu OPNsense, DMZ, IDS Suricata et campagne Red Team (Nmap + Hydra)",
    date: "2026",
    image: "https://raw.githubusercontent.com/bcaffasson-stack/projet-ssi-opnsense/main/captures/01-redteam/01-nmap-scan.png",
    technologies: ["OPNsense", "Suricata", "Kali Linux", "VirtualBox", "Nmap", "Hydra", "DMZ", "Red Team"],
    details: [
      "Conception d'une architecture réseau segmentée en trois zones (WAN, LAN, DMZ) reposant sur le pare-feu open-source OPNsense.",
      "Isolation stricte de la DMZ (serveur Web) vis-à-vis du LAN via des règles de pare-feu et port forwarding sécurisé.",
      "Déploiement du système de détection d'intrusion Suricata et de règles personnalisées (scans Nmap, force brute Hydra).",
      "Simulation d'une campagne d'attaques Red Team depuis Kali Linux (Nmap, Hydra) et mise en évidence de leur détection dans le journal d'alertes de l'IDS.",
    ],
    github: "https://github.com/bcaffasson-stack/projet-ssi-opnsense",
    live: null,
    featured: true,
    gallery: [
      {
        url: "https://raw.githubusercontent.com/bcaffasson-stack/projet-ssi-opnsense/main/captures/01-redteam/01-nmap-scan.png",
        alt: "Scan Nmap de Kali vers le serveur Windows (ports 135, 139, 389, 445 ouverts)",
      },
      {
        url: "https://raw.githubusercontent.com/bcaffasson-stack/projet-ssi-opnsense/main/captures/01-redteam/02-hydra-ssh.png",
        alt: "Attaque par force brute Hydra sur le service SSH",
      },
      {
        url: "https://raw.githubusercontent.com/bcaffasson-stack/projet-ssi-opnsense/main/captures/02-suricata/04-alertes-suricata.png",
        alt: "Journal des alertes Suricata détectant les attaques",
      },
    ],
  },
];

// ============================================
// FORMATIONS
// ============================================
export const formations = [
  {
    id: 1,
    date: "2025 — Aujourd'hui",
    title: "Licence en Informatique (Informatique Générale)",
    org: "École Nationale d'Informatique (ENI) — Fianarantsoa",
    description: "Apprentissage des bases fondamentales de l'informatique et de plusieurs langages de programmation.",
    badge: null,
    details: null,
    type: "degree",
    certificate: null,
  },
  {
    id: 2,
    date: "2025 — Aujourd'hui",
    title: "Renforcement des compétences techniques",
    org: "Spray Info — Fianarantsoa",
    description: "Programme intensif visant à booster les compétences pratiques en développement et informatique.",
    badge: null,
    details: null,
    type: "training",
    certificate: null,
  },
  {
    id: 3,
    date: "2026",
    title: "Formation Risque Zéro des Projets",
    org: "Orange Digital Center (ODC) — Fianarantsoa",
    description: "Apprentissage des méthodes de sécurisation et de gestion des risques liés aux projets.",
    badge: "Attestation obtenue",
    details: null,
    type: "certification",
    certificate: `${import.meta.env.BASE_URL}assets/certificates/certificat-odc-risque-zero.jpg`,
  },
  {
    id: 4,
    date: "2024",
    title: "Apprentissage de la langue anglaise",
    org: "International TEFL / TESOL Training Institute (ITTI) — Mahajanga",
    description: "Niveau certifié pour un usage professionnel et technique.",
    badge: "Certificate C1 — Advanced High English",
    details: null,
    type: "language",
    certificate: `${import.meta.env.BASE_URL}assets/certificates/certificat-anglais-c1.jpg`,
  },
  {
    id: 5,
    date: "2024",
    title: "Baccalauréat & Attestation en Bureautique",
    org: "Lycée Montfort Saint Gabriel — Mahajanga",
    description: null,
    badge: null,
    details: [
      "Obtention du baccalauréat",
      "Formation aux outils bureautiques Word et Excel",
    ],
    type: "degree",
    certificate: `${import.meta.env.BASE_URL}assets/certificates/attestation-bureautique-montfort.jpg`,
  },
];

// ============================================
// LANGUES
// ============================================
export const languages = [
  { 
    id: 1,
    name: "Malagasy", 
    level: "Langue maternelle", 
    percentage: 100,
    flag: "🇲🇬",
    description: "Langue natale, parlée couramment dans tous les contextes.",
  },
  { 
    id: 2,
    name: "Français", 
    level: "Courant", 
    percentage: 90,
    flag: "🇫🇷",
    description: "Langue d'enseignement et de travail, maîtrise professionnelle.",
  },
  { 
    id: 3,
    name: "Anglais", 
    level: "Technique", 
    percentage: 65,
    flag: "🇬🇧",
    description: "Niveau technique pour la documentation et la programmation.",
  },
];

// ============================================
// PASSIONS
// ============================================
export const passions = [
  { 
    id: 1,
    icon: "fa-solid fa-laptop-code", 
    title: "Programmation", 
    description: "Explorer de nouveaux langages et frameworks par curiosité.",
    color: "#3B82F6",
  },
  { 
    id: 2,
    icon: "fa-solid fa-language", 
    title: "Apprentissage des langues", 
    description: "Progresser en anglais et découvrir d'autres cultures.",
    color: "#10B981",
  },
  { 
    id: 3,
    icon: "fa-solid fa-basketball", 
    title: "Basketball", 
    description: "Esprit d'équipe et dépassement de soi sur le terrain.",
    color: "#F59E0B",
  },
];

// ============================================
// CONTACT
// ============================================
export const contactCards = [
  { 
    id: 1,
    icon: "fa-solid fa-phone", 
    label: "Téléphone", 
    value: "+261 38 405 14 37", 
    href: "tel:+261384051437",
    type: "link",
  },
  { 
    id: 2,
    icon: "fa-regular fa-envelope", 
    label: "Email", 
    value: "bcaffasson@gmail.com", 
    href: "mailto:bcaffasson@gmail.com",
    type: "link",
  },
  { 
    id: 3,
    icon: "fa-solid fa-location-dot", 
    label: "Localisation", 
    value: "Fianarantsoa, Madagascar", 
    href: null,
    type: "text",
  },
];

// ============================================
// RÉSEAUX SOCIAUX
// ============================================
export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    icon: "fa-brands fa-github",
    url: "https://github.com/bcaffasson-stack",
    color: "#333333",
    username: "bcaffasson-stack",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin",
    url: "https://linkedin.com/in/belco-caffasson",
    color: "#0A66C2",
    username: "belco-caffasson",
  },
  {
    id: 3,
    name: "Twitter",
    icon: "fa-brands fa-twitter",
    url: "https://twitter.com/bcaffasson",
    color: "#1DA1F2",
    username: "@bcaffasson",
  },
];

// ============================================
// STATISTIQUES GLOBALES
// ============================================
export const globalStats = {
  skills: {
    total: 6,
    average: 80,
    topSkill: "Savoir-être (95%)",
  },
  projects: {
    total: 5,
    featured: 5,
    technologies: ["C#", "React", "Vue.js", "PHP", "MySQL", "Bootstrap", "GNS3", "OSPF", "RIP", "JavaScript", "Debian", "Apache", "OpenLDAP", "Postfix", "Dovecot", "Roundcube", "BIND9", "Prometheus", "Grafana", "OPNsense", "Suricata", "Kali Linux", "VirtualBox", "Nmap", "Hydra"],
  },
  formations: {
    total: 5,
    certifications: 1,
    inProgress: 2,
  },
  languages: {
    total: 3,
    native: 1,
    average: 85,
  },
};

// ============================================
// MÉTADONNÉES DU SITE
// ============================================
export const siteMeta = {
  title: "Belco Caffasson RAHARIVONJY — Développeur Web",
  description: "Portfolio de Belco Caffasson RAHARIVONJY, étudiant en informatique et développeur web à Fianarantsoa, Madagascar.",
  author: "Belco Caffasson RAHARIVONJY",
  keywords: "développeur web, portfolio, react, javascript, php, python, Madagascar, Fianarantsoa, ENI",
  url: "https://bcaffasson-stack.github.io/portfolio",
  locale: "fr_FR",
  themeColor: "#3B82F6",
};

// ============================================
// EXPORT PAR DÉFAUT
// ============================================
const data = {
  personalInfo,
  navLinks,
  aboutText,
  aboutMeta,
  skills,
  projects,
  formations,
  languages,
  passions,
  contactCards,
  socialLinks,
  globalStats,
  siteMeta,
};

export default data;