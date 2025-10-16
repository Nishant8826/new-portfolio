import ecom from '../assets/shopping-cart.jpg'
import aiAgent from '../assets/ai-agent.jpg'
import waClone from '../assets/whatsapp-clone.jpg'
import mealApp from '../assets/meal-app.jpg'
import dailyGoals from '../assets/daily-goals.png'
import urlShortner from '../assets/url-shortner.png'
import toDo from '../assets/to-do.png'
import angQuiz from '../assets/angular-quiz.png'
import vHub from '../assets/vedio-hub.png'
import techy from '../assets/techy-star.png'
import { TAGS } from './tags';

export const projects = [
  {
    id: 0,
    name: "Ecommerce",
    banner: ecom,
    projectLink: "https://github.com/Nishant8826/ecom.git",
    liveLink: "https://ecom-theta-snowy.vercel.app/",
    summary: "Full-featured ecommerce app with cart, payments, and admin dashboard.",
    description: "This is a MERN stack ecommerce platform featuring product browsing, cart management, user authentication, Stripe payments, and an admin dashboard to manage products and orders. The UI is built with Chakra UI and state is managed using Redux.",
    tags: [TAGS.REACT, TAGS.NODE, TAGS.EXPRESS, TAGS.MONGO, TAGS.AUTH, TAGS.REDUX, TAGS.TAILWIND, TAGS.SHADUI, TAGS.STRIPE, TAGS.JWT, TAGS.CLOUDINARY, TAGS.MULTER, TAGS.NODEMAILER]
  },
  {
    id: 1,
    name: "AI Agent",
    banner: aiAgent,
    projectLink: "https://github.com/Nishant8826/code-reviwer-client.git",
    liveLink: "https://code-reviwer-client.vercel.app/",
    summary: "AI-powered tool to automatically review and give feedback on code snippets.",
    description: "Code Reviewer is a web-based tool built with React and Node.js that uses AI to analyze JavaScript code and provide real-time feedback or suggestions.",
    tags: [TAGS.REACT, TAGS.NODE, TAGS.EXPRESS, TAGS.OPENAI, TAGS.GOOGLE_GENAI, TAGS.GOOGLE_GEMINI, TAGS.CORS, TAGS.TAILWIND]
  },
  {
    id: 2,
    name: "Watsapp Clone",
    banner: waClone,
    projectLink: "https://github.com/Nishant8826/watsapp_clone.git",
    liveLink: "https://watsapp-clone-client.vercel.app",
    summary: "WhatsApp clone enables secure messaging, calling, and media sharing instantly.",
    description: "This project focuses on a real-time chat system using Socket.IO and OAuth2 authentication.",
    tags: [TAGS.REACT, TAGS.NODE, TAGS.EXPRESS, TAGS.MONGO, TAGS.REDUX, TAGS.TAILWIND, TAGS.LUCIDE, TAGS.JWT, TAGS.CLOUDINARY, TAGS.MULTER,]
  },
  {
    id: 3,
    name: "Big Url Shortner",
    banner: urlShortner,
    projectLink: "https://github.com/Nishant8826/url_shortner.git",
    liveLink: "https://url-shortner-sej6.onrender.com/",
    summary: "A scalable URL shortener service with SSR.",
    description: "A full-featured, scalable URL shortening service built with Node.js, EJS, and MongoDB.",
    tags: [TAGS.NODE, TAGS.EXPRESS, TAGS.MONGO, TAGS.EJS, TAGS.SSR, TAGS.AUTH, TAGS.COOKIE_PARSER,
    TAGS.NANOID, TAGS.MONGOOSE]
  },
  {
    id: 4,
    name: "Meal App",
    banner: mealApp,
    projectLink: "https://github.com/Nishant8826/meal_react_native.git",
    liveLink: "https://drive.google.com/drive/folders/1NekO9PI-hxnCiMuNcqDiwB1Obkh38fWI?usp=sharing",
    summary: "React Native Meal App with animations, API, and modern styling.",
    description: "A mobile app built using React Native, NativeWind, and Reanimated for interactive UI.",
    tags: [TAGS.REACT_NATIVE, TAGS.EXPO, TAGS.NATIVEWIND, TAGS.REANIMATED, TAGS.AXIOS]
  },
  {
    id: 5,
    name: "Angular Quiz",
    banner: angQuiz,
    projectLink: "https://github.com/Nishant8826/QuizByAngular.git",
    liveLink: "https://angular-quiz-seven.vercel.app/welcome",
    summary: "Quiz Application developed in Angular 15 and Bootstrap.",
    description: "9 Basic Angular questions with scoring and timer system.",
    tags: [TAGS.ANGULAR, TAGS.TYPESCRIPT, TAGS.BOOTSTRAP, TAGS.HTML, TAGS.CSS]
  },
  {
    id: 6,
    name: "To Do",
    banner: toDo,
    projectLink: "https://github.com/Nishant8826/Angular-todo.git",
    liveLink: "https://angular-todo-nine.vercel.app/",
    summary: "TO DO list project built in Angular 15 and Bootstrap.",
    description: "Tasks persist in Local Storage even after page reload.",
    tags: [TAGS.ANGULAR, TAGS.TYPESCRIPT, TAGS.BOOTSTRAP, TAGS.LOCAL_STORAGE]
  },
  {
    id: 7,
    name: "Daily Goals",
    banner: dailyGoals,
    projectLink: "https://github.com/Nishant8826/reactProjects/tree/DailyGoals",
    liveLink: "https://react-daily-goals.vercel.app/",
    summary: "Set and track your daily goals stored in local storage.",
    description: "Simple local-storage-based goal tracking React app.",
    tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.LOCAL_STORAGE, TAGS.CSS]
  },
  {
    id: 8,
    name: "Techy Star",
    banner: techy,
    projectLink: "https://github.com/Nishant8826/reactProjects/tree/techyStar",
    liveLink: "https://reactone-phi.vercel.app/",
    summary: "Static website for showcasing an organization's features.",
    description: "A multi-page React site with carousels and animations.",
    tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.CSS, TAGS.ANIMATIONS, TAGS.REACT_ROUTER]
  },
  {
    id: 9,
    name: "Vedio Hub",
    banner: vHub,
    projectLink: "https://github.com/Nishant8826/reactProjects/tree/vedioHub",
    liveLink: "https://react-vedio-hub-anime.vercel.app/",
    summary: "Static video streaming interface inspired by YouTube.",
    description: "Simple video platform that plays videos in a categorized layout.",
    tags: [TAGS.REACT, TAGS.JAVASCRIPT, TAGS.CSS, TAGS.VIDEO_JS, TAGS.RESPONSIVE]
  },
];
