import SectionCard from "./SectionCard";
import { references } from "../data/portfolioData";

export default function ReferencesSection() {
  return (
    <SectionCard id="references" title="References">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        {references.map((ref) => (
          <div
            key={ref.name}
            className="bg-muted rounded border border-border px-4 py-2 transition duration-200 hover:scale-[1.03] hover:border-primary hover:shadow-lg cursor-pointer"
            tabIndex={0}
            aria-label={ref.name}
          >
            <div className="font-bold text-foreground">{ref.name}</div>
            <div className="text-[15px]">{ref.title}</div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <span className="font-semibold text-muted-foreground">Tel:</span>
              <a href={`tel:${ref.phone.replace(/\s/g, "")}`} className="hover:underline text-primary">
                {ref.phone}
              </a>
            </div>
            {"phone2" in ref && ref.phone2 && (
              <div className="flex items-center gap-2 text-sm text-foreground">
                <span className="font-semibold text-muted-foreground">Tel:</span>
                <a href={`tel:${ref.phone2.replace(/\s/g, "")}`} className="hover:underline text-primary">
                  {ref.phone2}
                </a>
              </div>
            )}
            <div className="text-xs text-muted-foreground">{ref.address}</div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
