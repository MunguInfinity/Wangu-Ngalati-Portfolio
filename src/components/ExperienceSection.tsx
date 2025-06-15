
import SectionCard from "./SectionCard";

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

export default function ExperienceSection() {
  return (
    <SectionCard id="experience" title="Professional Experience">
      <div className="flex flex-col gap-7">
        {experience.map((exp) => (
          <div key={exp.company} className="transition duration-200 ease-in-out hover:scale-[1.02] hover:shadow-md hover:border-primary bg-muted/60 rounded p-2">
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
  );
}
