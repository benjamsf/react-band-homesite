export interface HeroImageProps {
  imageUrl: string;
  title: string;
  subtitle: string;
}

export function HeroImage({ imageUrl, title, subtitle }: HeroImageProps) {
  return (
    <div
      className="relative bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})`, height: '16.6667vh', minHeight: '100px' }}
    >
      <div className="absolute left-0 bottom-0 p-4 text-white" style={{ left: '15%' }}>
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-md">{subtitle}</p>
      </div>
    </div>
  );
}
