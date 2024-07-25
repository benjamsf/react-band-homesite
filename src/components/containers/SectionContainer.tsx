import { ReactNode } from 'react';
import BackgroundPhoto from '../base/BackgroundPhoto';

interface SectionProps {
  children: ReactNode;
  backgroundImageUrl?: string;
}

export function SectionContainer({ children, backgroundImageUrl }: SectionProps) {
  return (
    <div className="relative w-full">
      {backgroundImageUrl && <BackgroundPhoto imageUrl={backgroundImageUrl} />}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}

export default SectionContainer;
