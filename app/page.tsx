import Hero from "@/components/Hero";
import FeatureBoxes from "@/components/FeatureBoxes";
import Intro from "@/components/Intro";
import Header from "@/components/Header";
import FunctionalityList from "@/components/FunctionalityList";
import Integrations from "@/components/Integrations";
import TestimonialsSections from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <FeatureBoxes />
      <Intro />
      <FunctionalityList />
      <Integrations />
      <TestimonialsSections />
    </main>
  );
}
