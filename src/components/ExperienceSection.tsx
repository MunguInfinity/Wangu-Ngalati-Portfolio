
import { FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { jsPDF } from "jspdf";
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


function generateExperiencePDF() {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 18;
  const contentW = pageW - margin * 2;
  let y = 0;

  const checkPage = (needed: number) => {
    if (y + needed > pageH - 14) { doc.addPage(); y = 18; }
  };

  // Header
  doc.setFillColor(30, 41, 59);
  doc.rect(0, 0, pageW, 36, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(255, 255, 255);
  doc.text("Wangu Ngalati", margin, 15);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(148, 163, 184);
  doc.text("Professional Experience", margin, 23);
  doc.setFontSize(8);
  doc.setTextColor(100, 116, 139);
  doc.text(`Generated ${new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}`, pageW - margin, 23, { align: "right" });
  doc.setDrawColor(99, 102, 241);
  doc.setLineWidth(0.8);
  doc.line(margin, 30, pageW - margin, 30);

  y = 44;

  experience.forEach((exp, idx) => {
    const bulletLines: string[][] = exp.description.map((pt) =>
      doc.splitTextToSize(`• ${pt}`, contentW - 6)
    );
    const bulletHeight = bulletLines.reduce((sum, lines) => sum + lines.length * 5.2, 0);
    const blockHeight = 22 + bulletHeight + 6;
    checkPage(blockHeight);

    // Card background + accent bar
    const isEven = idx % 2 === 0;
    doc.setFillColor(isEven ? 248 : 243, isEven ? 250 : 246, isEven ? 252 : 250);
    doc.roundedRect(margin - 2, y - 5, contentW + 4, blockHeight, 3, 3, "F");
    doc.setFillColor(99, 102, 241);
    doc.roundedRect(margin - 2, y - 5, 3, blockHeight, 1, 1, "F");

    // Role
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(30, 41, 59);
    doc.text(exp.role, margin + 5, y + 1);

    // Company badge
    const roleWidth = doc.getTextWidth(exp.role);
    const companyW = doc.getTextWidth(exp.company) + 6;
    doc.setFillColor(224, 231, 255);
    doc.roundedRect(margin + 5 + roleWidth + 4, y - 4, companyW, 7, 2, 2, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(67, 56, 202);
    doc.text(exp.company, margin + 5 + roleWidth + 7, y + 0.5);

    // Period + divider
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text(exp.period, margin + 5, y + 8);
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.3);
    doc.line(margin + 5, y + 10, margin + contentW - 2, y + 10);
    y += 14;

    // Bullets
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

  // Footer
  doc.setFillColor(30, 41, 59);
  doc.rect(0, pageH - 12, pageW, 12, "F");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(148, 163, 184);
  doc.text("Wangu Ngalati  |  Portfolio", margin, pageH - 4.5);
  doc.text("Confidential", pageW - margin, pageH - 4.5, { align: "right" });

  doc.save("Wangu-Ngalati-Experience.pdf");
}

export default function ExperienceSection() {
  return (
    <SectionCard id="experience" title="Professional Experience">
      <div className="flex justify-end mb-3">
        <Button
          variant="outline"
          size="sm"
          onClick={generateExperiencePDF}
          className="gap-2 border-primary/40 text-primary hover:bg-primary/10 hover:border-primary transition-colors"
        >
          <FileDown size={15} />
          Export PDF
        </Button>
      </div>
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
