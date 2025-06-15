
import Sidebar from "@/components/Sidebar";
import SectionCard from "@/components/SectionCard";
import { Github } from "lucide-react";

const educationData = [
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
    degree: "Full Grade 12 Certificate",
    years: "2012 – 2014",
    notes: [],
  },
];

const skills = {
  "Programming Languages": [
    "Java", "JavaScript", "Kotlin", "Dart", "Python", "PHP",
    "HTML", "CSS", "C++", "C", "SQL"
  ],
  "Frameworks & Libraries": [
    "JQuery", "Android Studio", "Flutter", "Laravel", "Django", "Node.js (Express)", "React", "Bootstrap", "Material UI", "CSS", "SpringBoot"
  ],
  Databases: [
    "MySQL", "Firebase (Firestore, Realtime Database)", "MongoDB", "Postgres", "MariaDB"
  ],
  "Cloud & Deployment": [
    "AWS (EC2, S3)", "GCP", "cPanel", "WHM"
  ],
  "Google APIs Integration": [
    "Messaging API", "Directions API", "Routing API", "Geolocation API"
  ],
  "Other Skills": [
    "UI/UX (Adobe XD, JustInMind)",
    "Game Dev (Unreal Engine)", "Graphics (Photopea, CorelDRAW, Photoshop)",
    "3D Animation (Blender)", "Containers (Docker)", "Runtime (Node.js)"
  ],
};

const experience = [
  {
    company: "Abaleya Carpooling",
    role: "Backend Developer (Contract)",
    period: "Nov 2024 – May 2025",
    description: [
      "Developed backend architecture for the Abaleya ride-sharing platform.",
      "Integrated Zynle Pay and SMSZambia.com for payments and notifications.",
      "Implemented Firebase Cloud Messaging for real-time updates.",
      "Used Google APIs for location, routing, and address suggestions.",
      "Created secure registration and referral systems.",
      "Developed SOS alert system for passenger safety."
    ]
  },
  {
    company: "Chrilan Technologies",
    role: "Backend Developer (Contract)",
    period: "Jun 2024 – Nov 2024",
    description: [
      "Automated printing and VAT reports for POS systems.",
      "Created OTP/session endpoints and barcode APIs.",
      "Built JavaScript interfaces for mobile printing integration.",
      "Contributed to system optimization and integrations."
    ]
  },
  {
    company: "PrimeNet Solutions",
    role: "Backend Developer (Contract)",
    period: "Feb 2024 – Mar 2024",
    description: [
      "Integrated SMS/payment gateway and built ticketing system.",
      "Tested APIs for clients, optimized loan data and UI."
    ]
  },
  {
    company: "Frontier Finance",
    role: "Software Developer & Loan Credit Officer (Contract)",
    period: "Oct 2023 – Feb 2024",
    description: [
      "Developed loan status widget and dynamic PDF generator.",
      "Automated Google Drive creation and user data integration."
    ]
  },
  {
    company: "Digital Treasure Zambia",
    role: "Software Developer (Full-time)",
    period: "Jul 2022 – Apr 2023",
    description: [
      "Built ELK File Manager, ELK Launcher for Roger Federer Foundation.",
      "Background services for Siyafunda Zulu app (Kotlin).",
      "Created Beta Looks booking system (Kotlin Multiplatform).",
      "Developed Smart Forms and Crime Scene reporting using Firebase."
    ]
  },
  {
    company: "Texila American University",
    role: "IT Specialist & Network Engineer Asst. (Internship)",
    period: "Aug 2021 – Dec 2021",
    description: [
      "Setup Microsoft Teams, installed computers, configured domain networks."
    ]
  },
  {
    company: "Blue Code Systems Ltd.",
    role: "Software Developer (Internship)",
    period: "Jun 2019 – Dec 2019",
    description: [
      "Queried OpenMRS data and designed SmartCerv app.",
      "Prepared DHIS2 reports via ETL Python scripts."
    ]
  },
  {
    company: "Zambia Broadcasting Corporation",
    role: "IT Specialist & Network Engineer Asst. (Internship)",
    period: "Jun 2018 – Dec 2018",
    description: [
      "Managed static IP, network configs, computer installations."
    ]
  },
];

const projects = [
  {
    name: "Advanced Calculator & ATM Simulator",
    desc: "Simulates ATM transactions and calculations.",
    tech: "Java, MySQL",
  },
  {
    name: "Nayenda Bus Ticketing System",
    desc: "Real-time ticketing application for travelers.",
    tech: "Java, Firebase (Auth, Storage, Realtime DB)"
  },
  {
    name: "Ubulimi (Agro-Advisory App)",
    desc: "Crop decision tools and weather prediction for farmers.",
    tech: "Kotlin, Firebase"
  },
  {
    name: "Vitundu Language App",
    desc: "Interactive platform for Zambian children to learn local languages.",
    tech: "Kotlin, Firebase"
  },
  {
    name: "Murder Hornet Character Design",
    desc: "Original character for ProSam Studio animation.",
    tech: "Krita, Huion Tablet, Blender"
  },
  {
    name: "Graphics & Logo Design",
    desc: "Designed logos, posters, brochures for clients.",
    tech: "Photopea, CorelDRAW, Photoshop"
  }
];

const references = [
  {
    name: "Mr. Choko",
    title: "Human Resource Manager",
    phone: "+2609775561852",
    address: "KPTF Office Park, Lake Road, Lusaka"
  },
  {
    name: "Mr. Luckson Mwanambulo",
    title: "Software Engineer",
    phone: "+260966088441",
    address: "Hobbiton Investments, Lusaka"
  },
  {
    name: "Mr. Zitha Tembo",
    title: "Software Engineer",
    phone: "+260976790772",
    address: "Zambia Revenue Authority, Lusaka"
  },
  {
    name: "Mr. Sundu Sensenta",
    title: "Chief Software Architect",
    phone: "+260972365878",
    address: "Riteware Technology, Lusaka"
  }
];

export default function Index() {
  return (
    <div className="w-full min-h-screen bg-background flex flex-col xl:flex-row font-inter">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content */}
      <main className="w-full xl:ml-80 max-w-[1200px] xl:px-12 px-4 pt-10 xl:pt-20 pb-10 mx-auto">
        <SectionCard
          id="objective"
          title="Profile & Objective"
        >
          <div className="text-lg leading-relaxed font-sans">
            <div className="mb-3">
              <span className="font-semibold text-secondary-foreground">Objective:</span>
              <br />
              Highly motivated and detail-oriented Software Engineer with a strong background in software development, system integration, and problem-solving. Seeking a challenging position where my skills and expertise in various programming languages and technologies can contribute to the growth of a forward-thinking and innovative company.
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="education"
          title="Education"
        >
          <ol className="list-disc pl-5 flex flex-col gap-4">
            {educationData.map((ed) => (
              <li key={ed.title}>
                <span className="font-bold text-[17px]">{ed.title}</span>
                <div className="text-sm text-muted-foreground">{ed.degree && ed.degree}<br/>{ed.years}</div>
                {ed.notes && ed.notes.length > 0 && (
                  <ul className="list-disc pl-4 mt-1 mb-1 text-sm text-foreground">
                    {ed.notes.map((n,i) => <li key={i}>{n}</li>)}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </SectionCard>

        <SectionCard
          id="skills"
          title="Technical Skills"
        >
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {Object.entries(skills).map(([cat, list]) => (
              <div key={cat}>
                <span className="font-semibold text-[16px]">{cat}</span>
                <ul className="mt-1 flex flex-wrap gap-1.5">
                  {(list as string[]).map(skill => (
                    <li key={skill} className="px-2 py-1 bg-muted rounded text-sm font-mono border border-border">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard
          id="experience"
          title="Professional Experience"
        >
          <div className="flex flex-col gap-7">
            {experience.map((exp, idx) => (
              <div key={exp.company}>
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <span className="font-semibold">{exp.role}</span>
                  <span className="text-muted-foreground text-sm">({exp.period})</span>
                  <span className="bg-primary/10 text-primary font-bold px-2 py-0.5 rounded">
                    {exp.company}
                  </span>
                </div>
                <ul className="list-disc pl-5 text-[15px] text-foreground/90 leading-relaxed">
                  {exp.description.map((pt, i) => (<li key={i}>{pt}</li>))}
                </ul>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard id="projects" title="Notable Projects">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {projects.map((p) => (
              <div key={p.name} className="bg-secondary rounded-lg p-4 border border-border shadow-sm">
                <div className="font-semibold text-[16px] leading-tight">{p.name}</div>
                <div className="text-[15px] mb-1">{p.desc}</div>
                <div className="text-xs text-primary font-mono">{p.tech}</div>
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard id="references" title="References">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {references.map((ref) => (
              <div key={ref.name} className="bg-muted rounded border border-border px-4 py-2">
                <div className="font-bold text-foreground">{ref.name}</div>
                <div className="text-[15px]">{ref.title}</div>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <span>📞</span>
                  <a href={`tel:${ref.phone.replace(/\s/g, "")}`} className="hover:underline text-primary">{ref.phone}</a>
                </div>
                <div className="text-xs text-muted-foreground">{ref.address}</div>
              </div>
            ))}
          </div>
        </SectionCard>

        <footer className="mt-10 text-center text-xs text-muted-foreground">
          <a href="https://github.com/wangu-96" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-primary">
            <Github size={16} /> github.com/wangu-96
          </a>
        </footer>
      </main>
    </div>
  );
}
