import ihsImage from '../public/IHS_Icon.webp'
import aiRepublicImage from '../public/aiRepublic.jpeg'
import h4iImage from '../public/h4i.png'
import honeyPig from '../public/honeyPig.jpg'
import tailwind from '../public/tailwind.svg'
export const experience = {
  ihs: {
    title: "Software Engineering Intern @ IHS",
    image: ihsImage,
    date: "May 2025 - Present",
    tools: ["Vue", "Node", "GCP", "Git", "Firebase", "SQL"],
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
        text: ["As an engineer in Hack4Impact, I had the amazing opportunity to work with Food For All DC, a non-profit organization that delivers food and groceries to food insecure people around the DC area.", "Working in an engineering sprint team with a React.js frontend combined with Firebase and Python backend, I was able to help develop an application that would improve their delivery system through real-time client data management, optimized delivery routes, and a streamlined scheduling process.", "One of my favorite features that I worked on was the optimized delivery system, where I used client addresses combined with GCP's geolocation API and a Python graph algorithm to calculate optimial delivery routes for drivers, which was then displayed on a LeafletJS map of Washington DC.", "Overall the app achieved a 30% reduction in data entry time as well as 5 hours per week total saved in delivery route creation and driver assignment, allowing Food For All DC to more efficiently help over 100+ people per day"],
        images: [""]
    }
  },
  aiRepublic: {
    title: "Software Engineering Intern @ AI Republic",
    image: aiRepublicImage,
    date: "January 2025 - May 2025",
    tools: ["Svelte", "TailwindCSS", "FastAPI", "Python", "Docker", "PostgreSQL", "Git"],
    content: {
        text: ["As a software engineering intern at AI Republic, I had the opportunity to help develop their chrome extension AI Republic Helper, which integrated AI tools into Google Chrome in order to optimize web browsing efficiency.", "Using Svelte as the frontend framework, I was able to build multiple AI features such as an AI code explainer, translator, and chatbot which connected to our Python FastAPI backend and PostgreSQL database, and improved web navigation for both our buisness clients and personal users", "I used GitHub to submit PRs and efficiently manage different versions of code, and attended weekly standup meetings with tech leads, project managers, and other interns."],
        images: [""]
    }
  },
  freelance: {
    title: "Freelance Software Developer @ Honey Pig BBQ",
    image: honeyPig,
    date: "February 2023 - August 2024",
    tools: ["React", "HTML", "JavaScript"],
    content: {
        text: ["As a Host and Server at Honey Pig KBBQ, I noticed many flaws about the seating system. Information about which tables were taken, how many customers each server had, and which employees were working were all kept track of through an outdated an inefficient paper and pencil system, leading to worse experiences for both customers and employees.", "Passionate about software, I naturally wanted to come up with a solution. My first freelancing project a Reasturant Management System built using HTML, CSS, and JavaScript to keep track of which tables were taken, how many customers each server had, and which servers were working each day. It was adopted by all of the hosts at the reasturant, saving time and reducing employee mistakes, leading to a better dining experiences for customers as well as easier tasks for employees.", "Later, I was asked to help develop the website for their new bar Micky's Soju House, where I used React.js to create an interactive menu website that would best showcase their food and drinks, helping to increase their online presence and grow their business."],
        images: [""]
    }
  }
}
