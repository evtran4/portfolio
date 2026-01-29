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
  title: "Hola, soy Evan",
  description1: "Ingeniero de software full-stack de 20 años en UMD, listo para generar impacto.",
  description2: "¡Mira mi experiencia y mis proyectos!"
}

export const experience = {
  ihs: {
    title: "Practicante de Ingeniería de Software @ IHS",
    image: ihsImage,
    date: "Mayo 2025 - Presente",
    tools: ["Vue", "Node", "GCP", "Firebase", "SQL", "Git"],
    content: {
      text: [
        "Como practicante de ingeniería de software en The Institute for Humane Studies, tuve la oportunidad de trabajar en la plataforma ScholarsEdge, que revoluciona la forma en que profesores, académicos e investigadores interactúan entre sí y con su investigación. Mediante la integración de herramientas de IA, como un multiplicador de contenido para búsquedas de artículos académicos y legislación, la investigación, el financiamiento y la creación de comunidad son ahora más accesibles que nunca para los académicos.",
        "Trabajando en sprints con Vue.js como framework frontend, escribí más de 3000 líneas de código en producción que conecté a nuestro backend de Firebase y a la base de datos de Salesforce usando Node.js. También implementé múltiples funcionalidades utilizando herramientas de GCP, como un sistema de fotos de perfil con GCP Buckets.",
        "Junto con otros ingenieros del equipo de ScholarsEdge, asistí a reuniones semanales de standup y participé en PRs y revisiones de código a través de GitHub."
      ],
      images: [""]
    }
  },
  technica: {
    title: "Líder Técnico @ Technica",
    image: technica,
    date: "Junio 2025 - Presente",
    tools: ["React", "Node", "Firebase", "TypeScript"],
    content: {
      text: [
        "Como Líder Técnico del Programa de Becas de Technica, tuve la oportunidad de enseñar y mentorizar a un grupo de 15 estudiantes de secundaria en un bootcamp de desarrollo web de 8 semanas enfocado en React, Node.js, Firebase y TypeScript.",
        "Cada domingo dirigí clases virtuales de 2 horas que cubrían temas como React Hooks, autenticación con Firebase y flujos de trabajo de desarrollo fullstack, utilizando el currículo del Bootcamp de Primavera 2025 de Hack4Impact. También facilité actividades en clase, respondí preguntas en vivo y adapté las lecciones para apoyar a los estudiantes en sus proyectos finales.",
        "Fuera de clase, ayudé a guiar a los estudiantes mediante horas de oficina, revisiones de código y soporte de depuración, además de brindar asesoramiento técnico para que ganaran más confianza en sus habilidades de desarrollo.",
        "Durante todo el programa, trabajé estrechamente con los co-directores ejecutivos de Hack4Impact-UMD y los organizadores de Technica para alinear los talleres con las necesidades de los estudiantes y garantizar una experiencia solidaria y atractiva para todos."
      ],
      images: [""]
    }
  },
  h4i: {
    title: "Ingeniero @ Hack4Impact",
    image: h4iImage,
    date: "Enero 2025 - Presente",
    tools: ["React", "TypeScript", "Firebase", "GCP", "Python", "Git"],
    content: {
      text: [
        "Como ingeniero en Hack4Impact, tuve la increíble oportunidad de trabajar con Food For All DC, una organización sin fines de lucro que entrega alimentos y comestibles a personas con inseguridad alimentaria en el área de DC.",
        "Trabajando en un equipo de sprints de ingeniería con un frontend en React.js combinado con Firebase y un backend en Python, ayudé a desarrollar una aplicación que mejoró su sistema de entregas mediante la gestión de datos de clientes en tiempo real, rutas de entrega optimizadas y un proceso de programación simplificado.",
        "Una de mis funcionalidades favoritas fue el sistema de entrega optimizado, donde utilicé direcciones de clientes junto con la API de geolocalización de GCP y un algoritmo de grafos en Python para calcular rutas óptimas para los conductores, que luego se mostraban en un mapa de LeafletJS de Washington DC.",
        "En general, la aplicación logró una reducción del 30% en el tiempo de ingreso de datos y un ahorro total de 5 horas semanales en la creación de rutas y asignación de conductores, permitiendo a Food For All DC ayudar de manera más eficiente a más de 100 personas por día.",
        "<b>\"…Evan fue uno de los pocos ingenieros que recibió calificaciones perfectas de todos los miembros de su equipo\"</b>"
      ],
      images: [""]
    }
  },
  aiRepublic: {
    title: "Practicante de Ingeniería de Software @ AI Republic",
    image: aiRepublicImage,
    date: "Enero 2025 - Mayo 2025",
    tools: ["Svelte", "TailwindCSS", "FastAPI", "Python", "Docker", "PostgreSQL", "Git"],
    content: {
      text: [
        "Como practicante de ingeniería de software en AI Republic, tuve la oportunidad de ayudar a desarrollar AI Republic Helper, que integraba herramientas de IA en Google Chrome para optimizar la eficiencia de la navegación web.",
        "Usando Svelte como framework frontend, desarrollé múltiples funciones de IA como un explicador de código, traductor y chatbot, que se conectaban a nuestro backend en Python con FastAPI y a la base de datos PostgreSQL, mejorando la navegación web tanto para clientes empresariales como para usuarios individuales.",
        "Utilicé GitHub para enviar PRs y gestionar eficientemente diferentes versiones del código, y asistí a reuniones semanales de standup con líderes técnicos, gerentes de proyecto y otros practicantes."
      ],
      images: [""]
    }
  },
  freelance: {
    title: "Desarrollador de Software Freelance @ Honey Pig BBQ",
    image: honeyPig,
    date: "Febrero 2023 - Agosto 2024",
    tools: ["React", "HTML", "JavaScript"],
    content: {
      text: [
        "Como anfitrión y mesero en Honey Pig KBBQ, noté muchos problemas en el sistema de asignación de mesas. La información sobre qué mesas estaban ocupadas, cuántos clientes tenía cada mesero y qué empleados estaban trabajando se llevaba mediante un sistema anticuado e ineficiente de papel y lápiz, lo que generaba peores experiencias tanto para clientes como para empleados.",
        "Apasionado por el software, naturalmente quise crear una solución. Mi primer proyecto freelance fue un Sistema de Gestión de Restaurante construido con HTML, CSS y JavaScript para llevar el control de mesas ocupadas, número de clientes por mesero y turnos de trabajo. Fue adoptado por todos los anfitriones del restaurante, ahorrando más de una hora diaria en gestión de datos y reduciendo errores de los empleados, lo que resultó en una mejor experiencia para los clientes y tareas más sencillas para el personal.",
        "Más adelante, me pidieron ayudar a desarrollar el sitio web de su nuevo bar, Micky's Soju House, donde utilicé React.js para crear un sitio interactivo del menú que mostrara mejor su comida y bebidas, ayudando a aumentar su presencia en línea y hacer crecer su negocio."
      ],
      images: [""]
    }
  }
}

export const projects = {
  split: {
    title: "Split - Lanzamiento Profesional Break Through Tech",
    image: split,
    date: "Mayo 2025 - Presente",
    tools: ["React", "TypeScript", "FastAPI", "Python", "MongoDB"],
    content: {
      text: [
        "Aplicación para dividir gastos"
      ],
      images: [""]
    }
  },
  terpMenu: {
    title: "TerpMenu",
    image: terpmenu,
    date: "Mayo 2025 - Presente",
    tools: ["React", "FastAPI", "Python", "MongoDB", "Docker"],
    content: {
      text: [
        "Desarrollé una aplicación de menú usando React que muestra nombres, imágenes, restricciones dietéticas y calificaciones de usuarios para el menú diario de tres comedores de la Universidad de Maryland, mejorando la experiencia tanto de estudiantes como del personal.",
        "Construí un backend en Python con FastAPI y un web scraper con BeautifulSoup que se ejecuta cada mañana para actualizar el menú, e integré una base de datos MongoDB para almacenar reseñas de usuarios.",
        "Utilicé Git para colaboración y control de versiones, y Docker para la contenerización y el despliegue."
      ],
      images: [""]
    }
  },
  shellmates: {
    title: "ShellMates",
    image: shellmates,
    date: "Mayo 2025 - Presente",
    tools: ["React", "TypeScript", "FastAPI", "Python", "MongoDB"],
    content: {
      text: [
        "Aplicación de citas"
      ],
      images: [""]
    }
  }
}

export const aboutMe = {
  paragraphs: [
    "Fuera de la ingeniería de software, soy un gran amante de la naturaleza, la comida y la música.",
    "Si no estoy programando, casi siempre me puedes encontrar al aire libre haciendo senderismo o jugando tenis y pickleball con mis amigos. También me encanta el geocaching y estoy trabajando para alcanzar mi caché número 100.",
    "Para relajarme y desestresarme, casi siempre toco la guitarra y el piano, o escucho a mis bandas favoritas como The Beatles, Queen y The Strokes.",
    "También soy un gran amante de la comida. Desde una simple salida por boba, hasta ir a comer KBBQ con mis amigos o disfrutar el phở casero de mi abuela con mi familia, la comida es una de las cosas que más felicidad me da."
  ],
  images: [
    {
      image: guitarImage,
      description: "Mini jam en McKeldin Mall en la Universidad de Maryland"
    },
    {
      image: cache,
      description: "Mi geocaché favorito"
    },
    {
      image: hiking,
      description: "Senderismo en Big Sur durante mi viaje a California"
    },
    {
      image: polyphia,
      description: "Primera fila en un concierto de Polyphia en Halloween"
    },
    {
      image: tam1,
      description: "Senderismo en el Monte Tamalpais Parte 1"
    },
    {
      image: tam2,
      description: "Senderismo en el Monte Tamalpais Parte 2"
    },
    {
      image: picnic,
      description: "Picnic de bánh mì y boba en la playa"
    },
    {
      image: concert,
      description: "Mi último concierto en el escenario de UMD"
    },
    {
      image: caliFirstMeal,
      description: "Primera comida después de aterrizar en San Francisco"
    },
    {
      image: beach,
      description: "Viaje a la playa en Ocean City, Maryland"
    }
  ]
}

export const education = {
  paragraphs: [
    "Soy estudiante de tercer año en la Universidad de Maryland College Park estudiando Ciencias de la Computación.",
    "A lo largo de mis 96 créditos, he mantenido un <u>GPA acumulativo de 4.0</u> y he sido reconocido en la Lista del Decano cada semestre hasta ahora.",
    "He completado cursos de programación como Programación Orientada a Objetos I y II, donde estudié conceptos fundamentales y estructuras de datos con Java; Introducción a Sistemas Computacionales, donde aprendí sobre mecanismos de bajo nivel en C, Unix y ensamblador; Organización de Lenguajes de Programación, donde estudié distintos tipos de características, diseño e implementación de lenguajes con OCaml y Rust; y Desarrollo de Aplicaciones Web con JavaScript, donde practiqué mis habilidades de ingeniería de software.",
    "También he cursado materias matemáticas de informática como Estadística y Probabilidad, Álgebra Lineal y Algoritmos, donde estudié técnicas para diseñar algoritmos eficientes y analicé sus tiempos de ejecución."
  ]
}
