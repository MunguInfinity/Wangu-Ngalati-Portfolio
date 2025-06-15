
import SectionCard from "./SectionCard";

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
              <span>📞</span>
              <a href={`tel:${ref.phone.replace(/\s/g, "")}`} className="hover:underline text-primary">{ref.phone}</a>
            </div>
            <div className="text-xs text-muted-foreground">{ref.address}</div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
