// src/views/HomeView.tsx
import { Layout } from "../components/base/Layout";
import BackgroundPhoto from "../components/base/BackgroundPhoto";
import { CardsContainer } from "../components/containers/CardsContainer";
import Card from "../components/items/Card";

function HomeView() {
  return (
    <Layout
      showHeroImage={true}
      heroImageProps={{
        imageUrl: "https://example.com/hero.jpg",
        title: "Welcome to the Rock Band!",
        subtitle: "Experience the best rock music",
      }}
    >
      <BackgroundPhoto imageUrl="https://example.com/background.jpg" />
      <CardsContainer>
        <Card
          title="About Us"
          content="We are a rock band that has been performing for over a decade. Our music is a mix of classic rock and modern influences."
        />
        <Card
          title="Upcoming Events"
          content="Join us on our next tour! Check out our events page for more details on where we'll be performing next."
        />
      </CardsContainer>
    </Layout>
  );
}

export default HomeView;
