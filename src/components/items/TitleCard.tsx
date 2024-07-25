interface TitleCardProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function TitleCard({ title, subtitle, className = '' }: TitleCardProps) {
  return (
    <div className={`flex flex-col items-center justify-center text-center p-6 ${className}`}>
      <h1 className="text-6xl font-bold text-white mb-4">{title}</h1>
      <p className="text-2xl text-white">{subtitle}</p>
    </div>
  );
}

export default TitleCard;
