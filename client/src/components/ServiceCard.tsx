import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-tawi-neutral rounded-xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="w-16 h-16 bg-tawi-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-tawi-accent transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-montserrat font-semibold text-tawi-primary mb-4">
        {title}
      </h3>
      <p className="text-tawi-text/70 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
