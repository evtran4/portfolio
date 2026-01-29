import ihsImage from '../public/IHS_Icon.webp'
import aiRepublicImage from '../public/aiRepublic.jpeg'
import h4iImage from '../public/h4i.png'
import honeyPig from '../public/honeyPig.jpg'
import guitarImage from '../public/guitar.jpeg'
import cache from '../public/cache.jpg'
import tam1 from '../public/tam1.jpg'
import tam2 from '../public/tam2.jpg'
import polyphia from '../public/polyphia.jpg'
import hiking from '../public/hiking.jpg'
import concert from '../public/concert.jpg'
import caliFirstMeal from '../public/caliFirstMeal.jpg'
import picnic from '../public/picnic.jpg'
import beach from '../public/beach.jpg'
import technica from '../public/technica_icon.png'
import terpmenu from '../public/terpmenu.jpg'
import split from '../public/split.png'
import shellmates from '../public/shellmates.png'

export const banner = {
  title: "Salut, je suis Evan",
  description1: "Ingénieur logiciel full-stack de 20 ans à l'UMD prêt à avoir un impact.",
  description2: "Découvrez mon expérience et mes projets !"
}

export const experience = {
    ihs: {
    title: "Stagiaire en ingénierie logicielle @ IHS",
    image: ihsImage,
    date: "Mai 2025 - Présent",
    tools: ["Vue", "Node", "GCP", "Firebase", "SQL", "Git"],
    content: {
        text: ["En tant que stagiaire en ingénierie logicielle à l'Institute for Humane Studies, j'ai eu l'opportunité de travailler sur la plateforme ScholarsEdge, qui révolutionne la façon dont les professeurs, universitaires et chercheurs interagissent entre eux et avec leurs recherches. Grâce à l'intégration d'outils d'IA tels qu'un multiplicateur de contenu pour la recherche d'articles et de législations, la recherche, le financement et la création de communautés sont désormais plus faciles que jamais pour les chercheurs.", "Travaillant en sprints avec Vue.js pour le frontend, j'ai écrit plus de 3000 lignes de code en production que j'ai pu connecter à notre backend Firebase et à la base de données Salesforce avec Node.js. J'ai également implémenté plusieurs fonctionnalités utilisant les outils GCP, comme un système de photo de profil avec les GCP Buckets.", "Aux côtés de quelques autres ingénieurs de l'équipe ScholarsEdge, j'ai également participé aux réunions hebdomadaires, ainsi qu'aux PR et revues de code sur GitHub."],
        images: [""]
      }
  },
  technica: {
    title: "Chef de projet technique @ Technica",
    image: technica, 
    date: "Juin 2025 - Présent",
    tools: ["React", "Node", "Firebase", "TypeScript"],
    content: {
        text: [
          "En tant que Tech Lead pour le programme Technica Fellowship, j'ai eu l'opportunité d'enseigner et de mentoriser un groupe de 15 lycéens lors d'un bootcamp de développement web de 8 semaines axé sur React, Node.js, Firebase et TypeScript.",
          "Chaque dimanche, j'animais des cours virtuels de 2 heures couvrant des sujets tels que React Hooks, Firebase Auth, et les workflows de développement fullstack en utilisant le curriculum du Hack4Impact Spring 2025 Bootcamp. J'ai également facilité les activités en classe, répondu aux questions des étudiants en direct et adapté les leçons pour soutenir les étudiants dans leurs projets finaux.",
          "En dehors des cours, j'ai aidé les étudiants via les heures de bureau, les revues de code et le support au débogage, ainsi que des conseils techniques pour renforcer leur confiance en leurs compétences de développement.",
          "Tout au long du programme, j'ai travaillé étroitement avec les co-exécutifs Hack4Impact-UMD et les organisateurs de Technica pour aligner les ateliers aux besoins des étudiants et garantir une expérience engageante et soutenante pour chaque étudiant."
        ],
        images: [""]
    }
  },
  h4i: {
    title: "Ingénieur @ Hack4Impact",
    image: h4iImage, 
    date: "Janvier 2025 - Présent",
    tools: ["React", "TypeScript", "Firebase", "GCP", "Python", "Git"],
    content: {
        text: ["En tant qu'ingénieur chez Hack4Impact, j'ai eu l'incroyable opportunité de travailler avec Food For All DC, une organisation à but non lucratif qui livre de la nourriture et des courses aux personnes en insécurité alimentaire dans la région de DC.", "Travaillant en équipe de sprint avec un frontend React.js combiné à un backend Firebase et Python, j'ai contribué au développement d'une application qui améliore leur système de livraison grâce à la gestion en temps réel des données clients, des itinéraires de livraison optimisés et un processus de planification simplifié.", "Une de mes fonctionnalités préférées était le système de livraison optimisé, où j'ai utilisé les adresses des clients combinées à l'API de géolocalisation GCP et un algorithme Python de graphes pour calculer les itinéraires optimaux pour les chauffeurs, affichés ensuite sur une carte LeafletJS de Washington DC.", "L'application a permis de réduire de 30% le temps de saisie des données ainsi que 5 heures par semaine sur la création des itinéraires et l'affectation des chauffeurs, permettant à Food For All DC d'aider plus efficacement plus de 100 personnes par jour", "<b>\"...Evan était l'un des rares ingénieurs à avoir reçu des évaluations parfaites de tous les membres de son équipe\"</b>"],
        images: [""]
    }
  },
  aiRepublic: {
    title: "Stagiaire en ingénierie logicielle @ AI Republic",
    image: aiRepublicImage,
    date: "Janvier 2025 - Mai 2025",
    tools: ["Svelte", "TailwindCSS", "FastAPI", "Python", "Docker", "PostgreSQL", "Git"],
    content: {
        text: ["En tant que stagiaire en ingénierie logicielle chez AI Republic, j'ai contribué au développement de AI Republic Helper, qui intègre des outils d'IA dans Google Chrome pour optimiser l'efficacité de la navigation web.", "Avec Svelte pour le frontend, j'ai construit plusieurs fonctionnalités IA telles qu'un explainer de code IA, un traducteur et un chatbot, connectés à notre backend Python FastAPI et à la base PostgreSQL, améliorant la navigation pour nos clients professionnels et utilisateurs personnels.", "J'utilisais GitHub pour soumettre des PR et gérer efficacement différentes versions du code, et je participais aux réunions hebdomadaires avec les tech leads, chefs de projet et autres stagiaires."],
        images: [""]
    }
  },
  freelance: {
    title: "Développeur logiciel freelance @ Honey Pig BBQ",
    image: honeyPig,
    date: "Février 2023 - Août 2024",
    tools: ["React", "HTML", "JavaScript"],
    content: {
        text: ["En tant qu'hôte et serveur chez Honey Pig KBBQ, j'ai remarqué de nombreuses lacunes dans le système de gestion des tables. Les informations sur les tables occupées, le nombre de clients par serveur et les employés présents étaient toutes suivies via un système papier obsolète, entraînant une mauvaise expérience pour les clients et les employés.", "Passionné par le logiciel, j'ai naturellement voulu trouver une solution. Mon premier projet freelance était un système de gestion de restaurant construit en HTML, CSS et JavaScript pour suivre quelles tables étaient occupées, combien de clients chaque serveur avait et quels serveurs travaillaient chaque jour. Il a été adopté par tous les hôtes, économisant plus d'une heure par jour en gestion de données et réduisant les erreurs, améliorant l'expérience client et facilitant le travail des employés.", "Plus tard, on m'a demandé d'aider à développer le site web pour leur nouveau bar Micky's Soju House, où j'ai utilisé React.js pour créer un site interactif mettant en valeur leur menu, augmentant leur présence en ligne et développant leur activité."],
        images: [""]
    }
  }
}

export const projects = {
  split: {
    title: "Split - Break Through Tech Career Launch",
    image: split,
    date: "Mai 2025 - Présent",
    tools: ["React", "TypeScript", "FastAPI", "Python", "MongoDB"],
    content: {
        text: [
                "Application de répartition de facture"
              ],
        images: [""]
      }
  },
  terpMenu: {
    title: "TerpMenu",
    image: terpmenu,
    date: "Mai 2025 - Présent",
    tools: ["React", "FastAPI", "Python", "MongoDB", "Docker"],
    content: {
        text: [
                "Développement d'une application de menu en React affichant noms, images, restrictions alimentaires et avis utilisateurs pour le menu quotidien de trois salles à manger de l'Université du Maryland afin d'améliorer l'expérience des étudiants et du personnel.",
                "Création d'un backend Python avec FastAPI et un webscraper BeautifulSoup exécuté chaque matin pour mettre à jour le menu, et intégration d'une base MongoDB pour stocker les avis utilisateurs.",
                "Utilisation de Git pour la collaboration et le contrôle de version, et Docker pour la containerisation et le déploiement."
              ],
        images: [""]
      }
  },
  shellmates: {
    title: "ShellMates",
    image: shellmates,
    date: "Mai 2025 - Présent",
    tools: ["React", "TypeScript", "FastAPI", "Python", "MongoDB"],
    content: {
        text: [
                "Application de rencontre"
              ],
        images: [""]
      }
  }
}

export const aboutMe = {
  paragraphs: ["En dehors de l'ingénierie logicielle, je suis un passionné de nature, de nourriture et de musique.", "Si je ne code pas, vous me trouverez dehors en randonnée, ou en train de jouer au tennis et au pickleball avec mes amis ! J'adore aussi le géocaching, et je progresse vers mon 100ème cache.", "Pour me détendre, je joue presque toujours de la guitare et du piano, ou j'écoute mes groupes préférés comme The Beatles, Queen et The Strokes !", "Je suis également un grand amateur de gastronomie. D'une simple sortie pour un boba, à un KBBQ entre amis, ou simplement en savourant le phở maison de ma grand-mère en famille, la nourriture est l'une des choses qui me rend le plus heureux."],
  images: [
    {
    image: guitarImage,
    description: "Mini jam sur McKeldin Mall à l'Université du Maryland"
    },
    {
      image: cache,
      description: "Mon GeoCache préféré"
    },
    {
      image: hiking,
      description: "Randonnée à Big Sur lors de mon voyage en Californie"
    },
    {
      image: polyphia,
      description: "Au premier rang d'un concert de Polyphia pour Halloween"
    },
    {
      image: tam1,
      description: "Randonnée Mt. Tamalpais PT.1"
    },
    {
      image: tam2,
      description: "Randonnée Mt. Tamalpais PT.2"
    },
    {
      image: picnic,
      description: "Picnic sur la plage avec Bánh mì et Boba !"
    },
    {
      image: concert,
      description: "Mon dernier concert sur la scène de l'UMD"
    },
    {
      image: caliFirstMeal,
      description: "Premier repas après mon arrivée à San Francisco"
    },
    {
      image: beach,
      description: "Voyage à la plage à Ocean City MD"
    }
  ]
}

export const education = {
   paragraphs: ["Je suis étudiant en 3ème année à l'Université du Maryland College Park en informatique.", "Au cours de mes 96 crédits, j'ai maintenu une <u>moyenne cumulative de 4.0</u> et j'ai été reconnu sur la liste du doyen chaque semestre jusqu'à présent.", "J'ai suivi des cours de programmation comme Programmation Orientée Objet I et II où j'ai étudié les concepts de base du codage et les structures de données avec Java, Introduction aux Systèmes Informatiques où j'ai appris les mécanismes bas-niveau en C, Unix et Assembly, Organisation des Langages de Programmation où j'ai étudié différents types de fonctionnalités, designs et implémentations de langages avec OCaml et Rust, et Développement d'Applications Web avec JavaScript où j'ai pratiqué mes compétences en ingénierie logicielle.", "J'ai également suivi des cours de mathématiques pour l'informatique comme Statistiques et Probabilités, Algèbre Linéaire, et Algorithmes où j'ai étudié des techniques pour concevoir des algorithmes efficaces et analyser leur temps d'exécution."]
}
