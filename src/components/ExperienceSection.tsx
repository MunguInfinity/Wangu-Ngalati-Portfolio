
import SectionCard from "./SectionCard";

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
      "Performed system testing, IT support, and hardware/software servicing to ensure smooth operations across the company."
    ]
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


export default function ExperienceSection() {
  return (
    <SectionCard id="experience" title="Professional Experience">

      <div className="flex flex-col gap-7">
        {experience.map((exp) => (
          <div
            key={exp.company}
            className="transition duration-200 ease-in-out hover:scale-[1.02] hover:shadow-md hover:border-primary bg-muted/60 rounded p-2"
          >
            <div className="flex flex-wrap items-center gap-3 mb-1">
              <span className="font-semibold">{exp.role}</span>
              <span className="text-muted-foreground text-sm">({exp.period})</span>
              <span className="bg-primary/10 text-primary font-bold px-2 py-0.5 rounded">
                {exp.company}
              </span>
            </div>
            <ul className="list-disc pl-5 text-[15px] text-foreground/90 leading-relaxed">
              {exp.description.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
