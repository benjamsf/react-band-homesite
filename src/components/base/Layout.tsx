// src/components/Layout.tsx
import { HeroImage, HeroImageProps } from './HeroImage';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  showHeroImage: boolean;
  heroImageProps?: HeroImageProps;
  children: React.ReactNode;
}

export function Layout({ showHeroImage, heroImageProps, children }: LayoutProps) {
  return (
    <div>
      {showHeroImage && heroImageProps && <HeroImage {...heroImageProps} />}
      <Navbar />
      <main className="container mx-auto px-4 py-4">
        {children}
      </main>
      <Footer />
    </div>
  );
}
