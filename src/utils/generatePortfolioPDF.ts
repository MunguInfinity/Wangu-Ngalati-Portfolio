import { jsPDF } from "jspdf";

const objective =
  "Highly motivated and detail-oriented Software Engineer with a strong background in software development, system integration, and problem-solving. Seeking a challenging position where my skills and expertise in various programming languages and technologies can contribute to the growth of a forward-thinking and innovative company.";

const educationData = [
  {
    title: "DMI St. Eugene University",
    degree: "Bachelor of Computer Science (Software Engineering)",
    years: "2016 - 2021",
    notes: [
      "Graduated with a GPA above 4.0",
      "Awarded top student honors from 2017 to 2019",
    ],
  },
  {
    title: "David Kaunda National Technical High School",
    degree: "Full Grade 12 Certificate",
    years: "2012 - 2014",
    notes: [],
  },
];

const skills: Record<string, string[]> = {
  "Programming Languages": ["Java", "JavaScript", "Kotlin", "Dart", "Python", "PHP", "HTML", "CSS", "C++", "C", "SQL", "Golang"],
  "Frameworks & Libraries": ["JQuery", "Android Studio", "Flutter", "Laravel", "Yii", "Django", "Node.js (Express)", "React", "Bootstrap", "Material UI", "Spring Boot"],
  Databases: ["MySQL", "Firebase (Firestore, Realtime Database)", "MongoDB", "Postgres", "MariaDB"],
  "DevOps & Containerization": ["Docker", "Docker Compose"],
  "Cloud & Deployment": ["AWS (EC2, S3)", "Google Cloud Platform", "cPanel", "WHM"],
  "Google APIs Integration": ["Messaging API", "Directions API", "Routing API", "Geolocation API"],
  "Other Skills": ["UI/UX Design (Adobe XD, JustInMind)", "Game Development (Unreal Engine)", "Graphics Design (Photopea, CorelDRAW, Photoshop)", "3D Animation (Blender)", "Runtime Environments (Node.js)"],
};

const experience = [
  {
    company: "EMU Technologies Limited",
    role: "Backend Developer (Ongoing)",
    period: "May 2025 – Present",
    description: [
      "Developed and managed multiple client websites, including: fiatzambia.com, abaleyadriving.com, quartanmining.com, dropshipltd.com, semassmetals.com, sophonzambia.com, komelazm.com, copperpotzm.com, kutwilamedia.com, and abaleya.name.",
      "Built and deployed emuzm.com, a reseller platform providing web hosting services, including domain and IP binding, cPanel/WHM configuration, and email integration for Outlook.",
      "Designed and implemented a daily quote system delivering motivational, health, and fitness messages to users via automated scheduling.",
      "Managed backend development in PHP and Laravel, including database modifications and updates on MySQL hosted on AWS EC2.",
      "Configured and monitored system alerts and SMS notifications for the Abaleya carpooling platform to notify management of new users, vehicle registrations, and trip approvals.",
      "Implemented in-app notifications and approval alerts to improve communication between the platform and users.",
      "Integrated Agora live streaming services, including real-time video streaming features.",
      "Implemented WebSocket-based functionality for live view counts and real-time comments on live streams.",
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
    period: "Nov 2024 - May 2025",
    description: [
      "Engineered the full backend architecture for the ride-sharing platform to keep it scalable and maintainable.",
      "Integrated Zynle Pay for secure in-app payments and SMSZambia.com for real-time SMS notifications.",
      "Implemented Firebase Cloud Messaging to push in-app trip updates and alerts.",
      "Used Google Places, Directions, and Geolocation APIs for accurate location tracking, routing, and address suggestions.",
      "Integrated SendMail API for verification, trip receipts, and service updates.",
      "Built a secure registration flow with OTP verification and a referral system with performance dashboards.",
      "Developed an SOS alert mechanism so passengers can discreetly signal safety concerns.",
    ],
  },
  {
    company: "Chrilan Technologies",
    role: "Backend Developer (Contract)",
    period: "Jun 2024 - Nov 2024",
    description: [
      "Automated POS processes with batch files, including activating printing services for Lysoft-powered systems.",
      "Developed VAT report API endpoints for Yango to streamline reporting.",
      "Built OTP generation endpoints with secure database-backed session management.",
      "Created barcode-adjustment APIs to improve smart invoicing accuracy and efficiency.",
      "Delivered JavaScript interfaces to connect Lysoft's mobile printing service to the web application.",
      "Supported optimization and integration efforts to keep services running smoothly.",
    ],
  },
  {
    company: "PrimeNet Solutions",
    role: "Backend Developer (Contract)",
    period: "Feb 2024 - Mar 2024",
    description: [
      "Integrated SMS and payment gateway systems and built a ticketing solution using Twak.io and Freshdesk.",
      "Tested TransUnion and DotGov APIs for clients including ZamPost eWallet and Panda Africa.",
      "Optimized loan data retrieval via TransUnion to cut costs and improve response times.",
      "Enhanced UI and delivered server-side optimizations for the PrimeNet SMS and payment platform.",
    ],
  },
  {
    company: "Frontier Finance",
    role: "Software Developer & Loan Credit Officer (Contract)",
    period: "Oct 2023 - Feb 2024",
    description: [
      "Developed a loan status widget to track collections in real time.",
      "Built a dynamic PDF generator for loan agreements with integrated applicant data.",
      "Automated Google Drive folder creation for applicants, tying in detailed user information.",
    ],
  },
  {
    company: "Digital Treasure Zambia",
    role: "Software Developer (Full-time)",
    period: "Jul 2022 - Apr 2023",
    description: [
      "Designed and developed the Early Learning Kiosk File Manager and ELK Launcher for the Roger Federer Foundation.",
      "Created background services for the Siyafunda Zulu language-learning app using Kotlin.",
      "Built the Beta Looks appointment booking system with Kotlin Multiplatform.",
      "Integrated JSON importers and delivered Smart Forms and Crime Scene reporting modules using Firebase.",
    ],
  },
  {
    company: "Texila American University",
    role: "IT Specialist & Network Engineer Assistant (Internship)",
    period: "Aug 2021 - Dec 2021",
    description: [
      "Set up Microsoft Teams, installed and serviced computers, and configured domain networks with NComputing.",
    ],
  },
  {
    company: "Blue Code Systems Limited",
    role: "Software Developer (Internship)",
    period: "Jun 2019 - Dec 2019",
    description: [
      "Queried data from OpenMRS and designed the SmartCerv application.",
      "Prepared DHIS2 reports using ETL Python scripts.",
    ],
  },
  {
    company: "Zambia Broadcasting Corporation",
    role: "IT Specialist & Network Engineer Assistant (Internship)",
    period: "Jun 2018 - Dec 2018",
    description: [
      "Managed static IP configurations, network connections, and Ethernet cabling.",
      "Installed and serviced computers to maintain reliable connectivity.",
    ],
  },
];

const projects = [
  { name: "Advanced Calculator & ATM Simulator", desc: "Simulates ATM transactions and performs complex calculations.", tech: "Java, MySQL" },
  { name: "Nayenda Bus Ticketing System", desc: "Real-time ticketing application for traveling customers.", tech: "Java, Firebase (Authentication, Storage, Realtime Database)" },
  { name: "Ubulimi (Agro-Advisory Application)", desc: "Provides crop decision-making tools and weather predictions for farmers.", tech: "Kotlin, Firebase" },
  { name: "Vitundu Language App", desc: "Interactive learning platform that teaches Zambian children local languages.", tech: "Kotlin, Firebase" },
  { name: "Murder Hornet Character Design", desc: "Designed a character for ProSam Studio animations.", tech: "Krita, Huion Tablet, Blender" },
  { name: "Graphics & Logo Design", desc: "Designed logos, posters, brochures, and letterheads for various companies.", tech: "Photopea, CorelDRAW, Photoshop" },
];

const references = [
  { name: "Mr. Choko", title: "Human Resource Manager", phone: "+2609775561852", address: "KPTF Office Park, Lake Road, Lusaka, Zambia" },
  { name: "Mr. Luckson Mwanambulo", title: "Software Engineer", phone: "+260966088441", address: "Hobbiton Investments, Lusaka, Zambia" },
  { name: "Mr. Zitha Tembo", title: "Software Engineer", phone: "+260976790772", address: "Zambia Revenue Authority, Lusaka, Zambia" },
  { name: "Mr. Sundu Sensenta", title: "Chief Software Architect", phone: "+260972365878", address: "Riteware Technology, Lusaka, Zambia" },
];

export function generatePortfolioPDF() {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentW = pageW - margin * 2;
  let y = 0;

  const addFooter = () => {
    doc.setFillColor(30, 41, 59);
    doc.rect(0, pageH - 12, pageW, 12, "F");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    doc.setTextColor(148, 163, 184);
    doc.text("Wangu Ngalati  |  Portfolio", margin, pageH - 4.5);
    doc.text("Confidential", pageW - margin, pageH - 4.5, { align: "right" });
  };

  const checkPage = (needed: number) => {
    if (y + needed > pageH - 16) {
      addFooter();
      doc.addPage();
      y = 18;
    }
  };

  const sectionHeader = (title: string) => {
    checkPage(14);
    doc.setFillColor(30, 41, 59);
    doc.rect(margin - 2, y, contentW + 4, 9, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(255, 255, 255);
    doc.text(title.toUpperCase(), margin + 2, y + 6.5);
    y += 13;
  };

  // ===== HEADER =====
  doc.setFillColor(30, 41, 59);
  doc.rect(0, 0, pageW, 52, "F");

  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.setTextColor(255, 255, 255);
  doc.text("Wangu Ngalati", margin, 16);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(148, 163, 184);
  doc.text("Software Engineer", margin, 24);

  doc.setFontSize(8.5);
  doc.setTextColor(100, 116, 139);
  doc.text("Ibex Hill, Lake Road, Lusaka, Zambia", margin, 32);
  doc.text("+260978906006  /  +260761435664  |  wangungalati@gmail.com", margin, 39);

  doc.setFontSize(8);
  doc.text(
    `Generated ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`,
    pageW - margin,
    39,
    { align: "right" }
  );

  doc.setDrawColor(99, 102, 241);
  doc.setLineWidth(0.8);
  doc.line(margin, 46, pageW - margin, 46);

  y = 58;

  // ===== OBJECTIVE =====
  sectionHeader("Profile & Objective");
  const objLines = doc.splitTextToSize(objective, contentW) as string[];
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  doc.text(objLines, margin, y);
  y += objLines.length * 5 + 8;

  // ===== EDUCATION =====
  sectionHeader("Education");
  for (const ed of educationData) {
    checkPage(24);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(30, 41, 59);
    doc.text(ed.title, margin, y);
    y += 5.5;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(`${ed.degree}  |  ${ed.years}`, margin, y);
    y += 5;
    for (const note of ed.notes) {
      checkPage(6);
      doc.setFont("helvetica", "normal");
      doc.setFontSize(8.5);
      doc.setTextColor(51, 65, 85);
      doc.text(`• ${note}`, margin + 3, y);
      y += 5;
    }
    y += 5;
  }

  // ===== SKILLS =====
  sectionHeader("Technical Skills");
  for (const [category, list] of Object.entries(skills)) {
    const skillText = list.join("  •  ");
    const skillLines = doc.splitTextToSize(skillText, contentW - 4) as string[];
    checkPage(skillLines.length * 5 + 10);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(67, 56, 202);
    doc.text(category, margin, y);
    y += 5.5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    doc.text(skillLines, margin + 2, y);
    y += skillLines.length * 5 + 5;
  }

  // ===== EXPERIENCE =====
  sectionHeader("Professional Experience");
  experience.forEach((exp, idx) => {
    const bulletLines: string[][] = exp.description.map((pt) =>
      doc.splitTextToSize(`• ${pt}`, contentW - 6) as string[]
    );
    const bulletHeight = bulletLines.reduce((sum, lines) => sum + lines.length * 5.2, 0);
    const blockHeight = 22 + bulletHeight + 6;

    checkPage(30);

    const isEven = idx % 2 === 0;
    doc.setFillColor(isEven ? 248 : 243, isEven ? 250 : 246, isEven ? 252 : 250);
    doc.roundedRect(margin - 2, y - 5, contentW + 4, blockHeight, 3, 3, "F");

    doc.setFillColor(99, 102, 241);
    doc.roundedRect(margin - 2, y - 5, 3, blockHeight, 1, 1, "F");

    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(30, 41, 59);
    doc.text(exp.role, margin + 5, y + 1);

    const roleWidth = doc.getTextWidth(exp.role);
    doc.setFillColor(224, 231, 255);
    const companyW = doc.getTextWidth(exp.company) + 6;
    doc.roundedRect(margin + 5 + roleWidth + 4, y - 4, companyW, 7, 2, 2, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(67, 56, 202);
    doc.text(exp.company, margin + 5 + roleWidth + 7, y + 0.5);

    doc.setFont("helvetica", "italic");
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text(exp.period, margin + 5, y + 8);

    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(margin + 5, y + 10, margin + contentW - 2, y + 10);

    y += 14;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(51, 65, 85);
    bulletLines.forEach((lines) => {
      checkPage(lines.length * 5.2 + 2);
      doc.text(lines, margin + 6, y);
      y += lines.length * 5.2;
    });

    y += 10;
  });

  // ===== PROJECTS =====
  sectionHeader("Notable Projects");
  projects.forEach((project) => {
    const descLines = doc.splitTextToSize(project.desc, contentW - 4) as string[];
    checkPage(descLines.length * 5 + 16);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(30, 41, 59);
    doc.text(project.name, margin, y);
    y += 5.5;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(51, 65, 85);
    doc.text(descLines, margin + 2, y);
    y += descLines.length * 5;
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8.5);
    doc.setTextColor(99, 102, 241);
    doc.text(`Tech: ${project.tech}`, margin + 2, y);
    y += 9;
  });

  // ===== REFERENCES =====
  sectionHeader("References");
  references.forEach((ref) => {
    checkPage(26);
    doc.setFillColor(248, 250, 252);
    doc.roundedRect(margin - 2, y - 3, contentW + 4, 22, 2, 2, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(30, 41, 59);
    doc.text(ref.name, margin + 3, y + 4);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(ref.title, margin + 3, y + 10);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(99, 102, 241);
    doc.text(`Tel: ${ref.phone}  |  ${ref.address}`, margin + 3, y + 16);
    y += 27;
  });

  addFooter();
  doc.save("Wangu-Ngalati-Portfolio.pdf");
}
