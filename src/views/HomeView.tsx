// src/views/HomeView.tsx
import React from 'react';
import { Layout } from "../components/base/Layout";
import SectionContainer from "../components/containers/SectionContainer";
import { CardsContainer } from "../components/containers/CardsContainer";
import Card from "../components/items/Card";
import TitleCard from "../components/items/TitleCard";
import sahko from "../assets/heroimages/sahko.jpeg";
import juuka from "../assets/heroimages/vanhat.jpeg";

function HomeView() {
  return (
    <Layout
      showHeroImage={true}
      heroImageProps={{
        imageUrl: sahko,
        title: "Welcome to the Rock Band!",
        subtitle: "Experience the best rock music",
      }}
    >
      <SectionContainer backgroundImageUrl={juuka}>
      <div className="flex flex-col items-center justify-center min-h-screen">

          <TitleCard 
            title="Rock Band"
            subtitle="The Ultimate Music Experience"
            className="bg-transparent" // Optional additional styling
          />

        </div>
      </SectionContainer>
      <SectionContainer>
        <div className="flex flex-col pt-10 flex-shrink-0 gap-3">
        <CardsContainer>
          <Card
            title="About Us"
            className="text-white"
            content="We are a rock band that has been performing for over a decade. Our music is a mix of classic rock and modern influences."
          />
          <Card
            title="Upcoming Events"
            className="text-white"
            content="Join us on our next tour! Check out our events page for more details on where we'll be performing next."
          />
          </CardsContainer>
        </div>
      </SectionContainer>
    </Layout>
  );
}

export default HomeView;
