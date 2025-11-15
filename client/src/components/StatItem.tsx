interface StatItemProps {
  value: string;
  label: string;
  description: string;
}

export default function StatItem({ value, label, description }: StatItemProps) {
  return (
    <div className="group">
      <div className="text-4xl md:text-5xl font-montserrat font-bold text-tawi-accent mb-2 group-hover:scale-110 transition-transform duration-300">
        {value}
      </div>
      <div className="text-tawi-text font-medium">{label}</div>
      <div className="text-sm text-tawi-text/60 mt-1">{description}</div>
    </div>
  );
}
