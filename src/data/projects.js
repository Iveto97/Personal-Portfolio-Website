import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiVitepress, SiReactrouter } from "react-icons/si";
import { MdOutlineAccountTree } from "react-icons/md";
import { CgDisplayFlex } from "react-icons/cg";

export const projects = [
    {
    id: 1,
    title: "Lightbox Viewer",
    image: "../images/lightbox/lightbox_1.png",
    description:
      "An interactive image gallery that displays full-size photos in a modal with keyboard navigation, thumbnail preview, and smooth user interactions.",
    tags: [
      { name: "JavaScript", color: "tag-orange" },
      { name: "HTML5", color: "tag-orange" },
      { name: "CSS3", color: "tag-purple" },
      { name: "DOM", color: "tag-green" },
    ],
    demo: "https://your-demo-link.netlify.app",
    github: "https://github.com/Iveto97/freeCodeCamp/tree/main/JavaScript%20Algorithms%20and%20Data%20Structures/lightbox-viewer",
    gallery: [
      "../images/lightbox/lightbox_1.png",
      "../images/lightbox/lightbox_2.png",
      "../images/lightbox/lightbox_3.png",
    ],
    about:
      "Lightbox Viewer is an interactive image gallery built with vanilla JavaScript. Users can open images in a full-screen modal, navigate between them using buttons or keyboard arrows, and browse thumbnails without leaving the gallery. The project focuses on creating a smooth and intuitive user experience while practicing DOM manipulation and event handling.",
    features: [
      "Responsive image gallery",
      " Full-size image preview",
      "Previous and next navigation",
      "Keyboard support (Arrow Left, Arrow Right, Escape)",
      "Thumbnail navigation",
      "Dynamic image captions",
      "Image counter",
      "Close by button or clicking outside the image",
      "Smooth hover effects and modern UI",
    ],
    technologies: [
      {
        name: "Flexbox",
        icon: CgDisplayFlex,
        color: "react",
      },
      { name: "JavaScript (ES6+)", icon: FaJs, color: "js" },
      {
        name: "DOM Manipulation",
        icon: MdOutlineAccountTree,
        color: "react-router",
      } /*"Context API", "REST API"*/,
      ,
      { name: "CSS3", icon: FaCss3Alt, color: "css" },
      { name: "HTML5", icon: FaHtml5, color: "html" },
    ],
     knowledge:
      "This project strengthened my understanding of DOM manipulation, event handling, and state management in vanilla JavaScript. It also helped me improve my ability to organize code into reusable functions, making the application easier to read, maintain, and extend while focusing on creating a smooth user experience.",
     challenges:
    "One of the main challenges in this project was keeping the lightbox state synchronized while users navigated through images using different interactions, including thumbnail clicks, navigation buttons, and keyboard shortcuts. Another challenge was organizing the JavaScript code into small, reusable functions to keep the application maintainable as new features were added.",
   future: [
      "Add smooth fade and zoom animations",
      "Support touch swipe gestures on mobile devices",
      "Lazy-load images for better performance",
      "Add image preloading for faster navigation",
      "Display image metadata (location, date, photographer)",
      "Add download and fullscreen options",
    ],
  },
  {
    id: 2,
    title: "Currency Converter",
    image: "../images/currency_converter_react.png",
    description:
      "Calculate live currency and foreign exchange rates with the currency converter.",
    github:
      "https://github.com/Iveto97/freeCodeCamp/tree/main/Front%20End%20Development%20Libraries/React/currency-converter",
    tags: [
      {
        name: "React",
        color: "tag-blue",
      },
      {
        name: "JavaScript",
        color: "tag-orange",
      },
      {
        name: "REST API",
        color: "tag-green",
      },
      {
        name: "CSS",
        color: "tag-purple",
      },
    ],
    about:
      "A responsive currency converter built with React that retrieves live exchange rates from an external API. Users can convert between different currencies in real-time.",
    features: [
      "Convert between multiple currencies",
      "Live exchange rates using REST API",
      "Responsive design for all devices",
      "Loading state and error handling",
    ],
    technologies: [
      {
        name: "React",
        icon: FaReact,
        color: "react",
      },
      { name: "JavaScript (ES6+)", icon: FaJs, color: "js" },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "css",
      } /*{name: "REST API", icon: "", color: "ra"}*/,
    ],
    knowledge:
      "This project helped me improve my skills in working with APIs, handling asynchronous requests, managing state in React, and building responsive user interfaces.",
    challenges:
      "One of the main challenges was handling API errors and ensuring the app remains responsive even when the network is slow or the API is unavailable.",
    future: [
      "Add currency search and filter",
      "Save favorite currencies",
      "Add dark mode",
      "Show historical exchange rates chart",
    ],
    gallery: [
      "https://cdn.freecodecamp.org/curriculum/labs/stonehenge-thumbnail.jpg",
      "../images/currency_converter_react.png",
      "https://cdn.freecodecamp.org/curriculum/labs/stonehenge-thumbnail.jpg",
    ],
  },
  {
    id: 3,
    title: "Ninom",
    image: "../images/ninom/ninom.png",
    description:
      "Browse landmarks, register, create, edit and delete your own landmarks.",
    github: "https://github.com/Iveto97/Ninom",
    tags: [
      {
        name: "React",
        color: "tag-blue",
      },
      {
        name: "Node.js",
        color: "tag-green",
      },
      {
        name: "Express",
        color: "tag-green",
      },
      {
        name: "MongoDB",
        color: "tag-green",
      },
    ],
    about:
      "A modern e-commerce web application for browsing and purchasing perfumes. The project includes product catalog, detailed product pages, shopping cart functionality, and a responsive user interface focused on providing a smooth shopping experience.",
    features: [
      "Browse perfumes by category",
      "Product details page",
      "Shopping cart functionality",
      "Responsive design for desktop and mobile",
      "Dynamic product rendering",
      "Clean and intuitive user interface",
    ],
    technologies: [
      {
        name: "React",
        icon: FaReact,
        color: "react",
      },
      { name: "JavaScript (ES6+)", icon: FaJs, color: "js" },
      { name: "CSS3", icon: FaCss3Alt, color: "css" },
      { name: "HTML5", icon: FaHtml5, color: "html" },
      { name: "Vite", icon: SiVitepress, color: "vite" },
    ],
    knowledge:
      "This project improved my understanding of component-based architecture, state management, React Router, reusable UI components, and building a scalable e-commerce application. I also gained experience designing responsive layouts and organizing application data for future backend integration.",
    challenges:
      "One of the biggest challenges was organizing the application structure so it remains scalable as new features are added. Another challenge was managing shared state between different parts of the application while keeping the components reusable and easy to maintain.",
    future: [
      "User authentication",
      "Wishlist functionality",
      "Product search and filtering",
      "Product reviews and ratings",
      "Online payment integration",
      "Admin dashboard",
      "Backend integration with database",
    ],
    gallery: [
      "../images/ninom/ninom_1.png",
      "../images/ninom/ninom_2.png",
      "../images/ninom/ninom_3.png",
    ],
  },
  {
    id: 4,
    title: "Games Play",
    image: "../images/games-play.png",
    description: "Browse games, register and manage your own game collection.",
    github: "https://github.com/Iveto97/Games-Play",
    tags: [
      {
        name: "React",
        color: "tag-blue",
      },
      {
        name: "Firebase",
        color: "tag-orange",
      },
      {
        name: "Tailwind",
        color: "tag-purple",
      },
      {
        name: "CSS",
        color: "tag-purple",
      },
    ],
    about:
      "A React application where users can browse, create, edit, and manage game listings. The project demonstrates CRUD operations, routing, authentication, and interaction with a REST API.",
    features: [
      "Browse game catalog",
      "View game details",
      "User authentication",
      "Create new games",
      "Edit existing games",
      "Delete games",
      "Protected routes",
      "Responsive layout",
    ],
    technologies: [
      {
        name: "React",
        icon: FaReact,
        color: "react",
      },
      { name: "JavaScript (ES6+)", icon: FaJs, color: "js" },
      {
        name: "React Router",
        icon: SiReactrouter,
        color: "react-router",
      } /*"Context API", "REST API"*/,
      ,
      { name: "CSS3", icon: FaCss3Alt, color: "css" },
      { name: "HTML5", icon: FaHtml5, color: "html" },
    ],
    knowledge:
      "This project helped me strengthen my React skills by working with routing, authentication, protected routes, CRUD operations, API communication, and state management. It also improved my understanding of building larger applications with reusable components.",
    challenges:
      "Managing user authentication and protecting routes while keeping the application state synchronized was one of the most challenging parts. Implementing CRUD operations together with API communication also required careful planning of the component structure.",
    future: [
      "Search games",
      "Filter by genre",
      "User profile page",
      "Favorite games",
      "Better form validation",
      "Image upload support",
      "Pagination",
      "Performance optimizations",
    ],
    gallery: [
      "https://cdn.freecodecamp.org/curriculum/labs/stonehenge-thumbnail.jpg",
      "../images/currency_converter_react.png",
      "https://cdn.freecodecamp.org/curriculum/labs/stonehenge-thumbnail.jpg",
    ],
  },

];
