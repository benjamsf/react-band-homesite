// src/components/Layout.tsx
import { HeroImage, HeroImageProps } from "./HeroImage";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import BackgroundPhoto from "./BackgroundPhoto";

interface LayoutProps {
  showHeroImage: boolean;
  heroImageProps?: HeroImageProps;
  backgroundImageUrl?: string;
  children: React.ReactNode;
}

export function Layout({
  showHeroImage,
  heroImageProps,
  backgroundImageUrl,
  children,
}: LayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      {backgroundImageUrl && <BackgroundPhoto imageUrl={backgroundImageUrl} />}
      <header>
        {showHeroImage && heroImageProps && <HeroImage {...heroImageProps} />}
        <Navbar />
      </header>
      <main className="flex-grow container mx-auto px-4 py-4">{children}</main>
      <Footer />
    </div>
  );
}
