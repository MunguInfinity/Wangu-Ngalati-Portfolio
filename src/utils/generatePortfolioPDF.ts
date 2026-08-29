import { jsPDF } from "jspdf";
import {
  objective,
  educationData,
  skills,
  experience,
  projects,
  references,
} from "../data/portfolioData";

export async function generatePortfolioPDF() {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  const margin = 20;
  const contentW = pageW - margin * 2;

  // ── colour palette (matches CV document) ───────────────────────────────────
  const BLUE   = [26,  82, 118] as [number, number, number];   // section headings
  const DARK   = [33,  33,  33] as [number, number, number];   // body text
  const GRAY   = [100, 100, 100] as [number, number, number];  // period / meta

  let y = 20;

  // ── helpers ────────────────────────────────────────────────────────────────

  /** Advance to a new page when `needed` mm won't fit on the current one. */
  const checkPage = (needed: number) => {
    if (y + needed > pageH - margin) {
      doc.addPage();
      y = margin;
    }
  };

  /** Blue bold section heading + underline, identical to the CV style. */
  const sectionTitle = (title: string) => {
    checkPage(14);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(...BLUE);
    doc.text(title, margin, y);
    y += 1.5;
    doc.setDrawColor(...BLUE);
    doc.setLineWidth(0.4);
    doc.line(margin, y, margin + contentW, y);
    y += 5;
  };

  // ── NAME ───────────────────────────────────────────────────────────────────
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(...BLUE);
  doc.text("Wangu Ngalati", pageW / 2, y, { align: "center" });
  y += 7;

  // Horizontal rule below name
  doc.setDrawColor(...BLUE);
  doc.setLineWidth(0.7);
  doc.line(margin, y, pageW - margin, y);
  y += 9;

  // ── CONTACT BLOCK ──────────────────────────────────────────────────────────
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...BLUE);
  doc.text("Software Engineer", margin, y);
  y += 6;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(...DARK);
  doc.text("Contact Information:", margin, y);
  y += 5.5;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(...DARK);
  const contactLines = [
    "Ibex Hill, Lake Road, Lusaka, Zambia",
    "Mobile: +260978906006 / +260761435664",
    "Email: wangungalati@gmail.com",
    "GitHub: github.com/wangu-96",
  ];
  for (const line of contactLines) {
    doc.text(line, margin, y);
    y += 5.5;
  }
  y += 5;

  // ── OBJECTIVE ──────────────────────────────────────────────────────────────
  sectionTitle("Objective");
  const objLines = doc.splitTextToSize(objective, contentW) as string[];
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(...DARK);
  doc.text(objLines, margin, y);
  y += objLines.length * 5.2 + 8;

  // ── EDUCATION ──────────────────────────────────────────────────────────────
  sectionTitle("Education");
  for (const ed of educationData) {
    checkPage(22);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...DARK);
    doc.text(ed.title, margin, y);
    y += 5;

    if (ed.degree) {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9.5);
      doc.setTextColor(...DARK);
      doc.text(ed.degree, margin, y);
      y += 5;
    }

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(...GRAY);
    doc.text(ed.years, margin, y);
    y += 5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(...DARK);
    for (const note of ed.notes) {
      checkPage(6);
      doc.text(`- ${note}`, margin, y);
      y += 5;
    }
    y += 5;
  }

  // ── TECHNICAL SKILLS ───────────────────────────────────────────────────────
  sectionTitle("Technical Skills");
  for (const [category, list] of Object.entries(skills)) {
    const valueText = list.join(", ");
    const valueLines = doc.splitTextToSize(valueText, contentW) as string[];
    checkPage(valueLines.length * 5.2 + 12);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(...DARK);
    doc.text(`${category}:`, margin, y);
    y += 5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(...DARK);
    doc.text(valueLines, margin, y);
    y += valueLines.length * 5.2 + 4;
  }
  y += 4;

  // ── PROFESSIONAL EXPERIENCE ────────────────────────────────────────────────
  sectionTitle("Professional Experience");

  for (const exp of experience) {
    // Pre-wrap all bullet lines
    const bulletLines: string[][] = exp.description.map(
      (pt) => doc.splitTextToSize(`• ${pt}`, contentW - 2) as string[]
    );
    const bulletHeight = bulletLines.reduce(
      (sum, lines) => sum + lines.length * 5.2,
      0
    );
    // Always keep at least the heading on the same page; bullets flow naturally
    checkPage(20);

    // Company + role heading
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...DARK);
    doc.text(`${exp.company} (${exp.role})`, margin, y);
    y += 5;

    // Period
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(...GRAY);
    doc.text(exp.period, margin, y);
    y += 5.5;

    // Bullet points
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(...DARK);
    for (const lines of bulletLines) {
      checkPage(lines.length * 5.2 + 2);
      doc.text(lines, margin, y);
      y += lines.length * 5.2;
    }
    y += 8;
  }

  // ── NOTABLE PROJECTS ───────────────────────────────────────────────────────
  sectionTitle("Notable Projects");
  for (const project of projects) {
    const descLines = doc.splitTextToSize(project.desc, contentW) as string[];
    checkPage(descLines.length * 5.2 + 16);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...DARK);
    doc.text(project.name, margin, y);
    y += 5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(...DARK);
    doc.text(descLines, margin, y);
    y += descLines.length * 5.2;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(...GRAY);
    doc.text(`- Technologies: ${project.tech}`, margin, y);
    y += 8;
  }

  // ── REFERENCES ─────────────────────────────────────────────────────────────
  sectionTitle("References");
  for (const ref of references) {
    checkPage(24);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...DARK);
    doc.text(ref.name, margin, y);
    y += 5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9.5);
    doc.setTextColor(...DARK);
    doc.text(ref.title, margin, y);
    y += 5;
    doc.text(`Tel: ${ref.phone}`, margin, y);
    y += 5;
    doc.text(ref.address, margin, y);
    y += 9;
  }

  doc.save("Wangu-Ngalati-CV.pdf");
}
