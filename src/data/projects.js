import { SiGithub } from "react-icons/si";

export const projectData = [
  {
    title: "OverlAI",
    image: "/assets/images/projects/overlai.png",
    type: "Android",
    period: "Mar 2026 - Apr 2026",
    description:
      "Floating Android translator app with OCR for real-time on-screen text translation.",
    overview:
      "OverlAI is an Android overlay translation app that captures on-screen text and translates it in real-time using OCR. It was built to help users read manga, manhwa, and webtoon content without switching between apps.",
    features: [
      "Floating overlay translation on top of any app",
      "Text extraction using OCR from screen capture",
      "Automatic translation of detected text",
      "Works while reading manga or image-based content",
    ],
    role: "Built the entire application independently, including UI development, overlay service, OCR integration, and translation flow.",
    challenges: [
      "Handling Android overlay permission and service lifecycle",
      "Capturing screen content reliably across different apps",
      "Designed a proximity-based text grouping algorithm to reconstruct fragmented OCR outputs and restore logical reading order for Japanese vertical text"
    ],
    technologies: ["Android", "Kotlin", "Jetpack Compose", "ML Kit"],
    links: [
      {
        label: "Github",
        url: "https://github.com/abdullahhalis/OverlAI",
        icon: SiGithub,
      },
    ],
  },
  {
    title: "Manapp",
    image: "/assets/images/projects/manapp.png",
    type: "Full-stack App",
    period: "Mar 2025 - Jul 2025",
    description:
      "Full-stack manga reader app with custom API and web scraping backend.",
    overview:
      "Manapp is a mobile manga reader built with Flutter and a custom backend API. The backend scrapes manga sources, processes content, and serves structured data to the app for reading, search, and library management.",
    features: [
      "Read manga chapters inside the app",
      "Search by title",
      "Bookmark and favorite manga",
      "Backend API with scraped content delivery",
    ],
    role: "Built both mobile frontend and backend service, including API development, scraping logic, and client integration.",
    challenges: [
      "Extracting and normalizing data from external sources",
      "Maintaining API performance for content-heavy requests",
      "Managing asynchronous state in Flutter",
    ],
    technologies: ["Flutter", "Riverpod", "Express.js", "Web Scraping"],
    links: [
      {
        label: "Github",
        url: "https://github.com/abdullahhalis/manapp",
        icon: SiGithub,
      },
    ],
  },
  {
    title: "Medease",
    image: "/assets/images/projects/medease.png",
    type: "Android",
    period: "Nov 2023 - Dec 2023",
    description:
      "Medicine scanner app with OCR and medication reminder features.",
    overview:
      "Medease helps users scan medicine packaging to extract information using OCR and AI. It also provides medication reminders and detailed medicine information including usage, dosage, and side effects.",
    features: [
      "Medicine package scanning",
      "OCR text extraction",
      "Medication reminder notifications",
      "Drug information display",
    ],
    role: "Contributed as Android developer in a team of seven, focusing on UI implementation and API integration.",
    challenges: [
      "Integrating OCR results into app workflow",
      "Connecting API responses to user-friendly UI",
      "Collaborating within team-based development",
    ],
    technologies: [
      "Android",
      "Kotlin",
      "Jetpack Compose",
      "Rest API",
      "OCR",
      "Machine Learning",
    ],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/ValdiANS/MedEase",
        icon: SiGithub,
      },
    ],
  },
  {
    title: "Xpendly",
    image: "/assets/images/projects/xpendly.png",
    type: "Android",
    period: "Feb 2026 - Mar 2026",
    description:
      "Expense tracking app for managing daily spending and personal finance.",
    overview:
      "Xpendly is a personal finance app for tracking expenses and organizing spending records. It focuses on a clean interface, simple transaction logging, and expense summaries for daily use.",
    features: [
      "Add and categorize expenses",
      "Track transaction history",
      "Monthly expense summary",
      "Simple financial insights",
    ],
    role: "Developed the application independently, including UI implementation, local data management, and app architecture.",
    challenges: [
      "Designing intuitive transaction input flow",
      "Managing state for expense summaries",
      "Structuring local persistence efficiently",
    ],
    technologies: ["Android", "Kotlin", "Jetpack Compose"],
    links: [
      {
        label: "Github",
        url: "https://github.com/abdullahhalis/Xpendly",
        icon: SiGithub,
      },
    ],
  },
  {
    title: "MyStory",
    image: "/assets/images/projects/my-story.png",
    type: "Android",
    period: "Oct 2023 - Nov 2023",
    description:
      "Story sharing app with authentication and location-based posting.",
    overview:
      "MyStory is a social story-sharing app where users can post text and images. It includes authentication, story feeds, and location tagging using Google Maps integration.",
    features: [
      "User authentication",
      "Image story upload",
      "Public story feed",
      "Location sharing with maps",
    ],
    role: "Built the application independently as part of Android learning projects, including API integration and map implementation.",
    challenges: [
      "Managing image upload flow",
      "Handling map interaction and location permissions",
      "Implementing paginated story feed",
    ],
    technologies: ["Android", "Kotlin", "XML", "Google Maps API"],
    links: [
      {
        label: "GitHub",
        url: "https://github.com/abdullahhalis/Dicoding-IntermediateAndroid/tree/master/MyStory",
        icon: SiGithub,
      },
    ],
  },
];
