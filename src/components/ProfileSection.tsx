import { useState } from "react";
import SectionCard from "./SectionCard";
import { FileDown, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generatePortfolioPDF } from "@/utils/generatePortfolioPDF";
import { toast } from "sonner";
import ngalatiImg from "../assets/ngalati.jpeg";

export default function ProfileSection() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateCV = async () => {
    setIsGenerating(true);
    try {
      await generatePortfolioPDF();
      toast.success("Your professional CV is ready to download.");
    } catch {
      toast.error("Something went wrong while generating the CV.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <SectionCard id="profile" title="Profile" className="group-hover:scale-[1.03] transition-transform duration-200">
      <div className="flex flex-col items-center text-center gap-3">
        <img
          src={ngalatiImg}
          alt="Wangu Ngalati"
          className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-md mx-auto mb-2"
        />
        <span className="font-playfair text-3xl font-bold tracking-tight">
          Wangu Ngalati
        </span>
        <span className="text-primary/80 text-lg font-semibold">
          Software Engineer
        </span>
        <span className="text-sm text-muted-foreground">Lusaka, Zambia</span>
        <div className="text-xs text-muted-foreground font-semibold pt-2">Contact Information</div>
        <div className="text-[15px]">Ibex Hill, Lake Road, Lusaka, Zambia</div>
        <div className="flex flex-col sm:flex-row gap-1 items-center justify-center">
          <span className="font-semibold">Mobile:</span>
          <div className="flex flex-col sm:flex-row gap-1">
            <a
              href="tel:+260978906006"
              className="hover:underline transition text-primary"
            >
              +260978906006
            </a>
            <span className="hidden sm:inline-block">/</span>
            <a
              href="tel:+260761435664"
              className="hover:underline transition text-primary"
            >
              +260761435664
            </a>
          </div>
        </div>
        <div className="flex gap-1 items-center justify-center">
          <span className="font-semibold">Email:</span>
          <a
            href="mailto:wangungalati@gmail.com"
            className="hover:underline transition text-primary"
          >
            wangungalati@gmail.com
          </a>
        </div>
        <div className="flex flex-col items-center gap-1.5 mt-3">
          <Button
            size="lg"
            onClick={handleGenerateCV}
            disabled={isGenerating}
            className="gap-2 rounded-full px-7 py-6 font-semibold tracking-wide bg-gradient-to-r from-primary to-primary/80 text-primary-foreground shadow-md hover:shadow-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:hover:scale-100"
          >
            {isGenerating ? (
              <Loader2 size={17} className="animate-spin" />
            ) : (
              <FileDown size={17} />
            )}
            {isGenerating ? "Generating..." : "Generate Professional CV"}
          </Button>
          <span className="text-[11px] text-muted-foreground">
            Downloads a print-ready PDF resume
          </span>
        </div>
      </div>
    </SectionCard>
  );
}
