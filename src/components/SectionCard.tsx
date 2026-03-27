
import { ReactNode } from "react";
//section card component
//this component is used to create a section card with a title and an icon
//it is used to create the section cards for the portfolio

export default function SectionCard({
  className,
  children,
  id,
  title,
  icon,
}: {
  className?: string;
  children: ReactNode;
  id?: string;
  title?: string;
  icon?: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`bg-card border border-border rounded-xl shadow-lg p-6 mb-7 transition-transform transition-shadow duration-200 ease-out hover:scale-[1.03] hover:shadow-2xl group cursor-pointer ${className || ""}`}
    >

      {title && (
        <div className="flex items-center gap-2 mb-4">
          {icon && <span className="text-primary">{icon}</span>}
          <h2 className="font-playfair text-2xl font-semibold">{title}</h2>
        </div>
      )}
      {children}
    </section>
  );
}
