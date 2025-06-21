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
export const experience = {
  technica: {
    title: "Tech Lead @ Technica",
    image: technica, 
    date: "June 2025 - Present",
    tools: ["React", "Node", "Firebase", "TypeScript"],
    content: {
        text: [
          "As a Tech Lead for the Technica Fellowship Program, I had the opportunity to teach and mentor a group of 100 high school students in an 8-week web development bootcamp focused on React, Node.js, Firebase, and TypeScript.",
          "Each Sunday, I led 2-hour virtual classes covering topics such as React Hooks, Firebase Auth, and fullstack development workflows using curriculum from Hack4Impact’s Spring 2025 Bootcamp. I also facilitated in-class activities, answered student questions live, and adapted lessons to support students working toward their final projects.",
          "Outside of class, I helped guide students through office hours, code reviews, and debugging support as well as technical advice to help them grow more confident in their development skills.",
          "Throughout the program, I worked closely with Hack4Impact-UMD Co-Execs and Technica organizers to align workshops with student needs and ensure a supportive, engaging experience for every student."
        ],
        images: [""]
    }
  },
  ihs: {
    title: "Software Engineering Intern @ IHS",
    image: ihsImage,
    date: "May 2025 - Present",
    tools: ["Vue", "Node", "GCP", "Firebase", "SQL", "Git"],
    content: {
        text: ["As a software engineering intern at The Institute for Humane Studies, I had the opportunity to work on the ScholarsEdge platform, which revolutionizes the ways professors, academics and scholars interact with each other and their research. Through the integration of AI tools such as a content multiplier for research paper and legislation searches, research, funding, and community building is now easier than ever for scholars.", "Working in sprints with Vue.js as the frontend framework, I wrote 3000+ lines of production code which I was able to connect to our Firebase backend and Salesforce database using Node.js. I also implemented multiple features using GCP tools such as a profile picture system with GCP Buckets.", "Alongside a few other engineers in the ScholarsEdge team, I also attended weekly standup meetings as well as participated in PRs and code reviews with GitHub."],
        images: [""]
      }
  },
  h4i: {
    title: "Engineer @ Hack4Impact",
    image: h4iImage, 
    date: "January 2025 - Present",
    tools: ["React", "TypeScript", "Firebase", "GCP", "Python", "Git"],
    content: {
        text: ["As an engineer in Hack4Impact, I had the amazing opportunity to work with Food For All DC, a non-profit organization that delivers food and groceries to food insecure people around the DC area.", "Working in an engineering sprint team with a React.js frontend combined with Firebase and Python backend, I was able to help develop an application that would improve their delivery system through real-time client data management, optimized delivery routes, and a streamlined scheduling process.", "One of my favorite features that I worked on was the optimized delivery system, where I used client addresses combined with GCP's geolocation API and a Python graph algorithm to calculate optimal delivery routes for drivers, which was then displayed on a LeafletJS map of Washington DC.", "Overall the app achieved a 30% reduction in data entry time as well as 5 hours per week total saved in delivery route creation and driver assignment, allowing Food For All DC to more efficiently help over 100+ people per day", "<b>\"...Evan was one of the few engineers who received perfect ratings from all of his team members\"</b>"],
        images: [""]
    }
  },
  aiRepublic: {
    title: "Software Engineering Intern @ AI Republic",
    image: aiRepublicImage,
    date: "January 2025 - May 2025",
    tools: ["Svelte", "TailwindCSS", "FastAPI", "Python", "Docker", "PostgreSQL", "Git"],
    content: {
        text: ["As a software engineering intern at AI Republic, I had the opportunity to help develop AI Republic Helper, which integrated AI tools into Google Chrome in order to optimize web browsing efficiency.", "Using Svelte as the frontend framework, I was able to build multiple AI features such as an AI code explainer, translator, and chatbot which connected to our Python FastAPI backend and PostgreSQL database, and improved web navigation for both our business clients and personal users", "I used GitHub to submit PRs and efficiently manage different versions of code, and attended weekly standup meetings with tech leads, project managers, and other interns."],
        images: [""]
    }
  },
  freelance: {
    title: "Freelance Software Developer @ Honey Pig BBQ",
    image: honeyPig,
    date: "February 2023 - August 2024",
    tools: ["React", "HTML", "JavaScript"],
    content: {
        text: ["As a Host and Server at Honey Pig KBBQ, I noticed many flaws about the seating system. Information about which tables were taken, how many customers each server had, and which employees were working were all kept track of through an outdated an inefficient paper and pencil system, leading to worse experiences for both customers and employees.", "Passionate about software, I naturally wanted to come up with a solution. My first freelancing project a Restaurant Management System built using HTML, CSS, and JavaScript to keep track of which tables were taken, how many customers each server had, and which servers were working each day. It was adopted by all of the hosts at the reasturant, saving over an hour per day in data management and reducing employee mistakes, leading to a better dining experience for customers as well as easier tasks for employees.", "Later, I was asked to help develop the website for their new bar Micky's Soju House, where I used React.js to create an interactive menu website that would best showcase their food and drinks, helping to increase their online presence and grow their business."],
        images: [""]
    }
  }
}

export const projects = {
  split: {
    title: "Split - Break Through Tech Career Launch",
    image: split,
    date: "May 2025 - Present",
    tools: ["React", "TypeScript", "FastAPI", "Python", "MongoDB"],
    content: {
        text: [
                "Bill Splitting App"
              ],
        images: [""]
      }
  },
  terpMenu: {
    title: "TerpMenu",
    image: terpmenu,
    date: "May 2025 - Present",
    tools: ["React", "FastAPI", "Python", "MongoDB", "Docker"],
    content: {
        text: [
                "Developed a menu app using React showcasing names, images, dietary restrictions, and user ratings for the daily menu at three University of Maryland dining halls to improve both student and staff dining experiences.",
                "Built a Python backend using FastAPI with a BeautifulSoup webscraper that runs each morning to update the menu, and integrated a MongoDB database to store user reviews.",
                "Used Git for collaboration and version control, and Docker for containerization and deployment."
              ],
        images: [""]
      }
  },
  shellmates: {
    title: "ShellMates",
    image: shellmates,
    date: "May 2025 - Present",
    tools: ["React", "TypeScript", "FastAPI", "Python", "MongoDB"],
    content: {
        text: [
                "Dating app"
              ],
        images: [""]
      }
  }
}

export const aboutMe = {
  paragraphs: ["Outside of software engineering, I am an avid lover of nature, food, and music.", "If not coding, you can always find me outside on a hike, or playing Tennis and Pickleball with my friends! I also love Geocaching, and am working my way towards my 100th cache.",  "To relax and destress, I almost always play my guitar and piano, or listen to my favorite bands like The Beatles, Queen, and The Strokes!", "I am also a huge foodie. From a simple boba run, to going out for KBBQ with my friends, or just enjoying my grandma's homemade phở with my family, food is one of the things that makes me the most happy."],
  images: [
    {
    image: guitarImage,
    description: "Mini jam on McKeldin Mall at the University of Maryland"
    },
    {
      image: cache,
      description: "My favorite GeoCache"
    },
    {
      image: hiking,
      description: "Hiking at Big Sur during my trip to California"
    },
    {
      image: polyphia,
      description: "Front row at a Polyphia concert on Halloween"
    },
    {
      image: tam1,
      description: "Hiking Mt. Tamalpais PT.1"
    },
    {
      image: tam2,
      description: "Hiking Mt. Tamalpais PT.2"
    },
    {
      image: picnic,
      description: "Bánh mì and Boba picnic on the beach!"
    },
    {
      image: concert,
      description: "My last concert on the UMD stage"
    },
    {
      image: caliFirstMeal,
      description: "First meal after landing in San Francisco"
    },
    {
      image: beach,
      description: "Beach trip to Ocean City MD"
    }
  ]
}

export const education = {
   paragraphs: ["I am a Junior at the University of Maryland College Park studying Computer Science.", "Throughout my 83 credits, I have maintained a <u>4.0 cummulative GPA</u> and have been recognized on the Dean's List each semester thus far.", "I have completed coding courses like Object Oriented Programming I and II where I studied core coding concepts and data structures with Java, Introduction to Computer Systems where I learned about low level mechanisms in C, Unix and Assembly, Organization of Programming Languages where I studied various types of languages features, designs, and implementation with OCaml and Rust, and Web Application Development with JavaScript where I practiced my software engineering skills.", "I have also taken Computer Science Math courses like Statistics and Probability, Linear Algebra, and Algorithms where I studied techniques for designing efficient computer algorithms and analyzed their running times."]
}
