// Single source of truth for all portfolio/CV data.
// Import from here in both UI components and the PDF generator so
// every code-level change automatically reflects in the generated PDF.

export const professionalSummary =
  "Software Engineer with 5+ years of experience in software development, system integration, backend engineering, cloud deployment, DevOps, IT support and technical leadership. Experienced in building and maintaining production web and mobile platforms, API integrations, payment and messaging services, real-time systems, and scalable media delivery solutions. Proficient in Java, JavaScript, Kotlin, Dart, Python, PHP, C/C++, SQL and Golang, with hands-on experience across Flutter, Laravel, Django, Node.js, React, Spring Boot, Firebase, AWS, GCP and Docker.";

export const objective =
  "Highly motivated and detail-oriented Software Engineer with a strong background in software development, system integration, and problem-solving. Seeking a challenging position where my skills and expertise in various programming languages and technologies can contribute to the growth of a forward-thinking and innovative company.";

export const educationData = [
  {
    title: "DMI St. Eugene University",
    degree: "Bachelor of Computer Science (Software Engineering)",
    years: "2016 – 2021",
    notes: [
      "Graduated with a GPA above 4.0",
      "Awarded top student honors from 2017 to 2019",
    ],
  },
  {
    title: "David Kaunda National Technical High School",
    degree: "",
    years: "2012 – 2014",
    notes: ["Full Grade 12 Certificate"],
  },
];

export const skills: Record<string, string[]> = {
  "Programming Languages": [
    "Java", "JavaScript", "Kotlin", "Dart", "Python",
    "PHP", "HTML", "CSS", "C++", "C", "SQL", "Golang",
  ],
  "Frameworks & Libraries": [
    "JQuery", "Android Studio", "Flutter", "Laravel", "Yii",
    "Django", "Node.js (Express)", "React", "Bootstrap", "Material UI", "Spring Boot",
  ],
  Databases: [
    "MySQL", "Firebase (Firestore, Realtime Database)", "MongoDB", "PostgreSQL", "MariaDB",
  ],
  "Cloud, DevOps & Deployment": [
    "Docker", "Docker Compose", "AWS Deployment (EC2, S3)",
    "Google Cloud Platform (GCP)", "cPanel", "WHM (Web Host Manager)",
  ],
  "APIs & Integration": [
    "Messaging API", "Directions API", "Routing API", "Geolocation API",
    "Payment Gateway Integration", "SMS Integration", "Email Services Integration",
    "Real-time Service Integration",
  ],
  "Other Skills": [
    "UI/UX Design (Adobe XD, JustInMind)",
    "Game Development (Unreal Engine)",
    "Graphics Design (Photopea, CorelDRAW, Photoshop)",
    "3D Animation (Blender)",
    "Runtime Environments (Node.js)",
  ],
};

export const experience = [
  {
    company: "EMU Technologies Limited",
    role: "Software Lead Developer (Ongoing)",
    period: "May 2025 – Present",
    description: [
      "Led the development team, assigning tasks, conducting code reviews, and reporting on performance to management.",
      "Developed and maintained 10+ client websites and platforms, including fiatzambia.com, abaleyadriving.com, quartanmining.com, dropshipltd.com, semassmetals.com, sophonzambia.com, komelazm.com, copperpotzm.com, kutwilamedia.com, and abaleya.name.",
      "Built and deployed emuzm.com, a web hosting reseller platform with domain/IP binding, cPanel/WHM configuration, and Outlook email integration.",
      "Managed backend development in PHP/Laravel with MySQL on AWS EC2, delivering features such as a daily quote system and automated SMS/in-app alerts for the Abaleya carpooling platform.",
      "Integrated Agora live streaming with WebSocket-based real-time view counts and comments, plus FFmpeg-based video watermarking and compression pipelines for optimized media delivery.",
      "Architected a Cloudflare Worker-based media proxy and adaptive bitrate streaming pipeline (AWS S3/MediaConvert, Cloudflare Stream/Images) to secure and optimize video delivery.",
      "Managed DNS configuration, Outlook email support, and general IT/hardware maintenance across the company.",
    ],
  },
  {
    company: "Abaleya Carpooling",
    role: "Backend Developer (Contract)",
    period: "November 2024 – May 2025",
    description: [
      "Developed the complete backend architecture for the Abaleya ride-sharing platform, ensuring scalable and maintainable infrastructure.",
      "Integrated Zynle Pay for secure and seamless in-app payment processing.",
      "Integrated SMSZambia.com to enable real-time SMS notifications for ride confirmations, alerts, and user communication.",
      "Implemented Firebase Cloud Messaging to deliver real-time in-app notifications for trip updates and critical alerts.",
      "Integrated Google's Places, Directions, and Geolocation APIs to enable accurate location tracking, trip routing, and address suggestions.",
      "Integrated SendMail API for email communications, including verification, trip receipts, and service updates.",
      "Built a secure registration system with OTP (One-Time Password) verification to validate user authenticity during sign-up.",
      "Designed and implemented a referral system, including a dashboard to monitor referral performance — highlighting users with the highest and lowest scores and identifying who referred whom.",
      "Developed an SOS alert system for passengers to discreetly notify the platform in case they felt unsafe during a ride, enhancing rider security and trust.",
    ],
  },
  {
    company: "Chrilan Technologies",
    role: "Backend Developer (Contract)",
    period: "June 2024 – November 2024",
    description: [
      "Designed and implemented batch files to automate processes, such as activating printing services on Point-of-Sale (POS) computers running Lysoft software.",
      "Developed VAT report API endpoints for Yango, streamlining financial reporting processes.",
      "Created OTP generation endpoints with secure session management stored in the database for enhanced user authentication.",
      "Built APIs to adjust barcodes for smart invoicing, improving accuracy and efficiency in invoicing workflows.",
      "Developed JavaScript interfaces to enable seamless interaction with Lysoft's mobile printing service from the web version of their application.",
      "Contributed to system optimization and integration efforts, ensuring smooth functionality across various services and platforms.",
    ],
  },
  {
    company: "PrimeNet Solutions",
    role: "Backend Developer (Contract)",
    period: "February 2024 – May 2024",
    description: [
      "Integrated SMS and payment gateway systems.",
      "Developed a ticketing system using Tawk.io and Freshdesk.",
      "Conducted API testing for TransUnion and DotGov for clients like ZamPost eWallet and Panda Africa.",
      "Optimized loan data retrieval using TransUnion API, reducing costs and improving response times.",
      "Enhanced UI and performed server-side optimization for the PrimeNet SMS and Payment Gateway.",
    ],
  },
  {
    company: "Frontier Finance",
    role: "Software Developer & Loan Credit Officer (Contract)",
    period: "October 2023 – February 2024",
    description: [
      "Developed a loan status widget to track collections.",
      "Built a dynamic PDF generator for loan agreements.",
      "Automated Google Drive folder creation for loan applicants, integrating detailed user data.",
    ],
  },
  {
    company: "Digital Treasure Zambia",
    role: "Software Developer (Full-time)",
    period: "July 2022 – April 2023",
    description: [
      "Designed and developed the Early Learning Kiosk File Manager and ELK Launcher for the Roger Federer Foundation.",
      "Created background services for the Siyafunda Zulu language learning app using Kotlin.",
      "Developed a beauty appointment booking system (Beta Looks) using Kotlin Multiplatform.",
      "Integrated a JSON file importer and created modules for Smart Forms and Crime Scene reporting using Firebase.",
    ],
  },
  {
    company: "Texila American University",
    role: "IT Specialist & Network Engineer Assistant (Internship)",
    period: "August 2021 – December 2021",
    description: [
      "Set up Microsoft Teams, installed and serviced computers, and configured domain networks with NComputing.",
    ],
  },
  {
    company: "Blue Code Systems Limited",
    role: "Software Developer (Internship)",
    period: "June 2019 – December 2019",
    description: [
      "Queried data from OpenMRS and designed the SmartCerv application.",
      "Prepared DHIS2 reports using ETL Python scripts.",
    ],
  },
  {
    company: "Zambia Broadcasting Corporation",
    role: "IT Specialist & Network Engineer Assistant (Internship)",
    period: "June 2018 – December 2018",
    description: [
      "Managed static IP configurations, network connections, and Ethernet cabling.",
      "Installed and serviced computers for network connectivity.",
    ],
  },
];

export const clientSites = [
  { name: "fiatzambia.com", url: "https://fiatzambia.com" },
  { name: "abaleyadriving.com", url: "https://abaleyadriving.com" },
  { name: "quartanmining.com", url: "https://quartanmining.com" },
  { name: "dropshipltd.com", url: "https://dropshipltd.com" },
  { name: "semassmetals.com", url: "https://semassmetals.com" },
  { name: "sophonzambia.com", url: "https://sophonzambia.com" },
  { name: "komelazm.com", url: "https://komelazm.com" },
  { name: "copperpotzm.com", url: "https://copperpotzm.com" },
  { name: "kutwilamedia.com", url: "https://kutwilamedia.com" },
  { name: "abaleya.name", url: "https://abaleya.name" },
  { name: "emuzm.com", url: "https://emuzm.com" },
  { name: "presidenthh2026.com", url: "https://presidenthh2026.com" },
];

export const professionalProjects = [
  {
    name: "Abaleya Carpooling",
    url: "https://abaleya.net",
    desc: "Backend architecture and integrations for the intercity carpooling platform, including payments, SMS, push notifications, Google location/routing APIs, OTP authentication, referrals and SOS functionality.",
  },
  {
    name: "Abaleya Mobile App",
    url: "https://play.google.com/store/apps/details?id=com.mycompany.abaleya",
    desc: "Published Android application for Abaleya Carpooling.",
  },
  {
    name: "EMU Technologies",
    url: "https://emuzm.com",
    desc: "Web, mobile, hosting and custom software projects delivered as part of the EMU Technologies development team.",
  },
  {
    name: "Fiat Solutions",
    url: "https://fiatzambia.com",
    desc: "Production website/platform developed or maintained while working with EMU Technologies.",
  },
  {
    name: "Abaleya Gold Driving",
    url: "https://abaleyadriving.com",
    desc: "Production website/platform developed or maintained while working with EMU Technologies.",
  },
  {
    name: "Quartan Mining",
    url: "https://www.quartanmining.com",
    desc: "Production website/platform developed or maintained while working with EMU Technologies.",
  },
  {
    name: "Dropship Logistics",
    url: "https://dropshipltd.com",
    desc: "Production website/platform developed or maintained while working with EMU Technologies.",
  },
  {
    name: "SOPHON Security",
    url: "https://sophonzambia.com",
    desc: "Production website/platform developed or maintained while working with EMU Technologies.",
  },
  {
    name: "Komela ZM",
    url: "https://komelazm.com",
    desc: "Production website/platform developed or maintained while working with EMU Technologies.",
  },
  {
    name: "Copperpot Foods",
    url: "https://copperpotzm.com",
    desc: "Production website/platform developed or maintained while working with EMU Technologies.",
  },
  {
    name: "Kutwila Media",
    url: "https://kutwilamedia.com",
    desc: "Production website/platform developed or maintained while working with EMU Technologies.",
  },
];

export const zelicoreProjects = [
  {
    name: "Zelicore Studios Portfolio",
    url: "https://zelicore.com",
    desc: "Mobile games, educational apps and web platforms.",
  },
  {
    name: "Estudy Zambia",
    url: "https://estudyzambia.com",
    desc: "E-learning and examination portal providing academic resources, past papers and revision content.",
  },
  {
    name: "Estudy Secondary",
    url: "https://estudysecondary.com",
    desc: "Secondary-school revision platform with worked solutions, past papers, practice materials and notes.",
  },
  {
    name: "Estudy Learn",
    url: "https://estudylearn.com",
    desc: "Digital learning platform with online courses, quizzes, automated grading and guided learning.",
  },
  {
    name: "GetJobs Zambia",
    url: "https://getjobszambia.com",
    desc: "Mobile and web recruitment platform connecting job seekers with employment opportunities.",
  },
  {
    name: "Pipe Connect",
    url: "",
    desc: "Cross-platform pipe-routing puzzle game published under Zelicore Studios.",
    platform: "Google Play",
  },
  {
    name: "Reverse Reaction",
    url: "",
    desc: "Brain-training reaction game based on responding with the opposite action.",
    platform: "Google Play",
  },
  {
    name: "Don't Touch Color",
    url: "",
    desc: "Fast-paced color and reflex challenge game published under Zelicore Studios.",
    platform: "Google Play",
  },
];

export const notableProjects = [
  {
    name: "Transcended Study Hub",
    url: "https://transcendedstudyhub.com/",
    desc: "Comprehensive learning platform for secondary school and university students. Structured lessons, expert tutors, and interactive content.",
    tech: "",
  },
  {
    name: "Discrete Learning",
    url: "https://discretelearning.com/",
    desc: "Simplify tough topics and watch your exam results climb. Focused, results-driven lessons with downloadable videos and PDFs for offline access, plus automated payments to join anytime.",
    tech: "",
  },
  {
    name: "Elk File Manager",
    url: "https://play.google.com/store/apps/details?id=org.rff.digitres.elkfilemanager",
    desc: "A file manager app built and published to the Google Play Store.",
    tech: "",
  },
  {
    name: "Advanced Calculator & ATM Simulator",
    desc: "Simulates ATM transactions and performs complex calculations.",
    tech: "Java, MySQL",
  },
  {
    name: "Nayenda Bus Ticketing System",
    desc: "Real-time ticketing application for traveling customers.",
    tech: "Java, Firebase (Authentication, Storage, Realtime Database)",
  },
  {
    name: "Ubulimi (Agro-Advisory Application)",
    desc: "Provides crop decision-making tools and weather predictions for farmers. Also features a web version that fetches real climate data from the Copernicus Data Store via a FastAPI server, filters it by day, month, and year, and plots it on interactive graphs.",
    tech: "Kotlin, Firebase · Web: Laravel, FastAPI, Copernicus Data Store",
  },
  {
    name: "Vitundu Language App",
    desc: "Interactive learning platform that teaches Zambian children local languages.",
    tech: "Kotlin, Firebase",
  },
  {
    name: "Murder Hornet Character Design",
    desc: "Designed a character for ProSam Studio animations.",
    tech: "Krita, Huion Tablet, Blender",
  },
  {
    name: "Graphics & Logo Design",
    desc: "Designed logos, posters, brochures, and letterheads for various companies.",
    tech: "Photopea, CorelDRAW, Photoshop",
  },
];

export const references = [
  {
    name: "Mr. Choko",
    title: "Human Resource Manager",
    phone: "+2609775561852",
    address: "KPTF Office Park, Lake Road, Lusaka, Zambia",
  },
  {
    name: "Mr. Luckson Mwanambulo",
    title: "Software Engineer",
    phone: "+260966088441",
    address: "Hobbiton Investments, Lusaka, Zambia",
  },
  {
    name: "Mr. Zitha Tembo",
    title: "Software Engineer",
    phone: "+260976790772",
    address: "Zambia Revenue Authority, Lusaka, Zambia",
  },
  {
    name: "Mr. Sundu Sensenta",
    title: "Chief Software Architect",
    phone: "+260972365878",
    address: "Riteware Technology, Lusaka, Zambia",
  },
  {
    name: "Mr. Percy Nguni",
    title: "Founder, E-Study & Software Developer",
    phone: "+260967924233",
    phone2: "+260974176847",
    address: "E-Study, Zambia",
  },
];
