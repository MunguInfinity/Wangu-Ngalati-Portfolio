// Single source of truth for all portfolio/CV data.
// Import from here in both UI components and the PDF generator so
// every code-level change automatically reflects in the generated PDF.

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
    "MySQL", "Firebase (Firestore, Realtime Database)", "MongoDB", "Postgres", "MariaDB",
  ],
  "DevOps & Containerization": ["Docker", "Docker Compose"],
  "Cloud & Deployment": [
    "AWS Deployment (EC2, S3)", "Google Cloud Platform (GCP)", "cPanel", "WHM (Web Host Manager)",
  ],
  "Google APIs Integration": [
    "Messaging API", "Directions API", "Routing API", "Geolocation API",
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
      "Led the development team by assigning tasks, conducting code reviews, and delivering performance reports to management.",
      "Developed and managed multiple client websites, including: fiatzambia.com, abaleyadriving.com, quartanmining.com, dropshipltd.com, semassmetals.com, sophonzambia.com, komelazm.com, copperpotzm.com, kutwilamedia.com, and abaleya.name.",
      "Built and deployed emuzm.com, a reseller platform providing web hosting services, including domain and IP binding, cPanel/WHM configuration, and email integration for Outlook.",
      "Designed and implemented a daily quote system delivering motivational, health, and fitness messages to users via automated scheduling.",
      "Managed backend development in PHP and Laravel, including database modifications and updates on MySQL hosted on AWS EC2.",
      "Configured and monitored system alerts and SMS notifications for the Abaleya carpooling platform to notify management of new users, vehicle registrations, and trip approvals.",
      "Implemented in-app notifications and approval alerts to improve communication between the platform and users.",
      "Integrated Agora live streaming services, including real-time video streaming features.",
      "Implemented WebSocket-based functionality for live view counts and real-time comments on live streams.",
      "Applied video watermarking and automated compression pipelines using FFmpeg, ensuring branded and optimized media delivery across the platform.",
      "Architected a Cloudflare Worker-based URL proxy with custom worker route scripts, routing all video asset requests through a dedicated media subdomain instead of exposing direct AWS S3 bucket URLs — improving content delivery speed, access control, and security.",
      "Configured and utilized Cloudflare services, including Cloudflare Stream and Cloudflare Images for media delivery and optimization.",
      "Implemented adaptive bitrate streaming (ABS) using AWS S3 and MediaConvert, as well as Cloudflare, enabling seamless video quality progression from 360p to 1080p.",
      "Managed DNS configurations, including A record updates and domain transfers.",
      "Configured and supported Outlook email accounts for clients and internal use.",
      "Performed computer installation, maintenance, and servicing (hardware and software).",
      "Performed system testing, IT support, and hardware/software servicing to ensure smooth operations across the company.",
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
    period: "February 2024 – March 2024",
    description: [
      "Integrated SMS and payment gateway systems.",
      "Developed a ticketing system using Twak.io and Freshdesk.",
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

export const projects = [
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
    desc: "Provides crop decision-making tools and weather predictions for farmers.",
    tech: "Kotlin, Firebase",
  },
  {
    name: "Vitundu Language App",
    desc: "Teaches Zambian children local languages through an interactive learning platform.",
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
];
