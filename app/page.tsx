import Hero from "@/components/Hero";
import FeatureBoxes from "@/components/FeatureBoxes";
import Intro from "@/components/Intro";
import Header from "@/components/Header";
import FunctionalityList from "@/components/FunctionalityList";

export default function Home() {
  return (
    <main className="px-8 lg:px-16">
      <Header />
      <Hero />
      <FeatureBoxes />
      <Intro />
      <FunctionalityList />
    </main>
  );
}
